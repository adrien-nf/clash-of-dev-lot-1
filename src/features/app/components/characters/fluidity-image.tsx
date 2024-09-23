import bg from "@/assets/characters/fluidity_bg.webp";
import char from "@/assets/characters/fluidity_char.webp";
import { motion } from "framer-motion";

export function FluidityImage() {
  return (
    <div className="inline-flex items-start justify-center overflow-hidden relative">
      <img
        src={bg}
        alt=""
        className="object-contain max-w-full max-h-full w-full md:w-10/12"
        draggable={false}
      />
      <motion.img
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        whileInView={{
          y: [0, -10, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        draggable={false}
        src={char}
        alt="Fluidity, une petite fée tenue par un fil."
        className="absolute h-2/3"
      />
    </div>
  );
}
