import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  RippleButton,
  FloatingInput,
  SuccessCheckmark,
  LoadingSpinner,
  HoverCard,
} from "../components/MicroInteractions";
import { ParallaxHero } from "../components/ParallaxHero";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);
    toast.success("Message sent successfully! We'll get back to you soon.");

    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setShowSuccess(false);
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Parallax Hero Section */}
      <ParallaxHero
        // backgroundImage="https://images.unsplash.com/photo-1667859626967-544340ba847f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXNoJTIwZ3JlZW4lMjBnYXJkZW4lMjBuYXR1cmV8ZW58MXx8fHwxNzYxNTAyNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
        backgroundImage="assets/images/Magboulevarddubaisouth/e1915a6e-c9d6-44df-828a-d2410d2ffd69.JPG"
        height="h-[50vh] min-h-[400px]"
      >
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Let's start planning your dream landscape
          </motion.p>
        </div>
      </ParallaxHero>

      {/* Contact Form & Info */}
      <section className="py-20 bg-[#F9FBF9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#3B755F] mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Have questions or ready to start your project? We'd love to hear
                from you. Reach out using any of the methods below or fill out
                the form.
              </p>

              <div className="space-y-6">
                <HoverCard className="p-4">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 bg-[#3B755F] rounded-lg flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MapPin className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-[#1E1E1E] mb-1">Location</h3>
                      <p className="text-gray-600">
                        UAE
                      </p>
                    </div>
                  </div>
                </HoverCard>

                <HoverCard className="p-4">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 bg-[#3B755F] rounded-lg flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Phone className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-[#1E1E1E] mb-1">Phone</h3>
                      <p className="text-gray-600">+971552651662</p>
                    </div>
                  </div>
                </HoverCard>

                <HoverCard className="p-4">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 bg-[#3B755F] rounded-lg flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Mail className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-[#1E1E1E] mb-1">Email</h3>
                      <p className="text-gray-600">contact@greenspacelandscapes.ae</p>
                    </div>
                  </div>
                </HoverCard>

                <HoverCard className="p-4">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 bg-[#3B755F] rounded-lg flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Clock className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-[#1E1E1E] mb-1">Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </HoverCard>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-[#3B755F] mb-6">Send Us a Message</h3>

              {showSuccess ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <SuccessCheckmark show={showSuccess} />
                  <p className="mt-4 text-[#3B755F]">
                    Message sent successfully!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FloatingInput
                    label="Name"
                    value={formData.name}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, name: value }))
                    }
                    required
                  />

                  <FloatingInput
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, email: value }))
                    }
                    required
                  />

                  <FloatingInput
                    label="Subject"
                    value={formData.subject}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, subject: value }))
                    }
                    required
                  />

                  <div className="relative">
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      className="w-full min-h-[150px] pt-4"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    {isSubmitting ? (
                      <LoadingSpinner size="lg" />
                    ) : (
                      <RippleButton type="submit" className="w-full">
                        Send Message
                      </RippleButton>
                    )}
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-2" />
            <p>Map integration would go here</p>
            <p className="text-sm">(Google Maps API)</p>
          </div>
        </div>
      </section>
    </>
  );
}
