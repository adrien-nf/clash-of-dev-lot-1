import { ImgHTMLAttributes } from "react";

export type BodyImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function BodyImage({ src, alt }: BodyImageProps) {
  return (
    <div className="relative min-w-full md:min-w-80" style={{ flex: 1 }}>
      <img src={src} alt={alt} />
    </div>
  );
}
