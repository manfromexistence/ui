'use client';

import * as React from 'react';
import {
  Button,
  Buttons,
  Input,
  InputButton,
  SubmitButton,
} from '@/registry/buttons/input-button';

export const InputButtonDemo = () => {
  return (
    <InputButton>
      <Buttons>
        <Button>Join the newsletter</Button>
        <SubmitButton>Subscribe</SubmitButton>
      </Buttons>
      <Input type="email" placeholder="your-email@example.com" />
    </InputButton>
  );
};
