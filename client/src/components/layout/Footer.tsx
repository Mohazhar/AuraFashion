import { Link } from "wouter";
import { Instagram, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-primary/10 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/favicon.png"
                alt="Aura Fashion Logo"
                className="h-16 w-auto object-contain rounded-md"
              />
              <span className="sr-only">Aura Fashion</span>
            </Link>
            <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
              A premium boutique and bridal makeup studio in Coimbatore offering bespoke designer wear and flawless makeup services for the modern bride.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-foreground">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Boutique Services', 'Makeup Studio', 'Portfolio'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="text-muted-foreground hover:text-primary text-sm transition-colors block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-foreground">Specialties</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground text-sm">Designer Blouse Stitching</li>
              <li className="text-muted-foreground text-sm">Custom Bridal Wear</li>
              <li className="text-muted-foreground text-sm">HD Bridal Makeup</li>
              <li className="text-muted-foreground text-sm">Airbrush Makeup</li>
              <li className="text-muted-foreground text-sm">Saree Pre-pleating & Draping</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-foreground">Contact</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-3">
              <p>Coimbatore, Tamil Nadu,<br />India</p>
              <p>
                <a href="tel:+917806856626" className="hover:text-primary transition-colors">
                  +91 7806856626
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/917806856626"
                  target="_blank" rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Book via WhatsApp
                </a>
              </p>
            </address>
          </div>

        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} AURA FASHION. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
