import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  funFact: string;
}

interface TeamFlipCardProps {
  member: TeamMember;
  index: number;
}

export function TeamFlipCard({ member, index }: TeamFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="perspective-1000 h-[400px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of Card */}
        <div
          className="absolute inset-0 backface-hidden rounded-lg overflow-hidden shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-full">
            <ImageWithFallback
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-white mb-1">{member.name}</h3>
              <p className="text-[#A4C2A5] uppercase tracking-wider text-sm">{member.role}</p>
              <p className="text-sm text-white/70 mt-2">Tap to learn more</p>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#3B755F] to-[#88B391] rounded-lg overflow-hidden shadow-lg p-6 text-white"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="h-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-white mb-1">{member.name}</h3>
              <p className="text-[#F9FBF9] uppercase tracking-wider text-sm">{member.role}</p>
            </div>
            
            <p className="text-sm text-white/90 mb-4 flex-grow">{member.bio}</p>
            
            <div className="mb-4">
              <h4 className="text-sm uppercase tracking-wider mb-2 text-white/80">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-white/20 px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/20">
              <p className="text-xs text-white/80 mb-1">Fun Fact:</p>
              <p className="text-sm">{member.funFact}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
