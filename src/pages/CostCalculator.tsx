import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Slider } from '../components/ui/slider';
import { Check, DollarSign } from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
}

const serviceOptions: ServiceOption[] = [
  { id: 'garden-design', name: 'Garden Design', basePrice: 3000 },
  { id: 'maintenance', name: 'Monthly Maintenance', basePrice: 300 },
  { id: 'landscaping', name: 'Hard & Soft Landscaping', basePrice: 8000 },
  { id: 'irrigation', name: 'Irrigation System', basePrice: 4000 },
  { id: 'pergola', name: 'Pergola/Gazebo', basePrice: 6000 },
  { id: 'outdoor-kitchen', name: 'Outdoor Kitchen', basePrice: 12000 },
  { id: 'lighting', name: 'Landscape Lighting', basePrice: 2500 },
  { id: 'pool', name: 'Pool Maintenance', basePrice: 250 },
];

export function CostCalculator() {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const [propertySize, setPropertySize] = useState([2000]);
  const [complexity, setComplexity] = useState([50]);

  const toggleService = (serviceId: string) => {
    const newServices = new Set(selectedServices);
    if (newServices.has(serviceId)) {
      newServices.delete(serviceId);
    } else {
      newServices.add(serviceId);
    }
    setSelectedServices(newServices);
  };

  const calculateTotal = () => {
    let total = 0;
    selectedServices.forEach((serviceId) => {
      const service = serviceOptions.find((s) => s.id === serviceId);
      if (service) {
        total += service.basePrice;
      }
    });

    // Apply multipliers
    const sizeMultiplier = propertySize[0] / 2000;
    const complexityMultiplier = 1 + (complexity[0] / 100) * 0.5;

    return Math.round(total * sizeMultiplier * complexityMultiplier);
  };

  const estimatedCost = calculateTotal();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            // src="https://images.unsplash.com/photo-1627590919493-9dc6f72b0b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbGFuZHNjYXBpbmclMjBkZXNpZ258ZW58MXx8fHwxNzYxNTAyNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            src="assets/images/Magboulevarddubaisouth/e1915a6e-c9d6-44df-828a-d2410d2ffd69.JPG"
            alt="Cost Calculator"
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
            Cost Calculator
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Get an instant estimate for your landscaping project
          </motion.p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-[#F9FBF9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Left Column - Inputs */}
            <div className="lg:col-span-2 space-y-8">
              {/* Services Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-[#3B755F] mb-4">Select Services</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {serviceOptions.map((service) => (
                    <motion.button
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                        selectedServices.has(service.id)
                          ? 'border-[#3B755F] bg-[#A4C2A5]/10'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-sm">{service.name}</span>
                      {selectedServices.has(service.id) && (
                        <Check className="w-5 h-5 text-[#3B755F]" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Property Size */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-[#3B755F] mb-4">Property Size</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Size (sq ft)</span>
                    <span className="text-[#3B755F]">{propertySize[0].toLocaleString()} sq ft</span>
                  </div>
                  <Slider
                    value={propertySize}
                    onValueChange={setPropertySize}
                    min={500}
                    max={10000}
                    step={100}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>500 sq ft</span>
                    <span>10,000 sq ft</span>
                  </div>
                </div>
              </motion.div>

              {/* Complexity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-[#3B755F] mb-4">Project Complexity</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Complexity Level</span>
                    <span className="text-[#3B755F]">
                      {complexity[0] < 33 ? 'Basic' : complexity[0] < 66 ? 'Moderate' : 'Complex'}
                    </span>
                  </div>
                  <Slider
                    value={complexity}
                    onValueChange={setComplexity}
                    min={0}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Basic</span>
                    <span>Moderate</span>
                    <span>Complex</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Estimate */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-[#3B755F] to-[#88B391] text-white p-8 rounded-lg shadow-xl sticky top-28"
              >
                <div className="flex items-center gap-2 mb-6">
                  <DollarSign className="w-6 h-6" />
                  <h3 className="text-white">Estimated Cost</h3>
                </div>

                <motion.div
                  className="mb-6"
                  key={estimatedCost}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <span className="text-sm opacity-90">Starting from</span>
                  <div className="text-white mt-1">
                    ${estimatedCost.toLocaleString()}
                  </div>
                </motion.div>

                <div className="space-y-3 mb-6 pb-6 border-b border-white/20">
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="opacity-90">Selected Services:</span>
                      <span>{selectedServices.size}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="opacity-90">Property Size:</span>
                      <span>{propertySize[0].toLocaleString()} sq ft</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-90">Complexity:</span>
                      <span>
                        {complexity[0] < 33 ? 'Basic' : complexity[0] < 66 ? 'Moderate' : 'Complex'}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm opacity-90 mb-6">
                  This is a rough estimate. Actual costs may vary based on specific requirements, materials, and site conditions.
                </p>

                <Link to="/contact">
                  <Button className="w-full bg-white text-[#3B755F] hover:bg-gray-100">
                    Get Accurate Quote
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            <strong>Important:</strong> This calculator provides a general estimate only. Final pricing depends on detailed site assessment, material choices, labor requirements, and project timeline. Contact us for a comprehensive, personalized quote.
          </p>
        </div>
      </section>
    </>
  );
}
