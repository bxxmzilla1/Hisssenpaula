
import { AlertTriangle, BookOpen, BrainCircuit, Calendar, CheckCircle, CircleHelp, Handshake, Heart, Home, MessageSquare, Parent, Smile, Users, Info, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const FirstSignsOfAutismPost = () => {
    return (
        <div className="space-y-8">
            <Card 
                className="bg-[#fdfbf4] border-amber-200 shadow-lg"
                style={{
                    backgroundImage: 'linear-gradient(hsl(38, 50%, 85%) 1px, transparent 1px)',
                    backgroundSize: '100% 2.2rem',
                }}
            >
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-amber-800 mb-4"><Heart className="h-8 w-8 text-amber-700" /> A Message to Parents</h2>
                    <div 
                        className="space-y-4 text-amber-900/80 font-serif text-base"
                        style={{ lineHeight: '2.2rem' }}
                    >
                        <p>
                            If you’re reading this article, you might be wondering whether your child is developing differently—and that alone tells us something important: you’re paying attention, you’re trying to understand, and you care deeply.
                        </p>
                        <p>
                            Many of us at HISEN are parents too. Some of us have autistic children. We know the feeling of searching online at 2 AM, wondering whether something is 'a phase,' 'a delay,' or something more.
                        </p>
                        <p>
                            You are not alone. And whatever the outcome, your child is still the same wonderful, unique little person they were yesterday.
                        </p>
                        <p>
                            This article is here to help you recognize early signs and understand your next steps — gently, without fear, and with the support of a community that gets it.
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><BrainCircuit className="h-8 w-8" /> What Is Autism?</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p className="font-semibold text-foreground">A simple, compassionate explanation for families beginning this journey.</p>
                        <p>
                            Autism Spectrum Disorder (ASD) is a developmental difference that affects how a child interacts, communicates, and processes the world around them. It’s not an illness. It’s not anyone’s fault. It’s simply a different way of experiencing life.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>The spectrum is wide — no two autistic children are the same.</li>
                            <li>Many autistic children show signs between 12–36 months, though some signs can appear earlier or later.</li>
                            <li>Early understanding helps families access support, therapy, and tools that can make daily life easier and help your child thrive.</li>
                            <li>Every child grows at their own pace. If you're wondering whether something feels different, you're not alone — many parents have asked the same questions.</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Calendar className="h-8 w-8" /> Common Early Signs (12–36 Months)</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-lg text-foreground mb-2">Communication Differences</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Limited eye contact:</strong> My child did look at me — just not as often as other babies.</li>
                                <li>Minimal response to their name</li>
                                <li>Delayed babbling or speech</li>
                                <li>Repeating words/phrases (echolalia)</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-foreground mb-2">Social Interaction Differences</h3>
                             <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Prefers to play alone</li>
                                <li>Doesn't point to objects they want</li>
                                <li>Limited facial expressions</li>
                                <li>Difficulty sharing attention</li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-bold text-lg text-foreground mb-2">Behavior & Play Patterns</h3>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Lines up toys instead of pretend play</li>
                                <li>Strong focus on spinning wheels/lights/textures</li>
                                <li>Repetitive movements (stimming)</li>
                                <li>Distress with changes in routine</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                     <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Smile className="h-8 w-8" /> Very Human Signs Parents Notice</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p className="font-semibold text-foreground">These are the moments parents remember privately but rarely see listed online:</p>
                        <ul className="list-disc pl-6 space-y-2">
                           <li>Feeling like your child is ‘in their own world’</li>
                            <li>Your baby doesn’t imitate (like clapping or waving)</li>
                            <li>They prefer objects over faces</li>
                            <li>They cry or laugh unexpectedly</li>
                            <li>They have intense reactions to certain fabrics, sounds, or lights</li>
                            <li>They are very calm… or very sensitive</li>
                        </ul>
                        <p className="font-semibold text-foreground">None of these make your child ‘wrong.’ They make your child different — and deeply worth understanding.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><CircleHelp className="h-8 w-8" /> When Should Parents Seek Support?</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                         <p>You don’t need a full checklist of symptoms to ask questions. All you need is concern, curiosity, or the feeling that something is different. Seeking guidance early can make a real difference for your child’s growth and confidence.</p>
                        <div>
                            <h3 className="font-bold text-lg text-foreground">Signs to Pay Attention To</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Communication differences</li>
                                <li>Social differences</li>
                                <li>Behavior/sensory patterns</li>
                                <li>Emotional signs</li>
                            </ul>
                             <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary">
                                <p className="font-bold text-primary">Tip: Notice patterns over time.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-foreground">Professionals You Can Talk To</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Family doctor/pediatrician</li>
                                <li>Speech-language pathologist</li>
                                <li>Child psychologist or behavioral specialist</li>
                                <li>Public health nurses / autism assessment centers</li>
                            </ul>
                            <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary">
                                <p className="font-bold text-primary">Tip: No question is too small.</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Handshake className="h-8 w-8" /> Support & Funding in Alberta</h2>
                    <div className="space-y-2 text-muted-foreground leading-relaxed">
                        <p>FSCD, PUF, Early Intervention Programs, and School IEP/ISP are available supports.</p>
                         <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary">
                            <p className="font-bold text-primary">Tip: HISEN can guide you through these programs.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><BookOpen className="h-8 w-8" /> Practical Steps for Parents</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Document observations</li>
                        <li>Ask questions early</li>
                        <li>Follow up consistently</li>
                        <li>Build a supportive home environment</li>
                    </ul>
                    <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary">
                        <p className="font-bold text-primary">Tip: Being proactive empowers both you and your child — small steps add up over time.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Users className="h-8 w-8" /> Emotional Support for Families</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Connect with parents or groups</li>
                        <li>Practice self-care</li>
                        <li>Celebrate strengths</li>
                    </ul>
                    <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary">
                        <p className="font-bold text-primary">Tip: You are not alone — HISEN is here to support you.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Home className="h-8 w-8" /> How Families Can Support Development at Home</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <h3 className="font-medium text-lg text-foreground">Create Structure & Predictability</h3>
                        <h3 className="font-medium text-lg text-foreground">Build a Sensory-Friendly Environment</h3>
                        <h3 className="font-medium text-lg text-foreground">Encourage Play & Exploration</h3>
                        <h3 className="font-medium text-lg text-foreground">Support Communication</h3>
                        <h3 className="font-medium text-lg text-foreground">Establish Gentle Routines</h3>
                        <h3 className="font-medium text-lg text-foreground">Foster Social & Emotional Skills</h3>
                        <h3 className="font-medium text-lg text-foreground">Reinforce Learning & Celebrate Milestones</h3>
                    </div>
                    <p className="text-muted-foreground italic mt-6">"What you do at home, with love and consistency, is the most powerful therapy of all."</p>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8 text-center">
                    <h2 className="text-2xl font-headline font-bold flex items-center justify-center gap-3 text-primary mb-6">
                        <Star className="h-6 w-6 text-primary" />
                        Final Reminder (From One Parent to Another)
                    </h2>
                    <div className="space-y-6 text-foreground/90 leading-relaxed text-lg">
                        <p>
                            You didn't cause this. You didn't miss anything. Your child is not broken. And you're not behind.
                        </p>
                        <p className="font-semibold">
                            You are learning. Your child is learning. <br />
                            And together? You will grow in ways you never expected.
                        </p>
                        <p>
                            No matter what path your child takes – early support, diagnosis, therapies, school plans – your child is still your child, beautifully unique, capable, and deserving of every opportunity.
                        </p>
                        <p className="font-semibold text-primary">
                            And HISEN is here to walk this journey with you. You never have to navigate this alone.
                        </p>
                    </div>
                     <div className="flex justify-center mt-8">
                         <Button asChild>
                           <Link href="/contact">Get Support From HISEN</Link>
                        </Button>
                     </div>
                </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border/30 shadow-none mt-8">
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="text-muted-foreground mt-1 flex-shrink-0"><AlertTriangle className="h-5 w-5" /></div>
                    <p className="text-sm text-muted-foreground italic">
                        This content is for informational purposes only and does not replace professional, medical, or legal advice.
                    </p>
                </CardContent>
            </Card>
             <div className="text-center mt-8">
                <Button variant="link">Request Spanish interpretation</Button>
            </div>
        </div>
    );
};
