
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";

const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
    </svg>
);

const BinocularsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10 10h4"></path>
        <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"></path>
        <path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"></path>
        <path d="M 22 16 L 2 16"></path>
        <path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"></path>
        <path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"></path>
    </svg>
);

const icons = {
    TargetIcon,
    BinocularsIcon
}

const content = {
    en: {
      title: "The Heart of HISEN",
      subtitle: "We are a nonprofit organization devoted to empowering Hispanic families in Alberta by creating meaningful opportunities and fostering a stronger, more united community.",
      values: [
        {
          icon: 'TargetIcon',
          title: "Our Mission",
          description: "We support Hispanic families in Alberta by offering culturally respectful guidance and connecting them to health, education, neurodiversity, and community resources. Our goal is to empower families to navigate systems confidently, advocate for their children, and access the services that best meet their needs.",
        },
        {
          icon: 'BinocularsIcon',
          title: "Our Vision",
          description: "A community where all Hispanic families in Alberta can easily access the resources they need to thrive. We envision an inclusive society where language, culture, or immigration status is never a barrier, and families feel supported, empowered, and understood.",
        },
      ],
      discoverMission: "Discover Our Mission"
    },
    es: {
      title: "El Corazón de HISEN",
      subtitle: "Somos una organización sin fines de lucro dedicada a empoderar a las familias hispanas en Alberta creando oportunidades significativas y fomentando una comunidad más fuerte y unida.",
      values: [
        {
          icon: 'TargetIcon',
          title: "Nuestra Misión",
          description: "Apoyamos a las familias hispanas en Alberta ofreciendo orientación culturalmente respetuosa y conectándolas con recursos de salud, educación, neurodiversidad y comunitarios. Nuestro objetivo es empoderar a las familias para que naveguen los sistemas con confianza, aboguen por sus hijos y accedan a los servicios que mejor satisfagan sus necesidades.",
        },
        {
          icon: 'BinocularsIcon',
          title: "Nuestra Visión",
          description: "Una comunidad donde todas las familias hispanas en Alberta puedan acceder fácilmente a los recursos que necesitan para prosperar. Visualizamos una sociedad inclusiva donde el idioma, la cultura o el estatus migratorio nunca sea una barrera, y las familias se sientan apoyadas, empoderadas y comprendidas.",
        },
      ],
      discoverMission: "Descubre Nuestra Misión"
    },
  };

export function HomepageMissionSection() {
  const { language } = useLanguage();
  const { title, subtitle, values, discoverMission } = content[language];
  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {values.map((value: {icon: any, title: string, description: string}) => {
          const Icon = icons[value.icon as keyof typeof icons] || TargetIcon;
          return (
            <Card key={value.title} className="text-center bg-card border-border/60 hover:border-primary/50 hover:bg-background transition-all transform hover:-translate-y-2 flex flex-col">
              <CardContent className="p-8 flex-grow flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground flex-grow">{value.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
       <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/about">{discoverMission}</Link>
            </Button>
      </div>
    </div>
  );
}
