import { Character } from "@/components/character";
import image from "@/assets/characters/builder.png";
import { BracketsIcon } from "@/components/icons";

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
          <Character.Header.Tags.Item side="top-left">
            @Chris
          </Character.Header.Tags.Item>
        </Character.Header.Tags>
      </Character.Header>
      <Character.Body>
        <Character.Body.Image src={image} />
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
          <Character.CornerIcon>
            <BracketsIcon />
          </Character.CornerIcon>
        </Character.Body.Description>
      </Character.Body>
    </Character>
  );
}
