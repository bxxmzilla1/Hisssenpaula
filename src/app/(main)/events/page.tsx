

'use client';

import { AnimatedSection } from '@/components/animated-section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { events as eventsData } from '@/lib/data';


const content = {
  en: {
    title: 'Events Calendar',
    description: 'Discover and participate in our upcoming events. We look forward to seeing you there!',
    register: 'Register Now',
  },
  es: {
    title: 'Calendario de Eventos',
    description: 'Descubre y participa en nuestros próximos eventos. ¡Esperamos verte allí!',
    register: 'Regístrate Ahora',
  }
};


export default function EventsPage() {
  const { language } = useLanguage();
  const t = content[language];
  const loading = false;
  const sortedEvents = [...eventsData].sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
          <div className="space-y-12">
            {loading ? (
                <p>Loading events...</p>
            ): (
              sortedEvents.map((event) => (
              <Card key={event.id} id={`event-${event.id}`} className="overflow-hidden bg-card border-border/60 grid md:grid-cols-2 items-center">
                <div className="relative h-64 md:h-full w-full">
                    <Image
                        src={event.image}
                        alt={event.title[language as keyof typeof event.title]}
                        fill
                        className="object-cover"
                        data-ai-hint="people event"
                    />
                </div>
                <div className="p-8 flex flex-col h-full">
                    <CardHeader className="p-0">
                        <CardTitle className="font-headline text-2xl mb-2">{event.title[language as keyof typeof event.title]}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow space-y-3 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-accent" />
                            <span>{event.location}</span>
                        </div>
                        <CardDescription className="pt-2">{event.description[language as keyof typeof event.description]}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-0 pt-6">
                        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href="#">{t.register}</Link>
                        </Button>
                    </CardFooter>
                </div>
              </Card>
            )))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
