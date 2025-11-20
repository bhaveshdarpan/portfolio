import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const menu = [
    { title: "Projects", url: "/" },
    { title: "Fun", url: "/fun" },
    { title: "About", url: "/about" },
  ];

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ease-in-out ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="flex items-center justify-between mx-auto px-8 min-h-[64px] gap-4">
        {/* Left: Logo */}
        <a href="/" className="flex-shrink-0">
          <span className="text-2xl font-bold">Bhavesh.</span>
        </a>

        {/* Center Menu - Desktop */}
        <NavigationMenu className="hidden lg:flex flex-grow justify-center">
          <NavigationMenuList className="flex gap-4">
            {menu.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink href={item.url}>{item.title}</NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Resume Button and ModeToggle */}
        <div className="hidden lg:flex items-center gap-4">
          <ModeToggle />
          <Button asChild variant="secondary">
            <a href="https://drive.google.com/file/d/19FOqMruzJTsGIzzSzQ2ibAN9x5xw99Nq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="block lg:hidden flex gap-4">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="h-screen w-full max-w-full p-8 flex flex-col justify-center items-center gap-8">
              {/* <SheetHeader>
                <SheetTitle className="text-center font-bold text-2xl mb-8">Bhavesh.</SheetTitle>
              </SheetHeader> */}

              <nav className="flex flex-col gap-6 text-xl font-semibold text-center">
                {menu.map((item) => (
                  <a key={item.title} href={item.url} className="hover:underline">
                    {item.title}
                  </a>
                ))}
              </nav>

              <Button variant="secondary" asChild>
                <a
                  href="https://drive.google.com/file/d/19FOqMruzJTsGIzzSzQ2ibAN9x5xw99Nq/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-3">
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
