import { HeroIcon } from "./hero-icon";

export function Hero() {
  return (
    <p className="font-semibold text-6xl lg:text-[85px] text-center lg:text-left gap-4">
      Que le
      <HeroIcon className="inline-block relative align-middle mx-4 md:hidden" />
      <span className="hidden md:inline-block mx-3" />
      plus fort,{" "}
      <HeroIcon className="hidden relative align-middle mx-4 md:inline-block" />
      <div className="italic pt-3">l'emporte!</div>
    </p>
  );
}
