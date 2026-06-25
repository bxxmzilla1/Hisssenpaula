'use client';

import Link from "next/link";
import { services as servicesData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/context/language-context";

const content = {
  en: {
    title: "Programs & Services",
    description: "We offer a range of culturally-sensitive services to empower Hispanic families.",
    viewAll: "View All Services",
    services: servicesData.map(s => ({...s}))
  },
  es: {
    title: "Programas y Servicios",
    description: "Ofrecemos una gama de servicios culturalmente sensibles para empoderar a las familias hispanas.",
    viewAll: "Ver Todos los Servicios",
    services: [
        {
            icon: servicesData[0].icon,
            title: 'Línea de Apoyo y Soporte Familiar',
            description: 'Navegación de recursos, programas sociales, citas y asistencia general.',
            contact: 'contact@hisen.org',
        },
        {
            icon: servicesData[1].icon,
            title: 'Neurodiversidad y Desarrollo Infantil',
            description: 'Apoyo para Autismo, retrasos, FSCD/PUF, reuniones escolares e IEP/ISP.',
            contact: 'neuro@hisen.org',
        },
        {
            icon: servicesData[2].icon,
            title: 'Educación y Apoyo Escolar',
            description: 'Comunicación con escuelas, adaptación cultural y participación familiar.',
            contact: 'education@hisen.org',
        },
    ]
  }
};

export function ServicesPreviewSection() {
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
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {t.services.map((service, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col justify-center text-center bg-card border-border/60 p-6">
                  <CardHeader>
                      <div className="flex justify-center mb-4">
                          <div className="p-4 rounded-full">
                              <service.icon className="h-10 w-10 text-primary" />
                          </div>
                      </div>
                      <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-4" />
        <CarouselNext className="hidden sm:flex -right-4" />
      </Carousel>

      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
          <Link href="/services">
            {t.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
