import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const eyeRef = useRef<HTMLDivElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const getPupilPosition = () => {
    if (!eyeRef.current) return { x: 0, y: 0 };

    const rect = eyeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Stronger movement (bigger multiplier)
    const dx = (mouse.x - centerX) / 10;
    const dy = (mouse.y - centerY) / 10;

    // Prevent it from leaving the oval
    const maxX = rect.width * 0.25; // 25% horizontal limit
    const maxY = rect.height * 0.25; // 25% vertical limit

    return {
      x: Math.max(Math.min(dx, maxX), -maxX),
      y: Math.max(Math.min(dy, maxY), -maxY),
    };
  };

  const pupil = getPupilPosition();

  return (
    <section className="flex flex-col items-center justify-start p-8 text-center select-none">
      {/* 404 Text */}
      <div className="flex items-center text-[120px] md:text-[200px] font-black tracking-tight relative">
        <span className="text-foreground">4</span>

        {/* OVAL EYEBALL */}
        <div
          ref={eyeRef}
          className="
            relative 
            w-[90px] h-[120px] 
            md:w-[150px] md:h-[200px]
            bg-white border-[8px] md:border-[12px] border-black 
            rounded-[50%/65%]
            flex items-center justify-center
            overflow-hidden
            mx-1 md:mx-2
          ">
          {/* Pupil */}
          <div
            className="
              w-10 h-10 md:w-16 md:h-16 
              bg-black rounded-full
              transition-transform duration-75
            "
            style={{
              transform: `translate(${pupil.x}px, ${pupil.y}px)`,
            }}
          />
        </div>

        <span className="text-foreground">4</span>
      </div>

      <p className="text-muted-foreground text-xl font-medium max-w-2xl">
        Uh oh! You seem lost sweetheart. Don't worry, I am here. Let me help you get back on track.
      </p>
      <Button onClick={() => navigate("/")} className="mt-4 flex items-center gap-2">
        <ArrowLeft size={16} />
        Please Take Me Home
      </Button>
    </section>
  );
}
