import { PropsWithChildren } from "react";
import { BodyImage } from "./body-image";
import { BodyDescription } from "./body-description";
import { CornerIcon } from "./corner-icon";

export type BodyProps = PropsWithChildren;

export function Body({ children }: BodyProps) {
  return (
    <section className="flex flex-col md:flex-row gap-x-5 gap-y-8 h-full">
      {children}
    </section>
  );
}

Body.Image = BodyImage;
Body.Description = BodyDescription;
Body.CornerIcon = CornerIcon;
