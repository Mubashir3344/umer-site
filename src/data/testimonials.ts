export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    content: 'Green Space Landscapes transformed our backyard into an absolute paradise. Their attention to detail and creative vision exceeded our expectations. We now have the outdoor entertaining space we always dreamed of.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Property Developer',
    content: 'Working with Green Space on our commercial projects has been exceptional. They balance aesthetic excellence with practical maintenance considerations. True professionals in every sense.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Residential Client',
    content: 'The team brought our garden vision to life with sustainable practices and beautiful design. Their maintenance service keeps everything looking pristine year-round. Highly recommend!',
    rating: 5
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Business Owner',
    content: 'Our office landscape has become a source of pride and employee wellbeing. Green Space delivered a modern, low-maintenance design that perfectly reflects our brand values.',
    rating: 5
  }
];
