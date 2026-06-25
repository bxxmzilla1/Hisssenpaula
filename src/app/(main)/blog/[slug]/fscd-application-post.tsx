
import { AlertTriangle, Book, FileText, HeartHandshake, HelpCircle, Users, CheckCircle, Lightbulb, UserCheck, FolderOpen, ListOrdered, ThumbsUp, GitPullRequest, Hand, ShieldAlert, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const TwoColumnCard = ({ leftTitle, leftItems, rightTitle, rightItems, note }: { leftTitle: string, leftItems: string[], rightTitle: string, rightItems: string[], note: string }) => (
    <Card className="bg-accent/10 border-accent/20">
        <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-bold text-lg text-foreground mb-3">{leftTitle}</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {leftItems.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg text-foreground mb-3">{rightTitle}</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {rightItems.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div className="mt-6 pt-4 border-t border-accent/30">
                <p className="text-center text-muted-foreground text-sm italic">{note}</p>
            </div>
        </CardContent>
    </Card>
);


export const FscdApplicationPost = () => {
    return (
        <div className="space-y-8">
            
            <Card>
                <CardContent className="p-6 md:p-8">
                    <p className="text-muted-foreground leading-relaxed">
                        Applying for Family Support for Children with Disabilities (FSCD) can feel overwhelming—especially if you're new to Canada or navigating systems in a second language. This guide breaks everything down step by step so you can feel confident, supported, and prepared.
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-primary mb-2 flex items-center gap-2"><Users className="h-5 w-5" /> HISEN Perspective</h3>
                    <p className="text-muted-foreground">We understand that navigating FSCD can be challenging for immigrant and Hispanic families. HISEN provides Spanish-language guidance, step-by-step support, and culturally informed workshops to help you through the process.</p>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><HelpCircle className="h-8 w-8" /> What Is FSCD & Why It’s Worth Exploring</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        FSCD is a program from the Alberta Government that provides support to families raising a child with a chronic, developmental, physical, sensory, mental, or neurological disability. The goal is to strengthen your child’s development and your family’s well-being.
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent/20">
                <CardHeader>
                    <CardTitle className="text-xl font-headline text-accent-foreground flex items-center gap-3"><CheckCircle className="h-6 w-6 text-accent" /> FSCD Can Help With</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Respite care (a break for parents)</li>
                        <li>Specialized therapies (OT, Speech, Behavioural Supports)</li>
                        <li>Mileage and parking for medical appointments</li>
                        <li>Counselling for caregivers</li>
                        <li>Help finding or hiring service providers</li>
                        <li>Intensive specialized services for complex needs</li>
                    </ul>
                </CardContent>
            </Card>
            
            <TwoColumnCard 
                leftTitle="Family Support Services (FSS)"
                leftItems={[
                    "Basic level families receive after eligibility",
                    "Includes respite care, counselling, medical travel reimbursement",
                    "Clothing & footwear related to disability needs",
                    "First agreement issued before moving to more specialized supports"
                ]}
                rightTitle="Child Focused Supports (CFS)"
                rightItems={[
                    "Requires full Assessment of Needs",
                    "Includes Specialized Services, Behavioural/Development Supports",
                    "Community aides, personal care aides",
                    "Multidisciplinary, intensive supports for significant needs",
                    "Primary source of therapy funding"
                ]}
                note="Supports Include: respite care, therapy, developmental aids, medical cost assistance, and specialized services."
            />

            <Card className="bg-primary/10 border-primary/20">
                <CardHeader>
                    <CardTitle className="text-xl font-headline text-primary flex items-center gap-3"><UserCheck className="h-6 w-6" /> Eligibility Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-bold text-foreground">Age:</h4>
                        <p className="text-muted-foreground">Child must be under 18.</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-foreground">Residency:</h4>
                        <p className="text-muted-foreground">Child lives in Alberta and is a citizen or PR.</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-foreground">Guardianship:</h4>
                        <p className="text-muted-foreground">You must be the legal guardian living with the child.</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-foreground">Disability:</h4>
                        <p className="text-muted-foreground">A diagnosed or suspected disability supported by medical documentation.</p>
                    </div>
                    <div className="bg-background/40 p-4 rounded-lg mt-4">
                        <p className="font-bold text-primary flex items-center gap-2"><Lightbulb className="h-5 w-5"/> HISEN Tip:</p>
                        <p className="text-muted-foreground mt-1">You can apply even without a final diagnosis if you have a letter confirming your child is on a diagnostic waitlist.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-headline text-primary flex items-center gap-3"><FolderOpen className="h-6 w-6" /> Getting Ready: What to Gather</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">Proof of Child’s Status:</strong> Birth certificate, PR Card, IMM5292, or Passport</li>
                        <li><strong className="text-foreground">Medical Documentation:</strong> diagnosis OR suspected condition report</li>
                        <li><strong className="text-foreground">Proof of Relationship:</strong> birth certificate or guardianship</li>
                    </ul>
                    <p className="text-sm text-muted-foreground italic"><strong className="text-foreground">Financial Note:</strong> FSCD does not pay for diagnostic reports (some exceptions for reimbursements)</p>

                    <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary">
                        <p className="font-bold text-primary flex items-center gap-2"><Lightbulb className="h-5 w-5"/> HISEN Tip:</p>
                        <p className="text-muted-foreground mt-1">Do not delay your application while awaiting a final diagnosis if you have a waitlist confirmation letter.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                     <CardTitle className="text-2xl font-headline text-primary flex items-center gap-3"><ListOrdered className="h-8 w-8" /> How to Apply Step by Step</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 bg-accent/20 text-accent h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                        <div>
                            <h4 className="font-bold text-foreground">Initiate Online</h4>
                            <p className="text-muted-foreground">Apply via MyAlbertaSupports. You may request interpreter assistance.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 bg-accent/20 text-accent h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                        <div>
                            <h4 className="font-bold text-foreground">Submit All Documents</h4>
                            <p className="text-muted-foreground">Upload everything at once—additional uploads cannot be added after submission.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 bg-accent/20 text-accent h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                        <div>
                            <h4 className="font-bold text-foreground">Application Review</h4>
                            <p className="text-muted-foreground">DAP (Disability Application Processing) will assess your documents.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 bg-accent/20 text-accent h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">4</div>
                        <div>
                            <h4 className="font-bold text-foreground">Initial FSS Agreement</h4>
                            <p className="text-muted-foreground">If approved, you’ll receive a basic FSS agreement first.</p>
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <div className="flex-shrink-0 bg-accent/20 text-accent h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">5</div>
                        <div>
                            <h4 className="font-bold text-foreground">Request CFS</h4>
                            <p className="text-muted-foreground">Ask to be placed on the Child Focused Supports waitlist for specialized services.</p>
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <div className="flex-shrink-0 bg-accent/20 text-accent h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">6</div>
                        <div>
                            <h4 className="font-bold text-foreground">Assessment & IFSP</h4>
                            <p className="text-muted-foreground">A caseworker will develop your Individualized Family Support Plan (IFSP).</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
                <CardHeader>
                    <CardTitle className="text-xl font-headline text-primary flex items-center gap-3"><GitPullRequest className="h-6 w-6"/> Advocacy for Specialized Services (CFS)</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">To qualify for CFS, your child must show needs in two or more areas:</p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                        <li>communication</li>
                        <li>behavior</li>
                        <li>sensory regulation</li>
                        <li>cognitive skills</li>
                        <li>daily living skills</li>
                    </ul>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">Be specific about:</strong></p>
                     <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>supervision level</li>
                        <li>safety concerns</li>
                        <li>disability-related expenses</li>
                        <li>daily routine impacts</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-headline text-primary flex items-center gap-3"><Hand className="h-6 w-6"/> Choosing Service Providers</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">You may choose:</strong></p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                        <li>an agency</li>
                        <li>a private provider</li>
                        <li>bilingual or culturally aligned specialists</li>
                    </ul>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">Look for providers who are:</strong></p>
                     <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>neurodiversity-affirming</li>
                        <li>trauma-informed</li>
                        <li>experienced with immigrant/Hispanic families</li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="bg-destructive/10 border-destructive/20">
                 <CardHeader>
                    <CardTitle className="text-xl font-headline text-destructive-foreground flex items-center gap-3"><ShieldAlert className="h-6 w-6"/> What If Things Don’t Go as Expected?</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>First, try resolving disagreements with your worker.</li>
                        <li>If unresolved, file a formal appeal within 45 days.</li>
                        <li>You may request mediation and interpretation.</li>
                        <li>A Citizen’s Appeal Panel will review your case.</li>
                        <li><strong className="text-foreground">45-day deadline is strict.</strong></li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="border-none shadow-none text-center">
                <CardContent className="p-6 md:p-8">
                     <h2 className="text-2xl font-headline font-bold flex items-center justify-center gap-3 text-primary mb-6">
                        <Star className="h-6 w-6 text-primary" />
                        Ready to find support?
                    </h2>
                    <p className="text-lg text-muted-foreground italic leading-relaxed max-w-prose mx-auto">
                        You don’t have to do this alone. FSCD can bring stability, respite, and access to therapies. HISEN and community partners are here to walk with you every step of the way.
                    </p>
                     <div className="flex justify-center mt-8">
                         <Button asChild>
                           <Link href="/contact">Get Support From HISEN</Link>
                        </Button>
                     </div>
                </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-primary/50 shadow-none mt-8 border">
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
