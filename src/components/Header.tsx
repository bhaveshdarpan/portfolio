import { useLocation } from "react-router-dom";
import { ArrowUpRight, Menu } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";

const menu = [
  { title: "Work", url: "/" },
  { title: "Fun", url: "/fun" },
];

export default function Header() {
  const location = useLocation();

  return (
    // <header className="sticky z-50 w-full p-4 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <header className="sticky z-50 w-full p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 group">
          <span className="text-2xl font-bold">
            Bhavesh<span className="text-primary group-hover:text-primary">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex flex-grow justify-center">
          <NavigationMenuList className="flex gap-4">
            {menu.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  href={item.url}
                  className={`px-4 py-2 rounded-md text-base transition-colors font-medium ${
                    location.pathname === item.url ? "text-primary font-semibold" : "hover:bg-muted hover:text-primary"
                  }`}>
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Resume Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild variant="outline" className="font-medium">
            <a
              href="https://drive.google.com/file/d/19FOqMruzJTsGIzzSzQ2ibAN9x5xw99Nq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1">
              Resume
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="top" className="h-screen w-full p-8 flex flex-col justify-between max-w-full">
              {/* Mobile Nav */}
              <nav className="flex flex-col gap-6 text-lg font-medium">
                {menu.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    className={`py-2 rounded-md transition ${
                      location.pathname === item.url ? "text-primary font-semibold" : "hover:bg-muted hover:text-primary"
                    }`}>
                    {item.title}
                  </a>
                ))}
              </nav>

              {/* Mobile Resume Button */}
              <Button asChild variant="secondary" className="w-full font-medium">
                <a href="https://drive.google.com/file/d/19FOqMruzJTsGIzzSzQ2ibAN9x5xw99Nq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
