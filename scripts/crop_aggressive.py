"""
Kuchli kesish — qolgan muammoli rasmlar uchun.
Katta qora/bo'sh maydonlarni topib kesadi.
"""

from PIL import Image
import os

CERT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images", "certificates")

PROBLEM_FILES = [
    "cert_006.jpg", "cert_008.jpg", "cert_010.jpg", "cert_072.jpg",
    "cert_082.jpg", "cert_090.jpg", "cert_097.jpg", "cert_120.jpg",
    "cert_121.jpg", "cert_124.jpg", "cert_133.jpg", "cert_134.jpg",
    "cert_138.jpg", "cert_139.jpg", "cert_143.jpg", "cert_146.jpg",
    "cert_147.jpg", "cert_161.jpg", "cert_177.jpg", "cert_182.jpg",
]


def row_stats(pixels, y, w):
    """Row average brightness and % dark pixels"""
    total_brightness = 0
    dark_count = 0
    step = max(1, w // 40)
    count = 0
    for x in range(0, w, step):
        r, g, b = pixels[x, y][:3]
        br = (r + g + b) / 3
        total_brightness += br
        if br < 50:
            dark_count += 1
        count += 1
    return total_brightness / max(count, 1), dark_count / max(count, 1)


def find_cert_area(img):
    """Sertifikat maydonini topish"""
    w, h = img.size
    pixels = img.load()

    # STEP 1: Find top of certificate
    # Skip: status bar, app headers, dark areas
    top = 0
    cert_streak = 0
    for y in range(int(h * 0.4)):
        avg_br, dark_pct = row_stats(pixels, y, w)

        # Certificate rows: moderate to high brightness, not mostly dark
        is_cert = avg_br > 130 and dark_pct < 0.3

        if is_cert:
            cert_streak += 1
            if cert_streak >= 10:
                top = max(0, y - cert_streak)
                break
        else:
            cert_streak = 0

    # STEP 2: Find bottom of certificate
    # Scan from bottom up, skip dark/empty areas and UI
    bottom = h
    cert_streak = 0
    for y in range(h - 1, int(h * 0.3), -1):
        avg_br, dark_pct = row_stats(pixels, y, w)

        # Certificate rows
        is_cert = avg_br > 130 and dark_pct < 0.3

        if is_cert:
            cert_streak += 1
            if cert_streak >= 10:
                bottom = min(h, y + cert_streak)
                break
        else:
            cert_streak = 0

    # STEP 3: Additional cleanup — check for UI elements near boundaries
    # Top: skip navigation bar (icons + text on light/white background)
    # Look for gold certificate pattern start
    for y in range(top, min(top + int(h * 0.15), h)):
        # Check for gold/tan pixels (certificate border pattern)
        gold_count = 0
        step = max(1, w // 20)
        for x in range(0, w, step):
            r, g, b = pixels[x, y][:3]
            # Gold/tan: R > 170, G > 140, B < 130, (R-B) > 40
            if r > 160 and g > 130 and (r - b) > 30 and b < 170:
                gold_count += 1
        if gold_count >= 5:
            top = max(0, y - 3)
            break

    # Bottom: look for last gold pattern row
    for y in range(bottom - 1, max(bottom - int(h * 0.2), top), -1):
        gold_count = 0
        step = max(1, w // 20)
        for x in range(0, w, step):
            r, g, b = pixels[x, y][:3]
            if r > 160 and g > 130 and (r - b) > 30 and b < 170:
                gold_count += 1
        if gold_count >= 5:
            bottom = min(h, y + 3)
            break

    return 0, top, w, bottom


def main():
    cropped = 0
    for f in PROBLEM_FILES:
        filepath = os.path.join(CERT_DIR, f)
        if not os.path.exists(filepath):
            continue

        img = Image.open(filepath).convert("RGB")
        w, h = img.size
        ratio = h / w

        if ratio <= 1.5:
            print(f"  OK   {f}: already good (ratio {ratio:.2f})")
            continue

        left, top, right, bottom = find_cert_area(img)
        crop_w = right - left
        crop_h = bottom - top
        new_ratio = crop_h / crop_w

        if crop_h < h * 0.2:
            print(f"  SKIP {f}: crop too small")
            continue

        removed_pct = ((top + h - bottom) / h) * 100
        if removed_pct < 3:
            print(f"  SKIP {f}: only {removed_pct:.0f}% removed")
            continue

        cropped_img = img.crop((left, top, right, bottom))
        cropped_img.save(filepath, quality=92)
        print(f"  CROP {f}: {w}x{h} -> {crop_w}x{crop_h} (ratio {ratio:.2f} -> {new_ratio:.2f}, -{removed_pct:.0f}%)")
        cropped += 1

    print(f"\nNatija: {cropped} ta kesildi")

    # Final check
    remaining = 0
    for f in PROBLEM_FILES:
        filepath = os.path.join(CERT_DIR, f)
        if os.path.exists(filepath):
            img = Image.open(filepath)
            w, h = img.size
            img.close()
            if h / w > 1.65:
                remaining += 1
                print(f"  STILL BAD: {f} ratio={h/w:.2f}")

    print(f"Hali muammoli: {remaining}")


if __name__ == "__main__":
    main()
