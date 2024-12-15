/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export * from './blend/blend.js';
export * from './contrast/contrast.js';
export * from './dislike/dislike_analyzer.js';
export * from './dynamiccolor/dynamic_color.js';
export * from './dynamiccolor/dynamic_scheme.js';
export * from './dynamiccolor/material_dynamic_colors.js';
export * from './dynamiccolor/variant.js';
export * from './hct/cam16.js';
export * from './hct/hct.js';
export * from './hct/viewing_conditions.js';
export * from './palettes/core_palette.js';
export * from './palettes/tonal_palette.js';
export * from './quantize/quantizer_celebi.js';
export * from './quantize/quantizer_map.js';
export * from './quantize/quantizer_wsmeans.js';
export * from './quantize/quantizer_wu.js';
export * from './scheme/scheme.js';
export * from './scheme/scheme_android.js';
export * from './scheme/scheme_content.js';
export * from './scheme/scheme_expressive.js';
export * from './scheme/scheme_fidelity.js';
export * from './scheme/scheme_fruit_salad.js';
export * from './scheme/scheme_monochrome.js';
export * from './scheme/scheme_neutral.js';
export * from './scheme/scheme_rainbow.js';
export * from './scheme/scheme_tonal_spot.js';
export * from './scheme/scheme_vibrant.js';
export * from './score/score.js';
export * from './temperature/temperature_cache.js';
export * from './utils/color_utils.js';
export * from './utils/math_utils.js';
export * from './utils/string_utils.js';
export * from './utils/image_utils.js';
export * from './utils/theme_utils.js';

function hexToRgb(hex: string): [number, number, number] {
    if (hex.charAt(0) === "#") {
        hex = hex.slice(1);
    }

    if (hex.length === 3) {
        hex = hex.split("").map(char => char.repeat(2)).join("");
    }

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;

    if (max === min) {
        return [0, 0, l * 100];
    }

    const d = max - min;
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    let h: any;
    switch (max) {
        case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
        case g:
            h = (b - r) / d + 2;
            break;
        case b:
            h = (r - g) / d + 4;
            break;
    }
    h /= 6;

    return [h * 360, s * 100, l * 100];
}

export function hexToHsl(hex: string): any {
    const [r, g, b] = hexToRgb(hex);
    const [h, s, l] = rgbToHsl(r, g, b);
    return `${Math.round(h)} ${s.toFixed(1)}% ${l.toFixed(1)}%`;
}
