import { Lina } from "@/features/app/components/tags";
import { KingCardImage } from "./king-card-image";
import { Chris } from "@/features/app/components/tags/chris";
import { Sometime } from "@/features/app/components/tags/sometime";
import { ClashOfDevIcon } from "../icons/clash-of-dev-icon";

export function KingCard() {
  return (
    <div className="relative">
      <Lina className="absolute bottom-32 -right-6" color="orange" />
      <Sometime className="absolute -left- bottom-9" color="pink" />
      <Chris className="absolute bottom-0 -right-4" color="blue" />
      <ClashOfDevIcon className="absolute size-20 right-2 top-3" />
      <KingCardImage />
    </div>
  );
}
