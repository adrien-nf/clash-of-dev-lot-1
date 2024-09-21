import { motion, MotionValue } from "framer-motion";

export type BarProps = {
  scale: MotionValue<number>;
};

export function Bar({ scale }: BarProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-cod-dark origin-[0%]"
      style={{ scaleX: scale }}
    />
  );
}
