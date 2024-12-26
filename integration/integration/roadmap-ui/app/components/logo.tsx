import { SquareChartGanttIcon } from 'lucide-react';
import Image from 'next/image';
import type { FC } from 'react';

export const Logo: FC = () => (
  <div className="flex items-center gap-2">
    <Image
      src="/logo.png"
      alt="Roadmap UI"
      width={20}
      height={20}
      className="h-5 w-5 dark:hidden"
    />
    <SquareChartGanttIcon className="hidden h-5 w-5 dark:block" />
    <span className="font-semibold">Roadmap UI</span>
  </div>
);
