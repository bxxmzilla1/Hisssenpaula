
import { AlertTriangle, Lightbulb, CalendarCheck, ClipboardList, BookUser, Users, Phone, ShieldCheck, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const WaitlistInformationPost = () => {
    return (
        <div className="space-y-8">
            
            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold text-primary mb-4">Introduction & Overview</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Waiting for specialized services in Alberta can be stressful and confusing for families. This guide provides practical strategies, organizational tools, and supportive tips to help you manage waitlists, prepare for appointments, and advocate effectively while ensuring your child receives timely care.
                    </p>
                </CardContent>
            </Card>
            
            <Card className="bg-accent/10 border-accent/20">
                <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary flex items-center gap-3"><CalendarCheck className="h-6 w-6"/> Navigating the Alberta Waitlists</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Long wait times for AHS-funded services—including diagnostics, psychiatry, speech therapy, occupational therapy, and developmental assessments—are common. However, families can take active steps to reduce delays and stay informed.
                    </p>
                     <h4 className="font-bold text-lg text-foreground mb-2">Be Proactive</h4>
                    <p className="text-muted-foreground">
                        Once your family doctor sends a referral, follow up within one week to confirm that the referral was received and that your child is officially added to the provider’s waitlist.
                    </p>
                </CardContent>
            </Card>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary">
                <h3 className="font-bold text-lg text-primary mb-2 flex items-center gap-2"><Star className="h-5 w-5"/> The Cancellation List (Your Shortcut)</h3>
                <p className="text-muted-foreground mb-4">Every clinic maintains a cancellation list. This can significantly speed up your appointment.</p>
                <p className="font-semibold text-foreground mb-2">Script to use when calling:</p>
                <div className="border border-dashed border-border p-4 rounded-lg bg-background/50 text-muted-foreground italic">
                    “Please place my child on the cancellation list. We are available to come in on very short notice.”
                </div>
            </div>

            <Card className="bg-primary/10 border-primary/20">
                 <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary flex items-center gap-3"><ClipboardList className="h-6 w-6"/> Keep a Waitlist Log</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">Track your waitlist information in a notebook, spreadsheet, or digital file.</p>
                    <p className="font-semibold text-foreground mb-2">Include:</p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Date the referral was sent</li>
                        <li>Specialist or clinic name</li>
                        <li>Estimated wait time</li>
                        <li>Date of last follow-up call (recommended every 4–6 weeks)</li>
                    </ul>
                     <div className="bg-background/40 p-4 rounded-lg mt-6">
                        <p className="font-bold text-primary flex items-center gap-2"><Lightbulb className="h-5 w-5"/> Tip:</p>
                        <p className="text-muted-foreground mt-1">Staying organized and following up regularly is viewed positively by clinics and can help reduce wait times.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                 <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary flex items-center gap-3"><BookUser className="h-6 w-6"/> Appointment Preparation (Maximizing Your Time)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                        Specialist appointments may be short (20–45 minutes). Being prepared ensures clear communication and helps providers understand your child’s needs quickly.
                    </p>
                    
                    <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
                        <h4 className="font-bold text-lg text-foreground mb-2">✔ Top 5 Concerns List</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>Sleep challenges</li>
                            <li>Anxiety</li>
                            <li>School refusal</li>
                            <li>Sensory needs</li>
                            <li>Communication difficulties</li>
                        </ul>
                        <p className="text-muted-foreground mt-4 italic">Bring a simple, written list to your appointment.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg text-foreground mb-2">✔ Document Specific Examples</h4>
                        <p className="text-muted-foreground mb-2">Give concrete examples instead of general statements.</p>
                        <div className="border border-dashed border-border p-4 rounded-lg bg-background/50 text-muted-foreground">
                            <p className="font-semibold">Example:</p>
                            <p className="mt-1 italic">“Three times in the last month, my child became aggressive after a sudden change in routine, leading to refusal to attend school.”</p>
                        </div>
                        <p className="text-muted-foreground mt-4">These details help professionals understand patterns and severity.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg text-foreground mb-2">✔ Organize Documentation</h4>
                        <p className="text-muted-foreground mb-2">Before your appointment, prepare a folder containing:</p>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>Current medications</li>
                            <li>AHCIP card and child’s ID</li>
                            <li>Diagnosis reports from your home country (translated if possible)</li>
                            <li>Most recent school report, IEP, or teacher notes</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold text-lg text-foreground mb-2">✔ Prepare Your Teen (If Applicable)</h4>
                        <p className="text-muted-foreground mb-2">Speak with them beforehand. Reassure them that the specialist is there to help, not judge. Practice simple phrases they might use to communicate their feelings:</p>
                         <div className="border border-dashed border-border p-4 rounded-lg bg-background/50 text-muted-foreground italic">
                           <p>“I get overwhelmed at school.”</p>
                           <p>“I can’t focus when there’s noise.”</p>
                           <p>“I feel anxious before tests.”</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
                 <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary flex items-center gap-3"><Users className="h-6 w-6"/> Supports Available While You Wait</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-bold text-foreground">Crisis & Emotional Support (No Referral Needed)</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                            <li>Alberta Mental Health Helpline: <a href="tel:1-877-303-2642" className="text-primary hover:underline">1-877-303-2642</a> (24/7)</li>
                            <li>Kids Help Phone: <a href="tel:1-800-668-6868" className="text-primary hover:underline">1-800-668-6868</a> (text/call options for teens)</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold text-foreground">Community Resources</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                            <li>Family Resource Networks (FRNs) offer parenting programs, support groups, and free connections to services.</li>
                            <li>Community centers often provide drop-in programs, social skills groups, and workshops for children and teens.</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold text-foreground">FSCD Respite Services</h4>
                        <p className="text-muted-foreground">If your child is approved for FSCD, take advantage of Respite. It supports parent wellness, reduces burnout, and offers stability while you wait for assessments or therapy.</p>
                    </div>
                </CardContent>
            </Card>
            
            <Card className="bg-accent/10 border-accent/20">
                <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary flex items-center gap-3"><Lightbulb className="h-6 w-6"/> Pro Tips for Families</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Consistency and organization are your best tools.</li>
                        <li>Track every referral date and every follow-up call.</li>
                        <li>Document behaviors and incidents as they occur.</li>
                        <li>Prepare for appointments like an interview—bring examples and notes.</li>
                        <li>Use all available community supports while you wait.</li>
                        <li>Your advocacy directly improves access and outcomes.</li>
                    </ul>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary flex items-center gap-3"><ShieldCheck className="h-6 w-6"/> HISEN Perspective & Cultural Tips</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Newcomer families may feel uncertain navigating Alberta’s waitlist system. Interpretation services are available. Keep copies of all documents in your first language as well as English when possible.
                    </p>
                    <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary">
                        <p className="font-bold text-primary flex items-center gap-2"><Lightbulb className="h-5 w-5"/> HISEN Tip:</p>
                        <p className="text-muted-foreground mt-1">
                            Proactive communication—following up, documenting, and staying organized—is viewed positively by Alberta providers and can help reduce delays.
                        </p>
                    </div>
                </CardContent>
            </Card>
            
            <div className="bg-primary/10 text-center p-8 rounded-2xl border border-primary/20">
              <h2 className="text-2xl font-headline font-bold text-primary mb-4">Final Encouragement</h2>
              <p className="text-foreground/90 leading-relaxed max-w-prose mx-auto text-lg">
                You do not have to wait passively. Immediate supports exist, and every step you take helps your child receive the care they deserve. HISEN and community partners are here to support your family every step of the way.
              </p>
            </div>
            
            <div className="text-center pt-4">
                 <Button asChild>
                   <Link href="/contact">Get Support From HISEN</Link>
                </Button>
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
    );
};
