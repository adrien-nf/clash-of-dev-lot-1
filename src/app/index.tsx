import {
  Artist,
  Builder,
  Boosted,
  Breakpoint,
  Fluidity,
  Secrets,
} from "@/features/app/components/characters";
import { Title } from "@/features/app/components/title";

export const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden overflow-y-scroll">
      <Title />
      <Artist />
      <Builder />
      <Fluidity />
      <Breakpoint />
      <Secrets />
      <Boosted />
    </div>
  );
};
