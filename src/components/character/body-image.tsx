import { ImgHTMLAttributes } from "react";

export type BodyImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function BodyImage({ src, alt, children }: BodyImageProps) {
  return (
    <div className="inline-flex items-start justify-center relative">
      <img
        src={src}
        alt={alt}
        className="object-contain max-w-full max-h-full"
      />

      <div className="absolute flex flex-col right-0 top-0 translate-x-12 -translate-y-8 sm:hidden">
        {children}
      </div>
    </div>
  );
}
