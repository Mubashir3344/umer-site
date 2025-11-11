import { motion } from 'motion/react';
import { projects } from '../../data/projects';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 4);

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
          <h2 className="text-[#3B755F] mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our portfolio of transformative landscapes and outdoor living spaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link to={`/projects/${project.id}`}>
                <motion.div
                  className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <h3 className="mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.location}</p>
                    <span className="mt-4 text-sm uppercase tracking-wider border-b border-white pb-1">
                      View Details
                    </span>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/projects"
            className="inline-block text-[#3B755F] hover:text-[#88B391] uppercase tracking-wider text-sm transition-colors"
          >
            View All Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
