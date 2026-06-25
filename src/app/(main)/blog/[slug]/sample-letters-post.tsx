
import { AlertTriangle, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotebookCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div 
        className={`relative bg-[#fdfbf4] border-amber-200 shadow-lg rounded-lg p-6 md:p-8 mt-4 ${className}`}
        style={{
            backgroundImage: 'linear-gradient(hsl(38, 50%, 85%) 1px, transparent 1px)',
            backgroundSize: '100% 2.2rem',
        }}
    >
        <div 
            className="font-serif text-amber-900/80 text-base"
            style={{ lineHeight: '2.2rem' }}
        >
            {children}
        </div>
    </div>
);

export const SampleLettersPost = () => {
    return (
        <div className="space-y-8">
            <Card className="bg-card/50 border-border/30 shadow-none">
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold text-primary mb-4">Introduction & Overview</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Families often struggle to find the right words when communicating with teachers, administrators, or healthcare providers. These notebook-style templates make the process easier and help ensure your child’s needs are expressed clearly.
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-primary mb-2 flex items-center gap-2"><Lightbulb className="h-5 w-5" /> HISEN Perspective</h3>
                    <p className="text-muted-foreground">
                        Many immigrant or newcomer families feel unsure of how to advocate in writing. Letters provide a respectful, professional way to communicate your child’s needs and ensure your voice is included in decisions.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-headline font-bold text-primary">Request for Assessment</h3>
                    <p className="text-muted-foreground mt-2">Use this letter to ask the school or a doctor for a formal assessment (e.g., developmental, educational, clinical).</p>
                    <NotebookCard>
                        <p>[Your Name]</p>
                        <p>[Address, City, ZIP]</p>
                        <p>[Email / Phone Number]</p>
                        <p>[Date]</p>
                        <br/>
                        <p>[Recipient Name / Title]</p>
                        <p>[School or Clinic Name]</p>
                        <p>[Address]</p>
                        <br/>
                        <p>Dear [Recipient Name],</p>
                        <br/>
                        <p>I am writing to request a [type of assessment] for my child, [Child’s Name], age [X years].</p>
                        <p>Over the past [time period], I have observed concerns with [e.g., speech, attention, social interaction].</p>
                        <br/>
                        <p>Examples of behaviors include:</p>
                        <ul className="list-disc list-inside">
                            <li>[Behavior 1]</li>
                            <li>[Behavior 2]</li>
                            <li>[Behavior 3]</li>
                        </ul>
                        <br/>
                        <p>I believe a formal assessment will help us better understand [Child’s Name]’s needs and how to provide the right support. Please let me know the next steps.</p>
                        <br/>
                        <p>Sincerely,</p>
                        <p>[Your Name]</p>
                    </NotebookCard>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-headline font-bold text-primary">Request for Accommodations / IEP Input</h3>
                    <p className="text-muted-foreground mt-2">Use this letter to ask the school for specific accommodations, supports, or modifications for your child.</p>
                    <NotebookCard>
                        <p>[Your Name]</p>
                        <p>[Address, City, ZIP]</p>
                        <p>[Email / Phone Number]</p>
                        <p>[Date]</p>
                        <br/>
                        <p>[Teacher / Principal / Coordinator Name]</p>
                        <p>[School Name]</p>
                        <p>[Address]</p>
                        <br/>
                        <p>Dear [Recipient Name],</p>
                        <br/>
                        <p>I am writing to request accommodations for my child, [Child’s Name].</p>
                        <p>I have observed that my child struggles with [challenge, e.g., sensory sensitivities, focusing in class].</p>
                        <br/>
                        <p>Some supports that might help include:</p>
                        <ul className="list-disc list-inside">
                            <li>[Support 1]</li>
                            <li>[Support 2]</li>
                            <li>[Support 3]</li>
                        </ul>
                        <br/>
                        <p>I would appreciate the opportunity to discuss these and other strategies to help [Child’s Name] succeed. Thank you for your partnership.</p>
                        <br/>
                        <p>Sincerely,</p>
                        <p>[Your Name]</p>
                    </NotebookCard>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-headline font-bold text-primary">Follow-Up / Progress Check</h3>
                    <p className="text-muted-foreground mt-2">Use this letter to maintain ongoing communication and check in on your child's progress with teachers or clinicians.</p>
                    <NotebookCard>
                        <p>[Your Name]</p>
                        <p>[Address, City, ZIP]</p>
                        <p>[Email / Phone Number]</p>
                        <p>[Date]</p>
                        <br/>
                        <p>[Teacher / Clinician Name]</p>
                        <p>[School / Clinic Name]</p>
                        <p>[Address]</p>
                        <br/>
                        <p>Dear [Recipient Name],</p>
                        <br/>
                        <p>I am following up regarding my child, [Child’s Name]’s, progress since our last discussion on [date or topic]. I have noticed [brief updates on improvements or ongoing challenges].</p>
                        <br/>
                        <p>I would like to schedule a brief meeting to review how things are going and discuss any new strategies, particularly regarding [subject/area].</p>
                        <br/>
                        <p>Thank you for your continued support.</p>
                        <br/>
                        <p>Sincerely,</p>
                        <p>[Your Name]</p>
                    </NotebookCard>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-headline font-bold text-primary">Advocacy Letters (General Support)</h3>
                    <p className="text-muted-foreground mt-2">Use this template to ensure your voice is included in any decisions affecting your child, from support plans to meetings.</p>
                    <NotebookCard>
                        <p>[Your Name]</p>
                        <p>[Address, City, ZIP]</p>
                        <p>[Email / Phone Number]</p>
                        <p>[Date]</p>
                        <br/>
                        <p>[Recipient Name / Title]</p>
                        <p>[School / Clinic Name]</p>
                        <p>[Address]</p>
                        <br/>
                        <p>Dear [Recipient Name],</p>
                        <br/>
                        <p>I am writing to advocate for my child, [Child’s Name], regarding [specific concern]. From my perspective at home, I have observed [brief description of behaviors or needs].</p>
                        <br/>
                        <p>I am requesting the following actions:</p>
                        <ul className="list-disc list-inside">
                            <li>[Request 1]</li>
                            <li>[Request 2]</li>
                        </ul>
                        <br/>
                        <p>Please let me know a convenient time to meet. Thank you for including me as a partner in [Child’s Name]’s support plan.</p>
                        <br/>
                        <p>Sincerely,</p>
                        <p>[Your Name]</p>
                    </NotebookCard>
                </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold text-primary mb-4">Tips for Using These Letters</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">Be Polite & Factual:</strong> Stick to observations and examples.</li>
                        <li><strong className="text-foreground">Include Details:</strong> Mention dates, behaviors, or challenges.</li>
                        <li><strong className="text-foreground">Attach Documents:</strong> Reports, notes, logs, or teacher emails.</li>
                        <li><strong className="text-foreground">Keep Records:</strong> Save every letter you send.</li>
                        <li><strong className="text-foreground">Use Collaborative Language:</strong> Words like “partner,” “support,” and “working together” help strengthen communication.</li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="border-none shadow-none">
                <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground leading-relaxed max-w-prose mx-auto">
                        Using written communication ensures your concerns are documented and your child’s needs are clearly expressed. These templates support clear, professional, and culturally respectful advocacy.
                    </p>
                </CardContent>
            </Card>
            
            <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-primary mb-2 flex items-center gap-2"><Lightbulb className="h-5 w-5" /> HISEN Tip</h3>
                    <p className="text-muted-foreground">
                        Even if you feel unsure or nervous, sending a letter is a powerful step. Interpretation and culturally informed guidance are available through HISEN to support you.
                    </p>
                </CardContent>
            </Card>

            <div className="text-center pt-8">
                 <Button asChild>
                   <Link href="/contact">Get Support From HISEN</Link>
                </Button>
            </div>

            <Card className="bg-card/50 border-border/30 shadow-none mt-8">
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="text-muted-foreground mt-1 flex-shrink-0"><AlertTriangle className="h-5 w-5" /></div>
                    <p className="text-sm text-muted-foreground italic">
                        This content is for informational purposes only and does not replace professional, medical, or legal advice.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};
