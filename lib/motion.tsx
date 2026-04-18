'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { MOTION_VARIANTS } from '@/lib/design-system';

interface AnimatedProps extends MotionProps {
  children: ReactNode;
  variant?: keyof typeof MOTION_VARIANTS;
}

export function AnimatedSection({
  children,
  variant = 'fadeInUp',
  ...props
}: AnimatedProps) {
  const variantProps = MOTION_VARIANTS[variant];
  
  return (
    <motion.div
      {...variantProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedDiv({
  children,
  variant = 'fadeIn',
  ...props
}: AnimatedProps) {
  const variantProps = MOTION_VARIANTS[variant];
  
  return (
    <motion.div
      {...variantProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { motion };
