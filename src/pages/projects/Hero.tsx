import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          quantity={324}
          staticity={30}
          ease={40}
          size={0.5}
          color="accent"
          vx={0}
          vy={0.05} // slow vertical drift for subtle animation
          className="w-full h-full"
        />
      </div>

      {/* Content above particles */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-16">
          Hi there!{" "}
          <span className="inline-block">
            <WaveEmojiImage />
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-4 text-muted-foreground">
          A <span className="font-bold">Design Engineer</span> thinking in systems crafting solutions for a better future.
        </p>
        <p className="max-w-xl text-lg md:text-xl mb-8 text-muted-foreground">
          Currently, I'm a Software Engineer at{" "}
          <a href="https://letsbloom.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            Letsbloom Pvt Ltd
          </a>
          .
        </p>
        <Button size="lg" className="flex items-center mx-auto font-semibold rounded-full" onClick={handleScroll}>
          View Projects
          <ArrowDown className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}

function WaveEmojiImage() {
  return (
    <picture>
      <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp" />
      <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="Wave Hand Emoji" width={48} height={48} />
    </picture>
  );
}
