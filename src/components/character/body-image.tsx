import { PropsWithChildren } from "react";
import { ImageTags } from "./image-tags";

export type BodyImageProps = PropsWithChildren;

export function BodyImage({ children }: BodyImageProps) {
  return (
    <div className="inline-flex items-start justify-center relative">
      {children}
    </div>
  );
}

BodyImage.Tags = ImageTags;
