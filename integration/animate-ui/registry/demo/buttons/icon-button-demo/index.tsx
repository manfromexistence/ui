'use client';

import * as React from 'react';
import { Star } from 'lucide-react';

import { IconButton } from '@/registry/buttons/icon-button';

export const IconButtonDemo = () => {
  const [active, setActive] = React.useState(false);

  return (
    <IconButton
      icon={Star}
      active={active}
      onClick={() => setActive(!active)}
    />
  );
};
