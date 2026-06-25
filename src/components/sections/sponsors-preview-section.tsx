'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { sponsors } from '@/lib/data';
import { useLanguage } from '@/context/language-context';

const content = {
  en: {
    title: 'Our Valued Sponsors',
    description: 'We are grateful for the generous support of our community partners.',
  },
  es: {
    title: 'Nuestros Valiosos Patrocinadores',
    description: 'Estamos agradecidos por el generoso apoyo de nuestros socios comunitarios.',
  },
};

export function SponsorsPreviewSection() {
  const { language } = useLanguage();
  const t = content[language];
  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
          {t.title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {t.description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sponsors.map((sponsor) => (
          <Card key={sponsor.name} className="bg-card border-border/60 text-center hover:border-primary/50 transition-all transform hover:-translate-y-2">
            <Link href={sponsor.url} target="_blank" rel="noopener noreferrer" className="block h-full">
              <CardContent className="p-8 flex flex-col items-center justify-start h-full">
                <div className="relative w-24 h-24 mb-6">
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
  );
}
