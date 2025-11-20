import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4">
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
      </div>
      <div className="text-center text-sm">&copy; 2025 by Bhavesh Darpan.</div>
    </footer>
  );
}
