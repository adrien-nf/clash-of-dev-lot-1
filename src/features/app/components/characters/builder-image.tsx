import bg from "@/assets/characters/builder_bg.webp";
import char from "@/assets/characters/builder_char.webp";
import { motion } from "framer-motion";

export function BuilderImage() {
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
        alt="Builder, le constructeur avec un gros marteau. Il bâtit les sites comme pas deux."
        className="absolute h-4/5 bottom-4"
      />
    </div>
  );
}
