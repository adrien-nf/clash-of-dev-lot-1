import bg from "@/assets/characters/breakpoint_bg.webp";
import char from "@/assets/characters/breakpoint_char.webp";
import { motion } from "framer-motion";

export function BreakpointImage() {
  return (
    <div className="inline-flex items-start justify-center overflow-hidden relative">
      <img
        src={bg}
        alt=""
        className="object-contain max-w-full max-h-full w-full md:w-10/12"
        draggable={false}
      />
      <motion.img
        style={{ display: "block", margin: "0 auto" }}
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        draggable={false}
        src={char}
        alt="Breakpoint, la magicienne des écrans. Elle tient une loupe, a des grosses lunettes, et une sacoche."
        className="absolute h-4/5 bottom-[12%]"
      />
    </div>
  );
}
