import { PropsWithChildren } from "react";
import { characterStyles } from "./character.styles";
import { Header } from "./header";
import { Body } from "./body";
import { CornerIcon } from "./corner-icon";

export type CharacterProps = PropsWithChildren & {
  color?: "purple" | "pink" | "green" | "blue" | "yellow" | "orange";
};

export function Character({ children, color = "purple" }: CharacterProps) {
  return <div className={characterStyles({ color })}>{children}</div>;
}

Character.Header = Header;
Character.Body = Body;
Character.CornerIcon = CornerIcon;
