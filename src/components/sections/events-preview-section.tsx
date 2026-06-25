

'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from "@/components/ui/carousel";
import { useLanguage } from "@/context/language-context";
import { events as eventsData } from "@/lib/data";

const content = {
    en: {
        title: "Events & Workshops",
        description: "Join us for upcoming talks, support groups, and community events."
    },
    es: {
        title: "Eventos y Talleres",
        description: "Únete a nuestras próximas charlas, grupos de apoyo y eventos comunitarios."
    }
}

export function EventsPreviewSection() {
  const { language } = useLanguage();
  const t = content[language];
  const loading = false;
  const upcomingEvents = eventsData.filter(e => e.status === 'Upcoming').slice(0, 3);


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
        <CarouselContent className="-ml-4">
          {loading ? (
             <div className="flex items-center justify-center w-full h-48">Loading...</div>
          ) : upcomingEvents.map((event, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col justify-between text-left bg-card border-border/60">
                    <Image
                        src={event.image}
                        alt={event.title[language as keyof typeof event.title]}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover rounded-t-lg"
                        data-ai-hint="people community"
                    />
                  <CardHeader>
                      <CardTitle className="font-headline text-xl">{event.title[language as keyof typeof event.title]}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{event.description[language as keyof typeof event.description]}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4 bg-background/50 border-primary text-primary hover:bg-background hover:text-primary" />
        <CarouselNext className="hidden md:flex -right-4 bg-background/50 border-primary text-primary hover:bg-background hover:text-primary" />
        <CarouselDots className="md:hidden mt-6" />
      </Carousel>
    </div>
  );
}
