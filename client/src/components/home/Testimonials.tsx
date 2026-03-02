import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Ramesh",
      service: "Bridal Makeup & Blouse",
      review: "Aura Fashion made my big day incredibly special. The makeup was flawless and lasted for 14 hours! The custom blouse fit perfectly and the embroidery work was breathtaking. Highly recommend for any Coimbatore bride.",
      rating: 5
    },
    {
      name: "Sneha Krishnan",
      service: "Engagement Look",
      review: "I wanted a very soft, natural glam for my engagement and they delivered exactly that! The team is so professional, patient, and uses high-end products. Felt like a princess.",
      rating: 5
    },
    {
      name: "Divya S.",
      service: "Boutique Services",
      review: "Got three sarees draped and blouses stitched here. The fit is immaculate and the styling advice they gave was spot on. True luxury experience in Coimbatore.",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-luxury-gradient blur-[120px] rounded-full opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm uppercase tracking-[0.3em] mb-4">Client Love</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Words from our <span className="italic luxury-gradient-text">Brides</span></h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4 py-8">
                  <div className="glass-card p-8 md:p-12 rounded-3xl text-center relative border border-primary/20">
                    <Quote className="absolute top-6 left-6 text-primary/20 w-12 h-12 md:w-16 md:h-16" />
                    
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-primary fill-primary w-5 h-5" />
                      ))}
                    </div>
                    
                    <p className="text-lg md:text-2xl font-light text-foreground/90 italic leading-relaxed mb-8">
                      "{testimonial.review}"
                    </p>
                    
                    <div>
                      <h4 className="font-serif text-xl text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
            >
              <ChevronRight />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
