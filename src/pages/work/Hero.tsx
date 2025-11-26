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
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug mb-6">
            Hey! I'm <span className="text-primary">Bhavesh</span>.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium">
            I'm a <span className="text-primary font-semibold">design engineer</span> by practice,
            <span className="text-primary font-semibold"> systems thinker</span> by instinct, and a
            <span className="text-primary font-semibold"> problem solver</span> at heart.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium max-w-xl">
            I approach design as a way to connect people, ideas, and technology—building systems that feel intentional, intuitive, and quietly delightful.
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

// function WaveEmojiImage() {
//   return (
//     <picture>
//       <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp" />
//       <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="Wave Hand Emoji" width={48} height={48} />
//     </picture>
//   );
// }
