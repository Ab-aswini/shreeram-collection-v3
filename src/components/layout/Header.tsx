import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getImageUrl } from "@/lib/utils";
import { getSiteSettings } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products/men", label: "Men" },
  { href: "/products/women", label: "Women" },
  { href: "/products/kids", label: "Kids" },
  { href: "/products/jeans", label: "Jeans" },
  { href: "/products/sarees", label: "Sarees" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { whatsappNumber, contactPhone } = getSiteSettings();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              <img src={getImageUrl("/android-chrome-192x192.png")} alt="Shreeram Collection" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-semibold text-lg md:text-xl text-foreground leading-tight">
                Shreeram
              </h1>
              <p className="text-xs text-muted-foreground -mt-0.5">Collection</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive(link.href)
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <a href={`tel:${contactPhone}`} className="hidden md:flex">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">Call Now</span>
              </Button>
            </a>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                      <img src={getImageUrl("/android-chrome-192x192.png")} alt="Shreeram Collection" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h2 className="font-display font-semibold text-xl">Shreeram Collection</h2>
                      <p className="text-sm text-muted-foreground">Fashion for Everyone</p>
                    </div>
                  </div>

                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${isActive(link.href)
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary"
                          }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="flex flex-col gap-3 pt-4 border-t border-border">
                    <a href={`tel:${contactPhone}`}>
                      <Button variant="outline" className="w-full gap-2">
                        <Phone className="w-4 h-4" />
                        Call: {contactPhone}
                      </Button>
                    </a>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in your products`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="whatsapp" className="w-full">
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
