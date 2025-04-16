import { generateCliCommands } from '@/utils/utils';

import code from '@content/Animations/MetallicPaint/MetallicPaint.jsx?raw';
import css from '@content/Animations/MetallicPaint/MetallicPaint.css?raw';
import tailwind from '@tailwind/Animations/MetallicPaint/MetallicPaint.jsx?raw';
import tsCode from '@ts-default/Animations/MetallicPaint/MetallicPaint.tsx?raw';
import tsTailwind from '@ts-tailwind/Animations/MetallicPaint/MetallicPaint.tsx?raw';

export const metallicPaint = {
  ...(generateCliCommands('Animations/MetallicPaint')),
  usage: `import MetallicPaint, { parseLogoImage } from "./MetallicPaint";
import { useState, useEffect } from 'react';

// replace with your own SVG
// NOTE: your SVG should have a bit of padding around the shape, to keep it from being cut off
// it should also have black fill color, to allow the metallic effect to show through the mask
import logo from '../../assets/logos/react-bits-solid-black.svg';

const Component = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        const response = await fetch(logo);
        const blob = await response.blob();
        const file = new File([blob], "default.png", { type: blob.type });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);

      } catch (err) {
        console.error("Error loading default image:", err);
      }
    }

    loadDefaultImage();
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <MetallicPaint 
        imageData={imageData ?? new ImageData(1, 1)} 
        params={{ edge: 2, patternBlur: 0.005, patternScale: 2, refraction: 0.015, speed: 0.3, liquid: 0.07 }} 
      />
    </div>
  );
}`,
code,
css,
tailwind,
tsCode,
tsTailwind
};