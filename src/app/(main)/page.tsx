import { AnimatedSection } from '@/components/animated-section';
import { HeroSection } from '@/components/sections/hero-section';
import { HomepageMissionSection } from '@/components/sections/homepage-mission-section';
import { ValuesSection } from '@/components/sections/values-section';
import { ServicesPreviewSection } from '@/components/sections/services-preview-section';
import { EventsPreviewSection } from '@/components/sections/events-preview-section';
import { FaqSection } from '@/components/sections/faq-section';
import { BlogPreviewSection } from '@/components/sections/blog-preview-section';
import { TestimonialsPreviewSection } from '@/components/sections/testimonials-preview-section';
import { DonatePreviewSection } from '@/components/sections/donate-preview-section';
import { ContactPreviewSection } from '@/components/sections/contact-preview-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <div className="bg-[hsl(var(--background-section-odd))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <HomepageMissionSection />
            </AnimatedSection>
        </div>
      </div>
      
      <div className="bg-[hsl(var(--background-section-even))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <ValuesSection />
            </AnimatedSection>
        </div>
      </div>

      <div className="bg-[hsl(var(--background-section-odd))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <BlogPreviewSection />
            </AnimatedSection>
        </div>
      </div>

      <div className="bg-[hsl(var(--background-section-even))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <ServicesPreviewSection />
            </AnimatedSection>
        </div>
      </div>

      <div className="bg-[hsl(var(--background-section-odd))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <EventsPreviewSection />
            </AnimatedSection>
        </div>
      </div>

      <div className="bg-[hsl(var(--background-section-even))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <TestimonialsPreviewSection />
            </AnimatedSection>
        </div>
      </div>

      <div className="bg-[hsl(var(--background-section-odd))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <FaqSection />
            </AnimatedSection>
        </div>
      </div>

      <div className="bg-[hsl(var(--background-section-even))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <DonatePreviewSection />
            </AnimatedSection>
        </div>
      </div>

      <div className="bg-[hsl(var(--background-section-odd))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <ContactPreviewSection />
            </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
