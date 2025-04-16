'use client';

import * as React from 'react';
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  Transition,
} from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InputButtonContextType {
  showInput: boolean;
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
  transition: Transition;
  id: string;
}
const InputButtonContext = React.createContext<InputButtonContextType>({
  showInput: false,
  setShowInput: () => {},
  transition: { type: 'spring', duration: 0.5 },
  id: '',
});

const useInputButton = (): InputButtonContextType => {
  const context = React.useContext(InputButtonContext);
  if (!context) {
    throw new Error('useInputButton must be used within a InputButton');
  }
  return context;
};

type InputButtonProps = React.HTMLAttributes<HTMLDivElement> &
  Partial<InputButtonContextType>;

const InputButton = React.forwardRef<HTMLDivElement, InputButtonProps>(
  (
    {
      className,
      transition = { type: 'spring', stiffness: 300, damping: 20 },
      showInput,
      setShowInput,
      id,
      ...props
    },
    ref,
  ) => {
    const localId = React.useId();
    const [localShowInput, setLocalShowInput] = React.useState(false);

    return (
      <InputButtonContext.Provider
        value={{
          showInput: showInput ?? localShowInput,
          setShowInput: setShowInput ?? setLocalShowInput,
          transition,
          id: id ?? localId,
        }}
      >
        <div
          ref={ref}
          className={cn(
            'relative w-fit flex items-center justify-center h-10',
            (showInput || localShowInput) && 'w-full max-w-[400px]',
            className,
          )}
          {...props}
        />
      </InputButtonContext.Provider>
    );
  },
);

InputButton.displayName = 'InputButton';

type ButtonsProps = HTMLMotionProps<'div'>;

const Buttons = React.forwardRef<HTMLDivElement, ButtonsProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn('flex size-full', className)}
        {...props}
      />
    );
  },
);

Buttons.displayName = 'Buttons';

type ButtonProps = HTMLMotionProps<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    const { transition, setShowInput, id } = useInputButton();

    return (
      <motion.button
        ref={ref}
        className={cn(
          'bg-background text-sm whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive rounded-full border text-background-foreground cursor-pointer pl-4 pr-12 size-full font-medium',
          className,
        )}
        layoutId={`input-button-${id}`}
        transition={transition}
        onClick={() => setShowInput((prev) => !prev)}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

type SubmitButtonProps = HTMLMotionProps<'button'> & {
  icon?: React.ElementType;
};

const SubmitButton = React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ className, children, icon: Icon = ArrowRight, ...props }, ref) => {
    const { transition, showInput, setShowInput, id } = useInputButton();

    return (
      <motion.button
        ref={ref}
        layoutId={`button-${id}`}
        transition={transition}
        className={cn(
          "z-[1] [&_svg:not([class*='size-'])]:size-4 cursor-pointer disabled:pointer-events-none  disabled:opacity-50 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap bg-primary hover:bg-primary/90 transition-colors text-primary-foreground rounded-full text-sm flex items-center justify-center font-medium absolute inset-y-1 right-1",
          showInput ? 'px-4' : 'aspect-square',
          className,
        )}
        onClick={() => setShowInput((prev) => !prev)}
        {...props}
      >
        {showInput ? (
          <motion.span
            key="show-button"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.span>
        ) : (
          <motion.span
            key="show-icon"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="size-4" />
          </motion.span>
        )}
      </motion.button>
    );
  },
);

SubmitButton.displayName = 'SubmitButton';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const { transition, showInput, id } = useInputButton();

    return (
      <AnimatePresence>
        {showInput && (
          <div className="absolute inset-0 size-full flex items-center justify-center">
            <motion.div
              className="size-full flex items-center bg-background rounded-full relative"
              layoutId={`input-button-${id}`}
              transition={transition}
            >
              <input
                ref={ref}
                className={cn(
                  'size-full selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground inset-0 pl-4 focus-visible:border-ring border focus-visible:ring-ring/50 focus-visible:ring-[3px] pr-32 py-2 text-sm bg-background rounded-full focus:outline-none absolute shrink-0 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive disabled:pointer-events-none disabled:cursor-not-allowed',
                  className,
                )}
                {...props}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  },
);

Input.displayName = 'Input';

export {
  InputButton,
  Buttons,
  Button,
  SubmitButton,
  Input,
  useInputButton,
  type InputButtonProps,
  type ButtonsProps,
  type ButtonProps,
  type SubmitButtonProps,
  type InputProps,
};
