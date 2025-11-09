import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { services } from '../data/services';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Check, ArrowLeft } from 'lucide-react';
import * as Icons from 'lucide-react';

export function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[#3B755F] mb-4">Service Not Found</h2>
          <Link to="/services">
            <Button className="bg-[#3B755F] hover:bg-[#88B391]">
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <>
      {/* Hero Section with Parallax */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <ImageWithFallback
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-[#3B755F]"
          >
            {IconComponent && <IconComponent className="w-10 h-10 text-white" />}
          </motion.div>
          
          <motion.h1
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {service.title}
          </motion.h1>
          
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {service.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/contact">
              <Button size="lg" className="bg-[#3B755F] hover:bg-[#88B391] text-white">
                Request a Quote
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Back Button */}
        <Link to="/services">
          <motion.div
            className="absolute top-24 left-4 md:left-8 z-20 flex items-center gap-2 text-white hover:text-[#A4C2A5] transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm">Back to Services</span>
          </motion.div>
        </Link>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-[#F9FBF9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#3B755F] mb-6 text-center">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.detailedContent.overview}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-[#3B755F] mb-6">Key Features</h3>
              <ul className="space-y-3">
                {service.detailedContent.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Check className="w-5 h-5 text-[#3B755F] flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-[#3B755F] mb-6">Benefits</h3>
              <ul className="space-y-3">
                {service.detailedContent.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Check className="w-5 h-5 text-[#3B755F] flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#F9FBF9] to-[#A4C2A5]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#3B755F] mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {service.detailedContent.process.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-6 mb-8 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Step Number */}
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3B755F] text-white flex items-center justify-center z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span>{index + 1}</span>
                </motion.div>

                {/* Connecting Line */}
                {index < service.detailedContent.process.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-[#A4C2A5]" />
                )}

                {/* Step Content */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-[#1E1E1E] mb-2">{step.step}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#3B755F] mb-4">Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Examples of our {service.title.toLowerCase()} work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.detailedContent.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <ImageWithFallback
                  src={image}
                  alt={`${service.title} example ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3B755F] to-[#88B391] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our {service.title.toLowerCase()} services can transform your outdoor space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-[#3B755F] hover:bg-gray-100">
                  Get a Free Consultation
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#3B755F]"
                >
                  View Our Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
