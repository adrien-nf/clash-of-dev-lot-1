import { PropsWithChildren } from "react";

export type GraduationTitleProps = PropsWithChildren;

export function GraduationTitle({ children }: GraduationTitleProps) {
  return <div className="uppercase">{children}</div>;
}
