'use client';

import { AnimatedSection } from '@/components/animated-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { useLanguage } from '@/context/language-context';

const content = {
    en: {
        title: 'Testimonials - HISEN',
        description: 'Hear from members of our community who have grown with us.',
    },
    es: {
        title: 'Testimonios - HISEN',
        description: 'Escuche a los miembros de nuestra comunidad que han crecido con nosotros.',
    }
}


export default function TestimonialsPage() {
    const { language } = useLanguage();
    const t = content[language];
    // Note: Metadata is not dynamically updated.

    return (
        <div>
            <AnimatedSection>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <TestimonialsSection />
                </div>
            </AnimatedSection>
        </div>
    );
}
