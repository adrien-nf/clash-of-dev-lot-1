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
import { Hero } from "@/features/app/components/hero";

export const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <StickyHeader />

      <div className="p-3 sm:p-6 md:max-w-screen-xl mx-auto flex flex-col gap-3 snap-y relative pt-36 md:pt-44">
        <Bar scale={scrollYProgress} />

        <section className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-10 items-center flex-wrap justify-center">
            <Hero />
            <div className="flex flex-col items-center">
              <KingCard />
            </div>
          </div>
          <Title />
        </section>

        <main className="flex flex-col gap-4">
          <FullScreenSection className="top-4 sm:top-8">
            <Artist />
          </FullScreenSection>
          <FullScreenSection className="top-8 sm:top-16">
            <Builder />
          </FullScreenSection>
          <FullScreenSection className="top-12 sm:top-24">
            <Fluidity />
          </FullScreenSection>
          <FullScreenSection className="top-16 sm:top-32">
            <Breakpoint />
          </FullScreenSection>
          <FullScreenSection className="top-20 sm:top-40">
            <Secrets />
          </FullScreenSection>
          <FullScreenSection className="top-24 sm:top-48">
            <Boosted />
          </FullScreenSection>
        </main>

        <section className="flex flex-col justify-between h-[calc(100vh-24px)] sm:h-[calc(100vh-40px)] pb-6">
          <EnterFinals />
          <Footer />
        </section>
      </div>
    </>
  );
};
