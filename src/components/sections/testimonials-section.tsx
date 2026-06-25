'use client';

import { testimonials as testimonialsData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { Star } from 'lucide-react';
import { useLanguage } from "@/context/language-context";

const content = {
  en: {
    title: "Success Stories",
    description: "Hear from members of our community who have grown with us.",
    testimonials: testimonialsData,
  },
  es: {
    title: "Historias de Éxito",
    description: "Escuche a los miembros de nuestra comunidad que han crecido con nosotros.",
    testimonials: [
      {
        name: 'La Familia Rodríguez',
        role: '',
        quote: 'HISEN fue una luz en nuestro camino. Cuando llegamos a Alberta, nos sentíamos perdidos. Su equipo nos guió con el sistema escolar y ayudó a nuestro hijo a obtener el apoyo que necesitaba. Estamos eternamente agradecidos.',
        image: 'https://picsum.photos/seed/rodriguez/100/100',
      },
      {
        name: 'Maria G.',
        role: '',
        quote: 'Encontrar apoyo que entienda nuestra cultura e idioma fue crucial. HISEN no solo nos ayudó a navegar el sistema de salud, sino que también nos hizo sentir parte de una comunidad. ¡Gracias por todo!',
        image: 'https://picsum.photos/seed/maria/100/100',
      },
      {
        name: 'Jessica P.',
        role: 'Voluntaria',
        quote: 'Ser voluntaria en HISEN ha sido profundamente gratificante. Ser parte de una organización que realmente se preocupa por marcar la diferencia es inspirador.',
        image: 'https://picsum.photos/seed/12/100/100',
      },
    ],
  },
};

export function TestimonialsSection() {
  const { language } = useLanguage();
  const t = content[language];
  return (
    <div className="py-16 md:py-24 bg-card rounded-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {t.testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between bg-background border-border/60">
                    <CardContent className="p-6 text-center flex flex-col items-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full mb-4 border-2 border-primary"
                        data-ai-hint="person portrait"
                      />
                       <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                        ))}
                      </div>
                      <blockquote className="italic text-muted-foreground mb-4">
                        “{testimonial.quote}”
                      </blockquote>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </div>
  );
}
