import { motion } from 'motion/react';
import { BeforeAfterSlider } from '../BeforeAfterSlider';

const beforeAfterProjects = [
  {
    id: 1,
    // before: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
  before: '/assets/images/BA/B1.jpeg',
    // after: 'https://images.unsplash.com/photo-1667859626967-544340ba847f?w=800',
  after: '/assets/images/BA/A1.jpeg',
    title: 'Modern Garden Transformation',
  },

   {
    id: 2,
    // before: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800',
  before: '/assets/images/BA/B3.jpeg',
    // after: 'https://images.unsplash.com/photo-1627590919493-9dc6f72b0b08?w=800',
  after: '/assets/images/BA/A3.jpeg',
    title: 'Outdoor Living Upgrade',
  },
   {
    id: 3,
    // before: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800',
  before: '/assets/images/BA/B4.jpeg',
    // after: 'https://images.unsplash.com/photo-1627590919493-9dc6f72b0b08?w=800',
  after: '/assets/images/BA/A4.jpeg',
    title: 'Modern Garden Transformation',
  },
    {
    id: 4,
    // before: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800',
  before: '/assets/images/BA/B2.jpeg',
    // after: 'https://images.unsplash.com/photo-1627590919493-9dc6f72b0b08?w=800',
  after: '/assets/images/BA/A2.jpeg',
    title: 'Backyard Paradise',
  },
];

export function BeforeAfterSection() {
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
          <h2 className="text-[#3B755F] mb-4">Transformation Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the dramatic transformations we've created for our clients
          </p>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {beforeAfterProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-center mb-6 text-[#1E1E1E]">{project.title}</h3>
              <BeforeAfterSlider
                beforeImage={project.before}
                afterImage={project.after}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
