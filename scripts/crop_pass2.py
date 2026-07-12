"""
Ikkinchi bosqich kesish — qorong'u/oq fon, brauzer UI ni olib tashlash.
Qolgan skrinshot rasmlarni tozalaydi.
"""

from PIL import Image
import os

CERT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images", "certificates")


def row_brightness(pixels, y, w):
    """Bir qator piksellarning o'rtacha yorug'ligini hisoblash"""
    total = 0
    samples = min(w, 20)
    step = w // samples
    for i in range(samples):
        x = i * step
        r, g, b = pixels[x, y][:3]
        total += (r + g + b) / 3
    return total / samples


def col_brightness(pixels, x, h, top, bottom):
    """Bir ustun piksellarning o'rtacha yorug'ligini hisoblash"""
    total = 0
    samples = min(bottom - top, 10)
    step = max(1, (bottom - top) // samples)
    count = 0
    for i in range(samples):
        y = top + i * step
        if y < bottom:
            r, g, b = pixels[x, y][:3]
            total += (r + g + b) / 3
            count += 1
    return total / max(count, 1)


def is_ui_row(pixels, y, w):
    """Bu qator UI elementi (status bar, nav bar, URL bar) ekanligini tekshirish"""
    brightness = row_brightness(pixels, y, w)
    # Very dark rows (black nav bars) or very bright white UI
    if brightness < 60:
        return True
    # Check for uniform color (UI elements tend to be flat color)
    colors = set()
    step = w // 10
    for i in range(10):
        x = i * step
        r, g, b = pixels[x, y][:3]
        # Quantize to reduce noise
        colors.add((r // 30, g // 30, b // 30))
    # UI rows have fewer distinct colors than certificate content
    if len(colors) <= 3 and brightness < 100:
        return True
    return False


def find_content_bounds(img):
    """Sertifikat chegaralarini topish — qorong'u fonni kesish"""
    w, h = img.size
    pixels = img.load()

    # Find top boundary: skip dark/UI rows from top
    top = 0
    for y in range(min(h, int(h * 0.4))):
        brightness = row_brightness(pixels, y, w)
        if brightness > 120 and not is_ui_row(pixels, y, w):
            # Check next few rows too to confirm we're in content
            if y + 5 < h and row_brightness(pixels, y + 3, w) > 120:
                top = y
                break

    # Find bottom boundary: skip dark/UI rows from bottom
    bottom = h
    for y in range(h - 1, max(0, int(h * 0.5)), -1):
        brightness = row_brightness(pixels, y, w)
        if brightness > 120 and not is_ui_row(pixels, y, w):
            if y - 5 > 0 and row_brightness(pixels, y - 3, w) > 120:
                bottom = y + 1
                break

    # Find left boundary
    left = 0
    for x in range(min(w, int(w * 0.3))):
        brightness = col_brightness(pixels, x, h, top, bottom)
        if brightness > 120:
            left = x
            break

    # Find right boundary
    right = w
    for x in range(w - 1, max(0, int(w * 0.7)), -1):
        brightness = col_brightness(pixels, x, h, top, bottom)
        if brightness > 120:
            right = x + 1
            break

    return left, top, right, bottom


def process_image(filepath):
    """Rasmni qayta kesish"""
    img = Image.open(filepath).convert("RGB")
    w, h = img.size
    ratio = h / w

    if ratio <= 1.85:
        return False

    left, top, right, bottom = find_content_bounds(img)

    crop_h = bottom - top
    crop_w = right - left

    # Only crop if we're actually removing something significant
    removed_top = top
    removed_bottom = h - bottom
    removed_total = removed_top + removed_bottom

    if removed_total < h * 0.05:
        # Less than 5% removed, not worth it
        return False

    if crop_h < h * 0.3 or crop_w < w * 0.4:
        print(f"  SKIP {os.path.basename(filepath)}: crop area too small ({crop_w}x{crop_h})")
        return False

    cropped = img.crop((left, top, right, bottom))
    new_ratio = crop_h / crop_w
    cropped.save(filepath, quality=92)
    print(f"  CROP {os.path.basename(filepath)}: {w}x{h} -> {crop_w}x{crop_h} (ratio {ratio:.2f} -> {new_ratio:.2f})")
    return True


def main():
    # Only process images that still have high ratio
    problem_files = []
    for f in sorted(os.listdir(CERT_DIR)):
        if not f.startswith("cert_") or not f.endswith(".jpg"):
            continue
        filepath = os.path.join(CERT_DIR, f)
        img = Image.open(filepath)
        w, h = img.size
        ratio = h / w
        img.close()
        if ratio > 1.85:
            problem_files.append(f)

    print(f"Muammoli rasmlar: {len(problem_files)} ta")

    cropped = 0
    for f in problem_files:
        filepath = os.path.join(CERT_DIR, f)
        if process_image(filepath):
            cropped += 1

    print(f"\nNatija: {cropped} ta qayta kesildi")


if __name__ == "__main__":
    main()
