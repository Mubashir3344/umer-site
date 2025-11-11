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
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 'modern-zen-garden',
    title: 'Modern Zen Garden',
    category: 'residential',
    // image: '/assets/images/Auragardentilalalghaff/IMG_7975.jpg',
    image: '/assets/images/Residential/Tilalalghaff/e1915a6e-c9d6-44df-828a-d2410d2ffd69.jpg',
    description: 'A minimalist Japanese-inspired garden featuring clean lines, natural stone pathways, and carefully curated plant selections.',
    location: 'Gated community in Dubai, United Arab Emirates',
    year: '2024',
    challenges: 'Creating a serene meditation space in a compact urban lot while maintaining privacy from neighboring properties.',
    results: 'A tranquil retreat featuring bamboo screens, a koi pond, and contemplative seating areas that transformed the small yard into a peaceful sanctuary.',
    gallery: [
      '/assets/images/Residential/Tilalalghaff/27d0b548-cfaf-4f09-b68e-8e96e45edfa7.jpg',
      '/assets/images/Residential/Tilalalghaff/61c810c7-c458-4f88-b643-845f0c42f09a.jpg',
      '/assets/images/Residential/Tilalalghaff/3466fa0a-3689-4530-b582-f35bdfe3a4bb.jpg',
      '/assets/images/Residential/Tilalalghaff/IMG_7979.JPG',
      '/assets/images/Residential/Tilalalghaff/9dd241ab-7eef-46e8-ad1f-48df884fbbf4.jpg',
      '/assets/images/Residential/Tilalalghaff/360dd301-ac5b-4ef3-9781-b04f8184881a.jpg',
      '/assets/images/Residential/Tilalalghaff/506bd064-ad72-484c-a9bb-34473ad0fe4d.jpg',
      '/assets/images/Residential/Tilalalghaff/72511cb3-450c-4ce2-b6af-7a555aa743d0.jpg',
      '/assets/images/Residential/Tilalalghaff/d650a6e1-38cf-4a8f-a1cf-e885a1592625.jpg',
      '/assets/images/Residential/Tilalalghaff/e572bb79-265c-4686-bf2c-1f1b0056188e.jpg',
      '/assets/images/Residential/Tilalalghaff/e1915a6e-c9d6-44df-828a-d2410d2ffd69.jpg',
      '/assets/images/Residential/Tilalalghaff/IMG_7708.JPG',
      '/assets/images/Residential/Tilalalghaff/IMG_7973.JPG',
      '/assets/images/Residential/Tilalalghaff/IMG_8179.JPG',
      '/assets/images/Residential/Tilalalghaff/IMG_8198.JPG',
      '/assets/images/Residential/Tilalalghaff/6d675ec8-12c5-4f28-a9a3-b414331f54d4.jpg',
      '/assets/images/Residential/Tilalalghaff/025c7e58-27dd-48ae-9392-8893e1e4a06b.jpg',
      '/assets/images/Residential/Tilalalghaff/73303f47-dc17-4f0d-9993-f787bacb1060.jpg',
      '/assets/images/Residential/Tilalalghaff/339607d4-3fcd-4d26-af24-bdc4604570e1.jpg',
      '/assets/images/Residential/Tilalalghaff/IMG_8197.JPG',
      '/assets/images/Residential/Tilalalghaff/IMG_6375.JPG',
      '/assets/images/Residential/Tilalalghaff/IMG_7257.JPG',
      '/assets/images/Residential/Tilalalghaff/IMG_7953.JPG',
      '/assets/images/Residential/Tilalalghaff/IMG_7970.JPG',
      '/assets/images/Residential/Tilalalghaff/IMG_7972.JPG',
      '/assets/images/Residential/Tilalalghaff/IMG_8180.JPG',
      '/assets/images/Residential/Tilalalghaff/IMG_8196.JPG'
      
    ]
  },
  {
    id: 'luxury-lawn-oasis',
    title: 'Luxury Lawn Oasis',
    category: 'commercial',
    image: '/assets/images/Magboulevarddubaisouth/IMG_9345.jpg',
    description: 'Complete outdoor living transformation with infinity pool, outdoor kitchen, fire features, and lush tropical landscaping.',
    location: 'Real estate developer in Dubai, United Arab Emirates',
    year: '2024',
    challenges: 'Integrating multiple entertainment zones while preserving ocean views and managing hillside drainage.',
    results: 'A stunning resort-style backyard with seamless indoor-outdoor flow, custom pergola, and sustainable irrigation system.',
      gallery: [
      '/assets/images/Commercial/Magboulevarddubaisouth/IMG_9345.JPG',
      '/assets/images/Commercial/Magboulevarddubaisouth/IMG_9346.JPG',
      '/assets/images/Commercial/Magboulevarddubaisouth/IMG_9347.JPG'
     
    ]
  },
  {
    id: 'corporate-green-space',
    title: 'Corporate Green Space',
    category: 'commercial',
    // image: 'https://images.unsplash.com/photo-1634007517395-b0a7ff41b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBncmVlbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjE1MDI3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image: '/assets/images/Commercial/Alsharqhospitalfujairah/IMG_8973.JPG',
    description: 'Sustainable landscape design for a tech campus featuring native plants, rain gardens, and outdoor collaboration areas.',
    location: 'Hospital in Fujairah, United Arab Emirates',
    year: '2023',
    challenges: 'Balancing aesthetic appeal with low-water requirements and creating functional outdoor workspaces.',
    results: 'LEED-certified landscape with 40% water reduction, enhanced biodiversity, and employee wellness spaces.',
      gallery: [
      '/assets/images/Commercial/Alsharqhospitalfujairah/IMG_8960.JPG',
      '/assets/images/Commercial/Alsharqhospitalfujairah/IMG_8961.JPG',
      '/assets/images/Commercial/Alsharqhospitalfujairah/IMG_8967.JPG',
      '/assets/images/Commercial/Alsharqhospitalfujairah/IMG_8971.JPG',
      '/assets/images/Commercial/Alsharqhospitalfujairah/IMG_8972.JPG',
      '/assets/images/Commercial/Alsharqhospitalfujairah/IMG_8974.JPG',
      '/assets/images/Commercial/Alsharqhospitalfujairah/IMG_8975.JPG',
      '/assets/images/Commercial/Alsharqhospitalfujairah/IMG_8977.JPG',
      '/assets/images/Commercial/Alsharqhospitalfujairah/IMG_8979.JPG'
     
    ]
  },
  {
    id: 'cottage-garden-revival',
    title: 'Cottage Garden Revival',
    category: 'residential',
    // image: 'https://images.unsplash.com/photo-1660512389595-b8c351995283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0YWdlJTIwZ2FyZGVuJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NjE0MTcyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image: '/assets/images/Residential/Tilalalghaff/2/IMG_7256.JPG',
    description: 'Traditional English cottage garden reimagined with perennial borders, rose arbors, and meandering pathways.',
    location: 'Hospital in Fujairah, United Arab Emirates',
    year: '2023',
    challenges: 'Restoring historic garden character while updating infrastructure and improving soil quality.',
    results: 'Award-winning garden featuring over 100 plant varieties, heritage roses, and a charming potting shed.',
      gallery: [
      '/assets/images/Residential/Tilalalghaff/2/IMG_7256.JPG',
      '/assets/images/Residential/Tilalalghaff/2/3e1fb6ec-6dae-45ee-bc2a-a87a18de172e.JPG',
      '/assets/images/Residential/Tilalalghaff/2/ae1ccc28-9cbb-41fb-bc5a-33e8c2b89a10.JPG',
      '/assets/images/Residential/Tilalalghaff/2/c65d5ad3-012b-4656-b7e5-f27c60d5715f.JPG',
      '/assets/images/Residential/Tilalalghaff/2/e1b58da2-c5e8-4921-b0fa-d8abdbb793fd.JPG',
      '/assets/images/Residential/Tilalalghaff/2/IMG_5863.PNG',
      '/assets/images/Residential/Tilalalghaff/2/IMG_5865.PNG',
      '/assets/images/Residential/Tilalalghaff/2/IMG_7252.JPG',
      '/assets/images/Residential/Tilalalghaff/2/IMG_7255.JPG',
      '/assets/images/Residential/Tilalalghaff/2/IMG_7256.JPG',
      '/assets/images/Residential/Tilalalghaff/2/IMG_8169.JPG',
      '/assets/images/Residential/Tilalalghaff/2/IMG_8176.JPG',
      '/assets/images/Residential/Tilalalghaff/2/IMG_8177.JPG',
      '/assets/images/Residential/Tilalalghaff/2/IMG_7260.JPG',
      '/assets/images/Residential/Tilalalghaff/2/IMG_8175.JPG'
    ]
  },
  {
    id: 'rooftop-terrace',
    title: 'Rooftop Terrace Garden',
    category: 'outdoor-living',
    // image: 'https://images.unsplash.com/photo-1749759426604-063b5effd7a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwZ2FyZGVuJTIwdGVycmFjZXxlbnwxfHx8fDE3NjE1MDI3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  image: '/assets/images/Aura2tilalalghaff/6ef1b8c0-ca6d-478a-86be-0aaccec5f2f8.jpg',
    description: 'Urban rooftop transformation with container gardens, built-in seating, and ambient lighting.',
    location: 'Gated community in Dubai, United Arab Emirates',
    year: '2024',
    challenges: 'Working within weight restrictions while creating a lush green space with wind protection.',
    results: 'Multi-functional rooftop retreat with modular planters, irrigation automation, and panoramic city views.',
      gallery: [
        '/assets/images/Aura2tilalalghaff/6d675ec8-12c5-4f28-a9a3-b414331f54d4.jpg',
        '/assets/images/Aura2tilalalghaff/025c7e58-27dd-48ae-9392-8893e1e4a06b.jpg',
        '/assets/images/Aura2tilalalghaff/360dd301-ac5b-4ef3-9781-b04f8184881a.jpg'
    ]
  },
  {
    id: 'resort-entrance',
    title: 'Resort Entrance Landscape',
    category: 'outdoor-living',
    // image: 'https://images.unsplash.com/photo-1640443962411-38bf551329e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBwYWxtJTIwdHJlZXMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxNTAyNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    image: '/assets/images/Aura2villa25tilalalghaff/IMG_7979.jpg',
    description: 'Grand entrance design featuring palm-lined drives, water features, and tropical resort-style plantings.',
    location: 'Real estate developer in Dubai, United Arab Emirates',
    year: '2023',
    challenges: 'Creating dramatic first impressions while maintaining desert-appropriate plant selections.',
    results: 'Stunning arrival experience with drought-tolerant palms, succulents, and nighttime lighting drama.',
      gallery: [
      '/assets/images/Aura2villa25tilalalghaff/IMG_8180.jpg',
      '/assets/images/Aura2villa25tilalalghaff/IMG_7979.jpg',
      '/assets/images/Alsharqhospital/IMG_8198.jpg'
    ]
  }
];