import { PropsWithChildren } from "react";

export type NameProps = PropsWithChildren;

export function Name({ children }: NameProps) {
  return (
    <h2 className="font-bold text-xs text-cod-dark uppercase">{children}</h2>
  );
}
