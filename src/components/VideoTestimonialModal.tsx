import { motion, AnimatePresence } from 'motion/react';
import { X, Play } from 'lucide-react';
import { useState, MouseEvent } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  thumbnail: string;
  videoUrl: string;
  quote: string;
}

interface VideoTestimonialModalProps {
  testimonials: VideoTestimonial[];
}

export function VideoTestimonialModal({ testimonials }: VideoTestimonialModalProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);

  // Helper to detect YouTube links and return embed URL
  const getYouTubeEmbed = (url: string) => {
    try {
      const u = new URL(url);
      // youtu.be short links
      if (u.hostname === 'youtu.be') {
        const id = u.pathname.replace(/^\//, '');
        return `https://www.youtube.com/embed/${id}?autoplay=1`;
      }

      // youtube.com links (watch?v=...) or /embed/
      if (u.hostname.includes('youtube.com')) {
        // If it's already an embed URL, return as-is with autoplay
        if (u.pathname.startsWith('/embed/')) {
          return url.includes('?') ? `${url}&autoplay=1` : `${url}?autoplay=1`;
        }

        const params = new URLSearchParams(u.search);
        const vid = params.get('v');
        if (vid) return `https://www.youtube.com/embed/${vid}?autoplay=1`;
      }

      return null;
    } catch (e) {
      return null;
    }
  };

  return (
    <>
      {/* Grid of Video Thumbnails */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onClick={() => setSelectedVideo(testimonial)}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative aspect-video">
              <ImageWithFallback
                src={testimonial.thumbnail}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
              
              {/* Play Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                  <Play className="w-8 h-8 text-[#3B755F] ml-1" fill="currentColor" />
                </div>
              </motion.div>
            </div>
            
            <div className="p-4 bg-white">
              <h4 className="text-[#1E1E1E] mb-1">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">{testimonial.quote}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e: MouseEvent) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              {/* Video Player */}
              <div className="aspect-video bg-black">
                {(() => {
                  const embed = getYouTubeEmbed(selectedVideo.videoUrl);
                  if (embed) {
                    return (
                      <iframe
                        className="w-full h-full"
                        src={embed}
                        title={selectedVideo.name}
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    );
                  }

                  // Fall back to native video element for local/mp4 links
                  return (
                    <video
                      className="w-full h-full"
                      controls
                      autoPlay
                      src={selectedVideo.videoUrl}
                    >
                      Your browser does not support the video tag.
                    </video>
                  );
                })()}
              </div>

              {/* Video Info */}
              <div className="p-6 bg-white">
                <h3 className="text-[#1E1E1E] mb-2">{selectedVideo.name}</h3>
                <p className="text-sm text-[#3B755F] uppercase tracking-wider mb-3">
                  {selectedVideo.role}
                </p>
                <p className="text-gray-600">{selectedVideo.quote}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
