import bg from "@/assets/characters/secrets_bg.webp";
import char from "@/assets/characters/secrets_char.webp";
import shadow from "@/assets/characters/secrets_shadow.webp";
import { motion } from "framer-motion";

export function SecretsImage() {
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
        className="absolute h-2/3 bottom-[15%]"
      />
      <motion.img
        style={{ display: "block", margin: "0 auto" }}
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        draggable={false}
        src={shadow}
        alt=""
        className="absolute h-[10%] -bottom-2"
      />
    </div>
  );
}
