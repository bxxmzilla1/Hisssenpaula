'use client';

import { AlertTriangle, BookOpen, BrainCircuit, Calendar, CheckCircle, CircleHelp, Handshake, Heart, Home, MessageSquare, Parent, Smile, Users, Info, Star, School, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

const content = {
    en: {
        title: "Autism in Teenage Years",
        whyItMatters: "Why the Teenage Years Matter",
        whyItMattersDesc: "Adolescence brings rapid physical, emotional, and social changes. For autistic teens, these transitions can feel intense and overwhelming, but they are also full of potential for growth and self-discovery. Understanding their experiences through a neurodiversity lens helps families support teens in building confidence, resilience, and self-advocacy.",
        tip1: "Tip: Focus on strengths and individuality, not only challenges. Every teen has their own pace and style of development.",
        navigatingHS: "Navigating the High School Environment",
        navigatingHSDesc: "High school brings increased academic, social, and organizational demands. Targeted supports and accommodations are key for success.",
        execFuncSupport: "Executive Function Support:",
        execFuncSupport1: "Externalize Time: Use visual timers, written schedules, and daily checklists. Consider color-coded systems for classes or tasks.",
        execFuncSupport2: "Break Down Tasks: Divide large projects into manageable steps (e.g., “Find 3 sources,” “Create an outline”).",
        execFuncSupport3: "Designated Launch Pad: Create a consistent spot for backpack, keys, and important papers.",
        iepAdvocacy: "IEP / 504 Advocacy:",
        iepAdvocacy1: "Ensure accommodations reflect adolescent needs, not just childhood needs.",
        iepAdvocacy2: "Examples: extended test time, alternative test locations, laptop use, or a “Pass to Go” sensory break card.",
        iepAdvocacy3: "Request weekly check-ins with teachers or counselors to proactively manage homework, communication, and stress.",
        suggestion1: "Suggestion: Small organizational strategies reduce stress and increase independence.",
        commAndSocial: "Communication & Social Interaction",
        commAndSocialDesc: "Many autistic teens experience unique communication and social challenges, including:",
        commChallenge1: "Difficulty interpreting sarcasm or subtle social cues.",
        commChallenge2: "Strong preference for structured or online communication.",
        commChallenge3: "Increased social anxiety in group settings.",
        supportStrategies: "Support Strategies:",
        supportStrategy1: "Teach social rules explicitly (e.g., differences between texting, emailing, and speaking in person).",
        supportStrategy2: "Model intention vs. impact by role-playing social scenarios.",
        supportStrategy3: "Use social stories to explain expectations in conversations or school situations.",
        supportStrategy4: "Encourage alternate communication methods such as PECS, visual supports, or communication apps.",
        tip2: "Tip: Celebrate effort and communication attempts—not perfection.",
        emotionalReg: "Emotional Regulation & Mental Health",
        emotionalRegDesc: "During adolescence, sensory overload and emotional intensity often increase.",
        commonExperiences: "Common experiences include:",
        commonExperience1: "Sensory overload in noisy or unpredictable environments.",
        commonExperience2: "Mood fluctuations or strong emotional reactions.",
        commonExperience3: "Potential autistic burnout.",
        emotionalSupportStrategies: "Support Strategies:",
        emotionalSupportStrategy1: "Sensory Decompression Routines: Quiet time, headphones, access to special interests.",
        emotionalSupportStrategy2: "Safe Spaces: Quiet corners with adjustable lighting, weighted blankets, or calming sensory tools.",
        emotionalSupportStrategy3: "Coping Mechanisms: Build a personalized “Green Zone” list (deep pressure, reading, movement, music).",
        emotionalSupportStrategy4: "Recognize Burnout: Watch for fatigue, regression, isolation, or withdrawal from interests.",
        tip3: "Tip: Emotional awareness and proactive support are essential for resilience.",
        homeEnv: "Home Environment & Demand Management",
        homeEnvDesc: "Autistic teens may resist tasks due to demand overwhelm, not defiance.",
        homeStrategies: "Strategies:",
        homeStrategy1: "Offer choices (“Do the dishes or walk the dog first?”).",
        homeStrategy2: "Use indirect language (“The dishwasher is empty”) rather than commands.",
        homeStrategy3: "Connect chores to special interests for motivation.",
        note1: "Note: Connection and empathy matter more than strict compliance.",
        identityEsteem: "Identity, Self-Esteem & Special Interests",
        identityEsteemDesc: "Teen years are a major time of identity formation.",
        teenExperiences: "Autistic teens may experience:",
        teenExperience1: "Exhaustion from masking behaviors to “fit in.”",
        teenExperience2: "Fewer but deeper friendships.",
        teenExperience3: "Deep special interests that become core strengths.",
        identitySupportStrategies: "Support Strategies:",
        identitySupportStrategy1: "Normalize stimming as healthy self-regulation.",
        identitySupportStrategy2: "Encourage exploration of hobbies and passions.",
        identitySupportStrategy3: "Promote self-advocacy and independence in decision-making.",
        identitySupportStrategy4: "Reinforce healthy boundaries and bodily autonomy.",
        tip4: "Tip: Focus on authenticity—not conformity.",
        familySupport: "How Families Can Support Their Teen",
        familySupport1: "Validate feelings without judgment.",
        familySupport2: "Maintain consistent routines at home.",
        familySupport3: "Encourage special interests as sources of pride, not something to “limit.”",
        familySupport4: "Collaborate closely with school teams (IEP/ISP) to support academic and social needs.",
        familySupport5: "Provide sensory-safe spaces or decompression breaks when needed.",
        tip5: "Tip: Listening first is often the strongest form of support.",
        finalQuote: "“Supporting your autistic teen is a daily act of love and understanding. Every moment spent listening, validating, and guiding helps them feel seen, valued, and empowered to thrive in their own unique way.”",
        getSupport: "Get Support From HISEN",
        disclaimer: "This content is for informational purposes only and does not replace professional, medical, or legal advice."
    },
    es: {
        title: "Autismo en la Adolescencia",
        whyItMatters: "Por Qué Importan los Años de la Adolescencia",
        whyItMattersDesc: "La adolescencia trae consigo rápidos cambios físicos, emocionales y sociales. Para los adolescentes autistas, estas transiciones pueden sentirse intensas y abrumadoras, pero también están llenas de potencial para el crecimiento y el autodescubrimiento. Comprender sus experiencias a través de una lente de neurodiversidad ayuda a las familias a apoyar a los adolescentes en la construcción de confianza, resiliencia y autodefensa.",
        tip1: "Consejo: Céntrese en las fortalezas y la individualidad, no solo en los desafíos. Cada adolescente tiene su propio ritmo y estilo de desarrollo.",
        navigatingHS: "Navegando el Entorno de la Escuela Secundaria",
        navigatingHSDesc: "La escuela secundaria trae consigo mayores demandas académicas, sociales y organizativas. Los apoyos y adaptaciones específicos son clave para el éxito.",
        execFuncSupport: "Apoyo a la Función Ejecutiva:",
        execFuncSupport1: "Exteriorizar el Tiempo: Use temporizadores visuales, horarios escritos y listas de verificación diarias. Considere sistemas codificados por colores para clases o tareas.",
        execFuncSupport2: "Desglosar Tareas: Divida los proyectos grandes en pasos manejables (p. ej., “Encontrar 3 fuentes”, “Crear un esquema”).",
        execFuncSupport3: "Plataforma de Lanzamiento Designada: Cree un lugar constante para la mochila, las llaves y los papeles importantes.",
        iepAdvocacy: "Defensa de IEP / 504:",
        iepAdvocacy1: "Asegúrese de que las adaptaciones reflejen las necesidades de los adolescentes, no solo las necesidades de la infancia.",
        iepAdvocacy2: "Ejemplos: tiempo extendido para exámenes, lugares alternativos para exámenes, uso de computadora portátil o una tarjeta de descanso sensorial “Pase para Salir”.",
        iepAdvocacy3: "Solicite registros semanales con maestros o consejeros para gestionar de manera proactiva las tareas, la comunicación y el estrés.",
        suggestion1: "Sugerencia: Las pequeñas estrategias organizativas reducen el estrés y aumentan la independencia.",
        commAndSocial: "Comunicación e Interacción Social",
        commAndSocialDesc: "Muchos adolescentes autistas experimentan desafíos únicos de comunicación y sociales, que incluyen:",
        commChallenge1: "Dificultad para interpretar el sarcasmo o las señales sociales sutiles.",
        commChallenge2: "Fuerte preferencia por la comunicación estructurada o en línea.",
        commChallenge3: "Aumento de la ansiedad social en entornos grupales.",
        supportStrategies: "Estrategias de Apoyo:",
        supportStrategy1: "Enseñe las reglas sociales explícitamente (p. ej., diferencias entre enviar mensajes de texto, correos electrónicos y hablar en persona).",
        supportStrategy2: "Modele la intención frente al impacto mediante el juego de roles de escenarios sociales.",
        supportStrategy3: "Use historias sociales para explicar las expectativas en conversaciones o situaciones escolares.",
        supportStrategy4: "Fomente métodos de comunicación alternativos como PECS, apoyos visuales o aplicaciones de comunicación.",
        tip2: "Consejo: Celebre el esfuerzo y los intentos de comunicación, no la perfección.",
        emotionalReg: "Regulación Emocional y Salud Mental",
        emotionalRegDesc: "Durante la adolescencia, la sobrecarga sensorial y la intensidad emocional a menudo aumentan.",
        commonExperiences: "Las experiencias comunes incluyen:",
        commonExperience1: "Sobrecarga sensorial en entornos ruidosos o impredecibles.",
        commonExperience2: "Fluctuaciones del estado de ánimo o reacciones emocionales fuertes.",
        commonExperience3: "Potencial agotamiento autista.",
        emotionalSupportStrategies: "Estrategias de Apoyo:",
        emotionalSupportStrategy1: "Rutinas de Descompresión Sensorial: Tiempo tranquilo, auriculares, acceso a intereses especiales.",
        emotionalSupportStrategy2: "Espacios Seguros: Rincones tranquilos con iluminación ajustable, mantas con peso o herramientas sensoriales calmantes.",
        emotionalSupportStrategy3: "Mecanismos de Afrontamiento: Cree una lista personalizada de “Zona Verde” (presión profunda, lectura, movimiento, música).",
        emotionalSupportStrategy4: "Reconocer el Agotamiento: Esté atento a la fatiga, la regresión, el aislamiento o el abandono de intereses.",
        tip3: "Consejo: La conciencia emocional y el apoyo proactivo son esenciales para la resiliencia.",
        homeEnv: "Entorno Doméstico y Gestión de Demandas",
        homeEnvDesc: "Los adolescentes autistas pueden resistirse a las tareas debido a la sobrecarga de demandas, no por desafío.",
        homeStrategies: "Estrategias:",
        homeStrategy1: "Ofrezca opciones (“¿Lavar los platos o pasear al perro primero?”).",
        homeStrategy2: "Use un lenguaje indirecto (“El lavavajillas está vacío”) en lugar de órdenes.",
        homeStrategy3: "Conecte las tareas domésticas con intereses especiales para motivar.",
        note1: "Nota: La conexión y la empatía importan más que el cumplimiento estricto.",
        identityEsteem: "Identidad, Autoestima e Intereses Especiales",
        identityEsteemDesc: "Los años de la adolescencia son un momento importante de formación de la identidad.",
        teenExperiences: "Los adolescentes autistas pueden experimentar:",
        teenExperience1: "Agotamiento por comportamientos de enmascaramiento para “encajar”.",
        teenExperience2: "Menos amistades pero más profundas.",
        teenExperience3: "Intereses especiales profundos que se convierten en fortalezas centrales.",
        identitySupportStrategies: "Estrategias de Apoyo:",
        identitySupportStrategy1: "Normalice el stimming como autorregulación saludable.",
        identitySupportStrategy2: "Fomente la exploración de pasatiempos y pasiones.",
        identitySupportStrategy3: "Promueva la autodefensa y la independencia en la toma de decisiones.",
        identitySupportStrategy4: "Refuerce los límites saludables y la autonomía corporal.",
        tip4: "Consejo: Céntrese en la autenticidad, no en la conformidad.",
        familySupport: "Cómo las Familias Pueden Apoyar a su Adolescente",
        familySupport1: "Valide los sentimientos sin juzgar.",
        familySupport2: "Mantenga rutinas consistentes en casa.",
        familySupport3: "Fomente los intereses especiales como fuentes de orgullo, no como algo que “limitar”.",
        familySupport4: "Colabore estrechamente con los equipos escolares (IEP/ISP) para apoyar las necesidades académicas y sociales.",
        familySupport5: "Proporcione espacios sensorialmente seguros o descansos de descompresión cuando sea necesario.",
        tip5: "Consejo: Escuchar primero es a menudo la forma más fuerte de apoyo.",
        finalQuote: "“Apoyar a tu adolescente autista es un acto diario de amor y comprensión. Cada momento que pasas escuchando, validando y guiando les ayuda a sentirse vistos, valorados y empoderados para prosperar a su manera única.”",
        getSupport: "Obtener Apoyo de HISEN",
        disclaimer: "Este contenido es solo para fines informativos y no reemplaza el consejo profesional, médico o legal."
    }
};


export const AutismInTeenageYearsPost = () => {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <div className="space-y-8">
            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Info className="h-8 w-8" /> {t.whyItMatters}</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                           {t.whyItMattersDesc}
                        </p>
                         <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary">
                            <p className="font-bold text-primary">{t.tip1}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><School className="h-8 w-8" /> {t.navigatingHS}</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                       <p>{t.navigatingHSDesc}</p>
                        <div>
                            <h3 className="font-bold text-lg text-foreground">{t.execFuncSupport}</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li><strong className="text-foreground/90">{t.execFuncSupport1.split(':')[0]}:</strong> {t.execFuncSupport1.split(':')[1]}</li>
                                <li><strong className="text-foreground/90">{t.execFuncSupport2.split(':')[0]}:</strong> {t.execFuncSupport2.split(':')[1]}</li>
                                <li><strong className="text-foreground/90">{t.execFuncSupport3.split(':')[0]}:</strong> {t.execFuncSupport3.split(':')[1]}</li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-bold text-lg text-foreground">{t.iepAdvocacy}</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>{t.iepAdvocacy1}</li>
                                <li>{t.iepAdvocacy2}</li>
                                <li>{t.iepAdvocacy3}</li>
                            </ul>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg mt-4">
                            <p className="text-muted-foreground"><strong className="text-foreground/90">{t.suggestion1.split(':')[0]}:</strong> {t.suggestion1.split(':')[1]}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><MessageSquare className="h-8 w-8" /> {t.commAndSocial}</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>{t.commAndSocialDesc}</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>{t.commChallenge1}</li>
                            <li>{t.commChallenge2}</li>
                            <li>{t.commChallenge3}</li>
                        </ul>
                         <div>
                            <h3 className="font-bold text-lg text-foreground mt-4">{t.supportStrategies}</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>{t.supportStrategy1}</li>
                                <li>{t.supportStrategy2}</li>
                                <li>{t.supportStrategy3}</li>
                                <li>{t.supportStrategy4}</li>
                            </ul>
                        </div>
                        <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary">
                            <p className="font-bold text-primary">{t.tip2}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><BrainCircuit className="h-8 w-8" /> {t.emotionalReg}</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>{t.emotionalRegDesc}</p>
                        <div>
                            <h3 className="font-bold text-lg text-foreground">{t.commonExperiences}</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>{t.commonExperience1}</li>
                                <li>{t.commonExperience2}</li>
                                <li>{t.commonExperience3}</li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-bold text-lg text-foreground mt-4">{t.emotionalSupportStrategies}</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li><strong className="text-foreground/90">{t.emotionalSupportStrategy1.split(':')[0]}:</strong>{t.emotionalSupportStrategy1.split(':')[1]}</li>
                                <li><strong className="text-foreground/90">{t.emotionalSupportStrategy2.split(':')[0]}:</strong>{t.emotionalSupportStrategy2.split(':')[1]}</li>
                                <li><strong className="text-foreground/90">{t.emotionalSupportStrategy3.split(':')[0]}:</strong>{t.emotionalSupportStrategy3.split(':')[1]}</li>
                                <li><strong className="text-foreground/90">{t.emotionalSupportStrategy4.split(':')[0]}:</strong>{t.emotionalSupportStrategy4.split(':')[1]}</li>
                            </ul>
                        </div>
                         <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary">
                            <p className="font-bold text-primary">{t.tip3}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Home className="h-8 w-8" /> {t.homeEnv}</h2>
                     <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>{t.homeEnvDesc}</p>
                        <div>
                            <h3 className="font-bold text-lg text-foreground">{t.homeStrategies}</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>{t.homeStrategy1}</li>
                                <li>{t.homeStrategy2}</li>
                                <li>{t.homeStrategy3}</li>
                            </ul>
                        </div>
                         <div className="bg-accent/10 p-4 rounded-lg mt-4">
                            <p className="text-muted-foreground"><strong className="text-foreground/90">{t.note1.split(':')[0]}:</strong> {t.note1.split(':')[1]}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Users className="h-8 w-8" /> {t.identityEsteem}</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>{t.identityEsteemDesc}</p>
                        <div>
                            <h3 className="font-bold text-lg text-foreground">{t.teenExperiences}</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>{t.teenExperience1}</li>
                                <li>{t.teenExperience2}</li>
                                <li>{t.teenExperience3}</li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-bold text-lg text-foreground mt-4">{t.identitySupportStrategies}</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>{t.identitySupportStrategy1}</li>
                                <li>{t.identitySupportStrategy2}</li>
                                <li>{t.identitySupportStrategy3}</li>
                                <li>{t.identitySupportStrategy4}</li>
                            </ul>
                        </div>
                         <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary">
                            <p className="font-bold text-primary">{t.tip4}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Heart className="h-8 w-8" /> {t.familySupport}</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>{t.familySupport1}</li>
                            <li>{t.familySupport2}</li>
                            <li>{t.familySupport3}</li>
                            <li>{t.familySupport4}</li>
                            <li>{t.familySupport5}</li>
                        </ul>
                         <div className="bg-primary/10 p-4 rounded-lg mt-4 border border-primary">
                            <p className="font-bold text-primary">{t.tip5}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8 text-center">
                    <div className="space-y-6 text-foreground/90 leading-relaxed text-lg">
                        <p className="italic">
                            {t.finalQuote}
                        </p>
                    </div>
                     <div className="flex justify-center mt-8">
                        <Button asChild>
                           <Link href="/contact">{t.getSupport}</Link>
                        </Button>
                     </div>
                </CardContent>
            </Card>
            
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
