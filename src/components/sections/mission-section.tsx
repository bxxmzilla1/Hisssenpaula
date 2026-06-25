'use client';

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import { homePageContent } from "@/lib/data";

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

export function MissionSection() {
  const { language } = useLanguage();
  const content = homePageContent.mission;
  const { values } = content[language];
  return (
    <div className="pt-8 md:pt-12 pb-16 md:pb-24">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {values.map((value: {icon: any, title: string, description: string}) => {
          const Icon = icons[value.icon as keyof typeof icons] || TargetIcon;
          return (
            <Card key={value.title} className="text-center bg-card border-border/60 hover:border-primary/50 hover:bg-background transition-all transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
