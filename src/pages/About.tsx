import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AnimatedStats } from '../components/AnimatedStats';
import { TeamFlipCard } from '../components/TeamFlipCard';
import { ProjectTimeline } from '../components/ProjectTimeline';
import { MorphingBlob } from '../components/MorphingBlob';
import { ParallaxHero } from '../components/ParallaxHero';
import { teamMembers } from '../data/team';
import { Heart, Target, Award, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Creativity',
    description: 'Every project is a unique canvas where innovation meets natural beauty',
  },
  {
    icon: Target,
    title: 'Integrity',
    description: 'Honest communication and transparent processes from concept to completion',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Premium materials and expert craftsmanship in every detail',
  },
  {
    icon: Users,
    title: 'Nature First',
    description: 'Sustainable practices that honor and enhance the environment',
  },
];

export function About() {
  return (
    <>
      {/* Parallax Hero Section */}
      <ParallaxHero
        // backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBkZXNpZ24lMjB0ZWFtfGVufDF8fHx8MTc2MTUwMjc2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
        backgroundImage="/assets/images/Magboulevarddubaisouth/project.JPG"
        height="h-[60vh] min-h-[500px]"
      >
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About Green Space Landscapes
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Crafting outdoor masterpieces for over a decade
          </motion.p>
        </div>
      </ParallaxHero>

      {/* Philosophy Section */}
      <section className="py-20 bg-[#F9FBF9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#3B755F] mb-6">Our Philosophy</h2>
              <p className="text-gray-600 mb-4">
                At Green Space Landscapes, we believe that outdoor spaces should be more than beautiful—they should be sanctuaries that nurture well-being, celebrate nature, and stand the test of time.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2010, we've dedicated ourselves to creating landscapes that harmonize with their environment while reflecting the unique personality of each client. Every project is an opportunity to blend artistry with sustainability.
              </p>
              <p className="text-gray-600">
                Our approach combines cutting-edge design principles with time-honored horticultural practices, ensuring that your outdoor space is both stunning today and flourishing for years to come.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <ImageWithFallback
                // src="https://images.unsplash.com/photo-1667859626967-544340ba847f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXNoJTIwZ3JlZW4lMjBnYXJkZW4lMjBuYXR1cmV8ZW58MXx8fHwxNzYxNTAyNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                src="/assets/images/Magboulevarddubaisouth/e1915a6e-c9d6-44df-828a-d2410d2ffd69.JPG"
                alt="Green garden"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white relative overflow-hidden">
        <MorphingBlob className="top-0 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/2" color="#A4C2A5" duration={25} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#3B755F] mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and inspire every design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#A4C2A5]/20"
                  whileHover={{ scale: 1.1, backgroundColor: '#3B755F' }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon className="w-8 h-8 text-[#3B755F]" />
                </motion.div>
                <h3 className="mb-2 text-[#1E1E1E]">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-[#F9FBF9]">
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
              From concept to completion, we guide you through every step of your landscape transformation
            </p>
          </motion.div>
          
          <ProjectTimeline />
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#3B755F] mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate experts behind your dream landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamFlipCard key={member.name} member={member} index={index} />
            ))}
          </div>

          <motion.p
            className="text-center text-sm text-gray-500 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Tap any card to learn more about our team members
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#3B755F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedStats
            stats={[
              { value: 14, suffix: '+', label: 'Years Experience' },
              { value: 500, suffix: '+', label: 'Projects Completed' },
              { value: 350, suffix: '+', label: 'Happy Clients' },
              { value: 25, suffix: '+', label: 'Awards Won' },
            ]}
          />
        </div>
      </section>
    </>
  );
}