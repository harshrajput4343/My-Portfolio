import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Research } from "@/components/sections/Research";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-blue-500/30">
      <Navigation />
      <Hero />
      <div className="flex flex-col gap-20 md:gap-32 pb-20">
        <About />
        <Skills />
        <Research />
        <Projects />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
