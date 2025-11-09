import { Hero } from '../components/home/Hero';
import { ServicesTeaser } from '../components/home/ServicesTeaser';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { BeforeAfterSection } from '../components/home/BeforeAfterSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Testimonials } from '../components/home/Testimonials';
import { VideoTestimonialsSection } from '../components/home/VideoTestimonialsSection';
import { CTASection } from '../components/home/CTASection';

export function Home() {
  return (
    <>
      <Hero />
      <ServicesTeaser />
      <FeaturedProjects />
      <BeforeAfterSection />
      <WhyChooseUs />
      <Testimonials />
      <VideoTestimonialsSection />
      <CTASection />
    </>
  );
}