'use client';

import * as React from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
  HTMLMotionProps,
  SpringOptions,
} from 'motion/react';

import { cn } from '@/lib/utils';

interface CursorContextType {
  cursorPos: { x: number; y: number };
  isActive: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
  cursorRef: React.RefObject<HTMLDivElement | null>;
}

const CursorContext = React.createContext<CursorContextType | undefined>(
  undefined,
);

const useCursor = (): CursorContextType => {
  const context = React.useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

interface CursorProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CursorProvider = React.forwardRef<HTMLDivElement, CursorProviderProps>(
  ({ children, ...props }, ref) => {
    const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const cursorRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(
      ref,
      () => containerRef.current as HTMLDivElement,
    );

    React.useEffect(() => {
      if (!containerRef.current) return;

      const parent = containerRef.current.parentElement;
      if (!parent) return;

      if (getComputedStyle(parent).position === 'static') {
        parent.style.position = 'relative';
      }

      const handleMouseMove = (e: MouseEvent) => {
        const rect = parent.getBoundingClientRect();
        setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setIsActive(true);
      };
      const handleMouseLeave = () => setIsActive(false);

      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, []);

    return (
      <CursorContext.Provider
        value={{ cursorPos, isActive, containerRef, cursorRef }}
      >
        <div ref={containerRef} {...props}>
          {children}
        </div>
      </CursorContext.Provider>
    );
  },
);
CursorProvider.displayName = 'CursorProvider';

interface CursorProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}

const Cursor = React.forwardRef<HTMLDivElement, CursorProps>(
  ({ children, className, style, ...props }, ref) => {
    const { cursorPos, isActive, containerRef, cursorRef } = useCursor();
    React.useImperativeHandle(ref, () => cursorRef.current as HTMLDivElement);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    React.useEffect(() => {
      const parentElement = containerRef.current?.parentElement;

      if (parentElement && isActive) parentElement.style.cursor = 'none';

      return () => {
        if (parentElement) parentElement.style.cursor = 'default';
      };
    }, [containerRef, cursorPos, isActive]);

    React.useEffect(() => {
      x.set(cursorPos.x);
      y.set(cursorPos.y);
    }, [cursorPos, x, y]);

    return (
      <AnimatePresence>
        {isActive && (
          <motion.div
            ref={cursorRef}
            className={cn(
              'transform-[translate(-50%,-50%)] pointer-events-none z-[9999] absolute',
              className,
            )}
            style={{ top: y, left: x, ...style }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            {...props}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);
Cursor.displayName = 'Cursor';

type Align =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right'
  | 'center';

interface CursorFollowProps extends HTMLMotionProps<'div'> {
  sideOffset?: number;
  align?: Align;
  transition?: SpringOptions;
  children: React.ReactNode;
}

const CursorFollow = React.forwardRef<HTMLDivElement, CursorFollowProps>(
  (
    {
      sideOffset = 15,
      align = 'bottom-right',
      children,
      className,
      style,
      transition = { stiffness: 500, damping: 50, bounce: 0 },
      ...props
    },
    ref,
  ) => {
    const { cursorPos, isActive, cursorRef } = useCursor();
    const cursorFollowRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(
      ref,
      () => cursorFollowRef.current as HTMLDivElement,
    );

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, transition);
    const springY = useSpring(y, transition);

    const calculateOffset = React.useCallback(() => {
      const rect = cursorFollowRef.current?.getBoundingClientRect();
      const width = rect?.width ?? 0;
      const height = rect?.height ?? 0;

      let newOffset;

      switch (align) {
        case 'center':
          newOffset = { x: width / 2, y: height / 2 };
          break;
        case 'top':
          newOffset = { x: width / 2, y: height + sideOffset };
          break;
        case 'top-left':
          newOffset = { x: width + sideOffset, y: height + sideOffset };
          break;
        case 'top-right':
          newOffset = { x: -sideOffset, y: height + sideOffset };
          break;
        case 'bottom':
          newOffset = { x: width / 2, y: -sideOffset };
          break;
        case 'bottom-left':
          newOffset = { x: width + sideOffset, y: -sideOffset };
          break;
        case 'bottom-right':
          newOffset = { x: -sideOffset, y: -sideOffset };
          break;
        case 'left':
          newOffset = { x: width + sideOffset, y: height / 2 };
          break;
        case 'right':
          newOffset = { x: -sideOffset, y: height / 2 };
          break;
        default:
          newOffset = { x: 0, y: 0 };
      }

      return newOffset;
    }, [align, sideOffset]);

    React.useEffect(() => {
      const offset = calculateOffset();
      const cursorRect = cursorRef.current?.getBoundingClientRect();
      const cursorWidth = cursorRect?.width ?? 20;
      const cursorHeight = cursorRect?.height ?? 20;

      x.set(cursorPos.x - offset.x + cursorWidth / 2);
      y.set(cursorPos.y - offset.y + cursorHeight / 2);
    }, [calculateOffset, cursorPos, cursorRef, x, y]);

    return (
      <AnimatePresence>
        {isActive && (
          <motion.div
            ref={cursorFollowRef}
            className={cn(
              'transform-[translate(-50%,-50%)] pointer-events-none z-[9998] absolute',
              className,
            )}
            style={{ top: springY, left: springX, ...style }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            {...props}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);
CursorFollow.displayName = 'CursorFollow';

export {
  CursorProvider,
  Cursor,
  CursorFollow,
  useCursor,
  type CursorContextType,
  type CursorProviderProps,
  type CursorProps,
  type CursorFollowProps,
};
