export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  funFact: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Muhammad Saeed',
    role: 'Founder & Lead Designer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600',
    bio: 'With over 15 years of experience in landscape architecture, Saeed brings a unique blend of artistic vision and environmental consciousness to every project.',
    expertise: ['Sustainable Design', 'Garden Planning', 'Client Relations'],
    funFact: 'Grew his first vegetable garden at age 8 and never stopped!'
  },
  {
    name: 'Mr.Omar Farooq',
    role: 'Senior Landscape Manager',
    image: '/assets/images/team/manager.jpeg',
    bio: 'Mr.Omar specializes in contemporary outdoor living spaces that seamlessly blend form and function. His designs have won multiple regional awards.',
    expertise: ['Hardscaping', 'Outdoor Kitchens', 'Pool Landscapes'],
    funFact: 'Completed a 500-mile hiking trail documenting native plants!'
  },
  {
    name: 'Muhammad Shafiq ',
    role: 'Horticulturist',
    image: '/assets/images/team/shafiq.jpeg',
    bio: 'Shafiq\'s deep knowledge of plant science ensures every landscape thrives. He curates plant selections perfectly suited to each unique microclimate.',
    expertise: ['Native Plants', 'Soil Science', 'Plant Health'],
    funFact: 'Maintains a collection of over 200 rare succulents at home!'
  },
  {
    name: 'Muhammad Tanveer',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600',
    bio: 'Tanveer keeps every project on schedule and within budget. His attention to detail and communication skills ensure seamless execution from concept to completion.',
    expertise: ['Project Coordination', 'Budget Management', 'Quality Control'],
    funFact: 'Built his own backyard treehouse complete with a green roof!'
  },
];
