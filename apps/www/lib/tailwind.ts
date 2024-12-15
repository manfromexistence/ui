import tailwindConfig from '@/tailwind.config.cjs';
import resolveConfig from 'tailwindcss/resolveConfig';

const tailwind = resolveConfig(tailwindConfig);

export default tailwind;
