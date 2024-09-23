import bg from "@/assets/characters/artist_bg.webp";
import char from "@/assets/characters/artist_char.webp";
import { motion } from "framer-motion";

export function ArtistImage() {
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
        alt="Artist, l'artiste de talent. Il tient un pinceau."
        className="absolute h-2/3 self-center"
      />
    </div>
  );
}
