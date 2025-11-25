import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4  py-8">
      <div className="flex pt-4 gap-4">
        <Button asChild variant="secondary" className="rounded-full">
          <a href="mailto:darpanbhavesh@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-6 h-6" />
          </a>
        </Button>
        <Button asChild variant="secondary" className="rounded-full">
          <a href="https://www.linkedin.com/in/bhaveshdarpan/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
        </Button>
        <Button asChild variant="secondary" className="rounded-full">
          <a href="https://www.github.com/bhaveshdarpan/" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" fill="currentColor" />
          </a>
        </Button>
      </div>
      <div className="text-center text-sm font-semibold">&copy; 2025 designed and developed by Bhavesh Darpan using React and shadcn/ui.</div>
    </footer>
  );
}
