import { Character } from "@/components/character";
import { SmileyIcon } from "@/components/icons";
import { Lina } from "../tags";
import { Chris } from "../tags/chris";
import image from "@/assets/characters/boosted.png";

export function Boosted() {
  return (
    <Character color="orange">
      <Character.Header>
        <Character.Header.Graduation>
          <Character.Header.Graduation.Title>
            Big Boss
          </Character.Header.Graduation.Title>
          <Character.Header.Graduation.Score>
            /Infinite pts
          </Character.Header.Graduation.Score>
        </Character.Header.Graduation>
        <Character.Header.Name>Le sur-boosted</Character.Header.Name>
        <Character.Header.Tags>
          <Lina />
          <Chris />
        </Character.Header.Tags>
      </Character.Header>
      <Character.Body>
        <Character.Body.Image src={image} />
        <Character.Body.Description>
          <p>
            Il excelle dans tous les domaines, alliant design, propreté de code,
            réactivité, animations fluides et créativité cachée.{" "}
            <span className="font-semibold">Un vrai prodige</span>
            qui a su briller dans chaque aspect du développement.
          </p>
          <p>
            Ce dev aux <span className="font-semibold">multitalents</span> a
            reçu la standing ovation du jury.
          </p>
          <Character.Body.CornerIcon>
            <SmileyIcon />
          </Character.Body.CornerIcon>
        </Character.Body.Description>
      </Character.Body>
    </Character>
  );
}
