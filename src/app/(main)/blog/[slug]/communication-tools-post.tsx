'use client';

import { AlertTriangle, MessageSquare, School, Stethoscope, Lightbulb, Languages, Download, CheckCircle, NotebookPen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';

const content = {
    en: {
        introTitle: "Introduction & Why Communication Tools Matter",
        introDesc: "Newcomer parents often experience language barriers, cultural misunderstandings, and hesitation when navigating new systems. These communication templates and scripts are designed to help you gain confidence, use the right vocabulary, and advocate effectively for your child.",
        feelConfident: "Feel Confident",
        feelConfidentDesc: "Approach conversations with clarity and purpose.",
        advocateEffectively: "Advocate Effectively",
        advocateEffectivelyDesc: "Clearly express your child's needs and your concerns.",
        reduceStress: "Reduce Stress",
        reduceStressDesc: "Prepare for important meetings and appointments with ease.",
        buildPartnerships: "Build Partnerships",
        buildPartnershipsDesc: "Foster positive relationships with teachers and doctors.",
        schoolToolsTitle: "School Communication Tools",
        emailIntroTitle: "Email Template: Introducing Yourself to a Teacher",
        emailIntroSubject: "Subject: Introduction – Parent of [Child’s Name]",
        emailIntroBody1: "Hello [Teacher's Name],",
        emailIntroBody2: "My name is [Parent’s Name] and I am the parent of [Child’s Name] in [Grade/Class]. We are new to [school/country], and I want to stay involved in my child’s learning. Please let me know if there is anything important I should be aware of, or if you have any recommendations to support my child.",
        emailIntroBody3: "Thank you,",
        emailIntroBody4: "[Parent’s Name]",
        emailIntroBody5: "[Phone Number]",
        meetingScriptsTitle: "Parent-Teacher Meeting Scripts",
        meetingScriptsDesc: "Useful phrases to guide the conversation:",
        script1: "“I want to understand how my child is doing academically and socially.”",
        script2: "“What are the key learning goals for this grade?”",
        script3: "“Are there resources or strategies we can use at home to support their learning?”",
        script4: "“If my child struggles with a topic, what is the best way to get them help?”",
        requestHelpTitle: "Template: Requesting Extra Help",
        requestHelpSubject: "Subject: Request for Support for [Child’s Name]",
        requestHelpBody1: "Hello [Teacher/Counselor],",
        requestHelpBody2: "I would like to discuss additional learning support for my child, [Child’s Name]. I have noticed [specific concern], and I want to help them succeed. Could we schedule a brief meeting to talk about potential support options?",
        requestHelpBody3: "Thank you,",
        requestHelpBody4: "[Parent’s Name]",
        hisenTips: "HISEN Tips:",
        tip1: "Bring notes with your questions to every meeting.",
        tip2: "Don't be afraid to say, \"Could you please explain that in a different way?\"",
        tip3: "Always request written summaries of important decisions or plans.",
        tip4: "Remember that confident advocacy is a partnership with the school.",
        healthcareToolsTitle: "Healthcare Communication Tools",
        bookingAppointmentTitle: "Template: Booking a Medical Appointment",
        bookingAppointmentBody: "Hi, I would like to book an appointment for my child, [Child’s Name]. The reason for the visit is [briefly explain reason, e.g., 'a check-up,' 'a persistent cough']. I am available on [mention preferred days/times]. Thank you.",
        explainingSymptomsTitle: "Script: Explaining Symptoms",
        explainingSymptomsDesc: "Be clear and specific. A symptom diary can be very helpful.",
        symptomScript1: "“My child has had [symptom] for [duration, e.g., 'three days'].”",
        symptomScript2: "“The symptoms are getting [better/worse/staying the same].”",
        symptomScript3: "“At home, I have tried [mention any remedies, e.g., 'rest and fluids'].”",
        symptomScript4: "“Could you please explain the next steps for diagnosis or treatment?”",
        symptomScript5: "“Could you please write that down for me so I don’t forget?”",
        requestInterpreterTitle: "Template: Requesting an Interpreter",
        requestInterpreterBody: "Hello, I am calling to confirm an appointment for [Child's Name] on [Date]. I would like to formally request a professional interpreter for this appointment. My preferred language is [Language]. Thank you.",
        hisenTipHealthcare: "HISEN Tip:",
        hisenTipHealthcareDesc: "You have a right to a professional interpreter for medical appointments. Do not rely on your child, family members, or friends to translate complex medical information. This ensures accuracy and confidentiality.",
        everydayToolsTitle: "Everyday Communication Tools",
        everydayToolsDesc: "Leverage technology and cultural understanding to make daily interactions smoother.",
        recommendedApps: "Recommended Apps",
        app1: "Google Translate: Use \"Conversation Mode\" for real-time, two-way translations.",
        app2: "Microsoft Translator: Similar to Google, offering text, voice, and camera translations.",
        app3: "TalkingPoints: An app specifically for schools that translates messages between parents and teachers.",
        culturalNotes: "Cultural Communication Notes",
        note1: "Asking questions is encouraged: In Canada, it shows you are engaged and involved.",
        note2: "Teachers are partners: View them as collaborators in your child’s success, not authority figures to fear.",
        note3: "Written communication is standard: Emails and letters create a helpful record for everyone.",
        practicalTipsTitle: "Practical Tips for Successful Communication",
        practicalTip1: "Stay Organized: Keep school, medical, and immigration documents in one folder. Digital copies are great backups!",
        practicalTip2: "Keep a Communication Log: Note the date, person you spoke with, and what was discussed.",
        practicalTip3: "Prepare Questions in Advance: Write down your questions before a meeting so you don’t forget anything.",
        practicalTip4: "Request Interpreters Early: Give at least 48 hours notice for school, medical, or legal meetings.",
        practicalTip5: "Bring a Support Person: Ask a friend, community worker, or HISEN advocate to join you for important appointments.",
        practicalTip6: "Leverage HISEN: We can help you practice conversations, review documents, and attend meetings with you.",
        takeawayTitle: "Key Takeaways & Encouragement",
        takeawayDesc: "Communication tools help you feel confident and prepared. Using scripts and templates reduces stress and ensures your voice is heard. Remember, you have the right to clear communication, and advocacy is easier when you are prepared. HISEN is here to provide culturally informed support throughout your journey. You are not alone.",
        disclaimer: "This content is for informational purposes only and does not replace professional, medical, or legal advice."
    },
    es: {
        introTitle: "Introducción y por qué las herramientas de comunicación son importantes",
        introDesc: "Los padres recién llegados a menudo experimentan barreras idiomáticas, malentendidos culturales y dudas al navegar por nuevos sistemas. Estas plantillas y guiones de comunicación están diseñados para ayudarle a ganar confianza, usar el vocabulario correcto y abogar eficazmente por su hijo.",
        feelConfident: "Siéntase seguro",
        feelConfidentDesc: "Afronte las conversaciones con claridad y propósito.",
        advocateEffectively: "Abogue eficazmente",
        advocateEffectivelyDesc: "Exprese claramente las necesidades de su hijo y sus preocupaciones.",
        reduceStress: "Reduzca el estrés",
        reduceStressDesc: "Prepárese para reuniones y citas importantes con facilidad.",
        buildPartnerships: "Construya alianzas",
        buildPartnershipsDesc: "Fomente relaciones positivas con maestros y médicos.",
        schoolToolsTitle: "Herramientas de comunicación escolar",
        emailIntroTitle: "Plantilla de correo electrónico: presentándose a un maestro",
        emailIntroSubject: "Asunto: Introducción – Padre/Madre de [Nombre del niño]",
        emailIntroBody1: "Hola [Nombre del maestro],",
        emailIntroBody2: "Mi nombre es [Nombre del padre/madre] y soy el padre/madre de [Nombre del niño] en [Grado/Clase]. Somos nuevos en [escuela/país] y quiero participar en el aprendizaje de mi hijo. Por favor, avíseme si hay algo importante que deba saber o si tiene alguna recomendación para apoyar a mi hijo.",
        emailIntroBody3: "Gracias,",
        emailIntroBody4: "[Nombre del padre/madre]",
        emailIntroBody5: "[Número de teléfono]",
        meetingScriptsTitle: "Guiones para reuniones de padres y maestros",
        meetingScriptsDesc: "Frases útiles para guiar la conversación:",
        script1: "“Quiero entender cómo le está yendo a mi hijo académica y socialmente.”",
        script2: "“¿Cuáles son los objetivos clave de aprendizaje para este grado?”",
        script3: "“¿Hay recursos o estrategias que podamos usar en casa para apoyar su aprendizaje?”",
        script4: "“Si mi hijo tiene dificultades con un tema, ¿cuál es la mejor manera de ayudarlo?”",
        requestHelpTitle: "Plantilla: Solicitud de ayuda adicional",
        requestHelpSubject: "Asunto: Solicitud de apoyo para [Nombre del niño]",
        requestHelpBody1: "Hola [maestro/consejero],",
        requestHelpBody2: "Me gustaría hablar sobre apoyo de aprendizaje adicional para mi hijo, [Nombre del niño]. He notado [preocupación específica] y quiero ayudarlo a tener éxito. ¿Podríamos programar una breve reunión para hablar sobre posibles opciones de apoyo?",
        requestHelpBody3: "Gracias,",
        requestHelpBody4: "[Nombre del padre/madre]",
        hisenTips: "Consejos de HISEN:",
        tip1: "Lleve notas con sus preguntas a cada reunión.",
        tip2: "No tenga miedo de decir: \"¿Podría explicar eso de otra manera?\"",
        tip3: "Solicite siempre resúmenes por escrito de las decisiones o planes importantes.",
        tip4: "Recuerde que la abogacía segura es una asociación con la escuela.",
        healthcareToolsTitle: "Herramientas de comunicación para el cuidado de la salud",
        bookingAppointmentTitle: "Plantilla: Programación de una cita médica",
        bookingAppointmentBody: "Hola, me gustaría programar una cita para mi hijo, [Nombre del niño]. El motivo de la visita es [explique brevemente el motivo, p. ej., 'un chequeo', 'una tos persistente']. Estoy disponible en [mencione los días/horarios preferidos]. Gracias.",
        explainingSymptomsTitle: "Guión: Explicación de síntomas",
        explainingSymptomsDesc: "Sea claro y específico. Un diario de síntomas puede ser muy útil.",
        symptomScript1: "“Mi hijo ha tenido [síntoma] durante [duración, p. ej., 'tres días'].”",
        symptomScript2: "“Los síntomas están [mejorando/empeorando/permaneciendo igual].”",
        symptomScript3: "“En casa, he intentado [mencione cualquier remedio, p. ej., 'descanso y líquidos'].”",
        symptomScript4: "“¿Podría explicarme los próximos pasos para el diagnóstico o tratamiento?”",
        symptomScript5: "“¿Podría escribírmelo para que no lo olvide?”",
        requestInterpreterTitle: "Plantilla: Solicitud de un intérprete",
        requestInterpreterBody: "Hola, llamo para confirmar una cita para [Nombre del niño] el [Fecha]. Me gustaría solicitar formalmente un intérprete profesional para esta cita. Mi idioma de preferencia es [Idioma]. Gracias.",
        hisenTipHealthcare: "Consejo de HISEN:",
        hisenTipHealthcareDesc: "Tiene derecho a un intérprete profesional para las citas médicas. No confíe en su hijo, familiares o amigos para traducir información médica compleja. Esto garantiza la precisión y la confidencialidad.",
        everydayToolsTitle: "Herramientas de comunicación diarias",
        everydayToolsDesc: "Aproveche la tecnología y la comprensión cultural para facilitar las interacciones diarias.",
        recommendedApps: "Aplicaciones recomendadas",
        app1: "Google Translate: use el \"Modo de conversación\" para traducciones bidireccionales en tiempo real.",
        app2: "Microsoft Translator: similar a Google, ofrece traducciones de texto, voz y cámara.",
        app3: "TalkingPoints: una aplicación específica para escuelas que traduce mensajes entre padres y maestros.",
        culturalNotes: "Notas de comunicación cultural",
        note1: "Se anima a hacer preguntas: en Canadá, demuestra que está comprometido e involucrado.",
        note2: "Los maestros son socios: véalos como colaboradores en el éxito de su hijo, no como figuras de autoridad a las que temer.",
        note3: "La comunicación escrita es estándar: los correos electrónicos y las cartas crean un registro útil para todos.",
        practicalTipsTitle: "Consejos prácticos para una comunicación exitosa",
        practicalTip1: "Manténgase organizado: guarde los documentos escolares, médicos y de inmigración en una carpeta. ¡Las copias digitales son excelentes copias de seguridad!",
        practicalTip2: "Mantenga un registro de comunicación: anote la fecha, la persona con la que habló y lo que se discutió.",
        practicalTip3: "Prepare las preguntas con anticipación: escriba sus preguntas antes de una reunión para no olvidar nada.",
        practicalTip4: "Solicite intérpretes con anticipación: avise con al menos 48 horas de anticipación para reuniones escolares, médicas o legales.",
        practicalTip5: "Traiga una persona de apoyo: pídale a un amigo, trabajador comunitario o defensor de HISEN que lo acompañe a las citas importantes.",
        practicalTip6: "Aproveche HISEN: podemos ayudarlo a practicar conversaciones, revisar documentos y asistir a reuniones con usted.",
        takeawayTitle: "Conclusiones clave y aliento",
        takeawayDesc: "Las herramientas de comunicación le ayudan a sentirse seguro y preparado. El uso de guiones y plantillas reduce el estrés y garantiza que se escuche su voz. Recuerde, tiene derecho a una comunicación clara y la abogacía es más fácil cuando está preparado. HISEN está aquí para brindarle apoyo culturalmente informado durante todo su viaje. No está solo.",
        disclaimer: "Este contenido es solo para fines informativos y no reemplaza el consejo profesional, médico o legal."
    }
};


export const CommunicationToolsPost = () => {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <div className="space-y-8">
            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Lightbulb className="h-8 w-8" /> {t.introTitle}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        {t.introDesc}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-background/50 p-4 rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> {t.feelConfident}</h3>
                            <p className="text-sm text-muted-foreground">{t.feelConfidentDesc}</p>
                        </div>
                        <div className="bg-background/50 p-4 rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> {t.advocateEffectively}</h3>
                            <p className="text-sm text-muted-foreground">{t.advocateEffectivelyDesc}</p>
                        </div>
                        <div className="bg-background/50 p-4 rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> {t.reduceStress}</h3>
                            <p className="text-sm text-muted-foreground">{t.reduceStressDesc}</p>
                        </div>
                         <div className="bg-background/50 p-4 rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> {t.buildPartnerships}</h3>
                            <p className="text-sm text-muted-foreground">{t.buildPartnershipsDesc}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><School className="h-8 w-8" /> {t.schoolToolsTitle}</h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-lg text-foreground mb-2">{t.emailIntroTitle}</h3>
                            <div className="border border-dashed border-border p-4 rounded-lg bg-background/50 text-muted-foreground">
                                <p className="font-semibold">{t.emailIntroSubject}</p>
                                <br />
                                <p>{t.emailIntroBody1}</p>
                                <p>{t.emailIntroBody2}</p>
                                <br/>
                                <p>{t.emailIntroBody3}</p>
                                <p>{t.emailIntroBody4}</p>
                                <p>{t.emailIntroBody5}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg text-foreground mb-2">{t.meetingScriptsTitle}</h3>
                            <p className="text-muted-foreground mb-2 italic">{t.meetingScriptsDesc}</p>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                                <li>{t.script1}</li>
                                <li>{t.script2}</li>
                                <li>{t.script3}</li>
                                <li>{t.script4}</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-bold text-lg text-foreground mb-2">{t.requestHelpTitle}</h3>
                             <div className="border border-dashed border-border p-4 rounded-lg bg-background/50 text-muted-foreground">
                                <p className="font-semibold">{t.requestHelpSubject}</p>
                                <br />
                                <p>{t.requestHelpBody1}</p>
                                <p>{t.requestHelpBody2}</p>
                                <br/>
                                <p>{t.requestHelpBody3}</p>
                                <p>{t.requestHelpBody4}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-primary/10 p-4 rounded-lg mt-6 border border-primary">
                        <h4 className="font-bold text-primary flex items-center gap-2"><Lightbulb className="h-5 w-5"/> {t.hisenTips}</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                            <li>{t.tip1}</li>
                            <li>{t.tip2}</li>
                            <li>{t.tip3}</li>
                            <li>{t.tip4}</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Stethoscope className="h-8 w-8" /> {t.healthcareToolsTitle}</h2>
                     <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-lg text-foreground mb-2">{t.bookingAppointmentTitle}</h3>
                            <div className="border border-dashed border-border p-4 rounded-lg bg-background/50 text-muted-foreground">
                                <p>{t.bookingAppointmentBody}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg text-foreground mb-2">{t.explainingSymptomsTitle}</h3>
                            <p className="text-muted-foreground mb-2 italic">{t.explainingSymptomsDesc}</p>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                                <li>{t.symptomScript1}</li>
                                <li>{t.symptomScript2}</li>
                                <li>{t.symptomScript3}</li>
                                <li>{t.symptomScript4}</li>
                                <li>{t.symptomScript5}</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-bold text-lg text-foreground mb-2">{t.requestInterpreterTitle}</h3>
                             <div className="border border-dashed border-border p-4 rounded-lg bg-background/50 text-muted-foreground">
                                <p>{t.requestInterpreterBody}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-primary/10 p-4 rounded-lg mt-6 border border-primary">
                        <h4 className="font-bold text-primary flex items-center gap-2"><Lightbulb className="h-5 w-5"/> {t.hisenTipHealthcare}</h4>
                        <p className="text-muted-foreground mt-2">
                           {t.hisenTipHealthcareDesc}
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                     <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Languages className="h-8 w-8" /> {t.everydayToolsTitle}</h2>
                     <p className="text-muted-foreground leading-relaxed mb-4">{t.everydayToolsDesc}</p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <h3 className="font-bold text-lg text-foreground mb-2">{t.recommendedApps}</h3>
                           <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                              <li><strong className="text-foreground/90">{t.app1.split(':')[0]}:</strong>{t.app1.split(':')[1]}</li>
                              <li><strong className="text-foreground/90">{t.app2.split(':')[0]}:</strong>{t.app2.split(':')[1]}</li>
                              <li><strong className="text-foreground/90">{t.app3.split(':')[0]}:</strong>{t.app3.split(':')[1]}</li>
                           </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-foreground mb-2">{t.culturalNotes}</h3>
                           <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                              <li><strong className="text-foreground/90">{t.note1.split(':')[0]}:</strong>{t.note1.split(':')[1]}</li>
                              <li><strong className="text-foreground/90">{t.note2.split(':')[0]}:</strong>{t.note2.split(':')[1]}</li>
                              <li><strong className="text-foreground/90">{t.note3.split(':')[0]}:</strong>{t.note3.split(':')[1]}</li>
                           </ul>
                        </div>
                     </div>
                </CardContent>
            </Card>

             <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><NotebookPen className="h-8 w-8" /> {t.practicalTipsTitle}</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-3 text-muted-foreground">
                        <li><strong className="text-foreground">{t.practicalTip1.split(':')[0]}:</strong>{t.practicalTip1.split(':')[1]}</li>
                        <li><strong className="text-foreground">{t.practicalTip2.split(':')[0]}:</strong>{t.practicalTip2.split(':')[1]}</li>
                        <li><strong className="text-foreground">{t.practicalTip3.split(':')[0]}:</strong>{t.practicalTip3.split(':')[1]}</li>
                        <li><strong className="text-foreground">{t.practicalTip4.split(':')[0]}:</strong>{t.practicalTip4.split(':')[1]}</li>
                        <li><strong className="text-foreground">{t.practicalTip5.split(':')[0]}:</strong>{t.practicalTip5.split(':')[1]}</li>
                        <li><strong className="text-foreground">{t.practicalTip6.split(':')[0]}:</strong>{t.practicalTip6.split(':')[1]}</li>
                    </ul>
                </CardContent>
            </Card>

            <div className="bg-primary/10 text-center p-8 rounded-2xl border border-primary/20">
              <h2 className="text-2xl font-headline font-bold text-primary mb-4">{t.takeawayTitle}</h2>
              <p className="text-foreground/90 leading-relaxed max-w-prose mx-auto text-lg">
                {t.takeawayDesc}
              </p>
            </div>

            <Card className="bg-card/50 border-border/30 shadow-none mt-8">
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
