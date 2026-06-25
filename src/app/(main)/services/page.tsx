import { services } from '@/lib/data';
import { AnimatedSection } from '@/components/animated-section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const metadata = {
  title: 'Our Services - HISEN',
  description: 'Explore the services we offer to support your journey of growth and connection.',
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <AnimatedSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A directory of services designed to foster well-being, personal growth, and community connection.
          </p>
        </div>
      </AnimatedSection>
      
      <AnimatedSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col bg-card border-border/60 hover:border-primary/50 transition-all transform hover:-translate-y-2">
                <CardHeader>
                    <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-4 rounded-full">
                            <service.icon className="h-8 w-8 text-primary" />
                        </div>
                    </div>
                    <CardTitle className="font-headline text-2xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
