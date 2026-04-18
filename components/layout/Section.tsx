'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  fullWidth?: boolean;
  className?: string;
}

export default function Section({
  children,
  title,
  subtitle,
  fullWidth = false,
  className,
}: SectionProps) {
  return (
    <motion.section
      className={cn(
        'py-16 md:py-24 lg:py-32',
        !fullWidth && 'max-w-7xl mx-auto px-4',
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {(title || subtitle) && (
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {subtitle && (
            <p className="font-sans text-xs md:text-sm uppercase tracking-widest text-text-tertiary mb-4">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary">
              {title}
            </h2>
          )}
        </motion.div>
      )}

      {children}
    </motion.section>
  );
}
