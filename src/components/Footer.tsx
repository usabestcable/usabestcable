import { Wifi, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary via-foreground to-secondary text-background py-16 px-4 border-t-4 border-primary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-usa-red-gradient flex items-center justify-center shadow-lg">
                <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold">USA Best Cable</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Connecting communities with lightning-fast, reliable internet services across the nation.
            </p>
            <div className="space-y-2">
              <a href="tel:8888719118" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">888-871-9118</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-background/70 hover:text-background transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-background/70 hover:text-background transition-colors">Contact</Link></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Coverage Map</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Check Outage</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Account Portal</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-background/70 hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-background/70 hover:text-background transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="text-background/70 hover:text-background transition-colors">Refund Policy</Link></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Acceptable Use</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-background/70 text-sm text-center">
            © 2025 USA Best Cable. All rights reserved. Providing fast, reliable internet nationwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
