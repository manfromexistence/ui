import { generateCliCommands } from '@/utils/utils';

import code from '@content/TextAnimations/DecryptedText/DecryptedText.jsx?raw';
import tailwind from '@tailwind/TextAnimations/DecryptedText/DecryptedText.jsx?raw';
import tsCode from '@ts-default/TextAnimations/DecryptedText/DecryptedText.tsx?raw';
import tsTailwind from '@ts-tailwind/TextAnimations/DecryptedText/DecryptedText.tsx?raw';

export const decryptedText = {
  ...(generateCliCommands('TextAnimations/DecryptedText')),
  installation: `npm i framer-motion`,
  usage: `import DecryptedText from './DecryptedText;'

{/* Example 1: Defaults (hover to decrypt) */}
<DecryptedText text="Hover me!" />

{/* Example 2: Customized speed and characters */}
<DecryptedText
text="Customize me"
speed={100}
maxIterations={20}
characters="ABCD1234!?"
className="revealed"
parentClassName="all-letters"
encryptedClassName="encrypted"
/>

{/* Example 3: Animate on view (runs once) */}
<div style={{ marginTop: '4rem' }}>
<DecryptedText
  text="This text animates when in view"
  animateOn="view"
  revealDirection="center"
/>
</div>`,
  code,
  tailwind,
  tsCode,
  tsTailwind
}
