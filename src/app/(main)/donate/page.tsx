
'use client';

import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { useLanguage } from '@/context/language-context';

const content = {
    en: {
        title: 'Support Our Mission',
        description: 'Your generous contribution helps us continue to provide vital services and support to Hispanic families in Alberta.',
        buttonText: 'Donate Now',
        legalNote: 'HISEN is a registered non-profit organization. All donations are tax-deductible.',
        dialogTitle: 'Select Donation Amount',
        dialogDescription: 'Choose a preset amount or contact us for other options.'
    },
    es: {
        title: 'Apoya Nuestra Misión',
        description: 'Su generosa contribución nos ayuda a continuar brindando servicios y apoyo vitales a las familias hispanas en Alberta.',
        buttonText: 'Donar Ahora',
        legalNote: 'HISEN es una organización sin fines de lucro registrada. Todas las donaciones son deducibles de impuestos.',
        dialogTitle: 'Seleccione el Monto de la Donación',
        dialogDescription: 'Elija una cantidad preestablecida o contáctenos para otras opciones.'
    }
};


export default function DonatePage() {
  const { language } = useLanguage();
  const t = content[language];
  const donationAmounts = [10, 25, 50, 75];

  return (
    <div className="bg-background">
      <AnimatedSection>
        <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24">
          <Card className="bg-card border-border/60">
            <CardHeader className="text-center">
               <CardTitle className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
                {t.title}
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg">{t.buttonText}</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] rounded-xl">
                        <DialogHeader className="text-center">
                            <DialogTitle className="text-primary">{t.dialogTitle}</DialogTitle>
                            <DialogDescription>
                                {t.dialogDescription}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4 py-4">
                            {donationAmounts.map(amount => (
                                <Button asChild key={amount} size="lg" variant="outline" className="border-primary text-white hover:bg-primary/10 hover:text-white">
                                    <Link href="#">${amount}</Link>
                                </Button>
                            ))}
                        </div>
                    </DialogContent>
                </Dialog>
                <p className="text-xs text-muted-foreground mt-6 italic">
                    {t.legalNote}
                </p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
}
