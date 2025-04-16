'use client';

import * as React from 'react';
import {
  useSpring,
  useTransform,
  motion,
  useInView,
  type MotionValue,
  type SpringOptions,
  type UseInViewOptions,
} from 'motion/react';
import useMeasure from 'react-use-measure';

import { cn } from '@/lib/utils';

interface NumberProps {
  prevValue: number;
  value: number;
  place: number;
  transition: SpringOptions;
}

const NumberRoller = ({ prevValue, value, place, transition }: NumberProps) => {
  const startNumber = Math.floor(prevValue / place) % 10;
  const targetNumber = Math.floor(value / place) % 10;
  const animatedValue = useSpring(startNumber, transition);

  React.useEffect(() => {
    animatedValue.set(targetNumber);
  }, [targetNumber, animatedValue]);

  const [measureRef, { height }] = useMeasure();

  return (
    <div
      ref={measureRef}
      className="relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums"
    >
      <div className="invisible">0</div>
      {Array.from({ length: 10 }, (_, i) => (
        <NumberDisplay
          key={i}
          motionValue={animatedValue}
          number={i}
          height={height}
          transition={transition}
        />
      ))}
    </div>
  );
};

interface NumberDisplayProps {
  motionValue: MotionValue<number>;
  number: number;
  height: number;
  transition: SpringOptions;
}

const NumberDisplay = ({
  motionValue,
  number,
  height,
  transition,
}: NumberDisplayProps) => {
  const y = useTransform(motionValue, (latest) => {
    if (!height) return 0;
    const currentNumber = latest % 10;
    const offset = (10 + number - currentNumber) % 10;
    let translateY = offset * height;
    if (offset > 5) translateY -= 10 * height;
    return translateY;
  });

  if (!height) {
    return <span className="invisible absolute">{number}</span>;
  }

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
      transition={{ ...transition, type: 'spring' }}
    >
      {number}
    </motion.span>
  );
};

interface SlidingNumberProps extends React.HTMLAttributes<HTMLSpanElement> {
  number: number | string;
  inView?: boolean;
  inViewMargin?: UseInViewOptions['margin'];
  inViewOnce?: boolean;
  padStart?: boolean;
  decimalSeparator?: string;
  transition?: SpringOptions;
}

const SlidingNumber = React.forwardRef<HTMLSpanElement, SlidingNumberProps>(
  (
    {
      number,
      className,
      inView = false,
      inViewMargin = '0px',
      inViewOnce = true,
      padStart = false,
      decimalSeparator = '.',
      transition = {
        stiffness: 200,
        damping: 20,
        mass: 0.4,
      },
      ...props
    },
    ref,
  ) => {
    const localRef = React.useRef<HTMLSpanElement>(null);
    React.useImperativeHandle(ref, () => localRef.current!);

    const inViewResult = useInView(localRef, {
      once: inViewOnce,
      margin: inViewMargin,
    });
    const isInView = !inView || inViewResult;

    const prevNumberRef = React.useRef<number>(0);

    const effectiveNumber = React.useMemo(
      () => (!isInView ? 0 : Math.abs(Number(number))),
      [number, isInView],
    );

    const numberStr = effectiveNumber.toString();
    let [newIntStr] = numberStr.split('.');
    const [, newDecStr] = numberStr.split('.');
    newIntStr =
      padStart && newIntStr.length === 1 ? '0' + newIntStr : newIntStr;

    const prevStr = prevNumberRef.current.toString();
    let [prevIntStr = ''] = prevStr.split('.');
    const [, prevDecStr = ''] = prevStr.split('.');
    prevIntStr =
      padStart && prevIntStr.length === 1 ? '0' + prevIntStr : prevIntStr;

    const adjustedPrevInt = React.useMemo(() => {
      return prevIntStr.length > newIntStr.length
        ? prevIntStr.slice(-newIntStr.length)
        : prevIntStr.padStart(newIntStr.length, '0');
    }, [prevIntStr, newIntStr]);

    const adjustedPrevDec = React.useMemo(() => {
      if (!newDecStr) return '';
      return prevDecStr.length > newDecStr.length
        ? prevDecStr.slice(0, newDecStr.length)
        : prevDecStr.padEnd(newDecStr.length, '0');
    }, [prevDecStr, newDecStr]);

    React.useEffect(() => {
      if (isInView) prevNumberRef.current = effectiveNumber;
    }, [effectiveNumber, isInView]);

    const intDigitCount = newIntStr.length;
    const intPlaces = React.useMemo(
      () =>
        Array.from({ length: intDigitCount }, (_, i) =>
          Math.pow(10, intDigitCount - i - 1),
        ),
      [intDigitCount],
    );
    const decPlaces = React.useMemo(
      () =>
        newDecStr
          ? Array.from({ length: newDecStr.length }, (_, i) =>
              Math.pow(10, newDecStr.length - i - 1),
            )
          : [],
      [newDecStr],
    );

    const newDecValue = newDecStr ? parseInt(newDecStr, 10) : 0;
    const prevDecValue = adjustedPrevDec ? parseInt(adjustedPrevDec, 10) : 0;

    return (
      <span
        ref={localRef}
        className={cn('flex items-center', className)}
        {...props}
      >
        {isInView && Number(number) < 0 && <span className="mr-1">-</span>}

        {intPlaces.map((place) => (
          <NumberRoller
            key={`int-${place}`}
            prevValue={parseInt(adjustedPrevInt, 10)}
            value={parseInt(newIntStr, 10)}
            place={place}
            transition={transition}
          />
        ))}

        {newDecStr && (
          <>
            <span>{decimalSeparator}</span>
            {decPlaces.map((place) => (
              <NumberRoller
                key={`dec-${place}`}
                prevValue={prevDecValue}
                value={newDecValue}
                place={place}
                transition={transition}
              />
            ))}
          </>
        )}
      </span>
    );
  },
);

SlidingNumber.displayName = 'SlidingNumber';

export { SlidingNumber, type SlidingNumberProps };
