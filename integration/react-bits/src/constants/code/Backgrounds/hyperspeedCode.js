import { generateCliCommands } from '@/utils/utils';

import presets from '@content/Backgrounds/Hyperspeed/HyperSpeedPresets.js?raw';
import code from '@content/Backgrounds/Hyperspeed/Hyperspeed.jsx?raw';
import css from '@content/Backgrounds/Hyperspeed/Hyperspeed.css?raw';
import tailwind from '@tailwind/Backgrounds/Hyperspeed/Hyperspeed.jsx?raw';
import tsCode from '@ts-default/Backgrounds/Hyperspeed/Hyperspeed.tsx?raw'
import tsTailwind from '@ts-tailwind/Backgrounds/Hyperspeed/Hyperspeed.tsx?raw'

export const hyperspeed = {
  ...(generateCliCommands('Backgrounds/Hyperspeed')),
  installation: `npm i three postprocessing`,
  usage: `import Hyperspeed from './Hyperspeed';

// the component will fill the height/width of its parent container, edit the CSS to change this
// the options below are the default values

<Hyperspeed
  effectOptions={{
    onSpeedUp: () => { },
    onSlowDown: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xFFFFFF,
      brokenLines: 0xFFFFFF,
      leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
      rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
      sticks: 0x03B3C3,
    }
  }}
/>`,
  presets,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}