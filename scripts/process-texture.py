#!/usr/bin/env python3
"""
Converts a flat board photo into a tileable PBR texture set for the engine's
scanned materials: evens out the lighting, blends the edges seamless, and
derives roughness + normal maps from the grain.

Usage:
  python3 scripts/process-texture.py photo.jpg --id cherry-scan --label "Cherry (scanned)" \
      --width-mm 600 --height-mm 300 --out apps/demo/public/textures/scanned

Shoot square-on in even, diffuse light (no flash), board filling the frame.
--width-mm/--height-mm are the physical size of the photographed area; they
set the rendered grain scale. Appends/updates the manifest.json in --out.
"""

import argparse
import json
import os

import numpy as np
from PIL import Image, ImageFilter

MAX_SIZE = 4096
DETAIL_SIZE = 2048  # normal/roughness maps


def flatten_illumination(rgb: np.ndarray) -> np.ndarray:
    """Removes low-frequency lighting gradients, keeping the average color."""
    img = Image.fromarray(rgb.astype(np.uint8))
    sigma = max(img.size) / 5
    low = np.asarray(img.filter(ImageFilter.GaussianBlur(sigma)), dtype=np.float64) + 1e-3
    flat = rgb.astype(np.float64) / low * low.mean(axis=(0, 1), keepdims=True)
    return np.clip(flat, 0, 255)


def make_seamless(arr: np.ndarray, margin_frac: float = 0.12) -> np.ndarray:
    """Offset-and-crossfade both axes so the image tiles without seams."""
    out = arr.astype(np.float64)
    for axis in (0, 1):
        n = out.shape[axis]
        margin = int(n * margin_frac)
        rolled = np.roll(out, n // 2, axis=axis)
        ramp = np.linspace(0, 1, 2 * margin)
        weight = np.ones(n)
        weight[:margin] = ramp[margin:]
        weight[-margin:] = ramp[:margin][::-1]
        shape = [1, 1, 1]
        shape[axis] = n
        w = weight.reshape(shape[: out.ndim] if out.ndim == 3 else shape[:2])
        out = out * w + rolled * (1 - w)
        out = np.roll(out, n // 4, axis=axis)
    return out


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument('photo')
    parser.add_argument('--id', required=True)
    parser.add_argument('--label', required=True)
    parser.add_argument('--width-mm', type=float, required=True)
    parser.add_argument('--height-mm', type=float, required=True)
    parser.add_argument('--base-roughness', type=float, default=0.5)
    parser.add_argument('--out', default='apps/demo/public/textures/scanned')
    args = parser.parse_args()

    image = Image.open(args.photo).convert('RGB')
    if max(image.size) > MAX_SIZE:
        scale = MAX_SIZE / max(image.size)
        image = image.resize((round(image.width * scale), round(image.height * scale)), Image.LANCZOS)

    rgb = np.asarray(image, dtype=np.float64)
    rgb = flatten_illumination(rgb)
    rgb = make_seamless(rgb)
    color = Image.fromarray(rgb.astype(np.uint8))

    # Grain detail from luminance for the relief and sheen maps.
    detail = color.resize((DETAIL_SIZE, round(DETAIL_SIZE * color.height / color.width)), Image.LANCZOS)
    lum = np.asarray(detail.convert('L'), dtype=np.float64) / 255
    smooth = np.asarray(
        Image.fromarray((lum * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(6)),
        dtype=np.float64,
    ) / 255
    high = lum - smooth  # pores and grain lines

    # Normal map: dark grain reads as shallow valleys.
    height = -high
    gy, gx = np.gradient(height)
    strength = 220.0
    nz = 1.0 / np.sqrt(1 + (gx * strength) ** 2 + (gy * strength) ** 2)
    normal = np.stack(
        [(-gx * strength * nz * 0.5 + 0.5), (gy * strength * nz * 0.5 + 0.5), (nz * 0.5 + 0.5)],
        axis=-1,
    )
    # Roughness: earlywood/pores slightly rougher than burnished latewood.
    rough = np.clip(args.base_roughness - high * 2.2 + (smooth - smooth.mean()) * 0.4, 0.25, 0.85)

    os.makedirs(args.out, exist_ok=True)
    color.save(os.path.join(args.out, f'{args.id}-color.jpg'), quality=86)
    Image.fromarray((normal * 255).astype(np.uint8)).save(
        os.path.join(args.out, f'{args.id}-normal.jpg'), quality=92
    )
    Image.fromarray((rough * 255).astype(np.uint8)).save(
        os.path.join(args.out, f'{args.id}-rough.jpg'), quality=86
    )

    swatch = '#%02x%02x%02x' % tuple(int(c) for c in rgb.mean(axis=(0, 1)))
    manifest_path = os.path.join(args.out, 'manifest.json')
    manifest = []
    if os.path.exists(manifest_path):
        with open(manifest_path) as f:
            manifest = json.load(f)
    manifest = [m for m in manifest if m['id'] != args.id]
    manifest.append(
        {
            'id': args.id,
            'label': args.label,
            'swatch': swatch,
            'mapUrl': f'textures/scanned/{args.id}-color.jpg',
            'normalMapUrl': f'textures/scanned/{args.id}-normal.jpg',
            'roughnessMapUrl': f'textures/scanned/{args.id}-rough.jpg',
            'widthM': args.width_mm / 1000,
            'heightM': args.height_mm / 1000,
        }
    )
    with open(manifest_path, 'w') as f:
        json.dump(manifest, f, indent=2)
    print(f'{args.id}: maps + manifest written to {args.out}')


if __name__ == '__main__':
    main()
