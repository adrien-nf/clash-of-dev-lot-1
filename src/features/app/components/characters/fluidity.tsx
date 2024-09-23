import { Character } from "@/components/character";
import { AsterixIcon } from "@/components/icons";
import { Lina } from "../tags";
import { Chris } from "../tags/chris";
import { FluidityImage } from "./fluidity-image";

export function Fluidity() {
  return (
    <Character color="green">
      <Character.Header>
        <Character.Header.Graduation>
          <Character.Header.Graduation.Title>
            Motion
          </Character.Header.Graduation.Title>
          <Character.Header.Graduation.Score>
            /3 pts
          </Character.Header.Graduation.Score>
        </Character.Header.Graduation>
        <Character.Header.Name>Le Maître de la Fluidité</Character.Header.Name>
        <Character.Header.Tags>
          <Lina />
          <Chris />
        </Character.Header.Tags>
      </Character.Header>
      <Character.Body>
        <Character.Body.Image>
          <FluidityImage />

          <Character.Body.Image.Tags>
            <Lina />
            <Chris />
          </Character.Body.Image.Tags>
        </Character.Body.Image>
        <Character.Body.Description>
          <p>
            Aucun composant ne s'affiche sans une{" "}
            <span className="font-semibold">animation soignée</span>. Ses
            transitions sont légères, dynamiques et fluides, captivant
            l'utilisateur à chaque interaction.
          </p>

          <p>
            Ce dev a l'oeil et maitrise{" "}
            <span className="font-semibold">le motion</span> mieux que n'importe
            qui.
          </p>
          <Character.Body.CornerIcon>
            <AsterixIcon />
          </Character.Body.CornerIcon>
        </Character.Body.Description>
      </Character.Body>
    </Character>
  );
}
