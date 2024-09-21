import { ImgHTMLAttributes } from "react";
import { Lina } from "@/features/app/components/tags";
import { Chris } from "@/features/app/components/tags/chris";

export type BodyImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function BodyImage({ src, alt }: BodyImageProps) {
  return (
    <div className="inline-flex items-start justify-center relative">
      <img
        src={src}
        alt={alt}
        className="object-contain max-w-full max-h-full"
      />

      <div className="absolute flex flex-col right-0 top-0 -translate-y-8">
        <Lina />
        <Chris />
      </div>
    </div>
  );
}
