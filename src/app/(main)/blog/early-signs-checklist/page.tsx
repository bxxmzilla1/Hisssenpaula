import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { AnimatedSection } from "@/components/animated-section";
import { AlertTriangle, Lightbulb, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: 'Early Signs Checklist - HISEN Blog',
  description: 'An early signs of autism checklist for families to observe and document developmental signs.',
};

const ChecklistItem = ({ label }: { label: string }) => (
    <div className="flex items-start space-x-3">
        <div className="flex items-center h-6">
            <Checkbox id={label.replace(/\s+/g, '-')} disabled className="border-muted-foreground/50 data-[state=checked]:bg-transparent data-[state=checked]:text-transparent" />
        </div>
        <label htmlFor={label.replace(/\s+/g, '-')} className="text-muted-foreground leading-snug">
            {label}
        </label>
    </div>
);

export default function EarlySignsChecklistPage() {
    return (
        <div className="bg-background">
             <AnimatedSection>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
                    Early Signs of Autism — Checklist for Families
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Observe your child across different settings (home, daycare, playgroups). Check any behaviors that are consistent or concerning. Bring this checklist when speaking with pediatricians, educators, or therapists.
                </p>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-24 space-y-8">
                    <div className="mb-8">
                        <Button asChild variant="outline" size="icon" className="rounded-full">
                            <Link href="/blog/guide-to-early-signs-of-autism">
                                <ArrowLeft className="h-4 w-4" />
                                <span className="sr-only">Go back to article</span>
                            </Link>
                        </Button>
                    </div>
                    <Card>
                        <CardContent className="p-6 md:p-8 space-y-6">
                            <h2 className="text-2xl font-headline font-bold text-primary">Social Interaction & Communication</h2>
                            <div className="space-y-4">
                                <ChecklistItem label="Reduced or inconsistent eye contact" />
                                <ChecklistItem label="Limited use of gestures (pointing, waving, showing objects)" />
                                <ChecklistItem label="Less sharing of interests with caregivers" />
                                <ChecklistItem label="Delayed response to their name" />
                                <ChecklistItem label="Delayed babbling or typical infant sounds (9–12 months)" />
                                <ChecklistItem label="Limited or no words by 12–18 months" />
                                <ChecklistItem label="Echolalia (repeating words/phrases without understanding)" />
                                <ChecklistItem label="Difficulty with pretend or imaginative play" />
                            </div>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardContent className="p-6 md:p-8 space-y-6">
                            <h2 className="text-2xl font-headline font-bold text-primary">Behavior, Routines & Repetitive Patterns</h2>
                            <div className="space-y-4">
                                <ChecklistItem label="Strong insistence on sameness; distress with minor changes" />
                                <ChecklistItem label="Repetitive movements (hand-flapping, rocking, spinning, lining up objects)" />
                                <ChecklistItem label="Intense focus on specific toys, topics, or activities" />
                                <ChecklistItem label="Regression or loss of previously acquired skills" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6 md:p-8 space-y-6">
                            <h2 className="text-2xl font-headline font-bold text-primary">Sensory Differences</h2>
                             <div className="space-y-4">
                                <ChecklistItem label="Overreaction to sounds, lights, textures, or smells" />
                                <ChecklistItem label="Underreaction or muted responses to sensory input" />
                                <ChecklistItem label="Seeks specific sensory experiences repeatedly (touching, smelling, spinning objects)" />
                            </div>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardContent className="p-6 md:p-8 space-y-6">
                            <h2 className="text-2xl font-headline font-bold text-primary">Rigidity in Play & Imagination</h2>
                             <div className="space-y-4">
                                <ChecklistItem label="Reduced or atypical pretend play" />
                                <ChecklistItem label="Focus on concrete or repetitive actions rather than imaginative play" />
                                <ChecklistItem label="Difficulty adapting to changes in play routines or transitions" />
                            </div>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardContent className="p-6 md:p-8 space-y-6">
                            <h2 className="text-2xl font-headline font-bold text-primary">Supporting Notes</h2>
                             <div className="space-y-4">
                                <ChecklistItem label="Document behaviors with videos, photos, or written notes" />
                                <ChecklistItem label="Track patterns over time (dates, settings, triggers)" />
                                <ChecklistItem label="Include context: home, daycare, school, playgroups" />
                            </div>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardContent className="p-6 md:p-8 space-y-6">
                            <h2 className="text-2xl font-headline font-bold text-primary">Action Steps</h2>
                             <div className="space-y-4">
                                <ChecklistItem label="Share checklist with pediatrician or family doctor" />
                                <ChecklistItem label="Request referrals for developmental assessments (autism, speech, occupational therapy)" />
                                <ChecklistItem label="Ask for interpretation/translation support if needed" />
                                <ChecklistItem label="Contact HISEN for Spanish-language guidance and advocacy support" />
                            </div>
                        </CardContent>
                    </Card>

                    <div className="bg-primary/10 p-6 rounded-lg border border-primary">
                        <h4 className="font-bold text-primary flex items-center gap-2 mb-2"><Lightbulb className="h-5 w-5"/> Tip for HISEN Families:</h4>
                        <p className="text-muted-foreground">
                            Early identification allows access to programs such as FSCD, family support, and school accommodations. Consistent tracking and documentation will strengthen your advocacy and help your child receive tailored support sooner.
                        </p>
                    </div>

                    <Card className="bg-card/50 border-primary/50 shadow-none">
                        <CardContent className="p-6 flex items-start gap-4">
                            <div className="text-muted-foreground mt-1 flex-shrink-0"><AlertTriangle className="h-5 w-5 text-primary" /></div>
                            <p className="text-sm text-muted-foreground italic">
                                This content is for informational purposes only and does not replace professional, medical, or legal advice.
                            </p>
                        </CardContent>
                    </Card>

                </div>
            </AnimatedSection>
        </div>
    );
}
