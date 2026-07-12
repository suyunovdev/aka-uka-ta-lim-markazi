"""
3-bosqich kesish — piksel variansiyasi bo'yicha UI va bo'sh joylarni olib tashlash.
Qatorlarning ranglar xilma-xilligiga qarab sertifikat chegaralarini aniqlayd i.
"""

from PIL import Image
import os

CERT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images", "certificates")


def row_variance(pixels, y, w):
    """Qatordagi piksellarning rang xilma-xilligi (variance)"""
    values = []
    step = max(1, w // 30)
    for x in range(0, w, step):
        r, g, b = pixels[x, y][:3]
        values.append(r + g + b)
    if len(values) < 2:
        return 0
    mean = sum(values) / len(values)
    variance = sum((v - mean) ** 2 for v in values) / len(values)
    return variance


def row_avg_brightness(pixels, y, w):
    """Qatordagi o'rtacha yorug'lik"""
    total = 0
    step = max(1, w // 20)
    count = 0
    for x in range(0, w, step):
        r, g, b = pixels[x, y][:3]
        total += (r + g + b) / 3
        count += 1
    return total / max(count, 1)


def is_content_row(pixels, y, w):
    """Bu qator sertifikat kontenti ekanligini aniqlash"""
    var = row_variance(pixels, y, w)
    brightness = row_avg_brightness(pixels, y, w)

    # High variance = content (text, patterns, images)
    # Certificate content has variance > 500 typically
    # UI bars have low variance (uniform color)
    # Dark areas have low brightness
    if var > 300 and brightness > 100:
        return True
    # Gold pattern has moderate variance and specific brightness
    if var > 100 and 130 < brightness < 220:
        return True
    return False


def find_content_bounds(img):
    """Sertifikat chegaralarini variansiya orqali topish"""
    w, h = img.size
    pixels = img.load()

    # From top: find first content row (skip UI and gaps)
    top = 0
    consecutive_content = 0
    for y in range(min(h, int(h * 0.45))):
        if is_content_row(pixels, y, w):
            consecutive_content += 1
            if consecutive_content >= 5:
                top = max(0, y - consecutive_content - 2)
                break
        else:
            consecutive_content = 0

    # From bottom: find last content row
    bottom = h
    consecutive_content = 0
    for y in range(h - 1, max(0, int(h * 0.4)), -1):
        if is_content_row(pixels, y, w):
            consecutive_content += 1
            if consecutive_content >= 5:
                bottom = min(h, y + consecutive_content + 2)
                break
        else:
            consecutive_content = 0

    # From left: find content edge
    left = 0
    for x in range(min(w, int(w * 0.2))):
        mid = (top + bottom) // 2
        content_pixels = 0
        for dy in [-50, -20, 0, 20, 50]:
            check_y = mid + dy
            if 0 <= check_y < h:
                var = row_variance(pixels, check_y, w)
                r, g, b = pixels[x, check_y][:3]
                brightness = (r + g + b) / 3
                if brightness > 100 and var > 100:
                    content_pixels += 1
        if content_pixels >= 3:
            left = max(0, x - 2)
            break

    # From right
    right = w
    for x in range(w - 1, max(0, int(w * 0.8)), -1):
        mid = (top + bottom) // 2
        content_pixels = 0
        for dy in [-50, -20, 0, 20, 50]:
            check_y = mid + dy
            if 0 <= check_y < h:
                r, g, b = pixels[x, check_y][:3]
                brightness = (r + g + b) / 3
                if brightness > 100:
                    content_pixels += 1
        if content_pixels >= 3:
            right = min(w, x + 2)
            break

    return left, top, right, bottom


def process_image(filepath):
    """Rasmni kesish"""
    img = Image.open(filepath).convert("RGB")
    w, h = img.size
    ratio = h / w

    left, top, right, bottom = find_content_bounds(img)

    crop_w = right - left
    crop_h = bottom - top
    removed = (top + (h - bottom))

    if removed < 20:
        return False

    if crop_h < h * 0.25 or crop_w < w * 0.4:
        print(f"  SKIP {os.path.basename(filepath)}: crop too small ({crop_w}x{crop_h})")
        return False

    cropped = img.crop((left, top, right, bottom))
    new_ratio = crop_h / crop_w
    cropped.save(filepath, quality=92)
    print(f"  CROP {os.path.basename(filepath)}: {w}x{h} -> {crop_w}x{crop_h} (ratio {ratio:.2f} -> {new_ratio:.2f})")
    return True


def main():
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

    # Final count
    remaining = 0
    for f in sorted(os.listdir(CERT_DIR)):
        if not f.startswith("cert_") or not f.endswith(".jpg"):
            continue
        filepath = os.path.join(CERT_DIR, f)
        img = Image.open(filepath)
        w, h = img.size
        ratio = h / w
        img.close()
        if ratio > 1.85:
            remaining += 1

    print(f"\nNatija: {cropped} ta kesildi, {remaining} ta hali muammoli")


if __name__ == "__main__":
    main()
