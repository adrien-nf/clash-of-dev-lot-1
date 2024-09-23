import { Character } from "@/components/character";
import { BracketsIcon } from "@/components/icons";
import { Chris } from "../tags/chris";
import { BuilderImage } from "./builder-image";

export function Builder() {
  return (
    <Character color="pink">
      <Character.Header>
        <Character.Header.Graduation>
          <Character.Header.Graduation.Title>
            Code
          </Character.Header.Graduation.Title>
          <Character.Header.Graduation.Score>
            /6 pts
          </Character.Header.Graduation.Score>
        </Character.Header.Graduation>
        <Character.Header.Name>Le bâtisseur de code</Character.Header.Name>
        <Character.Header.Tags>
          <Chris />
        </Character.Header.Tags>
      </Character.Header>
      <Character.Body>
        <Character.Body.Image>
          <BuilderImage />

          <Character.Body.Image.Tags>
            <Chris />
          </Character.Body.Image.Tags>
        </Character.Body.Image>
        <Character.Body.Description>
          <p>
            Ses lignes de code sont des fondations solides. C'est un{" "}
            <span className="font-semibold">maître du front</span>, capable de
            structurer les systèmes les plus complexes sans se casser la tête.
          </p>

          <p>
            <span className="font-semibold">Maitre de VSCode</span>, il a
            surement fini le challenge en s'assurant d'avoir le code le plus
            clair et le plus propre des 36 participants.
          </p>
          <Character.Body.CornerIcon>
            <BracketsIcon />
          </Character.Body.CornerIcon>
        </Character.Body.Description>
      </Character.Body>
    </Character>
  );
}
