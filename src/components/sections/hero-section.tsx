
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { homePageContent } from '@/lib/data';


export function HeroSection() {
  const { language } = useLanguage();
  const content = homePageContent.hero;
  const { mainHeading, subHeading, description, servicesButton, involvedButton } = content[language];
  
  return (
    <section className="relative h-[70vh] md:h-[90vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://i.pinimg.com/1200x/a4/b7/28/a4b728e1663ac5c5c1079754a87ed169.jpg"
          alt="A happy family outdoors in autumn"
          fill
          className="object-cover"
          priority
          data-ai-hint="hispanic family"
        />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-shadow-lg mb-2">
          {mainHeading}
        </h1>
        <p className="text-lg md:text-xl font-body font-semibold mb-4">{subHeading}</p>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 text-shadow">
          {description}
        </p>
        <div className="flex gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                <Link href="/donate">{servicesButton}</Link>
            </Button>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                 <Link href="/contact">{involvedButton}</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
