'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import {
  motion,
  AnimatePresence,
  LayoutGroup,
  type Transition,
} from 'motion/react';

type Side = 'top' | 'bottom' | 'left' | 'right';
type Align = 'start' | 'center' | 'end';

interface TooltipData {
  content: React.ReactNode;
  rect: DOMRect;
  side: Side;
  sideOffset: number;
  align: Align;
  alignOffset: number;
  id: string;
}

interface GlobalTooltipContextType {
  showTooltip: (data: TooltipData) => void;
  hideTooltip: () => void;
  currentTooltip: TooltipData | null;
  transition: Transition;
  globalId: string;
}

const GlobalTooltipContext =
  React.createContext<GlobalTooltipContextType | null>(null);

const useGlobalTooltip = () => {
  const context = React.useContext(GlobalTooltipContext);
  if (!context) {
    throw new Error('useGlobalTooltip must be used within a TooltipProvider');
  }
  return context;
};

type TooltipPosition = {
  x: number;
  y: number;
  transform: string;
  initial: { x?: number; y?: number };
};

function getTooltipPosition({
  rect,
  side,
  sideOffset,
  align,
  alignOffset,
}: {
  rect: DOMRect;
  side: Side;
  sideOffset: number;
  align: Align;
  alignOffset: number;
}): TooltipPosition {
  switch (side) {
    case 'top':
      if (align === 'start') {
        return {
          x: rect.left + alignOffset,
          y: rect.top - sideOffset,
          transform: 'translate(0, -100%)',
          initial: { y: 15 },
        };
      } else if (align === 'end') {
        return {
          x: rect.right + alignOffset,
          y: rect.top - sideOffset,
          transform: 'translate(-100%, -100%)',
          initial: { y: 15 },
        };
      } else {
        // center
        return {
          x: rect.left + rect.width / 2,
          y: rect.top - sideOffset,
          transform: 'translate(-50%, -100%)',
          initial: { y: 15 },
        };
      }
    case 'bottom':
      if (align === 'start') {
        return {
          x: rect.left + alignOffset,
          y: rect.bottom + sideOffset,
          transform: 'translate(0, 0)',
          initial: { y: -15 },
        };
      } else if (align === 'end') {
        return {
          x: rect.right + alignOffset,
          y: rect.bottom + sideOffset,
          transform: 'translate(-100%, 0)',
          initial: { y: -15 },
        };
      } else {
        // center
        return {
          x: rect.left + rect.width / 2,
          y: rect.bottom + sideOffset,
          transform: 'translate(-50%, 0)',
          initial: { y: -15 },
        };
      }
    case 'left':
      if (align === 'start') {
        return {
          x: rect.left - sideOffset,
          y: rect.top + alignOffset,
          transform: 'translate(-100%, 0)',
          initial: { x: 15 },
        };
      } else if (align === 'end') {
        return {
          x: rect.left - sideOffset,
          y: rect.bottom + alignOffset,
          transform: 'translate(-100%, -100%)',
          initial: { x: 15 },
        };
      } else {
        // center
        return {
          x: rect.left - sideOffset,
          y: rect.top + rect.height / 2,
          transform: 'translate(-100%, -50%)',
          initial: { x: 15 },
        };
      }
    case 'right':
      if (align === 'start') {
        return {
          x: rect.right + sideOffset,
          y: rect.top + alignOffset,
          transform: 'translate(0, 0)',
          initial: { x: -15 },
        };
      } else if (align === 'end') {
        return {
          x: rect.right + sideOffset,
          y: rect.bottom + alignOffset,
          transform: 'translate(0, -100%)',
          initial: { x: -15 },
        };
      } else {
        // center
        return {
          x: rect.right + sideOffset,
          y: rect.top + rect.height / 2,
          transform: 'translate(0, -50%)',
          initial: { x: -15 },
        };
      }
  }
}

interface TooltipProviderProps {
  children: React.ReactNode;
  openDelay?: number;
  closeDelay?: number;
  transition?: Transition;
}

const TooltipProvider: React.FC<TooltipProviderProps> = ({
  children,
  openDelay = 700,
  closeDelay = 300,
  transition = { type: 'spring', stiffness: 300, damping: 25 },
}) => {
  const globalId = React.useId();
  const [currentTooltip, setCurrentTooltip] =
    React.useState<TooltipData | null>(null);
  const timeoutRef = React.useRef<number>(null);
  const lastCloseTimeRef = React.useRef<number>(0);

  const showTooltip = React.useCallback(
    (data: TooltipData) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (currentTooltip !== null) {
        setCurrentTooltip(data);
        return;
      }
      const now = Date.now();
      const delay = now - lastCloseTimeRef.current < closeDelay ? 0 : openDelay;
      timeoutRef.current = window.setTimeout(
        () => setCurrentTooltip(data),
        delay,
      );
    },
    [openDelay, closeDelay, currentTooltip],
  );

  const hideTooltip = React.useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setCurrentTooltip(null);
      lastCloseTimeRef.current = Date.now();
    }, closeDelay);
  }, [closeDelay]);

  const hideImmediate = React.useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCurrentTooltip(null);
    lastCloseTimeRef.current = Date.now();
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', hideImmediate, true);
    return () => window.removeEventListener('scroll', hideImmediate, true);
  }, [hideImmediate]);

  return (
    <GlobalTooltipContext.Provider
      value={{
        showTooltip,
        hideTooltip,
        currentTooltip,
        transition,
        globalId,
      }}
    >
      <LayoutGroup>{children}</LayoutGroup>
      <TooltipOverlay />
    </GlobalTooltipContext.Provider>
  );
};

type TooltipPortalProps = {
  children: React.ReactNode;
};

const TooltipPortal: React.FC<TooltipPortalProps> = ({ children }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => setIsMounted(true), []);
  return isMounted ? createPortal(children, document.body) : null;
};

const TooltipOverlay: React.FC = () => {
  const { currentTooltip, transition, globalId } = useGlobalTooltip();

  const position = React.useMemo(() => {
    if (!currentTooltip) return null;
    return getTooltipPosition({
      rect: currentTooltip.rect,
      side: currentTooltip.side,
      sideOffset: currentTooltip.sideOffset,
      align: currentTooltip.align,
      alignOffset: currentTooltip.alignOffset,
    });
  }, [currentTooltip]);

  return (
    <AnimatePresence>
      {currentTooltip && currentTooltip.content && position && (
        <TooltipPortal>
          <motion.div
            className="fixed z-50"
            style={{
              top: position.y,
              left: position.x,
              transform: position.transform,
            }}
          >
            <motion.div
              layoutId={`tooltip-overlay-${globalId}`}
              initial={{ opacity: 0, scale: 0, ...position.initial }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0, ...position.initial }}
              transition={transition}
              className="relative overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md"
            >
              {currentTooltip.content}
            </motion.div>
          </motion.div>
        </TooltipPortal>
      )}
    </AnimatePresence>
  );
};

interface TooltipContextType {
  content: React.ReactNode;
  setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  side: Side;
  sideOffset: number;
  align: Align;
  alignOffset: number;
  id: string;
}

const TooltipContext = React.createContext<TooltipContextType | null>(null);

const useTooltip = () => {
  const context = React.useContext(TooltipContext);
  if (!context) {
    throw new Error('useTooltip must be used within a TooltipProvider');
  }
  return context;
};

interface TooltipProps {
  children: React.ReactNode;
  side?: Side;
  sideOffset?: number;
  align?: Align;
  alignOffset?: number;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  side = 'top',
  sideOffset = 4,
  align = 'center',
  alignOffset = 0,
}) => {
  const id = React.useId();
  const [content, setContent] = React.useState<React.ReactNode>(null);

  return (
    <TooltipContext.Provider
      value={{ content, setContent, side, sideOffset, align, alignOffset, id }}
    >
      {children}
    </TooltipContext.Provider>
  );
};

interface TooltipContentProps {
  children: React.ReactNode;
}

const TooltipContent: React.FC<TooltipContentProps> = ({ children }) => {
  const { setContent } = useTooltip();
  React.useEffect(() => setContent(children), [children, setContent]);
  return null;
};

interface TooltipTriggerProps {
  children: React.ReactElement;
}

const TooltipTrigger: React.FC<TooltipTriggerProps> = ({ children }) => {
  const { content, side, sideOffset, align, alignOffset, id } = useTooltip();
  const { showTooltip, hideTooltip, currentTooltip } = useGlobalTooltip();
  const triggerRef = React.useRef<HTMLElement>(null);

  const handleOpen = React.useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    showTooltip({
      content,
      rect,
      side,
      sideOffset,
      align,
      alignOffset,
      id,
    });
  }, [showTooltip, content, side, sideOffset, align, alignOffset, id]);

  const handleMouseEnter = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      (children.props as React.HTMLAttributes<HTMLElement>)?.onMouseEnter?.(e);
      handleOpen();
    },
    [handleOpen, children.props],
  );

  const handleMouseLeave = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      (children.props as React.HTMLAttributes<HTMLElement>)?.onMouseLeave?.(e);
      hideTooltip();
    },
    [hideTooltip, children.props],
  );

  const handleFocus = React.useCallback(
    (e: React.FocusEvent<HTMLElement>) => {
      (children.props as React.HTMLAttributes<HTMLElement>)?.onFocus?.(e);
      handleOpen();
    },
    [handleOpen, children.props],
  );

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<HTMLElement>) => {
      (children.props as React.HTMLAttributes<HTMLElement>)?.onBlur?.(e);
      hideTooltip();
    },
    [hideTooltip, children.props],
  );

  return React.cloneElement(children, {
    ref: triggerRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    'data-state': currentTooltip?.id === id ? 'open' : 'closed',
    'data-side': side,
    'data-align': align,
  } as React.HTMLAttributes<HTMLElement>);
};

export {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  useGlobalTooltip,
  useTooltip,
  type TooltipProviderProps,
  type TooltipProps,
  type TooltipContentProps,
  type TooltipTriggerProps,
};
