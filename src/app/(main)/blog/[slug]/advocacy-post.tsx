'use client';

import { AlertTriangle, Book, MessageSquare, ShieldCheck, FileText, HeartHandshake, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';

const content = {
    en: {
        whyAdvocacyMatters: 'Why Advocacy Matters',
        whyAdvocacyMattersDesc: "Parents know their child best. In Canadian schools, collaboration between families and teachers is essential for student success. For newcomer families, advocacy means ensuring your child's needs—both for learning and for cultural integration—are recognized and supported. Your voice is the most important tool your child has!",
        rightMindset: 'Start With the Right Mindset',
        rightMindsetDesc: "When you are new to the system, it is easy to feel intimidated. Remember, you are your child's expert.",
        teamworkApproach: 'Approach conversations as teamwork:',
        teamworkApproachDesc: 'Schools are focused on finding solutions. View teachers and administrators as partners in your child’s success, not obstacles.',
        assertiveApproach: 'Be respectful but assertive:',
        assertiveApproachDesc: 'It\'s okay to ask tough questions gently. Use phrases that start with “I am concerned about…” or “What specific support can the school provide for…”',
        concreteExamples: 'Bring concrete examples of what your child struggles with:',
        example1: '“When there is a sudden change in routine, my child has a meltdown.”',
        example2: '“My child cannot complete assignments that require long-term planning (executive function).”',
        keySupportsTitle: 'Key School Supports You Can Request in Alberta',
        keySupportsDesc: 'The following supports are standard in the Alberta education system. Know these terms:',
        ellSupport: 'English Language Learning (ELL) support:',
        ellSupportDesc: 'Runs concurrently with special education support.',
        assessments: 'Assessments:',
        assessmentsDesc: 'Schools can conduct educational assessments for learning difficulties (usually free).',
        iepIsp: 'IEP/ISP (Individualized Education Plan / Support Plan):',
        iepIspDesc: 'Legally outlines goals, accommodations, and strategies.',
        focusForTeens: 'Focus for Teens with Autism:',
        focusForTeensDesc: 'Include Executive Function (organization, time management) and Sensory/Emotional Regulation (quiet space, fidgets).',
        sensoryAccommodations: 'Accommodations for sensory needs:',
        sensoryAccommodation1: 'Preferential seating away from doors/windows',
        sensoryAccommodation2: 'Noise-canceling headphones during busy class times',
        sensoryAccommodation3: 'Scheduled sensory breaks (supervised)',
        communicationStrategies: 'Communication strategies between home and school:',
        communicationStrategiesDesc: 'Request weekly logs or emails from a key teacher/mentor regarding homework, mood, deadlines.',
        helpfulPhrasesTitle: 'Helpful Phrases for Meetings (Use a Translator!)',
        helpfulPhrasesDesc: 'When using a professional interpreter, these phrases guide practical outcomes:',
        phrase1: '“Can you help me understand my child’s IEP goals for mathematics this term?” (Focus on specifics)',
        phrase2: '“What strategies are working in the classroom that I can reinforce at home?” (Focus on teamwork)',
        phrase3: '“How can we collaborate to ensure my child is using their sensory break accommodation when needed?” (Focus on implementation)',
        phrase4: '“What are the next steps we can take together, and who is responsible for scheduling the follow-up meeting?” (Focus on accountability)',
        phrase5: '“I require the school to provide a professional interpreter for our next formal meeting.” (Your right as a newcomer)',
        documentEverything: 'Document Everything (Mantenga Registros)',
        documentEverythingDesc: 'Documentation serves as evidence and memory:',
        keepEmails: 'Keep all emails:',
        keepEmailsDesc: 'Create a dedicated folder; emails are official documentation.',
        takeNotes: 'Take detailed notes during meetings:',
        takeNotesDesc: 'Include date, attendees, and agreements (e.g., “Ms. Smith agreed to check his planner daily”).',
        requestCopies: 'Request written copies of plans or changes:',
        requestCopiesDesc: 'Always ask for signed copies of IEPs and formal letters.',
        knowYourRights: 'Know Your Rights (Derechos en el Sistema)',
        knowYourRightsDesc: 'In Alberta, all children are protected under law. Parents have the right to be involved.',
        childrensRights: 'Children have the right to:',
        right1: 'A safe and inclusive environment:',
        right1Desc: 'Protection from bullying and discrimination.',
        right2: 'Learning accommodations:',
        right2Desc: 'Needs addressed through an IEP or equivalent plan.',
        right3: 'Cultural and language supports:',
        right3Desc: 'Cultural identity respected; access to ELL and interpretation services.',
        finalMessageTitle: 'Final Message',
        finalMessageP1: 'Advocacy is not confrontation—it’s partnership. It is confident, clear communication of your child’s needs. HISEN is here to ensure you have the tools and confidence to navigate the system effectively.',
        finalMessageP2: 'When families and schools work together, children thrive.',
        disclaimer: 'This content is for informational purposes only and does not replace professional, medical, or legal advice.'
    },
    es: {
        whyAdvocacyMatters: 'Por Qué es Importante Abogar',
        whyAdvocacyMattersDesc: 'Los padres conocen mejor a sus hijos. En las escuelas canadienses, la colaboración entre las familias y los maestros es esencial para el éxito del estudiante. Para las familias recién llegadas, abogar significa asegurar que las necesidades de su hijo, tanto de aprendizaje como de integración cultural, sean reconocidas y apoyadas. ¡Su voz es la herramienta más importante que tiene su hijo!',
        rightMindset: 'Comience con la Mentalidad Correcta',
        rightMindsetDesc: 'Cuando eres nuevo en el sistema, es fácil sentirse intimidado. Recuerda, tú eres el experto en tu hijo.',
        teamworkApproach: 'Aborde las conversaciones como un trabajo en equipo:',
        teamworkApproachDesc: 'Las escuelas se centran en encontrar soluciones. Vea a los maestros y administradores como socios en el éxito de su hijo, no como obstáculos.',
        assertiveApproach: 'Sea respetuoso pero asertivo:',
        assertiveApproachDesc: 'Está bien hacer preguntas difíciles con amabilidad. Use frases que comiencen con "Estoy preocupado por..." o "Qué apoyo específico puede proporcionar la escuela para..."',
        concreteExamples: 'Traiga ejemplos concretos de las dificultades de su hijo:',
        example1: '"Cuando hay un cambio repentino en la rutina, mi hijo tiene una crisis."',
        example2: '"Mi hijo no puede completar tareas que requieren planificación a largo plazo (función ejecutiva)."',
        keySupportsTitle: 'Apoyos Escolares Clave que Puede Solicitar en Alberta',
        keySupportsDesc: 'Los siguientes apoyos son estándar en el sistema educativo de Alberta. Conozca estos términos:',
        ellSupport: 'Apoyo para el Aprendizaje del Idioma Inglés (ELL):',
        ellSupportDesc: 'Se ejecuta simultáneamente con el apoyo de educación especial.',
        assessments: 'Evaluaciones:',
        assessmentsDesc: 'Las escuelas pueden realizar evaluaciones educativas para dificultades de aprendizaje (generalmente gratuitas).',
        iepIsp: 'IEP/ISP (Plan de Educación Individualizado / Plan de Apoyo):',
        iepIspDesc: 'Describe legalmente metas, adaptaciones y estrategias.',
        focusForTeens: 'Enfoque para Adolescentes con Autismo:',
        focusForTeensDesc: 'Incluya la Función Ejecutiva (organización, gestión del tiempo) y la Regulación Sensorial/Emocional (espacio tranquilo, objetos para manipular).',
        sensoryAccommodations: 'Adaptaciones para necesidades sensoriales:',
        sensoryAccommodation1: 'Asiento preferencial lejos de puertas/ventanas',
        sensoryAccommodation2: 'Auriculares con cancelación de ruido durante los momentos de clase ocupados',
        sensoryAccommodation3: 'Descansos sensoriales programados (supervisados)',
        communicationStrategies: 'Estrategias de comunicación entre el hogar y la escuela:',
        communicationStrategiesDesc: 'Solicite registros semanales o correos electrónicos de un maestro/mentor clave sobre tareas, estado de ánimo y plazos.',
        helpfulPhrasesTitle: 'Frases Útiles para Reuniones (¡Use un Traductor!)',
        helpfulPhrasesDesc: 'Cuando se utiliza un intérprete profesional, estas frases guían a resultados prácticos:',
        phrase1: '"¿Puede ayudarme a entender los objetivos del IEP de mi hijo para matemáticas este trimestre?" (Enfoque en lo específico)',
        phrase2: '"¿Qué estrategias están funcionando en el aula que puedo reforzar en casa?" (Enfoque en el trabajo en equipo)',
        phrase3: '"¿Cómo podemos colaborar para asegurar que mi hijo utilice su adaptación de descanso sensorial cuando sea necesario?" (Enfoque en la implementación)',
        phrase4: '"¿Cuáles son los próximos pasos que podemos dar juntos y quién es responsable de programar la reunión de seguimiento?" (Enfoque en la rendición de cuentas)',
        phrase5: '"Requiero que la escuela proporcione un intérprete profesional para nuestra próxima reunión formal." (Su derecho como recién llegado)',
        documentEverything: 'Documente Todo (Mantenga Registros)',
        documentEverythingDesc: 'La documentación sirve como evidencia y memoria:',
        keepEmails: 'Guarde todos los correos electrónicos:',
        keepEmailsDesc: 'Cree una carpeta dedicada; los correos electrónicos son documentación oficial.',
        takeNotes: 'Tome notas detalladas durante las reuniones:',
        takeNotesDesc: 'Incluya fecha, asistentes y acuerdos (p. ej., "La Sra. Smith acordó revisar su agenda diariamente").',
        requestCopies: 'Solicite copias escritas de planes o cambios:',
        requestCopiesDesc: 'Siempre pida copias firmadas de los IEP y cartas formales.',
        knowYourRights: 'Conozca Sus Derechos (Derechos en el Sistema)',
        knowYourRightsDesc: 'En Alberta, todos los niños están protegidos por la ley. Los padres tienen derecho a participar.',
        childrensRights: 'Los niños tienen derecho a:',
        right1: 'Un entorno seguro e inclusivo:',
        right1Desc: 'Protección contra el acoso y la discriminación.',
        right2: 'Adaptaciones de aprendizaje:',
        right2Desc: 'Necesidades atendidas a través de un IEP o plan equivalente.',
        right3: 'Apoyos culturales y lingüísticos:',
        right3Desc: 'Identidad cultural respetada; acceso a servicios de ELL e interpretación.',
        finalMessageTitle: 'Mensaje Final',
        finalMessageP1: 'Abogar no es confrontación, es colaboración. Es una comunicación segura y clara de las necesidades de su hijo. HISEN está aquí para asegurar que usted tenga las herramientas y la confianza para navegar el sistema de manera efectiva.',
        finalMessageP2: 'Cuando las familias y las escuelas trabajan juntas, los niños prosperan.',
        disclaimer: 'Este contenido es solo para fines informativos y no reemplaza el consejo profesional, médico o legal.'
    }
};

export const AdvocacyPost = () => {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <div className="space-y-8">
            
            <Card>
                <CardContent className="p-6 md:p-8">
                     <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><HeartHandshake className="h-8 w-8" /> {t.whyAdvocacyMatters}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {t.whyAdvocacyMattersDesc}
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8 space-y-4">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><MessageSquare className="h-8 w-8" /> {t.rightMindset}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {t.rightMindsetDesc}
                    </p>
                    <div>
                        <h3 className="font-bold text-lg text-foreground">{t.teamworkApproach}</h3>
                        <p className="text-muted-foreground leading-relaxed mt-1">{t.teamworkApproachDesc}</p>
                    </div>
                     <div>
                        <h3 className="font-bold text-lg text-foreground">{t.assertiveApproach}</h3>
                        <p className="text-muted-foreground leading-relaxed mt-1">{t.assertiveApproachDesc}</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-foreground">{t.concreteExamples}</h3>
                         <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                            <li>{t.example1}</li>
                            <li>{t.example2}</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8 space-y-6">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><BookOpen className="h-8 w-8" /> {t.keySupportsTitle}</h2>
                     <p className="text-muted-foreground leading-relaxed">{t.keySupportsDesc}</p>
                    <div>
                        <ul className="list-none space-y-4">
                            <li><strong className="text-foreground">{t.ellSupport}</strong><span className="text-muted-foreground ml-2">{t.ellSupportDesc}</span></li>
                            <li><strong className="text-foreground">{t.assessments}</strong><span className="text-muted-foreground ml-2">{t.assessmentsDesc}</span></li>
                            <li><strong className="text-foreground">{t.iepIsp}</strong><span className="text-muted-foreground ml-2">{t.iepIspDesc}</span></li>
                        </ul>
                    </div>

                    <div className="bg-accent/10 p-4 rounded-lg border border-primary">
                        <h4 className="font-bold text-primary">{t.focusForTeens}</h4>
                        <p className="text-muted-foreground mt-2">{t.focusForTeensDesc}</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-foreground">{t.sensoryAccommodations}</h3>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                            <li>{t.sensoryAccommodation1}</li>
                            <li>{t.sensoryAccommodation2}</li>
                            <li>{t.sensoryAccommodation3}</li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-bold text-lg text-foreground">{t.communicationStrategies}</h3>
                        <p className="text-muted-foreground mt-1">{t.communicationStrategiesDesc}</p>
                    </div>

                </CardContent>
            </Card>
            
            <Card>
                <CardContent className="p-6 md:p-8 space-y-4">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><MessageSquare className="h-8 w-8" /> {t.helpfulPhrasesTitle}</h2>
                    <p className="text-muted-foreground leading-relaxed">{t.helpfulPhrasesDesc}</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground italic">
                        <li>{t.phrase1}</li>
                        <li>{t.phrase2}</li>
                        <li>{t.phrase3}</li>
                        <li>{t.phrase4}</li>
                        <li>{t.phrase5}</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8 space-y-4">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><FileText className="h-8 w-8" /> {t.documentEverything}</h2>
                     <p className="text-muted-foreground leading-relaxed">{t.documentEverythingDesc}</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">{t.keepEmails}</strong> {t.keepEmailsDesc}</li>
                        <li><strong className="text-foreground">{t.takeNotes}</strong> {t.takeNotesDesc}</li>
                        <li><strong className="text-foreground">{t.requestCopies}</strong> {t.requestCopiesDesc}</li>
                    </ul>
                </CardContent>
            </Card>

             <Card>
                <CardContent className="p-6 md:p-8 space-y-4">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><ShieldCheck className="h-8 w-8" /> {t.knowYourRights}</h2>
                     <p className="text-muted-foreground leading-relaxed">{t.knowYourRightsDesc}</p>
                     <div>
                        <h3 className="font-bold text-lg text-foreground">{t.childrensRights}</h3>
                        <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                            <li><strong className="text-foreground">{t.right1}</strong> {t.right1Desc}</li>
                            <li><strong className="text-foreground">{t.right2}</strong> {t.right2Desc}</li>
                            <li><strong className="text-foreground">{t.right3}</strong> {t.right3Desc}</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <div className="bg-primary/10 text-center p-8 rounded-2xl border border-primary/20">
              <h2 className="text-2xl font-headline font-bold text-primary mb-4">{t.finalMessageTitle}</h2>
              <p className="text-foreground/90 leading-relaxed max-w-prose mx-auto text-lg">{t.finalMessageP1}</p>
              <p className="text-foreground/90 leading-relaxed max-w-prose mx-auto mt-4 text-lg">{t.finalMessageP2}</p>
            </div>

            <Card className="bg-card/50 border-primary/50 shadow-none">
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="text-muted-foreground mt-1 flex-shrink-0"><AlertTriangle className="h-5 w-5" /></div>
                    <p className="text-sm text-muted-foreground italic">
                        {t.disclaimer}
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};
