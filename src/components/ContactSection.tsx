import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@johndoe.dev", href: "mailto:hello@johndoe.dev" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-32" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(280 70% 60% / 0.3) 0%, transparent 70%)",
            bottom: "-200px",
            right: "-100px",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.span>

          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's Work <span className="text-gradient">Together</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl glass group hover:border-primary/30 transition-all"
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                  <ArrowUpRight size={18} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>

            {/* Social CTA */}
            <motion.div
              className="p-6 rounded-2xl glass"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h4 className="font-display text-lg font-semibold mb-3">
                Prefer social media?
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Connect with me on your favorite platform.
              </p>
              <div className="flex gap-3">
                {["LinkedIn", "Twitter", "GitHub"].map((platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    className="px-4 py-2 text-sm rounded-lg glass hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl glass"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <motion.input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Your name"
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <motion.input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="your@email.com"
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <motion.textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg glow-primary flex items-center justify-center gap-2 disabled:opacity-70"
                whileHover={{ scale: 1.02, boxShadow: "0 0 50px hsl(177 70% 50% / 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;