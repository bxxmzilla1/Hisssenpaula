
'use client';

import { Stethoscope, BookOpen, Users, Globe, CheckCircle2, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { newlyArrivedContent } from '@/lib/data';

const icons = {
    Stethoscope,
    BookOpen,
    Users,
    Globe,
    CheckCircle2
}

export const NewlyArrivedPost = () => {
    const renderContentItem = (item: any, index: number) => {
        switch (item.type) {
            case 'paragraph':
                return <p key={index} className="text-muted-foreground leading-relaxed">{item.text}</p>;
            case 'heading':
                return <h3 key={index} className="font-bold text-lg text-foreground mt-4">{item.text}</h3>;
            case 'list':
                return (
                    <ul key={index} className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                        {item.items.map((li: string, i: number) => <li key={i}>{li}</li>)}
                    </ul>
                );
            case 'callout':
                return (
                    <div key={index} className="bg-accent/10 p-4 rounded-lg mt-4">
                        <h4 className="font-bold text-accent">{item.title}</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                            {item.items.map((li: string, i: number) => <li key={i}>{li}</li>)}
                        </ul>
                    </div>
                );
            case 'sub-section':
                 return (
                    <div key={index}>
                        <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                            {item.items.map((li: string, i: number) => <li key={i}>{li}</li>)}
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="space-y-8">
            <Card className="bg-card border-none shadow-none">
                <CardContent className="p-0">
                    <h1 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-4">Newly Arrived in Canada — How to Navigate Services</h1>
                    <p className="text-lg text-muted-foreground">A Guide for Immigrant Families (With a Focus on Autism & Child Development)</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardContent className="p-6 md:p-8">
                    <p className="text-muted-foreground leading-relaxed">
                        Arriving in a new country is exciting—but it can also feel overwhelming, especially when navigating new systems in a different language while advocating for your child’s developmental, emotional, or educational needs.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                        This guide was created to help HISEN families understand the essential supports available in Canada and Alberta, and how to access them with confidence.
                    </p>
                </CardContent>
            </Card>

            {newlyArrivedContent.map((section, index) => {
                const Icon = icons[section.icon as keyof typeof icons] || Stethoscope;
                return (
                    <Card key={index}>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4">
                                <Icon className="h-8 w-8" />
                                {section.title}
                            </h2>
                            {section.title === 'Tips for New Families' ? (
                                <div className="space-y-4">
                                    {section.content.map(renderContentItem)}
                                </div>
                            ) : (
                                section.content.map(renderContentItem)
                            )}
                        </CardContent>
                    </Card>
                );
            })}

            <div className="bg-primary/10 text-center p-8 rounded-2xl border border-primary/20">
              <h2 className="text-2xl font-headline font-bold text-primary mb-4">Final Reminder</h2>
              <p className="text-foreground/90 leading-relaxed max-w-prose mx-auto text-lg">
                Canada has many supports for families—especially those navigating autism, trauma, developmental needs, and school transitions. You do not need to figure everything out alone.
              </p>
              <p className="text-foreground/90 leading-relaxed max-w-prose mx-auto mt-4 text-lg">
                HISEN is here to guide you step by step with culturally respectful, Spanish-language, immigrant-centered support. We walk with you, advocate with you, and help your family build a strong foundation in Alberta.
              </p>
            </div>

            <Card className="bg-card/50 border-border/30 shadow-none mt-8">
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="text-muted-foreground mt-1 flex-shrink-0"><div className="h-5 w-5" /></div>
                    <p className="text-sm text-muted-foreground italic">
                        This content is for informational purposes only and does not replace professional, medical, or legal advice.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};
