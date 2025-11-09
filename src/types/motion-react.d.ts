declare module 'motion/react' {
  // Very small shim for the motion/react package used across the codebase.
  // We export any for everything to avoid type errors until proper types are added.
  export const motion: any;
  export const AnimatePresence: any;
  export const useScroll: any;
  export const useTransform: any;
  export const useInView: any;
  export const useMotionValue: any;
  export const useSpring: any;
  export const useMotionValueEvent: any;
  export default motion;
}
