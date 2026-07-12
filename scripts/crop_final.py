"""
Yakuniy kesish — qora/kulrang bo'sh maydonlarni va UI elementlarni olib tashlash.
"""

from PIL import Image
import os

CERT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images", "certificates")


def analyze_row(pixels, y, w):
    """Qator haqida ma'lumot: o'rtacha yorug'lik va xilma-xillik"""
    vals = []
    step = max(1, w // 40)
    for x in range(0, w, step):
        r, g, b = pixels[x, y][:3]
        vals.append((r + g + b) / 3)
    avg = sum(vals) / len(vals)
    var = sum((v - avg) ** 2 for v in vals) / len(vals) if len(vals) > 1 else 0
    return avg, var


def find_dark_bottom(pixels, w, h):
    """Pastdan qora/juda qorong'u maydonni topish"""
    for y in range(h - 1, max(0, int(h * 0.3)), -1):
        avg, var = analyze_row(pixels, y, w)
        # Certificate content: avg > 100, or has gold pattern
        if avg > 120 and var > 200:
            return y + 1
        # White certificate with text: avg > 200, moderate variance
        if avg > 200 and var > 50:
            return y + 1
    return h


def find_ui_top(pixels, w, h):
    """Yuqoridan UI (status bar, app header) ni topish"""
    # Look for the certificate start - it typically has the gold border pattern
    # or institutional header text (high variance, moderate brightness)
    consecutive_content = 0
    for y in range(min(h, int(h * 0.35))):
        avg, var = analyze_row(pixels, y, w)
        # Certificate typically starts with gold pattern or beige bg
        # Gold pattern: avg 140-210, moderate-high variance
        # White certificate: avg > 220, some variance from text
        is_cert = False
        if 130 < avg < 220 and var > 100:
            is_cert = True  # Gold/beige certificate area
        if avg > 220 and var > 30 and var < 5000:
            is_cert = True  # White certificate with some text/lines

        if is_cert:
            consecutive_content += 1
            if consecutive_content >= 8:
                return max(0, y - consecutive_content)
        else:
            consecutive_content = 0
    return 0


def process_image(filepath):
    img = Image.open(filepath).convert("RGB")
    w, h = img.size
    pixels = img.load()

    # Find bottom: skip dark areas and UI from bottom
    new_bottom = find_dark_bottom(pixels, w, h)

    # Find top: skip status bar and app header
    new_top = find_ui_top(pixels, w, h)

    # Also check for dark areas from top (less common but possible)
    # Check if rows near top are very dark
    dark_top = 0
    for y in range(min(h, int(h * 0.15))):
        avg, _ = analyze_row(pixels, y, w)
        if avg < 50:
            dark_top = y + 1
        elif avg > 120:
            break

    new_top = max(new_top, dark_top)

    removed = new_top + (h - new_bottom)
    if removed < 30:
        return False

    crop_w = w
    crop_h = new_bottom - new_top

    if crop_h < h * 0.2:
        print(f"  SKIP {os.path.basename(filepath)}: too small ({crop_w}x{crop_h})")
        return False

    cropped = img.crop((0, new_top, w, new_bottom))
    new_ratio = crop_h / crop_w
    cropped.save(filepath, quality=92)
    print(f"  CROP {os.path.basename(filepath)}: {w}x{h} -> {crop_w}x{crop_h} (ratio {h/w:.2f} -> {new_ratio:.2f})")
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

    # Count remaining
    remaining = 0
    for f in sorted(os.listdir(CERT_DIR)):
        if not f.startswith("cert_") or not f.endswith(".jpg"):
            continue
        filepath = os.path.join(CERT_DIR, f)
        img = Image.open(filepath)
        w, h = img.size
        img.close()
        if h / w > 1.85:
            remaining += 1

    print(f"\nNatija: {cropped} ta kesildi, {remaining} ta qoldi")


if __name__ == "__main__":
    main()
