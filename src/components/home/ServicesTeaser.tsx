import { motion } from "motion/react";
import { services } from "../../data/services";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";

export function ServicesTeaser() {
  return (
    <section className="py-20 bg-[#F9FBF9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#3B755F] mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive landscape solutions tailored to bring your outdoor
            vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, index) => {
            const IconComponent = Icons[
              service.icon as keyof typeof Icons
            ] as React.ComponentType<{ className?: string }>;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={`/services/${service.id}`}>
                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow group cursor-pointer h-full"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-[#A4C2A5]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#3B755F] transition-colors">
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-[#3B755F] group-hover:text-white transition-colors" />
                      )}
                    </div>
                    <h3 className="mb-2 text-[#1E1E1E] group-hover:text-[#3B755F] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/services"
            className="inline-block text-[#3B755F] hover:text-[#88B391] uppercase tracking-wider text-sm transition-colors"
          >
            View All Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
