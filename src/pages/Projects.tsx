import { motion, AnimatePresence } from 'motion/react';
import { useState, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { projects, Project } from '../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ParallaxHero } from '../components/ParallaxHero';
import { MorphingBlob } from '../components/MorphingBlob';
import { X, MapPin, Calendar, Grid3x3, LayoutGrid } from 'lucide-react';

type FilterCategory = 'all' | 'residential' | 'commercial' | 'outdoor-living';
type LayoutMode = 'grid' | 'masonry';

export function Projects() {
  const [filter, setFilter] = useState<FilterCategory>('all');
  // Removed modal selection — projects now navigate to a full detail page
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('grid');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <>
      {/* Parallax Hero Section */}
      <ParallaxHero
        // backgroundImage="https://images.unsplash.com/photo-1627590919493-9dc6f72b0b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbGFuZHNjYXBpbmclMjBkZXNpZ258ZW58MXx8fHwxNzYxNTAyNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
        backgroundImage="/assets/images/Alsharqhospital/IMG_8198.jpg"
        height="h-[60vh] min-h-[500px]"
      >
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explore our portfolio of transformative landscapes
          </motion.p>
        </div>
      </ParallaxHero>

      {/* Filter Bar with Layout Toggle */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'All Projects', value: 'all' as FilterCategory },
                { label: 'Residential', value: 'residential' as FilterCategory },
                { label: 'Commercial', value: 'commercial' as FilterCategory },
                { label: 'Outdoor Living', value: 'outdoor-living' as FilterCategory },
              ].map((filterOption) => (
                <motion.button
                  key={filterOption.value}
                  onClick={() => setFilter(filterOption.value)}
                  className={`px-6 py-2 rounded-full uppercase tracking-wider text-sm transition-colors ${
                    filter === filterOption.value
                      ? 'bg-[#3B755F] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filterOption.label}
                </motion.button>
              ))}
            </div>

            {/* Layout Toggle */}
            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
              <motion.button
                onClick={() => setLayoutMode('grid')}
                className={`p-2 rounded transition-colors ${
                  layoutMode === 'grid' ? 'bg-white shadow-sm' : ''
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <Grid3x3 className="w-5 h-5 text-gray-600" />
              </motion.button>
              <motion.button
                onClick={() => setLayoutMode('masonry')}
                className={`p-2 rounded transition-colors ${
                  layoutMode === 'masonry' ? 'bg-white shadow-sm' : ''
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <LayoutGrid className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid with Morphing Blobs */}
      <section className="py-20 bg-[#F9FBF9] relative overflow-hidden">
        <MorphingBlob className="top-0 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/2" color="#A4C2A5" />
        <MorphingBlob className="bottom-0 left-0 w-96 h-96 translate-y-1/2 -translate-x-1/2" color="#3B755F" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={layoutMode + filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={
                layoutMode === 'masonry'
                  ? 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'
                  : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              }
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className={layoutMode === 'masonry' ? 'break-inside-avoid' : ''}
                >
                  <Link to={`/projects/${project.id}`}>
                    <motion.div
                      className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer bg-white shadow-md"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <h3 className="mb-2 text-center text-white">{project.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-200 mb-1">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-200">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                      <span className="mt-4 text-sm uppercase tracking-wider border-b border-white pb-1">
                        View Details
                      </span>
                    </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project details are now full-page; modal removed. */}
    </>
  );
}