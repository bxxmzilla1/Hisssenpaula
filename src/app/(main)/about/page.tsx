
'use client';

import { AnimatedSection } from '@/components/animated-section';
import { MissionSection } from '@/components/sections/mission-section';
import { ValuesSection } from '@/components/sections/values-section';
import { useLanguage } from '@/context/language-context';

const content = {
    en: {
        title: 'The Heart of HISEN',
        description: 'We are a nonprofit organization devoted to empowering Hispanic families in Alberta by creating meaningful opportunities and fostering a stronger, more united community.',
    },
    es: {
        title: 'El Corazón de HISEN',
        description: 'Somos una organización sin fines de lucro dedicada a empoderar a las familias hispanas en Alberta creando oportunidades significativas y fomentando una comunidad más fuerte y unida.',
    }
}

export default function AboutPage() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <div>
            <AnimatedSection>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
                        {t.title}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        {t.description}
                    </p>
                </div>
            </AnimatedSection>
            <AnimatedSection>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[hsl(var(--background-section-odd))]">
                        <MissionSection />
                    </div>
                    <div className="bg-[hsl(var(--background-section-even))]">
                        <ValuesSection />
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}
