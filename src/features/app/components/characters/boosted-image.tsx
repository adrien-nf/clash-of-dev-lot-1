import bg from "@/assets/characters/boosted_bg.webp";
import char from "@/assets/characters/boosted_char.webp";
import wand from "@/assets/characters/boosted_wand.webp";

import { motion } from "framer-motion";

export function BoostedImage() {
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
        alt="Secret, la prêtre du cache-cache. Elle tient un grimoire et une baguette magique ornée d'une étoile."
        className="absolute h-2/3 bottom-[10%] right-[40%]"
      />
      <motion.img
        style={{ display: "block", margin: "0 auto" }}
        animate={{
          y: [0, 13, -4, 8, -6, 0],
          x: [-9, 4, 7, 2, -3, 5, -9],
          rotate: [-15, 15, -4, 8, -15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        draggable={false}
        src={wand}
        alt=""
        className="absolute h-[30%] bottom-[30%] right-[15%]"
      />
    </div>
  );
}
