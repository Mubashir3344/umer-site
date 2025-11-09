import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { services, Service } from '../data/services';
import * as Icons from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type FilterCategory = 'all' | 'design' | 'maintenance' | 'living';

export function Services() {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filteredServices = filter === 'all' 
    ? services 
    : services.filter(service => service.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            // src="https://images.unsplash.com/photo-1627590919493-9dc6f72b0b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbGFuZHNjYXBpbmclMjBkZXNpZ258ZW58MXx8fHwxNzYxNTAyNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            src="assets/images/Magboulevarddubaisouth/e1915a6e-c9d6-44df-828a-d2410d2ffd69.JPG"
            alt="Landscape services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Comprehensive solutions for every aspect of outdoor living
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'All Services', value: 'all' as FilterCategory },
              { label: 'Design', value: 'design' as FilterCategory },
              { label: 'Maintenance', value: 'maintenance' as FilterCategory },
              { label: 'Living Features', value: 'living' as FilterCategory },
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
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F9FBF9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
              
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link to={`/services/${service.id}`}>
                    <motion.div
                      className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow overflow-hidden group h-full flex flex-col"
                      whileHover={{ y: -5 }}
                    >
                      {/* Service Image */}
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="w-12 h-12 bg-[#3B755F] rounded-lg flex items-center justify-center">
                            {IconComponent && (
                              <IconComponent className="w-6 h-6 text-white" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Service Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="mb-3 text-[#1E1E1E] group-hover:text-[#3B755F] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4 flex-1">
                          {service.description}
                        </p>
                        <span className="text-sm text-[#3B755F] uppercase tracking-wider group-hover:underline">
                          Learn More →
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}