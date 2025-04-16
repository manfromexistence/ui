import {
  MotionHighlight,
  MotionHighlightItem,
} from '@/registry/effects/motion-highlight';
import { MotionEffect } from '@/registry/effects/motion-effect';
import { Blocks, BringToFront, GitPullRequest } from 'lucide-react';
import ShadcnIcon from './icons/shadcn-icon';

const CARDS = [
  {
    value: '1',
    icon: BringToFront,
    title: 'Animated Components',
    description: 'Beautiful Motion-animated components for dynamic websites.',
  },
  {
    value: '2',
    icon: GitPullRequest,
    title: 'Open Source',
    description:
      'A project built for the dev community with the dev community.',
  },
  {
    value: '3',
    icon: ShadcnIcon,
    title: 'Complementary to Shadcn UI',
    description:
      'The components are designed to be used with Shadcn UI components.',
  },
  {
    value: '4',
    icon: Blocks,
    title: 'Component Distribution',
    description:
      'Install the components in your project and modify them as you wish.',
  },
];

export const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <MotionHighlight hover controlledItems className="rounded-xl">
        {CARDS.map((card, index) => (
          <MotionEffect
            key={card.value}
            slide={{
              direction: 'down',
            }}
            fade
            zoom
            delay={index * 0.1}
            inView
          >
            <MotionHighlightItem data-value={card.value} className="h-full">
              <div className="p-4 flex flex-col border rounded-xl cursor-default h-full">
                <div className="flex items-center justify-around size-10 rounded-lg bg-blue-500/10 mb-2">
                  <card.icon className="size-5 text-blue-500" />
                </div>
                <p className="text-base font-medium mb-1">{card.title}</p>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </MotionHighlightItem>
          </MotionEffect>
        ))}
      </MotionHighlight>
    </div>
  );
};
