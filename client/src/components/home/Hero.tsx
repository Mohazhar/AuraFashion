import { motion } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Video overlay effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury Bridal Boutique"
          className="w-full h-full object-cover object-center"
        />
        {/* Cinematic dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
      </div>

      <div className="container relative z-20 px-4 pt-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-primary tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block font-sans">
            Welcome to AURA FASHION
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif max-w-5xl mx-auto leading-tight text-glow mb-6"
        >
          Luxury Bridal Boutique & <br />
          <span className="luxury-gradient-text italic font-normal">Makeup Studio</span> <br />
          in Coimbatore
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 tracking-wide"
        >
          Designer Blouses <span className="mx-2 text-primary/50">|</span> Bridal Wear{" "}
          <span className="mx-2 text-primary/50">|</span> HD & Airbrush Makeup
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <a
            href="https://wa.me/917806856626?text=Hi%20AURA%20FASHION,%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover-glow w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} />
            Book on WhatsApp
          </a>
          
          <a
            href="tel:+917806856626"
            className="flex items-center gap-2 bg-transparent border border-primary/50 text-foreground px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-all hover-glow w-full sm:w-auto justify-center backdrop-blur-sm"
          >
            <PhoneCall size={18} className="text-primary" />
            Call Now
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
