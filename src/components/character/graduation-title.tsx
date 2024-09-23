import { PropsWithChildren } from "react";

export type GraduationTitleProps = PropsWithChildren;

export function GraduationTitle({ children }: GraduationTitleProps) {
  return <span className="uppercase">{children}</span>;
}
