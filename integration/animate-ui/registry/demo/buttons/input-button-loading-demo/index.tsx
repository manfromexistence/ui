'use client';

import * as React from 'react';
import {
  Button,
  Buttons,
  Input,
  InputButton,
  SubmitButton,
} from '@/registry/buttons/input-button';
import { Check, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const InputButtonLoadingDemo = () => {
  const [showInput, setShowInput] = React.useState(false);
  const [pending, startTransition] = React.useTransition();
  const [success, setSuccess] = React.useState(false);
  const [value, setValue] = React.useState('');

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!showInput) {
        setShowInput(true);
        return;
      }

      startTransition(async () => {
        await sleep(2000);
        setSuccess(true);
        await sleep(2000);
        setSuccess(false);
        setShowInput(false);
        setValue('');
      });
    },
    [showInput, setShowInput, setSuccess, setValue],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center justify-center"
    >
      <InputButton showInput={showInput} setShowInput={setShowInput}>
        <Buttons>
          <Button onClick={() => {}}>Join the newsletter</Button>
          <SubmitButton
            onClick={() => {}}
            type="submit"
            disabled={pending}
            className={pending || success ? 'aspect-square px-0' : ''}
          >
            {success ? (
              <motion.span
                key="success"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Check />
              </motion.span>
            ) : pending ? (
              <motion.span
                key="pending"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Loader2 className="animate-spin" />
              </motion.span>
            ) : (
              'Subscribe'
            )}
          </SubmitButton>
        </Buttons>
        <Input
          type="email"
          placeholder="your-email@example.com"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={pending}
          autoFocus
        />
      </InputButton>
    </form>
  );
};
