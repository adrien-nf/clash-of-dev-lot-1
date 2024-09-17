import { PropsWithChildren } from "react";

export type NameProps = PropsWithChildren;

export function Name({ children }: NameProps) {
  return (
    <div className="font-bold text-xs text-cod-dark uppercase">{children}</div>
  );
}
