'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  cta?: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
  overlay?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  image,
  cta,
  ctaSecondary,
  overlay = true,
}: HeroProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden rounded-lg">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover w-full h-full"
        priority
      />

      {overlay && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {subtitle && (
            <motion.p
              className="text-white/80 font-sans text-sm md:text-base uppercase tracking-widest mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              className="font-sans text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {description}
            </motion.p>
          )}

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {cta && (
              <Link href={cta.href}>
                <Button variant="primary" size="lg" className="bg-white text-text-primary hover:bg-opacity-90">
                  {cta.text}
                </Button>
              </Link>
            )}
            {ctaSecondary && (
              <Link href={ctaSecondary.href}>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  {ctaSecondary.text}
                </Button>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
