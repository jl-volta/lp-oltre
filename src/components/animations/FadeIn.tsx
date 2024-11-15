import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface FadeInProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  viewPort?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  direction,
  className = '',
  viewPort = false,
  ...props
}: FadeInProps) {
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up': return { y: 20 };
      case 'down': return { y: -20 };
      case 'left': return { x: 20 };
      case 'right': return { x: -20 };
      default: return {};
    }
  };

  const motionProps = {
    initial: { opacity: 0, ...getDirectionOffset() },
    ...(viewPort
      ? { whileInView: { opacity: 1, x: 0, y: 0 } }
      : { animate: { opacity: 1, x: 0, y: 0 } }),
    viewport: viewPort ? { once: true } : undefined,
    transition: { duration: 0.6, delay },
    ...props,
  };

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}