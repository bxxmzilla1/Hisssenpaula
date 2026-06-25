'use client';

import { faqItems as faqData } from '@/lib/data';
import { AnimatedSection } from '@/components/animated-section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Leaf } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const content = {
  en: {
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about our services and organization.',
    faqItems: faqData
  },
  es: {
    title: 'Preguntas Frecuentes',
    description: 'Encuentre respuestas a las preguntas más comunes sobre nuestros servicios y organización.',
    faqItems: [
        {
            question: '¿Qué es HISEN?',
            answer: 'HISEN (Hispanic Inclusion & Support Network Society) es una organización sin fines de lucro que acompaña, guía y fortalece a las familias hispanas en Alberta, brindando apoyo cultural y lingüísticamente accesible.',
        },
        {
            question: '¿Qué servicios ofrecen?',
            answer: 'Ofrecemos una variedad de servicios que incluyen una línea de apoyo, apoyo familiar, asistencia con necesidades de neurodiversidad y desarrollo infantil, y apoyo escolar. Nuestro objetivo es ayudar a las familias a navegar sistemas complejos con confianza.',
        },
        {
            question: '¿Quién puede usar sus servicios?',
            answer: 'Nuestros servicios son principalmente para familias hispanas en Alberta, pero damos la bienvenida a cualquier persona de la comunidad que necesite apoyo y se alinee con nuestra misión de inclusión y empoderamiento.',
        },
        {
            question: '¿Cómo puedo participar o apoyar a HISEN?',
            answer: 'Puedes participar asistiendo a nuestros eventos, utilizando nuestros servicios, ofreciéndote como voluntario o convirtiéndote en patrocinador. Consulta las secciones respectivas en nuestro sitio web para más detalles sobre cómo contribuir.',
        },
    ]
  }
};

export default function FaqPage() {
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
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-24">
            <Accordion type="single" collapsible className="w-full space-y-4">
            {t.faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border-border/60 rounded-lg px-6">
                <AccordionTrigger className="font-headline text-lg hover:text-primary text-left">
                    {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                    {item.answer}
                </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </div>
      </AnimatedSection>
    </div>
  );
}
