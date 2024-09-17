import { Character } from "@/components/character";
import image from "@/assets/characters/artist.png";
import { PointerIcon } from "@/components/icons";

export function Artist() {
  return (
    <Character color="purple">
      <Character.Header>
        <Character.Header.Graduation>
          <Character.Header.Graduation.Title>
            Design
          </Character.Header.Graduation.Title>
          <Character.Header.Graduation.Score>
            /6 pts
          </Character.Header.Graduation.Score>
        </Character.Header.Graduation>
        <Character.Header.Name>L'artiste de renom</Character.Header.Name>
        <Character.Header.Tags>
          <Character.Header.Tags.Item side="top-left">
            @maislina
          </Character.Header.Tags.Item>
          <Character.Header.Tags.Item side="top-left">
            @sometime.crea
          </Character.Header.Tags.Item>
          <Character.Header.Tags.Item side="top-left">
            @chris
          </Character.Header.Tags.Item>
        </Character.Header.Tags>
      </Character.Header>
      <Character.Body>
        <Character.Body.Image src={image} />
        <Character.Body.Description>
          <p>
            <span className="font-semibold">Le design</span>, c'est son terrain
            de jeu. Il maîtrise et retranscrit correctement chaque pixel de la
            maquette.
          </p>

          <p>
            Virtuose des couleurs il ne se trompe jamais de code HEX, de spacing
            ou de border-radius;&nbsp;
            <span className="font-semibold">
              Figma n'a aucun secret pour ce Dev de talent.
            </span>
          </p>
          <Character.CornerIcon>
            <PointerIcon />
          </Character.CornerIcon>
        </Character.Body.Description>
      </Character.Body>
    </Character>
  );
}
