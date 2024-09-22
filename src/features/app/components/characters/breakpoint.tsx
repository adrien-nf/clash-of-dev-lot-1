import { Character } from "@/components/character";
import { LightningIcon } from "@/components/icons";
import { Lina } from "../tags";
import { Chris } from "../tags/chris";
import image from "@/assets/characters/breakpoint.webp";

export function Breakpoint() {
  return (
    <Character color="blue">
      <Character.Header>
        <Character.Header.Graduation>
          <Character.Header.Graduation.Title>
            Responsive
          </Character.Header.Graduation.Title>
          <Character.Header.Graduation.Score>
            /2 pts
          </Character.Header.Graduation.Score>
        </Character.Header.Graduation>
        <Character.Header.Name>
          Le chercheur de Breakpoint
        </Character.Header.Name>
        <Character.Header.Tags>
          <Lina />
          <Chris />
        </Character.Header.Tags>
      </Character.Header>
      <Character.Body>
        <Character.Body.Image src={image}>
          <Lina />
          <Chris />
        </Character.Body.Image>
        <Character.Body.Description>
          <p>
            Quelle que soit la taille de l'écran, il garantit une expérience
            utilisateur sans faille. Chaque site{" "}
            <span className="font-semibold">s'adapte à tous les supports</span>,
            du mobile au grand écran.
          </p>
          <p>
            Il fait attention à{" "}
            <span className="font-semibold">chaque breakpoint</span>{" "}
            attentivement, on ne pourra pas le reprendre à l'inspection!
          </p>
          <Character.Body.CornerIcon>
            <LightningIcon />
          </Character.Body.CornerIcon>
        </Character.Body.Description>
      </Character.Body>
    </Character>
  );
}
