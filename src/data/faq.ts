export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'design' | 'maintenance' | 'pricing' | 'timeline' | 'general';
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How long does a typical landscape design project take?',
    answer: 'A complete landscape design and installation usually takes 4–8 weeks depending on project size and complexity. The design phase often takes 2–3 weeks, followed by 2–5 weeks for installation. We provide a detailed timeline after your initial consultation.',
    category: 'timeline'
  },
  {
    id: '2',
    question: 'Do you offer free consultations?',
    answer: 'Yes, we offer complimentary consultations to understand your vision, assess your property, and discuss design options. This helps us provide accurate recommendations and transparent pricing before you commit.',
    category: 'general'
  },
  {
    id: '3',
    question: 'What is the average cost of landscape design and installation?',
    answer: 'Landscape design and installation costs vary based on property size, features, and materials. Most residential projects range from $5,000 to $50,000+, while luxury outdoor living spaces with kitchens or pools may cost more. We always provide a clear, itemized estimate before starting.',
    category: 'pricing'
  },
  {
    id: '4',
    question: 'How often should landscape maintenance be scheduled?',
    answer: 'For healthy, attractive landscapes, we recommend weekly or bi-weekly visits during spring and summer, and monthly maintenance during the dormant seasons. Each client receives a tailored maintenance plan based on plant type and property needs.',
    category: 'maintenance'
  },
  {
    id: '5',
    question: 'Can you redesign my existing garden or outdoor area?',
    answer: 'Absolutely. We specialize in enhancing existing landscapes — from updating plantings and lighting to adding new outdoor features like pergolas, BBQ counters, or irrigation systems — while keeping your favorite elements intact.',
    category: 'design'
  },
  {
    id: '6',
    question: 'Do you provide warranties on plants and installations?',
    answer: 'Yes, we offer full warranties: plants come with a 1-year guarantee, hardscapes and structures are covered for 2 years, and irrigation systems for 1 year. Detailed warranty terms are provided with every project contract.',
    category: 'general'
  },
  {
    id: '7',
    question: 'What is the best time of year to start a landscaping project?',
    answer: 'Spring and fall are ideal for planting, but we operate year-round. Winter is great for design planning, while summer suits hardscaping, irrigation, and outdoor kitchen installations. We’ll guide you based on your project type and climate.',
    category: 'timeline'
  },
  {
    id: '8',
    question: 'How do you select plants suitable for my location?',
    answer: 'We perform a detailed site analysis including soil testing, drainage assessment, and sun exposure mapping. Plant selections are made according to your local climate and water availability to ensure long-term health and beauty.',
    category: 'design'
  },
  {
    id: '9',
    question: 'Do you design water-efficient or sustainable landscapes?',
    answer: 'Yes! We specialize in sustainable landscaping solutions — including native plant design, smart irrigation systems, permeable paving, and drought-tolerant gardens — reducing water use while maintaining stunning aesthetics.',
    category: 'design'
  },
  {
    id: '10',
    question: 'What’s included in your landscape maintenance packages?',
    answer: 'Our maintenance packages cover mowing, pruning, weeding, fertilization, mulching, seasonal cleanups, pest management, and irrigation inspection. We can also include poolside landscaping, lighting checks, and BBQ area upkeep upon request.',
    category: 'maintenance'
  },
  {
    id: '11',
    question: 'Do I need to be present during installation?',
    answer: 'Not necessarily. We only request an initial meeting to confirm design details and access. Our professional crews provide progress updates, photos, and a final walkthrough to ensure everything meets your expectations.',
    category: 'timeline'
  },
  {
    id: '12',
    question: 'How do you handle project changes or additional requests?',
    answer: 'We’re flexible! You can request design or scope changes during any phase. For installation changes, we use a simple change order process with updated pricing and timelines so you stay fully informed.',
    category: 'general'
  },
  {
    id: '13',
    question: 'What payment schedule do you follow?',
    answer: 'Our standard payment plan includes a 30% deposit upon agreement, a 40% progress payment mid-project, and a 30% final payment upon completion. For large-scale designs, we can tailor a schedule around project milestones.',
    category: 'pricing'
  },
  {
    id: '14',
    question: 'Can you design outdoor kitchens, BBQ areas, and bar counters?',
    answer: 'Yes, we specialize in custom outdoor living spaces including BBQ islands, bars, and full kitchen setups. We design around your entertaining needs, integrating seating, lighting, and durable materials suited for outdoor conditions.',
    category: 'design'
  },
  {
    id: '15',
    question: 'How do you ensure plant health after installation?',
    answer: 'All plants are locally sourced and acclimated. We use proper planting techniques, soil amendments, and irrigation setup. You’ll receive detailed care instructions, and our 1-year warranty ensures support if issues arise.',
    category: 'maintenance'
  },
  {
    id: '16',
    question: 'Do you install artificial grass?',
    answer: 'Yes, we install premium artificial grass for lawns, play areas, and pool surrounds. It’s low-maintenance, pet-friendly, and designed to withstand heat and heavy use while maintaining a natural look.',
    category: 'design'
  },
  {
    id: '17',
    question: 'Can you add outdoor lighting to my garden or patio?',
    answer: 'Definitely! We offer full outdoor lighting design and installation, including pathway lights, accent lighting, wall fixtures, and smart LED systems that enhance ambiance and safety in your outdoor spaces.',
    category: 'design'
  },
  {
    id: '18',
    question: 'Do you offer pool maintenance and landscaping around pools?',
    answer: 'Yes, we provide complete pool maintenance and poolside landscaping — including plant care, tile cleaning, debris removal, and lighting checks — to keep your pool area looking pristine all year.',
    category: 'maintenance'
  }
];
