export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  category: 'design' | 'maintenance' | 'living';
  image: string;
  detailedContent: {
    overview: string;
    features: string[];
    process: { step: string; description: string }[];
    benefits: string[];
    gallery: string[];
  };
}

export const services: Service[] = [
  {
    id: 'garden-design',
    title: 'Garden Design',
    description: 'Transforming outdoor spaces into personal sanctuaries',
    fullDescription: 'We transform outdoor spaces into personal sanctuaries. From conceptual sketches to full implementation, every detail reflects your style and the environment\'s natural rhythm. Our designs blend aesthetic beauty with functional outdoor living.',
    icon: 'Flower2',
    category: 'design',
    // image: 'https://images.unsplash.com/photo-1521446652717-278e3f3f7353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBkZXNpZ24lMjBsYW5kc2NhcGluZ3xlbnwxfHx8fDE3NjE1MDMzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image: '/assets/images/Magboulevarddubaisouth/IMG_9345.jpg',
    detailedContent: {
      overview: 'Our garden design service creates stunning outdoor environments that seamlessly blend with your lifestyle and architecture. We believe every garden should tell a story—your story. Through collaborative design sessions, site analysis, and creative vision, we craft landscapes that evolve beautifully through the seasons.',
      features: [
        'Custom 3D landscape visualizations',
        'Detailed planting plans with native and exotic species',
        'Hardscape integration (pathways, patios, walls)',
        'Seasonal color planning',
        'Sustainable design principles',
        'Water-wise plant selections'
      ],
      process: [
        { step: 'Initial Consultation', description: 'We meet to understand your vision, lifestyle, budget, and site conditions.' },
        { step: 'Site Analysis', description: 'Comprehensive evaluation of soil, drainage, sunlight, and existing features.' },
        { step: 'Concept Design', description: 'Presentation of initial design concepts with mood boards and sketches.' },
        { step: 'Design Development', description: 'Refinement of chosen concept with detailed plans and plant selections.' },
        { step: 'Implementation', description: 'Professional installation with ongoing supervision and quality control.' }
      ],
      benefits: [
        'Increased property value',
        'Enhanced outdoor living experience',
        'Year-round visual interest',
        'Reduced maintenance through smart design',
        'Improved environmental sustainability',
        'Personalized sanctuary for relaxation'
      ],
      gallery: [
        // 'https://images.unsplash.com/photo-1667859626967-544340ba847f?w=800',
        // 'https://images.unsplash.com/photo-1627590919493-9dc6f72b0b08?w=800',
        // 'https://images.unsplash.com/photo-1660512389595-b8c351995283?w=800'
        '/assets/images/Magboulevarddubaisouth/IMG_8960.jpg',
        '/assets/images/Magboulevarddubaisouth/72511cb3-450c-4ce2-b6af-7a555aa743d0.JPG',
        '/assets/images/Magboulevarddubaisouth/27d0b548-cfaf-4f09-b68e-8e96e45edfa7.JPG'
      ]
    }
  },
  {
    id: 'garden-maintenance',
    title: 'Garden Maintenance',
    description: 'Expert care to keep your landscape thriving',
    fullDescription: 'Regular maintenance programs tailored to your garden\'s unique needs. From pruning and fertilization to seasonal care, we ensure your landscape remains vibrant and healthy throughout the year.',
    icon: 'Scissors',
    category: 'maintenance',
    // image: 'https://images.unsplash.com/photo-1759496607068-f2892afdaf23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBtYWludGVuYW5jZSUyMHBydW5pbmd8ZW58MXx8fHwxNzYxNDc4Mzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image: '/assets/images/Auragardentilalalghaff/73303f47-dc17-4f0d-9993-f787bacb1060.JPG',
    detailedContent: {
      overview: 'A beautiful garden requires consistent, expert care. Our maintenance programs are customized to your landscape\'s specific needs, ensuring it remains healthy, vibrant, and perfectly manicured year-round. From weekly visits to seasonal services, we handle everything.',
      features: [
        'Weekly, bi-weekly, or monthly service schedules',
        'Professional pruning and shaping',
        'Lawn care and fertilization',
        'Weed control and mulching',
        'Seasonal cleanups',
        'Pest and disease management'
      ],
      process: [
        { step: 'Garden Assessment', description: 'Comprehensive evaluation of your landscape\'s current condition and needs.' },
        { step: 'Custom Plan', description: 'Development of a tailored maintenance schedule and service plan.' },
        { step: 'Regular Service', description: 'Scheduled visits by our professional maintenance team.' },
        { step: 'Seasonal Adjustments', description: 'Adaptive care based on seasonal requirements and plant needs.' },
        { step: 'Ongoing Communication', description: 'Regular updates and recommendations for landscape improvements.' }
      ],
      benefits: [
        'Consistent, professional care',
        'Early detection of plant health issues',
        'Time savings for busy homeowners',
        'Extended lifespan of landscape investments',
        'Always presentation-ready outdoor spaces',
        'Expert knowledge applied to your garden'
      ],
      gallery: [
        // 'https://images.unsplash.com/photo-1667859626967-544340ba847f?w=800',
        // 'https://images.unsplash.com/photo-1627590919493-9dc6f72b0b08?w=800'
        '/assets/images/Auragardentilalalghaff/IMG_8179.jpg',
        '/assets/images/Auragardentilalalghaff/IMG_7260.jpg'
      ]
    }
  },
  {
    id: 'indoor-outdoor-plants',
    title: 'Indoor & Outdoor Plants',
    description: 'Curated selection and installation of premium plants',
    fullDescription: 'Expert plant selection and installation services for both indoor and outdoor environments. We source premium plants that thrive in your specific climate and aesthetic preferences.',
    icon: 'Sprout',
    category: 'design',
    // image: 'https://images.unsplash.com/photo-1656503512503-b80c89f9909c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBvdXRkb29yJTIwcGxhbnRzfGVufDF8fHx8MTc2MTUwMzM0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image: '/assets/images/Aura2villa25tilalalghaff/IMG_7979.jpg',
    detailedContent: {
      overview: 'Transform any space with our curated plant collections. We source the finest specimens and provide expert installation and care guidance for both indoor and outdoor environments. Whether you need statement trees, colorful perennials, or low-maintenance succulents, we have the perfect selections.',
      features: [
        'Premium plant sourcing from top nurseries',
        'Climate-appropriate selections',
        'Container garden design',
        'Indoor plant styling',
        'Seasonal color installations',
        'Care and maintenance guidance'
      ],
      process: [
        { step: 'Consultation', description: 'Discuss your space, light conditions, and aesthetic preferences.' },
        { step: 'Plant Selection', description: 'Curate perfect plants based on your environment and style.' },
        { step: 'Sourcing', description: 'Acquire premium specimens from trusted nurseries.' },
        { step: 'Installation', description: 'Professional planting with proper soil, placement, and care.' },
        { step: 'Care Instructions', description: 'Detailed guidance on watering, feeding, and maintenance.' }
      ],
      benefits: [
        'Healthier indoor air quality',
        'Enhanced aesthetic appeal',
        'Expert plant knowledge',
        'Higher success rates',
        'Seasonal variety options',
        'Ongoing plant health support'
      ],
      gallery: [
        '/assets/images/Aura2villa25tilalalghaff/IMG_8169.jpg',
        '/assets/images/Aura2villa25tilalalghaff/IMG_8180.jpg'
      ]
    }
  },
  {
    id: 'pool-maintenance',
    title: 'Pool Maintenance',
    description: 'Professional pool care and cleaning services',
    fullDescription: 'Comprehensive pool maintenance including cleaning, chemical balancing, equipment inspection, and seasonal preparation. Keep your pool pristine and safe year-round.',
    icon: 'Waves',
    category: 'maintenance',
    // image: 'https://images.unsplash.com/photo-1758530273451-b9d3f3e315dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwbWFpbnRlbmFuY2UlMjBjbGVhbmluZ3xlbnwxfHx8fDE3NjE1MDMzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image: '/assets/images/videos/poolmaintain.jpg',
    detailedContent: {
      overview: 'Keep your pool sparkling clean and perfectly balanced with our professional maintenance services. We handle everything from routine cleaning to equipment maintenance, ensuring your pool is always ready for enjoyment while protecting your investment.',
      features: [
        'Weekly chemical testing and balancing',
        'Surface skimming and debris removal',
        'Vacuum and brush cleaning',
        'Filter cleaning and maintenance',
        'Equipment inspection',
        'Winterization and opening services'
      ],
      process: [
        { step: 'Initial Inspection', description: 'Complete assessment of pool condition and equipment.' },
        { step: 'Service Schedule', description: 'Establish regular maintenance visits based on your needs.' },
        { step: 'Routine Cleaning', description: 'Weekly or bi-weekly cleaning and chemical balancing.' },
        { step: 'Equipment Check', description: 'Regular inspection and maintenance of pumps, filters, and heaters.' },
        { step: 'Seasonal Service', description: 'Winterization and spring opening procedures.' }
      ],
      benefits: [
        'Crystal clear, safe water',
        'Extended equipment lifespan',
        'Reduced repair costs',
        'More swim-ready time',
        'Expert problem detection',
        'Peace of mind'
      ],
      gallery: [
        // 'https://images.unsplash.com/photo-1749036838879-e8ef99b902b7?w=800',
        // 'https://images.unsplash.com/photo-1758530273451-b9d3f3e315dc?w=800'
        '/assets/images/videos/poolmaintain1.jpg',
        '/assets/images/videos/diego-acosta-tFnlDs4gIUU-unsplash.jpg'
      ]
    }
  },
  {
    id: 'landscaping',
    title: 'Soft & Hard Landscaping',
    description: 'Complete landscape construction and design',
    fullDescription: 'Full-spectrum landscaping services from softscaping (plants, soil, mulch) to hardscaping (patios, walkways, retaining walls). We create cohesive outdoor environments that blend natural and built elements.',
    icon: 'Mountain',
    category: 'design',
    // image: 'https://images.unsplash.com/photo-1695686017637-96e777191710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkc2NhcGUlMjBwYXRpbyUyMHdhbGt3YXl8ZW58MXx8fHwxNzYxNTAzMzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image: '/assets/images/Alsharqhospital/IMG_8193.jpg',
    detailedContent: {
      overview: 'Transform your outdoor space with our comprehensive landscaping services. We expertly blend hardscape elements like patios, walkways, and retaining walls with lush softscaping to create functional, beautiful outdoor environments that enhance your property.',
      features: [
        'Custom patio and deck design',
        'Natural stone and paver installation',
        'Retaining walls and terracing',
        'Walkways and driveways',
        'Planting and garden beds',
        'Drainage solutions'
      ],
      process: [
        { step: 'Site Planning', description: 'Detailed survey and design of hardscape and softscape elements.' },
        { step: 'Material Selection', description: 'Choose from premium pavers, stone, and plant materials.' },
        { step: 'Excavation & Prep', description: 'Professional site preparation and grading.' },
        { step: 'Installation', description: 'Expert construction of hardscape and planting.' },
        { step: 'Finishing Touches', description: 'Final grading, mulching, and detail work.' }
      ],
      benefits: [
        'Increased usable outdoor space',
        'Enhanced curb appeal',
        'Improved drainage and erosion control',
        'Long-lasting quality materials',
        'Cohesive design integration',
        'Significant property value increase'
      ],
      gallery: [
        '/assets/images/Alsharqhospital/IMG_8198.jpg',
        '/assets/images/Alsharqhospital/IMG_8197.jpg'
      ]
    }
  },
  {
    id: 'irrigation',
    title: 'Irrigation System',
    description: 'Smart watering solutions for optimal efficiency',
    fullDescription: 'Design and installation of efficient irrigation systems customized to your landscape. Smart controllers, drip systems, and water-saving technologies that keep your plants healthy while conserving resources.',
    icon: 'Droplets',
    category: 'living',
    // image: 'https://images.unsplash.com/photo-1612523581462-94c4e89bd69b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcnJpZ2F0aW9uJTIwc3ByaW5rbGVyJTIwc3lzdGVtfGVufDF8fHx8MTc2MTUwMzM0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image: '/assets/images/Aura2tilalalghaff/IMG_9347.jpg',
    detailedContent: {
      overview: 'Optimize your landscape watering with our smart irrigation solutions. We design and install efficient systems that deliver the right amount of water exactly where and when it\'s needed, reducing waste while keeping your plants thriving.',
      features: [
        'Smart WiFi-enabled controllers',
        'Drip irrigation for gardens and beds',
        'Spray systems for lawns',
        'Rain and soil moisture sensors',
        'Zone-based watering schedules',
        'Water usage monitoring'
      ],
      process: [
        { step: 'System Design', description: 'Custom irrigation plan based on plant types and zones.' },
        { step: 'Equipment Selection', description: 'Choose smart controllers and efficient emitters.' },
        { step: 'Installation', description: 'Professional trenching and system installation.' },
        { step: 'Programming', description: 'Setup of watering schedules and sensor calibration.' },
        { step: 'Training', description: 'Complete instruction on system operation and adjustments.' }
      ],
      benefits: [
        'Up to 50% water savings',
        'Healthier plant growth',
        'Automated convenience',
        'Remote control via smartphone',
        'Reduced water bills',
        'Environmental conservation'
      ],
      gallery: [
        // 'https://images.unsplash.com/photo-1612523581462-94c4e89bd69b?w=800',
        // 'https://images.unsplash.com/photo-1667859626967-544340ba847f?w=800'
        '/assets/images/Aura2tilalalghaff/6d675ec8-12c5-4f28-a9a3-b414331f54d4.jpg',
        '/assets/images/Aura2tilalalghaff/6ef1b8c0-ca6d-478a-86be-0aaccec5f2f8.jpg'
      ]
    }
  },
  {
    id: 'pergola-gazebo',
    title: 'Pergola & Gazebo',
    description: 'Elegant structures for outdoor living',
    fullDescription: 'Custom-designed pergolas and gazebos that provide shade, define outdoor rooms, and add architectural interest to your landscape. Built with quality materials and expert craftsmanship.',
    icon: 'Home',
    category: 'living',
    // image: 'https://images.unsplash.com/photo-1739850268211-a6c15e050f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJnb2xhJTIwZ2F6ZWJvJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NjE1MDMzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image: '/assets/images/Aura1tilalalghaf/IMG_8969.jpg',
    detailedContent: {
      overview: 'Add architectural beauty and functional shade to your outdoor space with custom pergolas and gazebos. These elegant structures create defined outdoor rooms perfect for dining, entertaining, or relaxation while adding significant visual appeal.',
      features: [
        'Custom design to match your architecture',
        'Premium wood, aluminum, or composite materials',
        'Integrated lighting options',
        'Retractable canopy systems',
        'Climbing plant integration',
        'Built-in seating options'
      ],
      process: [
        { step: 'Design Consultation', description: 'Discuss style preferences, size, and placement.' },
        { step: '3D Visualization', description: 'Review detailed renderings of your custom structure.' },
        { step: 'Material Selection', description: 'Choose from premium materials and finishes.' },
        { step: 'Construction', description: 'Expert building with attention to detail and quality.' },
        { step: 'Installation', description: 'Secure mounting and finishing touches.' }
      ],
      benefits: [
        'Defined outdoor living space',
        'Shade and weather protection',
        'Increased property value',
        'Architectural focal point',
        'Extended outdoor season',
        'Versatile entertainment area'
      ],
      gallery: [
        '/assets/images/Aura1tilalalghaf/IMG_8959.jpg',
        '/assets/images/Aura1tilalalghaf/IMG_8974.jpg'
      ]
    }
  },
  {
    id: 'artificial-grass',
    title: 'Artificial Grass',
    description: 'Low-maintenance, lush green lawns',
    fullDescription: 'Premium artificial grass installation for year-round green spaces without the maintenance. Perfect for high-traffic areas, water conservation, and creating consistent beauty.',
    icon: 'Square',
    category: 'design',
    image: '/assets/images/videos/agrass.jpg',
    detailedContent: {
      overview: 'Enjoy a perfect lawn year-round without mowing, watering, or fertilizing. Our premium artificial grass installations look and feel remarkably natural while providing durability and sustainability. Ideal for busy households, drought-prone areas, and high-traffic zones.',
      features: [
        'Premium synthetic turf products',
        'Natural appearance and feel',
        'Pet-friendly options',
        'UV-resistant materials',
        'Proper drainage systems',
        '15-20 year warranties'
      ],
      process: [
        { step: 'Site Preparation', description: 'Removal of existing lawn and proper grading.' },
        { step: 'Base Installation', description: 'Crushed aggregate base for drainage and stability.' },
        { step: 'Turf Selection', description: 'Choose from various textures and blade heights.' },
        { step: 'Professional Install', description: 'Precise cutting, seaming, and securing.' },
        { step: 'Infill Application', description: 'Final infill for natural look and performance.' }
      ],
      benefits: [
        'Zero watering requirements',
        'No mowing or maintenance',
        'Year-round green appearance',
        'Pet and child-friendly',
        'Significant water bill savings',
        'Eco-friendly choice'
      ],
      gallery: [
        '/assets/images/Fujairah/IMG_8967.jpg',
        '/assets/images/Fujairah/IMG_8971.jpg',
      ]
    }
  },
  {
    id: 'bbq-bar',
    title: 'BBQ & Bar Counter',
    description: 'Outdoor kitchens for entertaining',
    fullDescription: 'Custom outdoor kitchens, BBQ islands, and bar counters designed for entertaining. From built-in grills to complete outdoor living spaces, we create the perfect setting for gatherings.',
    icon: 'ChefHat',
    category: 'living',
    image: '/assets/images/videos/kitchen4.jpg',
    detailedContent: {
      overview: 'Elevate your outdoor entertaining with custom BBQ islands and bar counters. We design and build complete outdoor kitchens featuring premium appliances, durable countertops, and thoughtful layouts that make alfresco dining a daily pleasure.',
      features: [
        'Built-in gas or charcoal grills',
        'Granite or concrete countertops',
        'Refrigeration and storage',
        'Sinks with plumbing',
        'Bar seating areas',
        'Integrated lighting'
      ],
      process: [
        { step: 'Design Planning', description: 'Layout your perfect outdoor kitchen based on your needs.' },
        { step: 'Appliance Selection', description: 'Choose from premium grills and equipment.' },
        { step: 'Material Choice', description: 'Select countertops, cabinetry, and finishes.' },
        { step: 'Construction', description: 'Build custom structures with proper utilities.' },
        { step: 'Installation', description: 'Professional appliance installation and testing.' }
      ],
      benefits: [
        'Complete outdoor entertaining',
        'Increased home value',
        'Extended living space',
        'Chef-quality outdoor cooking',
        'Year-round usability',
        'Social gathering hub'
      ],
      gallery: [
        '/assets/images/videos/kitchen2.jpg',
        '/assets/images/videos/kitchen3.jpg',
        '/assets/images/videos/kitchen1.jpg'
      ]
    }
  },
  {
    id: 'outdoor-lighting',
    title: 'Outdoor Lighting',
    description: 'Illuminate your landscape with artful design',
    fullDescription: 'Landscape lighting design and installation that enhances safety, highlights architectural features, and creates ambiance. LED technology for energy efficiency and dramatic nighttime beauty.',
    icon: 'Lightbulb',
    category: 'living',
    image: '/assets/images/Magboulevarddubaisouth/e1915a6e-c9d6-44df-828a-d2410d2ffd69.JPG',
    detailedContent: {
      overview: 'Transform your landscape after dark with professional lighting design. Our systems enhance safety, highlight architectural and natural features, and create stunning ambiance for outdoor living. Energy-efficient LED technology ensures beautiful results with minimal operating costs.',
      features: [
        'LED energy-efficient fixtures',
        'Path and safety lighting',
        'Uplighting for trees and architecture',
        'Accent and focal point lighting',
        'Smart timer and control systems',
        'Low-voltage safety'
      ],
      process: [
        { step: 'Lighting Design', description: 'Create a comprehensive lighting plan for your landscape.' },
        { step: 'Fixture Selection', description: 'Choose from premium LED fixtures and styles.' },
        { step: 'Wiring Layout', description: 'Plan low-voltage wiring routes and transformer placement.' },
        { step: 'Installation', description: 'Professional installation with concealed wiring.' },
        { step: 'Programming', description: 'Set up timers and control systems.' }
      ],
      benefits: [
        'Enhanced nighttime curb appeal',
        'Improved safety and security',
        'Extended outdoor enjoyment',
        'Dramatic visual effects',
        'Low energy consumption',
        'Increased property value'
      ],
      gallery: [
        '/assets/images/Magboulevarddubaisouth/d650a6e1-38cf-4a8f-a1cf-e885a1592625.JPG',
        '/assets/images/Magboulevarddubaisouth/3466fa0a-3689-4530-b582-f35bdfe3a4bb.JPG',
        '/assets/images/Magboulevarddubaisouth/project.JPG'
      ]
    }
  }
];