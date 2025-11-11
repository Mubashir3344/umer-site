export interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  thumbnail: string;
  videoUrl: string;
  quote: string;
}

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: '1',
    name: 'Jennifer & Michael Torres',
    role: 'Residential Client',
    // thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    thumbnail: '/assets/images/videos/vid1.JPG',
  // videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // Sample video
  // Use a leading slash for public assets and include the file extension
  videoUrl: 'https://youtu.be/kH9S6GY_Weo', // Sample video (public folder)
    quote: 'Green Space Landscapes transformed our backyard into an outdoor oasis. The attention to detail and professionalism was outstanding!',
  },
  {
    id: '2',
    name: 'Robert Anderson',
    role: 'Homeowner',
    // thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    thumbnail: '/assets/images/videos/vid2.jpg',
    // videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', // Sample video
    videoUrl: 'https://youtu.be/7LFv_l5F73Y', // Sample video
    quote: 'The landscape design has increased our property value and tenant satisfaction. Worth every penny!',
  },
  {
    id: '3',
    name: 'Lisa Chen',
    role: 'Commercial Property Owner',
    // thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    thumbnail: '/assets/images/videos/vid3.jpg',
    // videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', // Sample video
    // Use an embeddable YouTube URL (or a direct MP4) so players can load it
    videoUrl: 'https://www.youtube.com/embed/atu1cMgNCSw',
    quote: 'From design to installation, the entire process was smooth. Our garden looks magazine-worthy!',
  },
];
