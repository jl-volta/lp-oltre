import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface ScaleInProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  viewPort?: boolean;
}

export default function ScaleIn({
  children,
  delay = 0,
  className = '',
  viewPort = false,
  ...props
}: ScaleInProps) {
  const motionProps = {
    initial: { opacity: 0, scale: 0.8 },
    ...(viewPort
      ? { whileInView: { opacity: 1, scale: 1 } }
      : { animate: { opacity: 1, scale: 1 } }),
    viewport: viewPort ? { once: true } : undefined,
    transition: { duration: 0.5, delay },
    ...props,
  };

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}