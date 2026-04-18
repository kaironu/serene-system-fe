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
  showContent?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  image,
  cta,
  ctaSecondary,
  overlay = true,
  showContent = true,
}: HeroProps) {
  return (
    <div className="relative w-full h-[72vh] md:h-[82vh] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover w-full h-full"
        priority
        sizes="100vw"
      />

      {overlay && (
        <div className="absolute inset-0 bg-black/35" />
      )}

      {showContent && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl drop-shadow-lg"
          >
            {subtitle && (
              <motion.p
                className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] mb-4 text-white/85"
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}

            <motion.h1
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 drop-shadow-2xl"
              style={{
                textShadow: '0 8px 22px rgba(0, 0, 0, 0.55), 0 2px 10px rgba(0, 0, 0, 0.45)'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                className="font-sans text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg"
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)' }}
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
                  <Button variant="primary" size="lg" className="bg-white text-text-primary hover:bg-white/90">
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
      )}
    </div>
  );
}
