import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, ReactNode } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ParallaxHeroProps {
  backgroundImage: string;
  midgroundImage?: string;
  children: ReactNode;
  height?: string;
  overlay?: boolean;
}

export function ParallaxHero({
  backgroundImage,
  midgroundImage,
  children,
  height = 'min-h-[600px]',
  overlay = true,
}: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const midgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5]);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      {/* Background Layer */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <ImageWithFallback
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Midground Layer (optional) */}
      {midgroundImage && (
        <motion.div
          className="absolute inset-0 z-10"
          style={{ y: midgroundY, opacity: 0.7 }}
        >
          <ImageWithFallback
            src={midgroundImage}
            alt="Hero midground"
            className="w-full h-[115%] object-cover"
          />
        </motion.div>
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/50 z-20" />
      )}

      {/* Content Layer */}
      <motion.div
        className="relative z-30 h-full flex items-center justify-center"
        style={{ y: contentY, opacity }}
      >
        {children}
      </motion.div>
    </div>
  );
}
