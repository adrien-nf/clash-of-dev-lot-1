import { HeroIcon } from "./hero-icon";

export function Hero() {
  return (
    <p className="font-semibold text-6xl text-center">
      Que le
      <HeroIcon className="inline-block relative align-middle mx-4" />
      plus fort, <span className="italic">l'emporte!</span>
    </p>
  );
}
