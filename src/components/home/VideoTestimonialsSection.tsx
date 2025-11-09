import { motion } from 'motion/react';
import { VideoTestimonialModal } from '../VideoTestimonialModal';
import { videoTestimonials } from '../../data/videoTestimonials';

export function VideoTestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#3B755F] mb-4">Client Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear directly from our clients about their landscape transformation experiences
          </p>
        </motion.div>

        <VideoTestimonialModal testimonials={videoTestimonials} />
      </div>
    </section>
  );
}
