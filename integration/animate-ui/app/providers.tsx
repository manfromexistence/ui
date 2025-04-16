'use client';

import { ProgressProvider } from '@bprogress/next/app';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ProgressProvider color="currentColor">{children}</ProgressProvider>;
};
