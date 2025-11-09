export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'outdoor-living';
  image: string;
  description: string;
  location: string;
  year: string;
  challenges?: string;
  results?: string;
}

export const projects: Project[] = [
  {
    id: 'modern-zen-garden',
    title: 'Modern Zen Garden',
    category: 'residential',
    // image: 'https://images.unsplash.com/photo-1758450399245-0e1c5d4c2536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB6ZW4lMjBnYXJkZW4lMjBsYW5kc2NhcGluZ3xlbnwxfHx8fDE3NjE1MDI3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    // image: '/assets/images/Auragardentilalalghaff/IMG_7257.jpg',
    image: '/assets/images/Auragardentilalalghaff/IMG_7975.jpg',
    description: 'A minimalist Japanese-inspired garden featuring clean lines, natural stone pathways, and carefully curated plant selections.',
    location: 'Gated community in Dubai, United Arab Emirates',
    year: '2024',
    challenges: 'Creating a serene meditation space in a compact urban lot while maintaining privacy from neighboring properties.',
    results: 'A tranquil retreat featuring bamboo screens, a koi pond, and contemplative seating areas that transformed the small yard into a peaceful sanctuary.'
  },
  {
    id: 'luxury-lawn-oasis',
    title: 'Luxury Lawn Oasis',
    category: 'outdoor-living',
    // image: 'https://images.unsplash.com/photo-1749036838879-e8ef99b902b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwb29sJTIwb3V0ZG9vciUyMGxpdmluZ3xlbnwxfHx8fDE3NjE1MDI3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image: '/assets/images/Magboulevarddubaisouth/IMG_9345.jpg',
    description: 'Complete outdoor living transformation with infinity pool, outdoor kitchen, fire features, and lush tropical landscaping.',
    location: 'Real estate developer in Dubai, United Arab Emirates',
    year: '2024',
    challenges: 'Integrating multiple entertainment zones while preserving ocean views and managing hillside drainage.',
    results: 'A stunning resort-style backyard with seamless indoor-outdoor flow, custom pergola, and sustainable irrigation system.'
  },
  {
    id: 'corporate-green-space',
    title: 'Corporate Green Space',
    category: 'commercial',
    // image: 'https://images.unsplash.com/photo-1634007517395-b0a7ff41b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBncmVlbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjE1MDI3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image: '/assets/images/Aura2tilalalghaff/025c7e58-27dd-48ae-9392-8893e1e4a06b.jpg',
    description: 'Sustainable landscape design for a tech campus featuring native plants, rain gardens, and outdoor collaboration areas.',
    location: 'Gated community in Dubai, United Arab Emirates',
    year: '2023',
    challenges: 'Balancing aesthetic appeal with low-water requirements and creating functional outdoor workspaces.',
    results: 'LEED-certified landscape with 40% water reduction, enhanced biodiversity, and employee wellness spaces.'
  },
  {
    id: 'cottage-garden-revival',
    title: 'Cottage Garden Revival',
    category: 'residential',
    // image: 'https://images.unsplash.com/photo-1660512389595-b8c351995283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0YWdlJTIwZ2FyZGVuJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NjE0MTcyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image: '/assets/images/Alsharqhospital/IMG_8198.jpg',
    description: 'Traditional English cottage garden reimagined with perennial borders, rose arbors, and meandering pathways.',
    location: 'Hospital in Fujairah, United Arab Emirates',
    year: '2023',
    challenges: 'Restoring historic garden character while updating infrastructure and improving soil quality.',
    results: 'Award-winning garden featuring over 100 plant varieties, heritage roses, and a charming potting shed.'
  },
  {
    id: 'rooftop-terrace',
    title: 'Rooftop Terrace Garden',
    category: 'outdoor-living',
    // image: 'https://images.unsplash.com/photo-1749759426604-063b5effd7a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwZ2FyZGVuJTIwdGVycmFjZXxlbnwxfHx8fDE3NjE1MDI3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  image: '/assets/images/Magboulevarddubaisouth/project.JPG',
    description: 'Urban rooftop transformation with container gardens, built-in seating, and ambient lighting.',
    location: 'Gated community in Dubai, United Arab Emirates',
    year: '2024',
    challenges: 'Working within weight restrictions while creating a lush green space with wind protection.',
    results: 'Multi-functional rooftop retreat with modular planters, irrigation automation, and panoramic city views.'
  },
  {
    id: 'resort-entrance',
    title: 'Resort Entrance Landscape',
    category: 'commercial',
    // image: 'https://images.unsplash.com/photo-1640443962411-38bf551329e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBwYWxtJTIwdHJlZXMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxNTAyNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image: '/assets/images/Auragardentilalalghaff/e572bb79-265c-4686-bf2c-1f1b0056188e.JPG',
    description: 'Grand entrance design featuring palm-lined drives, water features, and tropical resort-style plantings.',
    location: 'Real estate developer in Dubai, United Arab Emirates',
    year: '2023',
    challenges: 'Creating dramatic first impressions while maintaining desert-appropriate plant selections.',
    results: 'Stunning arrival experience with drought-tolerant palms, succulents, and nighttime lighting drama.'
  }
];