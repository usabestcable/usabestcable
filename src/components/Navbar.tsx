import { Button } from "@/components/ui/button";
import { Wifi, Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b-2 border-primary/20 shadow-lg shadow-primary/5">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-usa-red-gradient flex items-center justify-center shadow-lg">
                <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-primary">
                USA Best Cable
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <a href="tel:8888719118" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold">
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">888-871-9118</span>
            </a>
            <Link to="/contact">
              <Button variant="hero">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
            <Link to="/services" className="block text-foreground hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link to="/about" className="block text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="block text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <a href="tel:8888719118" className="flex items-center justify-center gap-2 text-foreground hover:text-primary transition-colors font-semibold py-2">
                <Phone className="w-4 h-4" />
                888-871-9118
              </a>
              <Link to="/contact">
                <Button variant="hero" className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
