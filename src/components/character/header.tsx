import { PropsWithChildren } from "react";
import { Graduation } from "./graduation";
import { Name } from "./name";
import { Tags } from "./tags";

export type HeaderProps = PropsWithChildren;

export function Header({ children }: HeaderProps) {
  return (
    <div className="flex flex-row gap-x-10 gap-y-4 flex-wrap">{children}</div>
  );
}

Header.Graduation = Graduation;
Header.Name = Name;
Header.Tags = Tags;
