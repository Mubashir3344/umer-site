import { motion } from 'motion/react';
import { TiltCard } from '../TiltCard';
import { Palette, Leaf, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Personalized landscapes that reflect your unique style and the natural beauty of your environment.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Approach',
    description: 'Eco-conscious systems and native plant selections that conserve resources and enhance biodiversity.',
  },
  {
    icon: Sparkles,
    title: 'Comprehensive Service',
    description: 'End-to-end outdoor transformation from initial concept to ongoing maintenance and care.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F9FBF9] to-[#A4C2A5]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#3B755F] mb-4">Why Choose Green Space</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the difference of working with passionate landscape professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <TiltCard key={benefit.title} intensity={5}>
              <motion.div
                className="text-center h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#3B755F] text-white"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="mb-3 text-[#1E1E1E]">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}