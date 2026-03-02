import { motion } from "framer-motion";
import aboutImg from "@/assets/images/about-portrait.png";

export default function About() {
  const highlights = [
    { title: "Custom Fit", desc: "Tailored to perfection for your body type" },
    { title: "Premium Fabric", desc: "Sourced from the finest weavers in India" },
    { title: "Flawless Base", desc: "HD & Airbrush makeup techniques" },
    { title: "Expert Styling", desc: "Complete bridal look coordination" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Decorative blurred blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
              <img 
                src={aboutImg} 
                alt="AURA FASHION Modern Indian Bride" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-primary/30 rounded-2xl z-0 translate-x-6 translate-y-6 hidden md:block" />
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12"
          >
            <h2 className="text-primary text-sm uppercase tracking-[0.3em] mb-4">About Aura Fashion</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Crafting <span className="italic luxury-gradient-text">Elegance</span> for the Modern Bride
            </h3>
            
            <div className="space-y-6 text-muted-foreground font-light text-lg mb-10 leading-relaxed">
              <p>
                AURA FASHION is a premium boutique and bridal makeup studio in Coimbatore offering designer blouses, bridal wear, and professional makeup services tailored for modern brides.
              </p>
              <p>
                Founded with a passion for celebrating true feminine beauty, we blend traditional craftsmanship with contemporary aesthetics. Whether it's intricate hand-embroidery on a custom blouse or a flawless airbrush makeup finish for your big day, our dedication to detail ensures you look and feel extraordinary.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-accent mt-1" />
                  <div>
                    <h4 className="text-foreground font-medium mb-1 font-serif text-xl">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
