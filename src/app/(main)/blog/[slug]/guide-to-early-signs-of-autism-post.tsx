
import { AlertTriangle, BookOpen, BrainCircuit, Calendar, CheckCircle, CircleHelp, Handshake, Heart, Home, MessageSquare, Parent, Smile, Users, Info, Star, School, Lightbulb, HeartHandshake, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const GuideToEarlySignsOfAutismPost = () => {
    return (
        <div className="space-y-8">

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><BrainCircuit className="h-8 w-8" /> What Is Autism?</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            Autism Spectrum Disorder (ASD) is a neurodevelopmental condition involving differences in social communication, behaviors, and sensory processing. Every autistic child is unique in how they see and interact with the world. Many early traits appear in infancy or toddlerhood, and recognizing them early helps families access support more effectively.
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Users className="h-8 w-8" /> HISEN Community Perspective</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                       <p>For many Hispanic families in Alberta, early autism signs can feel confusing due to language barriers, lack of information, and unfamiliar systems. HISEN provides Spanish-language support, culturally informed workshops, and step-by-step guidance to help families access services confidently.</p>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Info className="h-8 w-8" /> Recognizing Early Signs</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <div>
                            <h3 className="font-bold text-lg text-foreground">Social Interaction & Communication</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Reduced or inconsistent eye contact</li>
                                <li>Limited gestures (pointing, waving, showing objects)</li>
                                <li>Less sharing of interests</li>
                                <li>Delayed response to name</li>
                                <li>Delayed babbling (9–12 months)</li>
                                <li>Few or no words by 12–18 months</li>
                                <li>Echolalia (repeating phrases)</li>
                            </ul>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg mt-4">
                            <p className="font-bold text-accent">HISEN Guidance:</p>
                            <p className="text-muted-foreground mt-1">Families are encouraged to document behaviors using videos, journals, or charts. HISEN can provide Spanish interpretation for medical or school appointments.</p>
                        </div>
                         <div>
                            <h3 className="font-bold text-lg text-foreground mt-4">Behavior, Routines & Repetitive Patterns</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Strong need for sameness; distress with minor changes</li>
                                <li>Repetitive movements (hand-flapping, rocking, lining up objects)</li>
                                <li>Intense focus on specific toys or topics</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-foreground mt-4">Sensory Differences</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Overreaction to sounds, textures, lights</li>
                                <li>Underreaction or muted sensory responses</li>
                                <li>Seeking sensory input repeatedly</li>
                            </ul>
                        </div>
                         <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary">
                            <p className="font-bold text-primary">Community Tip:</p> 
                            <p className="text-muted-foreground mt-1">HISEN teaches families how to adjust home and school environments to support sensory comfort.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-foreground mt-4">Rigidity in Play & Imagination</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Reduced imaginative play</li>
                                <li>Prefers organizing, sorting, lining items</li>
                                <li>Difficulty with transitions during play</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-foreground mt-4">Regression or Loss of Skills</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Loss of speech, gestures, or social responses</li>
                                <li>Skills may plateau, especially in communication or pretend play</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Home className="h-8 w-8" /> Supporting Your Child in Early Years Settings</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p className="italic">(Adapted from Neurodivergence Wales)</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                           <li>Create predictable routines (visual schedules, pictures)</li>
                           <li>Simplify verbal instructions</li>
                           <li>Encourage turn-taking and guided play</li>
                           <li>Reduce sensory overload (quiet corners, dim lights)</li>
                           <li>Use timers and preparation for transitions</li>
                        </ul>
                        <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary">
                            <p className="font-bold text-primary">HISEN Integration:</p>
                            <p className="text-muted-foreground mt-1">HISEN provides bilingual resources, parent coaching, and cultural support for families learning to apply these tools.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><CircleHelp className="h-8 w-8" /> When to Seek Help</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                           <li>If several signs appear across home, daycare, and playgroups</li>
                           <li>Bring videos, notes, or timelines to your pediatrician</li>
                           <li>Request referrals for speech, OT, developmental evaluation, or autism assessment</li>
                           <li>Ask for interpretation support if needed</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Lightbulb className="h-8 w-8" /> Why Early Identification Matters</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                           <li>Early intervention improves social, emotional, and developmental outcomes</li>
                           <li>Helps access FSCD, school plans, therapy, and community supports</li>
                           <li>Empowers families to advocate with confidence</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><HeartHandshake className="h-8 w-8" /> HISEN Commitment</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                           <li>Step-by-step support for newcomer families</li>
                           <li>Spanish-language explanation of assessments, programs, and rights</li>
                           <li>Advocacy coaching for school and medical systems</li>
                           <li>Connection to other Hispanic families for shared learning</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <div className="text-center">
                <Button asChild size="lg">
                    <Link href="/blog/early-signs-checklist">Early Signs Checklist</Link>
                </Button>
            </div>

            <Card>
                <CardContent className="p-6 md:p-8 text-center">
                    <h2 className="text-2xl font-headline font-bold flex items-center justify-center gap-3 text-primary mb-6">
                        <Star className="h-6 w-6 text-primary" />
                        Ready to find support?
                    </h2>
                    <div className="space-y-6 text-foreground/90 leading-relaxed text-lg">
                        <p>
                           HISEN is here to guide your family. Reach out to connect with our network.
                        </p>
                    </div>
                     <div className="flex justify-center mt-8">
                         <Button asChild>
                           <Link href="/contact">Get Support From HISEN</Link>
                        </Button>
                     </div>
                </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/50 shadow-none">
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="text-muted-foreground mt-1 flex-shrink-0"><AlertTriangle className="h-5 w-5 text-primary" /></div>
                    <p className="text-sm text-muted-foreground italic">
                        This content is for informational purposes only and does not replace professional, medical, or legal advice.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};
