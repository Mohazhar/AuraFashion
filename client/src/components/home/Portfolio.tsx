import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import p1 from "@/assets/images/portfolio-1.png";
import p2 from "@/assets/images/portfolio-2.png";
import p3 from "@/assets/images/portfolio-3.png";
import p4 from "@/assets/images/portfolio-4.png";

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    { id: 1, src: p1, title: "Bridal Glow", category: "Makeup", style: "col-span-1 row-span-1" },
    { id: 2, src: p2, title: "Custom Lehenga", category: "Boutique", style: "col-span-1 row-span-2" },
    { id: 4, src: p4, title: "Bridal Preparation", category: "Styling", style: "col-span-1 md:col-span-2 row-span-1" },
    { id: 3, src: p3, title: "Engagement Glam", category: "Makeup", style: "col-span-1 row-span-1" },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-secondary/30 border-y border-primary/10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm uppercase tracking-[0.3em] mb-4">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Curated <span className="italic luxury-gradient-text">Portfolio</span></h3>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4">
          {images.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${img.style}`}
              onClick={() => setSelectedImg(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                <Maximize2 className="text-primary mb-3" size={24} />
                <h4 className="text-xl font-serif text-white">{img.title}</h4>
                <p className="text-sm text-primary/80 uppercase tracking-wider mt-1">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg}
              alt="Expanded view"
              className="max-w-full max-h-full object-contain rounded-xl border border-primary/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
