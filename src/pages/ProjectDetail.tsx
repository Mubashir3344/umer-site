import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { projects } from '../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';

export function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[#3B755F] mb-4">Project Not Found</h2>
          <Link to="/projects">
            <Button className="bg-[#3B755F] hover:bg-[#88B391]">Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 className="mb-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            {project.title}
          </motion.h1>
          <motion.p className="text-xl mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
            {project.description}
          </motion.p>
          <div className="flex items-center justify-center gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
          </div>
        </div>

        <Link to="/projects">
          <motion.div className="absolute top-24 left-4 md:left-8 z-20 flex items-center gap-2 text-white hover:text-[#A4C2A5] transition-colors" whileHover={{ x: -5 }}>
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm">Back to Projects</span>
          </motion.div>
        </Link>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#F9FBF9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#3B755F] mb-4">Project Details</h2>
            <p className="text-gray-600 mb-6">{project.description}</p>

            {project.challenges && (
              <div className="mb-6">
                <h3 className="text-[#1E1E1E] mb-2">Challenges</h3>
                <p className="text-gray-600">{project.challenges}</p>
              </div>
            )}

            {project.results && (
              <div className="mb-6">
                <h3 className="text-[#1E1E1E] mb-2">Results</h3>
                <p className="text-gray-600">{project.results}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-[#3B755F] mb-6 text-center">Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((src, idx) => (
              <motion.div key={idx} className="relative aspect-square overflow-hidden rounded-lg group" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05, duration: 0.35 }}>
                <ImageWithFallback src={src} alt={`${project.title} ${idx + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetail;
