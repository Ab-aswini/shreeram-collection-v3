import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { getImageUrl } from "@/lib/utils";
import { getSiteSettings } from "@/data/site";

const Footer = () => {
  const { whatsappNumber } = getSiteSettings();
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                <img src={getImageUrl("/android-chrome-192x192.png")} alt="Shreeram Collection" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl">Shreeram Collection</h3>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted neighborhood store for quality clothing.
              Men's wear, ladies wear, kids fashion & more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/men" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Men's Wear
                </Link>
              </li>
              <li>
                <Link to="/products/women" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Ladies Wear
                </Link>
              </li>
              <li>
                <Link to="/products/kids" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Kids Wear
                </Link>
              </li>
              <li>
                <Link to="/products/sarees" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Sarees
                </Link>
              </li>
              <li>
                <Link to="/products/jeans" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Jeans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Visit Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  123, Main Market Road,<br />
                  Near City Center, Your City - 123456
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  10:00 AM - 9:00 PM (Daily)
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-foreground flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-foreground flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in your products`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-whatsapp-dark transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat with Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Shreeram Collection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
