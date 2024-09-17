import { PropsWithChildren } from "react";

export type GraduationScoreProps = PropsWithChildren;

export function GraduationScore({ children }: GraduationScoreProps) {
  return <div>{children}</div>;
}
