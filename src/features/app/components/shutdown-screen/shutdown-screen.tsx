import { useCallback, useEffect, useState } from "react";
import { isKonamiCode } from "./is-konami-code";
import { twMerge } from "tailwind-merge";
import { AnimatedText } from "./animated-text";
import { SecretsImage } from "../characters/secrets-image";

export type ShutdownScreenProps = {
  setIsOn: (value: boolean) => void;
  setHasEasterEggBeenSolved: (value: boolean) => void;
};

export function ShutdownScreen({
  setIsOn,
  setHasEasterEggBeenSolved,
}: ShutdownScreenProps) {
  const [count, setCount] = useState(0);
  const [keys, setKeys] = useState<string[]>([]);
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);

  const wrong = useCallback(() => {
    setKeys([]);
    setCount((v) => v + 1);
  }, [setKeys, setCount]);

  const right = useCallback(() => {
    setIsCodeCorrect(true);

    setTimeout(() => {
      setIsOn(true);
      setHasEasterEggBeenSolved(true);
    }, 10000);
  }, [setIsCodeCorrect, setIsOn, setHasEasterEggBeenSolved]);

  const handleKeyPressed = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();

      if (isCodeCorrect) return;

      if (keys.length >= 11) return wrong();

      setKeys((previous) => [...previous, event.key]);

      if (event.key === "Escape") return wrong();
    },
    [keys, setKeys, wrong, isCodeCorrect]
  );

  useEffect(() => {
    if (isKonamiCode(keys)) {
      right();
    } else if (keys.includes("Enter")) {
      wrong();
    }
  }, [keys, setKeys, right, wrong]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPressed);

    return () => {
      window.removeEventListener("keydown", handleKeyPressed);
    };
  }, [handleKeyPressed]);

  return (
    <div className="w-screen h-screen fixed z-30 bg-cod-dark animate-turn-off">
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        {keys.length === 0 && !isCodeCorrect && (
          <div className="flex flex-col gap-2 text-center">
            <SecretsImage />
            <AnimatedText
              className="text-cod-white"
              text={[
                "Tu viens d'éteindre le site! Il va falloir le rallumer maintenant...",
                "Pour ça, tu dois rentrer le code secret.",
                "Tu te souviens du code, pas vrai?",
                "C'est le code le plus connu des jeux vidéos!",
                "(Entre ton code et appuie sur Entrée!)",
              ]}
            />
          </div>
        )}

        {keys.length > 0 && !isCodeCorrect && (
          <div className="flex flex-row gap-4">
            {keys.map((item, index) => (
              <kbd
                key={`${item}-${index}`}
                className={twMerge(
                  "animate-shake px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border-2 border-gray-200 rounded-lg",
                  isCodeCorrect &&
                    "bg-green-light border-green-main text-green-dark"
                )}
              >
                {item}
              </kbd>
            ))}
          </div>
        )}

        {count > 2 && !isCodeCorrect && (
          <span className="text-white italic">
            ...Pssttt, essaie le Konami Code.
          </span>
        )}

        {count > 4 && !isCodeCorrect && (
          <span className="text-white italic">
            Haut, Haut, Bas, Bas, Gauche, Droite, Gauche, Droite, B, A, Entrée!
          </span>
        )}

        {isCodeCorrect && (
          <div className="flex flex-col gap-2 text-center">
            <SecretsImage />
            <AnimatedText
              className="text-cod-white"
              text={[
                "Tu as réussi! En route pour remporter le Clash of Dev.",
                "Je te donne accès au bouton Enter Next Level.",
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
}
