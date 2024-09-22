import { PropsWithChildren } from "react";
import { characterStyles } from "./character.styles";
import { Header } from "./header";
import { Body } from "./body";

export type CharacterProps = PropsWithChildren & {
  color?: "purple" | "pink" | "green" | "blue" | "yellow" | "orange";
};

export function Character({ children, color = "purple" }: CharacterProps) {
  return <article className={characterStyles({ color })}>{children}</article>;
}

Character.Header = Header;
Character.Body = Body;
