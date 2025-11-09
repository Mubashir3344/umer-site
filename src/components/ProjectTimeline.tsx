import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TimelineStep {
  title: string;
  description: string;
  image: string;
  duration: string;
}

const timelineSteps: TimelineStep[] = [
  {
    title: 'Initial Consultation',
    description: 'We meet to discuss your vision, budget, and timeline. Site assessment and preliminary ideas are shared.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600',
    duration: 'Week 1',
  },
  {
    title: 'Design Development',
    description: 'Our team creates detailed designs, 3D renderings, and plant selections tailored to your space.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600',
    duration: 'Weeks 2-3',
  },
  {
    title: 'Proposal & Approval',
    description: 'Review comprehensive plans, make revisions, and approve final design and budget.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
    duration: 'Week 4',
  },
  {
    title: 'Site Preparation',
    description: 'Clearing, grading, soil preparation, and infrastructure setup for your landscape.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600',
    duration: 'Weeks 5-6',
  },
  {
    title: 'Installation',
    description: 'Hardscaping, planting, irrigation installation, and all finishing touches are completed.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600',
    duration: 'Weeks 7-10',
  },
  {
    title: 'Final Walkthrough',
    description: 'Complete inspection, care instructions, and warranty details. Enjoy your new landscape!',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
    duration: 'Week 11',
  },
];

export function ProjectTimeline() {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B755F] via-[#A4C2A5] to-[#3B755F]" />

      <div className="space-y-12">
        {timelineSteps.map((step, index) => (
          <motion.div
            key={step.title}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-col`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {/* Timeline Dot */}
            <motion.div
              className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
            >
              <div className="w-16 h-16 rounded-full bg-[#3B755F] border-4 border-[#F9FBF9] flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            {/* Content */}
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-20 md:pl-0`}>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="mb-4 aspect-video rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm text-[#3B755F] uppercase tracking-wider mb-2">
                  {step.duration}
                </div>
                <h3 className="text-[#1E1E1E] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            </div>

            {/* Spacer for opposite side */}
            <div className="hidden md:block w-5/12" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
