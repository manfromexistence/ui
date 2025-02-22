import { generateCliCommands } from "@/utils/utils"

import code from "@content/Components/Dock/Dock.jsx?raw"
import css from "@content/Components/Dock/Dock.css?raw"
import tailwind from "@tailwind/Components/Dock/Dock.jsx?raw"
import tsCode from "@ts-default/Components/Dock/Dock.tsx?raw"
import tsTailwind from "@ts-tailwind/Components/Dock/Dock.tsx?raw"

export const dock = {
  ...generateCliCommands("Components/Dock"),
  installation: `npm i framer-motion`,
  usage: `import Dock from './Dock';

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />`,
  code,
  css,
  tailwind,
  tsCode,
  tsTailwind
}