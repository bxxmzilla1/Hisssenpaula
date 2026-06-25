import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function DonatePreviewSection() {
  return (
    <div className="bg-[hsl(var(--background-section-even))]">
      <AnimatedSection>
        <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24">
          <Card className="bg-card border-border/60">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
                Support Our Mission
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your generous contribution helps us continue to provide vital services and support to Hispanic families in Alberta.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <Button asChild size="lg">
                    <Link href="/donate">Donate Now</Link>
                </Button>
                <p className="text-xs text-muted-foreground mt-6 italic">
                    HISEN is a registered non-profit organization. All donations are tax-deductible.
                </p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
}
