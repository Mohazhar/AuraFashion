import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
        variant: "default",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary text-sm uppercase tracking-[0.3em] mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8">Book Your <span className="italic luxury-gradient-text">Appointment</span></h3>
            
            <p className="text-muted-foreground mb-12 max-w-md font-light leading-relaxed">
              Visit our studio in Coimbatore or reach out to us via WhatsApp to discuss your bridal wear and makeup requirements.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Phone className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Call Us</h4>
                  <a href="tel:+917806856626" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                    +91 7806856626
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <MessageCircle className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">WhatsApp</h4>
                  <a 
                    href="https://wa.me/917806856626?text=Hi%20AURA%20FASHION,%20I%20would%20like%20to%20book%20an%20appointment"
                    target="_blank" rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Studio Location</h4>
                  <p className="text-muted-foreground text-lg">
                    Coimbatore, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Map Placeholder - Real map could be added here */}
            <div className="w-full h-64 bg-background border border-primary/20 rounded-2xl overflow-hidden relative group">
               {/* Grayscale filter for luxury look, removes on hover */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.4417311756!2d76.88483259501509!3d11.014022838334468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(100%) opacity(70%)" }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-500 group-hover:filter-none"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-10 rounded-3xl"
          >
            <h4 className="font-serif text-3xl mb-8">Send a Message</h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-primary uppercase tracking-widest font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-background/50 border border-primary/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm text-primary uppercase tracking-widest font-medium">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  className="w-full bg-background/50 border border-primary/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="+91"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm text-primary uppercase tracking-widest font-medium">Interested Service</label>
                <select 
                  id="service" 
                  className="w-full bg-background/50 border border-primary/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all appearance-none"
                >
                  <option value="bridal-makeup">Bridal Makeup</option>
                  <option value="party-makeup">Party/Engagement Makeup</option>
                  <option value="bridal-wear">Custom Bridal Wear</option>
                  <option value="blouse">Designer Blouse Stitching</option>
                  <option value="both">Both Boutique & Makeup</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-primary uppercase tracking-widest font-medium">Message Details (Optional)</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-background/50 border border-primary/20 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 resize-none"
                  placeholder="Tell us about your event date, requirements..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium uppercase tracking-widest text-sm hover:bg-primary/90 hover-glow transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    Submit Request <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
