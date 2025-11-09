import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#3B755F] to-[#88B391] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-white">
            Let's Bring Your Dream Landscape to Life
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Ready to transform your outdoor space? Our team is here to guide you through every step of creating your perfect sanctuary.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#3B755F] hover:bg-gray-100 px-8"
              >
                Get a Free Quote
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
