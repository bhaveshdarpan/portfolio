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
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles quantity={324} staticity={30} ease={40} size={0.5} color="accent" vx={0} vy={0.05} className="w-full h-full" />{" "}
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-6xl mx-auto h-full -translate-y-12">
        <div className="text-center md:text-left p-4 md:p-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug mb-4">Hi there!</h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium">
            I'm <span className="text-primary font-semibold">Bhavesh</span>, a <span className="text-primary">design engineer</span> crafting playful, intuitive
            and humane experiences — driven by curiosity and a passion for solving complex problems for a better tomorrow.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-medium max-w-xl">
            Currently, I am working as a Software Engineer at{" "}
            <a href="https://letsbloom.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
              Letsbloom Pvt Ltd
            </a>
            , developing end-to-end solutions to simplify regulatory and compliance processes.
          </p>

          <Button size="lg" className="flex items-center gap-2 font-semibold rounded-full mx-auto md:mx-0" onClick={handleScroll}>
            View Projects
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>

        {/* Right Section — Hero Image */}
        <div className="flex justify-center">
          <div className="relative w-56 md:w-72 lg:w-80 aspect-[3/4]">
            <img src="/bhavesh.jpeg" alt="Bhavesh portrait" className="object-cover rounded-2xl shadow-lg animate-[float_6s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
