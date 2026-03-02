import { motion } from "framer-motion";
import { Scissors, Sparkles, MessageCircle } from "lucide-react";
import boutiqueImg from "@/assets/images/service-boutique.png";
import makeupImg from "@/assets/images/service-makeup.png";

export default function Services() {
  const boutiqueServices = [
    { name: "Designer Blouse Stitching", desc: "Custom embroidery and flawless fit." },
    { name: "Custom Bridal Wear", desc: "Lehengas, gowns, and bespoke outfits." },
    { name: "Saree Styling", desc: "Pre-pleating and expert draping." },
    { name: "Alterations", desc: "Perfecting your existing wardrobe." }
  ];

  const makeupServices = [
    { name: "Bridal Makeup", desc: "Complete luxury makeover for your big day." },
    { name: "Engagement Makeup", desc: "Soft glam for pre-wedding ceremonies." },
    { name: "Party Makeup", desc: "Elegant looks for guests and attendees." },
    { name: "HD / Airbrush Makeup", desc: "Flawless, long-lasting premium finish." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-primary text-sm uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Premium <span className="italic luxury-gradient-text">Services</span></h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Boutique Services Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="h-64 sm:h-80 overflow-hidden relative">
              <img 
                src={boutiqueImg} 
                alt="Boutique Services" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="bg-primary/20 p-3 rounded-full backdrop-blur-md border border-primary/30">
                  <Scissors className="text-primary" size={24} />
                </div>
                <h4 className="text-3xl font-serif">Boutique</h4>
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <ul className="space-y-4 mb-8 flex-1">
                {boutiqueServices.map((service, idx) => (
                  <li key={idx} className="flex flex-col">
                    <span className="text-lg text-foreground font-serif">{service.name}</span>
                    <span className="text-sm text-muted-foreground">{service.desc}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://wa.me/917806856626?text=Hi%20AURA%20FASHION,%20I%20would%20like%20to%20book%20a%20boutique%20appointment" 
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 border border-primary/30 rounded-xl text-primary hover:bg-primary/10 transition-colors uppercase tracking-widest text-xs"
              >
                <MessageCircle size={16} /> Book Boutique Service
              </a>
            </div>
          </motion.div>

          {/* Makeup Services Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="h-64 sm:h-80 overflow-hidden relative">
              <img 
                src={makeupImg} 
                alt="Makeup Services" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="bg-accent/20 p-3 rounded-full backdrop-blur-md border border-accent/30">
                  <Sparkles className="text-accent" size={24} />
                </div>
                <h4 className="text-3xl font-serif">Makeup Studio</h4>
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <ul className="space-y-4 mb-8 flex-1">
                {makeupServices.map((service, idx) => (
                  <li key={idx} className="flex flex-col">
                    <span className="text-lg text-foreground font-serif">{service.name}</span>
                    <span className="text-sm text-muted-foreground">{service.desc}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://wa.me/917806856626?text=Hi%20AURA%20FASHION,%20I%20would%20like%20to%20book%20a%20makeup%20appointment" 
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 border border-accent/30 rounded-xl text-accent hover:bg-accent/10 transition-colors uppercase tracking-widest text-xs"
              >
                <MessageCircle size={16} /> Book Makeup Session
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
