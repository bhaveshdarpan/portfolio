import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

interface ShowcaseSlide {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectShowcaseProps {
  slides: ShowcaseSlide[];
}

export default function ProjectShowcase({ slides }: ProjectShowcaseProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="w-full flex flex-col gap-8">
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex flex-col items-center">
            <img src={slide.src} alt={slide.alt} className="w-full object-contain rounded-xl" />
            {slide.caption && <p className="text-center text-sm text-muted-foreground p-2 max-w-2xl">{slide.caption}</p>}
          </div>
        ))}
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-4 rounded-full shadow-xl border bg-background/80 backdrop-blur hover:bg-background transition">
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
