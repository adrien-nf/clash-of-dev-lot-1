import { PropsWithChildren } from "react";
import { GraduationTitle } from "./graduation-title";
import { GraduationScore } from "./graduation-score";

export type GraduationProps = PropsWithChildren;

export function Graduation({ children }: GraduationProps) {
  return (
    <section className="font-semibold text-xs text-cod-dark text-opacity-80 gap-1 flex flex-col">
      {children}
    </section>
  );
}

Graduation.Title = GraduationTitle;
Graduation.Score = GraduationScore;
