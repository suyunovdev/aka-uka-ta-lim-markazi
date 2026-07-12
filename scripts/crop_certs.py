"""
Sertifikat rasmlarini avtomatik kesish skripti.
Skrinshot rasmlardan faqat sertifikat qismini ajratib oladi.
"""

from PIL import Image
import os

CERT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images", "certificates")

def is_cert_color(r, g, b):
    """Sertifikat fon rangi — oltin/beige/tan rang"""
    # Gold/tan border pattern: R > 170, G > 140, B > 90, not too white, not too dark
    if r > 170 and g > 140 and b > 90 and r < 250 and (r - b) > 20:
        return True
    # Light beige certificate body
    if r > 200 and g > 190 and b > 160 and r < 255:
        return True
    # CEFR certificate - pinkish/salmon border
    if r > 190 and g > 140 and b > 130 and (r - g) > 20 and (r - b) > 20:
        return True
    return False


def find_cert_bounds(img):
    """Rasmdan sertifikat chegaralarini topish"""
    w, h = img.size
    pixels = img.load()

    # Scan from top to find first row with significant cert-colored pixels
    top = 0
    for y in range(h):
        cert_pixels = 0
        sample_points = [int(w * p) for p in [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]]
        for x in sample_points:
            r, g, b = pixels[x, y][:3]
            if is_cert_color(r, g, b):
                cert_pixels += 1
        if cert_pixels >= 3:
            top = max(0, y - 5)
            break

    # Scan from bottom to find last row with cert-colored pixels
    bottom = h
    for y in range(h - 1, 0, -1):
        cert_pixels = 0
        sample_points = [int(w * p) for p in [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]]
        for x in sample_points:
            r, g, b = pixels[x, y][:3]
            if is_cert_color(r, g, b):
                cert_pixels += 1
        if cert_pixels >= 3:
            bottom = min(h, y + 5)
            break

    # Scan from left
    left = 0
    for x in range(w):
        cert_pixels = 0
        mid_y = (top + bottom) // 2
        sample_ys = [mid_y - 50, mid_y, mid_y + 50]
        for sy in sample_ys:
            if 0 <= sy < h:
                r, g, b = pixels[x, sy][:3]
                if is_cert_color(r, g, b):
                    cert_pixels += 1
        if cert_pixels >= 2:
            left = max(0, x - 3)
            break

    # Scan from right
    right = w
    for x in range(w - 1, 0, -1):
        cert_pixels = 0
        mid_y = (top + bottom) // 2
        sample_ys = [mid_y - 50, mid_y, mid_y + 50]
        for sy in sample_ys:
            if 0 <= sy < h:
                r, g, b = pixels[x, sy][:3]
                if is_cert_color(r, g, b):
                    cert_pixels += 1
        if cert_pixels >= 2:
            right = min(w, x + 3)
            break

    return left, top, right, bottom


def process_image(filepath):
    """Rasmni tekshirib, kerak bo'lsa kesish"""
    img = Image.open(filepath).convert("RGB")
    w, h = img.size
    ratio = h / w

    # Only process screenshots (tall aspect ratio > 1.8)
    if ratio <= 1.8:
        return False

    left, top, right, bottom = find_cert_bounds(img)

    # Sanity check: cropped area should be reasonable
    crop_h = bottom - top
    crop_w = right - left
    if crop_h < h * 0.3 or crop_w < w * 0.5:
        # Crop area too small, skip
        print(f"  SKIP {os.path.basename(filepath)}: crop area too small ({crop_w}x{crop_h})")
        return False

    # Crop and save
    cropped = img.crop((left, top, right, bottom))
    cropped.save(filepath, quality=92)
    new_ratio = crop_h / crop_w
    print(f"  CROP {os.path.basename(filepath)}: {w}x{h} -> {crop_w}x{crop_h} (ratio {ratio:.2f} -> {new_ratio:.2f})")
    return True


def main():
    files = sorted([f for f in os.listdir(CERT_DIR) if f.startswith("cert_") and f.endswith(".jpg")])
    print(f"Jami: {len(files)} ta rasm")

    cropped = 0
    skipped = 0
    clean = 0

    for f in files:
        filepath = os.path.join(CERT_DIR, f)
        img = Image.open(filepath)
        w, h = img.size
        ratio = h / w
        img.close()

        if ratio <= 1.8:
            clean += 1
            continue

        if process_image(filepath):
            cropped += 1
        else:
            skipped += 1

    print(f"\nNatija: {cropped} ta kesildi, {skipped} ta o'tkazildi, {clean} ta toza edi")


if __name__ == "__main__":
    main()
