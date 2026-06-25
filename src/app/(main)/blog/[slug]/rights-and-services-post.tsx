'use client';

import { AlertTriangle, Stethoscope, BookOpen, Users, Globe, CheckCircle2, HeartHandshake, FileText, BadgeHelp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';

const content = {
    en: {
        introTitle: "Introduction & Overview",
        introDesc: "Every child in Canada has protected rights to healthcare, education, and disability supports, regardless of immigration status. These rights are supported by laws like the Canadian Charter of Rights and Freedoms and the UN Convention on the Rights of the Child. It is crucial for families to understand and actively advocate for these rights.",
        healthcareTitle: "Right to Healthcare",
        healthcareDesc: "The Canada Health Act ensures access to medically necessary services for all residents.",
        keyDetailsHealthcare: "Key Details for Newcomers & Children with Disabilities",
        rightHeader: "Right / Access Point",
        detailsHeader: "Details",
        advocacyHeader: "Advocacy Focus",
        universality: "Universality & Eligibility",
        universalityDetails: "Apply for your Alberta Health Care Insurance Plan (AHCIP) as soon as residency is established. There can be a waiting period of up to 3 months.",
        universalityAdvocacy: "Apply immediately to minimize delays in accessing care.",
        medicallyNecessary: "Medically Necessary Services",
        medicallyNecessaryDetails: "Covers family doctor visits, emergency room care, hospital procedures, and referrals to specialists like pediatricians and child psychiatrists.",
        medicallyNecessaryAdvocacy: "Request referrals proactively. Be sure to include co-occurring mental health concerns in your discussions.",
        interpreterServices: "Interpreter Services",
        interpreterServicesDetails: "Alberta Health Services (AHS) provides professional interpreters for complex appointments. You have the right to request one.",
        interpreterServicesAdvocacy: "Do not allow your child to translate sensitive medical information. Request an interpreter in advance of your appointment.",
        hisenTipsHealthcare: "HISEN Tips:",
        hisenTipHealthcare1: "Keep all medical records and appointment notes organized.",
        hisenTipHealthcare2: "Track referral dates and follow up regularly.",
        hisenTipHealthcare3: "Advocate early and in writing for specialist referrals if you have concerns.",
        educationTitle: "Right to Education",
        educationDesc: "Alberta’s education system is built on the principle of inclusive education, guaranteeing quality schooling for all students, regardless of disability or newcomer status.",
        keyDetailsEducation: "Key Education Details",
        freePublicEducation: "Free Public Education",
        freePublicEducationDetails: "All children in Alberta may attend school free of charge until they complete Grade 12 (or turn 19).",
        freePublicEducationAdvocacy: "Enroll your child in school immediately upon arrival to begin the assessment and support planning process.",
        iep: "Individualized Education Plan (IEP)",
        iepDetails: "An IEP is a legal document required for students with special education needs. It outlines goals, supports, and accommodations.",
        iepAdvocacy: "Be an active participant in IEP meetings. You can request amendments and appeal decisions if they do not meet your child’s needs.",
        accommodationVsModification: "Accommodation vs. Modification",
        accommodationVsModificationDetails: "Accommodations help students access the standard curriculum (e.g., extra time). Modifications lower curriculum standards.",
        accommodationVsModificationAdvocacy: "Advocate for accommodations whenever possible to ensure your child remains on a diploma track.",
        languageSupport: "Language Support",
        languageSupportDetails: "English Language Learner (ELL/ESL) programs run alongside special education support. They are not mutually exclusive.",
        languageSupportAdvocacy: "Request professional interpreters for all official meetings, including IEP reviews, to ensure you fully understand the plan.",
        hisenTipsEducation: "HISEN Tips:",
        hisenTipEducation1: "Keep all school records, assessments, and communication logs in one place.",
        hisenTipEducation2: "Advocate for culturally responsive support that respects your child’s background.",
        disabilitySupportsTitle: "Right to Disability Supports (FSCD)",
        disabilitySupportsDesc: "Family Support for Children with Disabilities (FSCD) provides funding and supports to help children with disabilities live full, supported lives at home and in the community.",
        keyDetailsFSCD: "Key FSCD Details",
        fscdEligibility: "Eligibility for Funding",
        fscdEligibilityDetails: "The child must be under 18, be a Canadian citizen or permanent resident, and reside in Alberta.",
        fscdEligibilityAdvocacy: "Have your child's Permanent Resident card or IMM 5292 document ready when you apply.",
        fss: "Family Support Services (FSS)",
        fssDetails: "Provides services like respite care, family counselling, and assistance with some medical costs.",
        fssAdvocacy: "Always apply for respite services. Caregiver support is critical for family well-being.",
        cfs: "Child-Focused Supports (CFS)",
        cfsDetails: "Offers intensive therapy (e.g., Behavioural Developmental Supports) and personal aides. Requires a detailed Assessment of Needs.",
        cfsAdvocacy: "If you are only offered FSS but need more, ask to be placed on the CFS waitlist. Document all your child’s needs in writing.",
        hisenTipsFSCD: "HISEN Tips:",
        hisenTipFSCD1: "Keep detailed notes of your child’s daily needs to build a strong case for support.",
        hisenTipFSCD2: "Submit all requests and follow-ups in writing (email is fine).",
        hisenTipFSCD3: "Use community supports like HISEN to help you with the application process.",
        additionalSupportsTitle: "Additional Supports While Accessing Services",
        crisisSupportTitle: "Crisis & Emotional Support (Free, No Referral Needed)",
        crisisSupport1: "Alberta Mental Health Helpline: 1-877-303-2642",
        crisisSupport2: "Kids Help Phone: 1-800-668-6868",
        communityResourcesTitle: "Community Resources",
        resource1: "Family Resource Networks (FRNs)",
        resource2: "Local community centers for social skills groups and workshops",
        resource3: "FSCD Respite Services for scheduled breaks",
        practicalStepsTitle: "Practical Steps for Newcomer Families",
        step1: "Organize documentation: Keep all medical, school, and legal documents in a dedicated folder.",
        step2: "Track referrals: Maintain a log of all referrals and appointment dates.",
        step3: "Advocate early: Submit written letters requesting assessments, accommodations, and supports.",
        step4: "Request interpretation: Always ask for professional interpreters for important meetings.",
        step5: "Leverage community resources: Connect with HISEN and other community partners for guidance.",
        advocacyLetterTitle: "Sample Advocacy Letter Template",
        date: "Date",
        to: "To: [School / Doctor / FSCD Caseworker]",
        subject: "Subject: Request for Assessment / Accommodation / Support",
        dear: "Dear [Recipient Name],",
        letterBody1: "I am writing to formally request [assessment/accommodation/service] for my child, [Child Name], aged [X] years.",
        observationsTitle: "Observations / Concerns:",
        observation1: "[Example 1]",
        observation2: "[Example 2]",
        observation3: "[Example 3]",
        requestedSupportTitle: "Requested Support:",
        support1: "[Support 1]",
        support2: "[Support 2]",
        letterClosing: "Thank you for your attention to this matter. I am happy to provide further documentation or meet to discuss my child’s needs.",
        sincerely: "Sincerely,",
        parentName: "[Parent Name]",
        contactInfo: "[Contact Info]",
        templateNote: "Note: This is a sample template for illustration only. Do not fill in online—it’s meant to show layout and structure.",
        takeawaysTitle: "Key Takeaways & Encouragement",
        takeaway1: "✓ Every child has protected rights to healthcare, education, and disability supports.",
        takeaway2: "✓ Families must actively request and advocate for these services.",
        takeaway3: "✓ Organization, persistence, and documentation are critical tools.",
        takeaway4: "✓ HISEN and community partners are here to provide culturally informed guidance and support.",
        disclaimer: "This content is for informational purposes only and does not replace professional, medical, or legal advice."
    },
    es: {
        introTitle: "Introducción y Descripción General",
        introDesc: "Todo niño en Canadá tiene derechos protegidos a la atención médica, la educación y los apoyos por discapacidad, independientemente de su estatus migratorio. Estos derechos están respaldados por leyes como la Carta Canadiense de Derechos y Libertades y la Convención de las Naciones Unidas sobre los Derechos del Niño. Es crucial que las familias comprendan y aboguen activamente por estos derechos.",
        healthcareTitle: "Derecho a la Atención Médica",
        healthcareDesc: "La Ley de Salud de Canadá garantiza el acceso a servicios médicamente necesarios para todos los residentes.",
        keyDetailsHealthcare: "Detalles Clave para Recién Llegados y Niños con Discapacidades",
        rightHeader: "Derecho / Punto de Acceso",
        detailsHeader: "Detalles",
        advocacyHeader: "Foco de la Abogacía",
        universality: "Universalidad y Elegibilidad",
        universalityDetails: "Solicite su Plan de Seguro de Salud de Alberta (AHCIP) tan pronto como se establezca la residencia. Puede haber un período de espera de hasta 3 meses.",
        universalityAdvocacy: "Solicítelo de inmediato para minimizar los retrasos en el acceso a la atención.",
        medicallyNecessary: "Servicios Médicamente Necesarios",
        medicallyNecessaryDetails: "Cubre visitas al médico de familia, atención en la sala de emergencias, procedimientos hospitalarios y derivaciones a especialistas como pediatras y psiquiatras infantiles.",
        medicallyNecessaryAdvocacy: "Solicite derivaciones de forma proactiva. Asegúrese de incluir las preocupaciones de salud mental concurrentes en sus conversaciones.",
        interpreterServices: "Servicios de Intérprete",
        interpreterServicesDetails: "Alberta Health Services (AHS) proporciona intérpretes profesionales para citas complejas. Tiene derecho a solicitar uno.",
        interpreterServicesAdvocacy: "No permita que su hijo traduzca información médica confidencial. Solicite un intérprete antes de su cita.",
        hisenTipsHealthcare: "Consejos de HISEN:",
        hisenTipHealthcare1: "Mantenga organizados todos los registros médicos y las notas de las citas.",
        hisenTipHealthcare2: "Realice un seguimiento de las fechas de derivación y haga un seguimiento regular.",
        hisenTipHealthcare3: "Abogue temprano y por escrito por las derivaciones a especialistas si tiene preocupaciones.",
        educationTitle: "Derecho a la Educación",
        educationDesc: "El sistema educativo de Alberta se basa en el principio de educación inclusiva, garantizando una escolarización de calidad para todos los estudiantes, independientemente de su discapacidad o estatus de recién llegado.",
        keyDetailsEducation: "Detalles Clave de Educación",
        freePublicEducation: "Educación Pública Gratuita",
        freePublicEducationDetails: "Todos los niños en Alberta pueden asistir a la escuela de forma gratuita hasta que completen el Grado 12 (o cumplan 19 años).",
        freePublicEducationAdvocacy: "Inscriba a su hijo en la escuela inmediatamente después de su llegada para comenzar el proceso de evaluación y planificación de apoyo.",
        iep: "Plan de Educación Individualizado (IEP)",
        iepDetails: "Un IEP es un documento legal requerido para estudiantes con necesidades de educación especial. Describe metas, apoyos y adaptaciones.",
        iepAdvocacy: "Sea un participante activo en las reuniones del IEP. Puede solicitar enmiendas y apelar decisiones si no satisfacen las necesidades de su hijo.",
        accommodationVsModification: "Adaptación vs. Modificación",
        accommodationVsModificationDetails: "Las adaptaciones ayudan a los estudiantes a acceder al plan de estudios estándar (p. ej., tiempo extra). Las modificaciones reducen los estándares del plan de estudios.",
        accommodationVsModificationAdvocacy: "Abogue por adaptaciones siempre que sea posible para garantizar que su hijo permanezca en la vía del diploma.",
        languageSupport: "Apoyo Lingüístico",
        languageSupportDetails: "Los programas para aprendices del idioma inglés (ELL/ESL) se ejecutan junto con el apoyo de educación especial. No son mutuamente excluyentes.",
        languageSupportAdvocacy: "Solicite intérpretes profesionales para todas las reuniones oficiales, incluidas las revisiones del IEP, para asegurarse de comprender completamente el plan.",
        hisenTipsEducation: "Consejos de HISEN:",
        hisenTipEducation1: "Mantenga todos los registros escolares, evaluaciones y registros de comunicación en un solo lugar.",
        hisenTipEducation2: "Abogue por un apoyo culturalmente sensible que respete los antecedentes de su hijo.",
        disabilitySupportsTitle: "Derecho a Apoyos por Discapacidad (FSCD)",
        disabilitySupportsDesc: "El Apoyo Familiar para Niños con Discapacidades (FSCD) proporciona financiamiento y apoyos para ayudar a los niños con discapacidades a vivir una vida plena y con apoyo en el hogar y en la comunidad.",
        keyDetailsFSCD: "Detalles Clave de FSCD",
        fscdEligibility: "Elegibilidad para Financiamiento",
        fscdEligibilityDetails: "El niño debe ser menor de 18 años, ser ciudadano canadiense o residente permanente y residir en Alberta.",
        fscdEligibilityAdvocacy: "Tenga lista la tarjeta de residente permanente de su hijo o el documento IMM 5292 cuando presente la solicitud.",
        fss: "Servicios de Apoyo Familiar (FSS)",
        fssDetails: "Proporciona servicios como cuidado de relevo, asesoramiento familiar y asistencia con algunos costos médicos.",
        fssAdvocacy: "Solicite siempre servicios de relevo. El apoyo al cuidador es fundamental para el bienestar familiar.",
        cfs: "Apoyos Centrados en el Niño (CFS)",
        cfsDetails: "Ofrece terapia intensiva (p. ej., Apoyos para el Desarrollo del Comportamiento) y asistentes personales. Requiere una Evaluación de Necesidades detallada.",
        cfsAdvocacy: "Si solo le ofrecen FSS pero necesita más, pida que lo pongan en la lista de espera de CFS. Documente todas las necesidades de su hijo por escrito.",
        hisenTipsFSCD: "Consejos de HISEN:",
        hisenTipFSCD1: "Mantenga notas detalladas de las necesidades diarias de su hijo para construir un caso sólido de apoyo.",
        hisenTipFSCD2: "Envíe todas las solicitudes y seguimientos por escrito (el correo electrónico está bien).",
        hisenTipFSCD3: "Utilice apoyos comunitarios como HISEN para ayudarle con el proceso de solicitud.",
        additionalSupportsTitle: "Apoyos Adicionales Mientras Accede a los Servicios",
        crisisSupportTitle: "Apoyo Emocional y de Crisis (Gratuito, No se Necesita Derivación)",
        crisisSupport1: "Línea de Ayuda de Salud Mental de Alberta: 1-877-303-2642",
        crisisSupport2: "Línea de Ayuda para Niños: 1-800-668-6868",
        communityResourcesTitle: "Recursos Comunitarios",
        resource1: "Redes de Recursos Familiares (FRN)",
        resource2: "Centros comunitarios locales para grupos de habilidades sociales y talleres",
        resource3: "Servicios de Relevo de FSCD para descansos programados",
        practicalStepsTitle: "Pasos Prácticos para Familias Recién Llegadas",
        step1: "Organice la documentación: Mantenga todos los documentos médicos, escolares y legales en una carpeta dedicada.",
        step2: "Realice un seguimiento de las derivaciones: Mantenga un registro de todas las derivaciones y fechas de citas.",
        step3: "Abogue temprano: Envíe cartas por escrito solicitando evaluaciones, adaptaciones y apoyos.",
        step4: "Solicite interpretación: Siempre pida intérpretes profesionales para reuniones importantes.",
        step5: "Aproveche los recursos comunitarios: Conéctese con HISEN y otros socios comunitarios para obtener orientación.",
        advocacyLetterTitle: "Plantilla de Carta de Abogacía de Muestra",
        date: "Fecha",
        to: "Para: [Escuela / Médico / Asistente Social de FSCD]",
        subject: "Asunto: Solicitud de Evaluación / Adaptación / Apoyo",
        dear: "Estimado/a [Nombre del Destinatario],",
        letterBody1: "Le escribo para solicitar formalmente [evaluación/adaptación/servicio] para mi hijo, [Nombre del Niño], de [X] años.",
        observationsTitle: "Observaciones / Preocupaciones:",
        observation1: "[Ejemplo 1]",
        observation2: "[Ejemplo 2]",
        observation3: "[Ejemplo 3]",
        requestedSupportTitle: "Apoyo Solicitado:",
        support1: "[Apoyo 1]",
        support2: "[Apoyo 2]",
        letterClosing: "Gracias por su atención a este asunto. Me complace proporcionar documentación adicional o reunirme para discutir las necesidades de mi hijo.",
        sincerely: "Atentamente,",
        parentName: "[Nombre del Padre/Madre]",
        contactInfo: "[Información de Contacto]",
        templateNote: "Nota: Esta es una plantilla de muestra solo para ilustración. No la complete en línea, está destinada a mostrar el diseño y la estructura.",
        takeawaysTitle: "Conclusiones Clave y Ánimo",
        takeaway1: "✓ Todo niño tiene derechos protegidos a la atención médica, la educación y los apoyos por discapacidad.",
        takeaway2: "✓ Las familias deben solicitar y abogar activamente por estos servicios.",
        takeaway3: "✓ La organización, la persistencia и la documentación son herramientas fundamentales.",
        takeaway4: "✓ HISEN y los socios comunitarios están aquí para brindar orientación y apoyo culturalmente informados.",
        disclaimer: "Este contenido es solo para fines informativos y no reemplaza el consejo profesional, médico o legal."
    }
};

const TableHeader = () => {
    const { language } = useLanguage();
    const t = content[language];
    return (
        <div className="hidden md:grid grid-cols-3 gap-4 pb-4 border-b border-border">
            <div className="font-bold text-foreground">{t.rightHeader}</div>
            <div className="font-bold text-foreground">{t.detailsHeader}</div>
            <div className="font-bold text-foreground">{t.advocacyHeader}</div>
        </div>
    );
};


const TableRow = ({ right, details, advocacy }: { right: string, details: string, advocacy: string }) => {
    const { language } = useLanguage();
    const t = content[language];
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-border last:border-b-0">
            <div>
                <h4 className="font-bold text-foreground md:font-normal">{right}</h4>
            </div>
            <div className="text-muted-foreground">{details}</div>
            <div>
                <p className="font-semibold text-accent md:hidden">{t.advocacyHeader}:</p>
                <p className="text-muted-foreground">{advocacy}</p>
            </div>
        </div>
    );
};

export const RightsAndServicesPost = () => {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <div className="space-y-8">
            <Card>
                <CardContent className="p-6 md:p-8">
                     <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><HeartHandshake className="h-8 w-8" /> {t.introTitle}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {t.introDesc}
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Stethoscope className="h-8 w-8" /> {t.healthcareTitle}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        {t.healthcareDesc}
                    </p>
                    <div className="bg-background/50 rounded-lg p-4">
                        <h3 className="font-headline text-xl text-primary mb-4">{t.keyDetailsHealthcare}</h3>
                        <TableHeader />
                        <TableRow 
                            right={t.universality}
                            details={t.universalityDetails}
                            advocacy={t.universalityAdvocacy}
                        />
                        <TableRow 
                            right={t.medicallyNecessary}
                            details={t.medicallyNecessaryDetails}
                            advocacy={t.medicallyNecessaryAdvocacy}
                        />
                        <TableRow 
                            right={t.interpreterServices}
                            details={t.interpreterServicesDetails}
                            advocacy={t.interpreterServicesAdvocacy}
                        />
                    </div>
                     <div className="bg-primary/10 p-4 rounded-lg mt-6 border border-primary">
                        <h4 className="font-bold text-primary flex items-center gap-2"><BadgeHelp className="h-5 w-5"/> {t.hisenTipsHealthcare}</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                            <li>{t.hisenTipHealthcare1}</li>
                            <li>{t.hisenTipHealthcare2}</li>
                            <li>{t.hisenTipHealthcare3}</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><BookOpen className="h-8 w-8" /> {t.educationTitle}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        {t.educationDesc}
                    </p>
                     <div className="bg-background/50 rounded-lg p-4">
                        <h3 className="font-headline text-xl text-primary mb-4">{t.keyDetailsEducation}</h3>
                        <TableHeader />
                        <TableRow 
                            right={t.freePublicEducation}
                            details={t.freePublicEducationDetails}
                            advocacy={t.freePublicEducationAdvocacy}
                        />
                        <TableRow 
                            right={t.iep}
                            details={t.iepDetails}
                            advocacy={t.iepAdvocacy}
                        />
                         <TableRow 
                            right={t.accommodationVsModification}
                            details={t.accommodationVsModificationDetails}
                            advocacy={t.accommodationVsModificationAdvocacy}
                        />
                        <TableRow 
                            right={t.languageSupport}
                            details={t.languageSupportDetails}
                            advocacy={t.languageSupportAdvocacy}
                        />
                    </div>
                     <div className="bg-primary/10 p-4 rounded-lg mt-6 border border-primary">
                        <h4 className="font-bold text-primary flex items-center gap-2"><BadgeHelp className="h-5 w-5"/> {t.hisenTipsEducation}</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                            <li>{t.hisenTipEducation1}</li>
                            <li>{t.hisenTipEducation2}</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Users className="h-8 w-8" /> {t.disabilitySupportsTitle}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        {t.disabilitySupportsDesc}
                    </p>
                     <div className="bg-background/50 rounded-lg p-4">
                        <h3 className="font-headline text-xl text-primary mb-4">{t.keyDetailsFSCD}</h3>
                        <TableHeader />
                        <TableRow 
                            right={t.fscdEligibility}
                            details={t.fscdEligibilityDetails}
                            advocacy={t.fscdEligibilityAdvocacy}
                        />
                        <TableRow 
                            right={t.fss}
                            details={t.fssDetails}
                            advocacy={t.fssAdvocacy}
                        />
                        <TableRow 
                            right={t.cfs}
                            details={t.cfsDetails}
                            advocacy={t.cfsAdvocacy}
                        />
                    </div>
                     <div className="bg-primary/10 p-4 rounded-lg mt-6 border border-primary">
                        <h4 className="font-bold text-primary flex items-center gap-2"><BadgeHelp className="h-5 w-5"/> {t.hisenTipsFSCD}</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                            <li>{t.hisenTipFSCD1}</li>
                            <li>{t.hisenTipFSCD2}</li>
                            <li>{t.hisenTipFSCD3}</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Globe className="h-8 w-8" /> {t.additionalSupportsTitle}</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold text-lg text-foreground">{t.crisisSupportTitle}</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                                <li>{t.crisisSupport1.split(':')[0]}: <a href="tel:1-877-303-2642" className="text-primary hover:underline">{t.crisisSupport1.split(':')[1]}</a></li>
                                <li>{t.crisisSupport2.split(':')[0]}: <a href="tel:1-800-668-6868" className="text-primary hover:underline">{t.crisisSupport2.split(':')[1]}</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-foreground">{t.communityResourcesTitle}</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                                <li>{t.resource1}</li>
                                <li>{t.resource2}</li>
                                <li>{t.resource3}</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                     <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><CheckCircle2 className="h-8 w-8" /> {t.practicalStepsTitle}</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">{t.step1.split(':')[0]}:</strong>{t.step1.split(':')[1]}</li>
                        <li><strong className="text-foreground">{t.step2.split(':')[0]}:</strong>{t.step2.split(':')[1]}</li>
                        <li><strong className="text-foreground">{t.step3.split(':')[0]}:</strong>{t.step3.split(':')[1]}</li>
                        <li><strong className="text-foreground">{t.step4.split(':')[0]}:</strong>{t.step4.split(':')[1]}</li>
                        <li><strong className="text-foreground">{t.step5.split(':')[0]}:</strong>{t.step5.split(':')[1]}</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                     <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><FileText className="h-8 w-8" /> {t.advocacyLetterTitle}</h2>
                     <div className="border border-dashed border-border p-6 rounded-lg bg-background/50 mt-4">
                        <p className="text-muted-foreground">[{t.date}]</p>
                        <br />
                        <p className="text-muted-foreground">{t.to}</p>
                        <p className="text-muted-foreground">{t.subject}</p>
                        <br />
                        <p className="text-muted-foreground">{t.dear}</p>
                        <br />
                        <p className="text-muted-foreground">{t.letterBody1}</p>
                        <br />
                        <p className="text-foreground font-semibold">{t.observationsTitle}</p>
                        <ul className="list-disc pl-6 text-muted-foreground">
                            <li>{t.observation1}</li>
                            <li>{t.observation2}</li>
                            <li>{t.observation3}</li>
                        </ul>
                        <br />
                        <p className="text-foreground font-semibold">{t.requestedSupportTitle}</p>
                         <ul className="list-disc pl-6 text-muted-foreground">
                            <li>{t.support1}</li>
                            <li>{t.support2}</li>
                        </ul>
                        <br />
                        <p className="text-muted-foreground">{t.letterClosing}</p>
                        <br />
                        <p className="text-muted-foreground">{t.sincerely}</p>
                        <p className="text-muted-foreground">{t.parentName}</p>
                        <p className="text-muted-foreground">{t.contactInfo}</p>
                     </div>
                     <p className="text-xs text-center mt-4 text-muted-foreground italic">{t.templateNote}</p>
                </CardContent>
            </Card>
            
            <div className="bg-primary/10 text-center p-8 rounded-2xl border border-primary/20">
              <h2 className="text-2xl font-headline font-bold text-primary mb-4">{t.takeawaysTitle}</h2>
              <ul className="list-none space-y-3 max-w-prose mx-auto text-foreground/90 text-lg">
                <li>{t.takeaway1}</li>
                <li>{t.takeaway2}</li>
                <li>{t.takeaway3}</li>
                <li>{t.takeaway4}</li>
              </ul>
            </div>

            <Card className="bg-card/50 border-primary/50 shadow-none mt-8 border">
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="text-muted-foreground mt-1 flex-shrink-0"><AlertTriangle className="h-5 w-5 text-primary" /></div>
                    <p className="text-sm text-muted-foreground italic">
                        {t.disclaimer}
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};
