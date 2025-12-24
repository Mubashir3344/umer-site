import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Leaf, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Cost Calculator', path: '/cost-calculator' },
  { name: 'Seasonal Calendar', path: '/seasonal-calendar' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/share/17a4v8Tv9x/?mibextid=LQQJ4d', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/green_spacelandscaping?igsh=MWYyYnNhajlwdHN2OQ%3D%3D&utm_source=qr', label: 'Instagram' },
  // { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E1E1E] text-white">
      {/* Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 text-[#F9FBF9]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-8 h-8 text-[#A4C2A5]" />
              <span className="uppercase tracking-wider">Green Space Landscapes</span>
            </div>
            <p className="text-gray-400 mb-4">
              Crafting nature-inspired spaces for modern living through sustainable design and expert craftsmanship.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#A4C2A5]" />
                <span>Office#284 The Bristol Hotel behind 818 Police Station Barracks - near Al Muraqqabat - Al Muraqqabat - Deira - Dubai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#A4C2A5]" />
                <span>+971552651662</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#A4C2A5]" />
                <span>contact@greenspacelandscapes.ae</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#A4C2A5] transition-colors inline-block"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              {quickLinks.slice(5).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#A4C2A5] transition-colors inline-block"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="uppercase tracking-wider mb-4">Connect With Us</h3>
            <p className="text-gray-400 mb-4">
              Follow our journey and get inspired by the latest landscape designs and outdoor living trends.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#3B755F] flex items-center justify-center hover:bg-[#A4C2A5] transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Green Space Landscapes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}