'use client';

import { faqItems as faqData } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/context/language-context";

const content = {
    en: {
        title: "Frequently Asked Questions",
        description: "Find answers to common questions about our services and organization.",
        faqItems: faqData
    },
    es: {
        title: "Preguntas Frecuentes",
        description: "Encuentra respuestas a preguntas comunes sobre nuestros servicios y organización.",
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

export function FaqSection() {
  const { language } = useLanguage();
  const t = content[language];
  const featuredFaqs = t.faqItems.slice(0, 4);
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
        <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
            {featuredFaqs.map((item, index) => (
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
    </div>
  );
}
