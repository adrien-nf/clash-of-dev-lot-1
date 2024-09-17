import { PropsWithChildren } from "react";
import { BodyImage } from "./body-image";
import { BodyDescription } from "./body-description";

export type BodyProps = PropsWithChildren;

export function Body({ children }: BodyProps) {
  return (
    <div className="flex flex-row gap-x-5 gap-y-8 flex-wrap">{children}</div>
  );
}

Body.Image = BodyImage;
Body.Description = BodyDescription;
