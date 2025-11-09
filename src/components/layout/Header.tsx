import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';
import { services } from '../../data/services';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services', hasDropdown: true },
  { name: 'Projects', path: '/projects' },
  { name: 'Resources', path: '/resources', hasDropdown: true },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group relative z-50">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Leaf className="w-8 h-8 text-[#3B755F]" />
              </motion.div>
              <span className={`uppercase tracking-wider transition-colors ${
                isScrolled ? 'text-[#1E1E1E]' : 'text-white'
              }`}>
                Green Space
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      if (item.name === 'Services') {
                        setServicesDropdownOpen(true);
                        setResourcesDropdownOpen(false);
                      } else if (item.name === 'Resources') {
                        setResourcesDropdownOpen(true);
                        setServicesDropdownOpen(false);
                      }
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.hasDropdown) {
                      if (item.name === 'Services') {
                        setServicesDropdownOpen(false);
                      } else if (item.name === 'Resources') {
                        setResourcesDropdownOpen(false);
                      }
                    }
                  }}
                >
                  <Link
                    to={item.path}
                    className="relative uppercase tracking-wider text-sm group flex items-center gap-1"
                  >
                    <span className={`transition-colors ${
                      location.pathname === item.path || (item.hasDropdown && location.pathname.startsWith(item.path))
                        ? 'text-[#3B755F]'
                        : isScrolled
                        ? 'text-[#1E1E1E] hover:text-[#3B755F]'
                        : 'text-white hover:text-[#A4C2A5]'
                    }`}>
                      {item.name}
                    </span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-all ${
                        (item.name === 'Services' && servicesDropdownOpen) || (item.name === 'Resources' && resourcesDropdownOpen) ? 'rotate-180' : ''
                      } ${
                        location.pathname === item.path || location.pathname.startsWith(item.path)
                          ? 'text-[#3B755F]'
                          : isScrolled
                          ? 'text-[#1E1E1E]'
                          : 'text-white'
                      }`} />
                    )}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#3B755F]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: location.pathname === item.path || (item.hasDropdown && location.pathname.startsWith(item.path)) ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>

                  {/* Services Dropdown */}
                  {item.hasDropdown && item.name === 'Services' && (
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="py-2">
                            <Link
                              to="/services"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#A4C2A5]/10 hover:text-[#3B755F] transition-colors uppercase tracking-wider border-b border-gray-100"
                            >
                              All Services
                            </Link>
                            {services.map((service) => (
                              <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#A4C2A5]/10 hover:text-[#3B755F] transition-colors"
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Resources Dropdown */}
                  {item.hasDropdown && item.name === 'Resources' && (
                    <AnimatePresence>
                      {resourcesDropdownOpen && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="py-2">
                            <Link
                              to="/faq"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#A4C2A5]/10 hover:text-[#3B755F] transition-colors"
                            >
                              FAQ
                            </Link>
                            <Link
                              to="/cost-calculator"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#A4C2A5]/10 hover:text-[#3B755F] transition-colors"
                            >
                              Cost Calculator
                            </Link>
                            <Link
                              to="/seasonal-calendar"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#A4C2A5]/10 hover:text-[#3B755F] transition-colors"
                            >
                              Seasonal Calendar
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 relative z-50 ${
                isScrolled ? 'text-[#1E1E1E]' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* White Background */}
            <div className="absolute inset-0 bg-white" />

            {/* Menu Content */}
            <motion.div
              className="absolute inset-0 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="min-h-full flex items-center justify-center px-6 py-24">
                <nav className="w-full max-w-md space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.15 }}
                      className="w-full"
                    >
                      {/* Main Nav Item */}
                      <div className="relative">
                        <Link
                          to={item.path}
                          className={`block text-center py-3 px-6 rounded-lg transition-all duration-300 ${
                            location.pathname === item.path
                              ? 'bg-[#3B755F] text-white'
                              : 'text-[#1E1E1E] hover:bg-[#F9FBF9]'
                          }`}
                        >
                          <span className="uppercase tracking-wider text-base block">
                            {item.name}
                          </span>
                        </Link>

                        {/* Dropdown Toggle for Services */}
                        {item.hasDropdown && item.name === 'Services' && (
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2"
                          >
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${
                                mobileServicesOpen ? 'rotate-180' : ''
                              } ${
                                location.pathname === item.path ? 'text-white' : 'text-[#3B755F]'
                              }`}
                            />
                          </button>
                        )}

                        {/* Dropdown Toggle for Resources */}
                        {item.hasDropdown && item.name === 'Resources' && (
                          <button
                            onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2"
                          >
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${
                                mobileResourcesOpen ? 'rotate-180' : ''
                              } ${
                                location.pathname === item.path ? 'text-white' : 'text-[#3B755F]'
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Services Dropdown Content */}
                      {item.hasDropdown && item.name === 'Services' && (
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-2 space-y-1 pl-4">
                                <Link
                                  to="/services"
                                  className="block py-2 px-4 text-sm text-[#3B755F] hover:bg-[#A4C2A5]/10 rounded-lg transition-colors"
                                >
                                  All Services
                                </Link>
                                {services.map((service) => (
                                  <Link
                                    key={service.id}
                                    to={`/services/${service.id}`}
                                    className="block py-2 px-4 text-sm text-gray-600 hover:text-[#3B755F] hover:bg-[#A4C2A5]/10 rounded-lg transition-colors"
                                  >
                                    {service.title}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}

                      {/* Resources Dropdown Content */}
                      {item.hasDropdown && item.name === 'Resources' && (
                        <AnimatePresence>
                          {mobileResourcesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-2 space-y-1 pl-4">
                                <Link
                                  to="/faq"
                                  className="block py-2 px-4 text-sm text-gray-600 hover:text-[#3B755F] hover:bg-[#A4C2A5]/10 rounded-lg transition-colors"
                                >
                                  FAQ
                                </Link>
                                <Link
                                  to="/cost-calculator"
                                  className="block py-2 px-4 text-sm text-gray-600 hover:text-[#3B755F] hover:bg-[#A4C2A5]/10 rounded-lg transition-colors"
                                >
                                  Cost Calculator
                                </Link>
                                <Link
                                  to="/seasonal-calendar"
                                  className="block py-2 px-4 text-sm text-gray-600 hover:text-[#3B755F] hover:bg-[#A4C2A5]/10 rounded-lg transition-colors"
                                >
                                  Seasonal Calendar
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.div>
                  ))}

                  {/* Decorative Bottom Element */}
                  <motion.div
                    className="pt-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Leaf className="w-10 h-10 text-[#A4C2A5] mx-auto" />
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}