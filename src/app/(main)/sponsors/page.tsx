'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AnimatedSection } from '@/components/animated-section';
import { sponsors } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';

const content = {
  en: {
    title: 'Our Sponsors',
    description: 'We are incredibly grateful for the generous support of our sponsors. Their contributions are vital to our mission and help us continue our work in the community.',
  },
  es: {
    title: 'Nuestros Patrocinadores',
    description: 'Estamos increíblemente agradecidos por el generoso apoyo de nuestros patrocinadores. Sus contribuciones son vitales para nuestra misión y nos ayudan a continuar nuestro trabajo en la comunidad.',
  }
};

export default function SponsorsPage() {
  const { language } = useLanguage();
  const t = content[language];
  return (
    <div className="bg-background">
      <AnimatedSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>
      </AnimatedSection>
      
      <AnimatedSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sponsors.map((sponsor) => (
                    <Card key={sponsor.name} className="bg-card border-border/60 text-center hover:border-primary/50 transition-all transform hover:-translate-y-2">
                        <Link href={sponsor.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                        <CardContent className="p-8 flex flex-col items-center justify-start h-full">
                            <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden">
                            <Image
                                src={sponsor.logo}
                                alt={`${sponsor.name} logo`}
                                fill
                                className="object-contain"
                                data-ai-hint="logo"
                            />
                            </div>
                            <h3 className="text-xl font-headline font-semibold mb-2 text-primary">{sponsor.name}</h3>
                            <p className="text-muted-foreground text-sm flex-grow">{language === 'es' ? 'Apoyando los servicios de salud y asentamiento de familias recién llegadas.' : sponsor.description}</p>
                        </CardContent>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
