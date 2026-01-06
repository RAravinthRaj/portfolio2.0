import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useRef, useState, memo } from "react";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { FaLinkedin } from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aravinthr235@gmail.com",
    href: "mailto:aravinthr235@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "AravinthRajR",
    href: "https://www.linkedin.com/in/aravinth-raj-r-868963288/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "National Engineering College, KR Nagar",
    href: "https://www.google.com/maps/place/National+Engineering+College/@9.1483125,77.8272423,16.98z/data=!4m6!3m5!1s0x3b06ae08c6794e85:0xea30f98dcb16c4f5!8m2!3d9.1483192!4d77.8321719!16zL20vMDNfeGJn",
  },
];

const spring = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.6,
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    toast.success("Message Received successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <LazyMotion features={domAnimation}>
      <section id="contact" className="relative py-32" ref={ref}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <m.div
            className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, hsl(280 70% 60% / 0.3) 0%, transparent 70%)",
              bottom: "-200px",
              right: "-100px",
              translateZ: 0,
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <m.span
              className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={spring}
              style={{ translateZ: 0 }}
            >
              Get in Touch
            </m.span>

            <m.h2
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: 0.05 }}
              style={{ translateZ: 0 }}
            >
              Let's Work <span className="text-gradient">Together</span>
            </m.h2>

            <m.p
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...spring, delay: 0.1 }}
              style={{ translateZ: 0 }}
            >
              Have a project in mind? I'd love to hear about it. Let's create
              something amazing together.
            </m.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <m.div
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ ...spring, delay: 0.15 }}
              style={{ translateZ: 0 }}
            >
              <h3 className="font-display text-2xl font-bold mb-8">
                Contact Information
              </h3>

              <div className="space-y-6 mb-10">
                {contactInfo.map(
                  ({ icon: Icon, label, value, href }, index) => (
                    <m.a
                      key={label}
                      href={href}
                      target="_blank"
                      className="flex items-center gap-4 p-4 rounded-xl glass group hover:border-primary/30 transition-all"
                      whileHover={{ x: 6 }}
                      initial={{ opacity: 0, x: -16 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ ...spring, delay: 0.2 + index * 0.06 }}
                      style={{ translateZ: 0 }}
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground block">
                          {label}
                        </span>
                        <span className="font-medium">{value}</span>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </m.a>
                  )
                )}
              </div>
            </m.div>

            <m.form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl glass"
              initial={{ opacity: 0, x: 24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ ...spring, delay: 0.15 }}
              style={{ translateZ: 0 }}
            >
              <div className="space-y-6">
                <m.input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-secondary"
                  placeholder="Your name"
                  required
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.15 }}
                />

                <m.input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-secondary"
                  placeholder="your@email.com"
                  required
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.15 }}
                />

                <m.textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-secondary resize-none"
                  placeholder="Tell me about your project..."
                  required
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.15 }}
                />

                <m.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg flex items-center justify-center gap-2 disabled:opacity-70"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </m.button>
              </div>
            </m.form>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default memo(ContactSection);
