import { Character } from "@/components/character";
import { SwitchIcon } from "@/components/icons";
import { Lina } from "../tags";
import { Chris } from "../tags/chris";
import { SecretsImage } from "./secrets-image";

export function Secrets() {
  return (
    <Character color="yellow">
      <Character.Header>
        <Character.Header.Graduation>
          <Character.Header.Graduation.Title>
            Easter Egg
          </Character.Header.Graduation.Title>
          <Character.Header.Graduation.Score>
            /3 pts
          </Character.Header.Graduation.Score>
        </Character.Header.Graduation>
        <Character.Header.Name>Le Maître des Secrets</Character.Header.Name>
        <Character.Header.Tags>
          <Lina />
          <Chris />
        </Character.Header.Tags>
      </Character.Header>
      <Character.Body>
        <Character.Body.Image>
          <SecretsImage />

          <Character.Body.Image.Tags>
            <Lina />
            <Chris />
          </Character.Body.Image.Tags>
        </Character.Body.Image>
        <Character.Body.Description>
          <p>
            Derrière une ligne de code bien choisie se cache un{" "}
            <span className="font-semibold">secret bien gardé</span>. Il glisse
            la surprise qui surprendra les utilisateurs les plus curieux.
          </p>
          <p>
            Dev attentif aux comportements utilisateurs il saura cacher l'
            <span className="font-semibold">Easter Egg</span> au meilleur
            endroit.
          </p>
          <Character.Body.CornerIcon>
            <SwitchIcon />
          </Character.Body.CornerIcon>
        </Character.Body.Description>
      </Character.Body>
    </Character>
  );
}
