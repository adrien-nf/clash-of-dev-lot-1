import {
  Artist,
  Builder,
  Boosted,
  Breakpoint,
  Fluidity,
  Secrets,
} from "@/features/app/components/characters";
import { Title } from "@/features/app/components/title";
import { FullScreenSection } from "@/components/full-screen-section/full-screen-section";
import { EnterFinals } from "@/features/app/components/enter-finals";
import { Footer } from "@/components/footer";
import { KingCard } from "@/components/king-card";
import { useScroll } from "framer-motion";
import { Bar } from "@/components/bar";
import { StickyHeader } from "@/components/sticky-header";

export const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <StickyHeader />

      <div className="p-3 max-w-screen-2xl flex flex-col gap-3 snap-y relative">
        <Bar scale={scrollYProgress} />
        <header className="flex flex-col gap-3 relative">
          <div className="flex flex-col items-center">
            <KingCard />
          </div>
          <Title />
        </header>

        <main>
          <FullScreenSection className="top-4">
            <Artist />
          </FullScreenSection>
          <FullScreenSection className="top-8">
            <Builder />
          </FullScreenSection>
          <FullScreenSection className="top-12">
            <Fluidity />
          </FullScreenSection>
          <FullScreenSection className="top-16">
            <Breakpoint />
          </FullScreenSection>
          <FullScreenSection className="top-20">
            <Secrets />
          </FullScreenSection>
          <FullScreenSection className="top-24">
            <Boosted />
          </FullScreenSection>
        </main>

        <section className="flex flex-col justify-between h-[calc(100vh-24px)] pb-6">
          <EnterFinals />
          <Footer />
        </section>
      </div>
    </>
  );
};
