'use client';

import { AlertTriangle, Users, BookOpen, Laptop, Home, HeartHandshake, BadgeHelp, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';

const content = {
    en: {
        communityTitle: "Community-Based Programs",
        frnTitle: "Local Family Resource Networks (FRNs)",
        frnDesc: "Parenting workshops, developmental screenings, support groups, free consultations, activity kits, peer mentoring.",
        centersTitle: "Community Centers & Libraries",
        centersDesc: "Social skills groups, storytime, sensory play, drop-in programs, recreational classes.",
        hisenTips1: "HISEN Tips:",
        tip1_1: "Call in advance to ask about accommodations for sensory sensitivities or behavioral challenges.",
        tip1_2: "Keep a small notebook with attendance and observations for tracking progress.",
        nonProfitTitle: "Non-Profit & Charitable Organizations",
        examples: "Examples:",
        autismAlberta: "Autism Alberta / Autism Society of Alberta: peer support, parent coaching, online workshops",
        fcss: "FCSS: parenting programs, counseling referrals, skill-building groups",
        onlineCommunities: "Specialized online communities: Facebook groups, forums for parents of children with ASD, ADHD, or developmental delays",
        proTips1: "Pro Tips:",
        proTip1_1: "Ask for donation-based or sliding-scale services.",
        proTip1_2: "Explore virtual programs — many are free and reduce travel time.",
        onlineTherapyTitle: "Online Therapy & Skill-Building Tools",
        onlineTherapyDesc: "Speech, Occupational, and Behavioral Supports:",
        speechApps: "Speech apps: Speech Blubs, Articulation Station, Starfall",
        otGames: "Occupational therapy games: printable worksheets, home sensory activities",
        behavioralSkills: "Behavioral skills: ClassDojo, Zones of Regulation tools, parent-guided social skills",
        hisenTips2: "HISEN Tips:",
        tip2_1: "Limit screen time and supplement with hands-on activities.",
        tip2_2: "Record sessions in a notebook: progress, successes, challenges.",
        schoolSupportsTitle: "School & Education Supports",
        schoolSupportsDesc: "School-Based Supports Before Funding Arrives:",
        schoolSupport1: "Request IEP assessments or accommodations early.",
        schoolSupport2: "Access teacher or school resource specialist advice for at-home activities.",
        schoolSupport3: "Check for after-school clubs or homework support programs.",
        proTip2: "Pro Tip:",
        proTip2_1: "Keep copies of all school communications; request meeting summaries in writing.",
        mentalHealthTitle: "Mental Health & Caregiver Support",
        helplinesTitle: "Free Helplines & Online Resources",
        helpline1: "Alberta Mental Health Helpline: 1-877-303-2642 (24/7)",
        helpline2: "Kids Help Phone: 1-800-668-6868 (Text/Call)",
        helpline3: "Online parenting support: HISEN workshops, community forums",
        respiteTitle: "Respite & Peer Support",
        respite1: "Informal respite via volunteer networks, faith-based organizations, or extended family",
        respite2: "Parent-to-parent mentorship programs",
        diyTitle: "DIY & Home-Based Therapy Activities",
        otTitle: "Occupational Therapy",
        otDesc: "Fine motor (threading beads, puzzles, playdough, cutting), sensory bins (rice, beans, sand, water).",
        speechTitle: "Speech & Communication",
        speechDesc: "Daily reading, turn-taking games, storytelling, visual schedules, social stories.",
        behaviorTitle: "Behavior & Emotional Regulation",
        behaviorDesc: "Zones of Regulation, calm-down jars, breathing exercises, fidget tools.",
        hisenTip3: "HISEN Tip:",
        tip3_1: "Document all activities and progress — useful for future FSCD assessments and caseworker meetings.",
        practicalTipsTitle: "Practical Tips for Families",
        practicalTip1: "Consistency is key: Small daily activities maintain skills.",
        practicalTip2: "Use free community resources: Seek programs actively.",
        practicalTip3: "Track all efforts: Record dates, duration, and outcomes.",
        practicalTip4: "Advocate early: Demonstrating engagement strengthens FSCD or school funding cases.",
        trackerTitle: "Sample Activity Tracker Template",
        childName: "Child Name:",
        age: "Age:",
        dateStarted: "Date Started:",
        activityType: "Activity Type",
        duration: "Duration",
        notes: "Notes / Observations",
        speechLang: "Speech / Language",
        speechDuration: "15 min",
        speechNotes: "Practiced \"s\" and \"r\" sounds",
        fineMotor: "Fine Motor",
        fineMotorDuration: "10 min",
        fineMotorNotes: "Bead threading, hand strengthening",
        sensory: "Sensory / Calm-down",
        sensoryDuration: "5 min",
        sensoryNotes: "Used rice bin, calm jar",
        social: "Social / Play",
        socialDuration: "20 min",
        socialNotes: "Turn-taking board game",
        behaviorReg: "Behavior / Regulation",
        behaviorDuration: "5 min",
        behaviorNotes: "Zones of Regulation check-in",
        layoutNote: "Note: For layout illustration only.",
        disclaimer: "This content is for informational purposes only and does not replace professional, medical, or legal advice."
    },
    es: {
        communityTitle: "Programas Comunitarios",
        frnTitle: "Redes Locales de Recursos Familiares (FRN)",
        frnDesc: "Talleres para padres, evaluaciones del desarrollo, grupos de apoyo, consultas gratuitas, kits de actividades, mentoría entre pares.",
        centersTitle: "Centros Comunitarios y Bibliotecas",
        centersDesc: "Grupos de habilidades sociales, hora del cuento, juego sensorial, programas sin cita previa, clases recreativas.",
        hisenTips1: "Consejos de HISEN:",
        tip1_1: "Llame con anticipación para preguntar sobre adaptaciones para sensibilidades sensoriales o desafíos de comportamiento.",
        tip1_2: "Mantenga un pequeño cuaderno con la asistencia y las observaciones para seguir el progreso.",
        nonProfitTitle: "Organizaciones sin Fines de Lucro y de Caridad",
        examples: "Ejemplos:",
        autismAlberta: "Autism Alberta / Autism Society of Alberta: apoyo entre pares, coaching para padres, talleres en línea",
        fcss: "FCSS: programas para padres, derivaciones a consejería, grupos de desarrollo de habilidades",
        onlineCommunities: "Comunidades en línea especializadas: grupos de Facebook, foros para padres de niños con TEA, TDAH o retrasos en el desarrollo",
        proTips1: "Consejos Profesionales:",
        proTip1_1: "Pregunte por servicios basados en donaciones o de escala móvil.",
        proTip1_2: "Explore programas virtuales — muchos son gratuitos y reducen el tiempo de viaje.",
        onlineTherapyTitle: "Terapia en Línea y Herramientas para el Desarrollo de Habilidades",
        onlineTherapyDesc: "Apoyos de Habla, Ocupacionales y de Comportamiento:",
        speechApps: "Aplicaciones de habla: Speech Blubs, Articulation Station, Starfall",
        otGames: "Juegos de terapia ocupacional: hojas de trabajo imprimibles, actividades sensoriales en casa",
        behavioralSkills: "Habilidades de comportamiento: ClassDojo, herramientas de Zonas de Regulación, habilidades sociales guiadas por los padres",
        hisenTips2: "Consejos de HISEN:",
        tip2_1: "Limite el tiempo de pantalla y complemente con actividades prácticas.",
        tip2_2: "Registre las sesiones en un cuaderno: progreso, éxitos, desafíos.",
        schoolSupportsTitle: "Apoyos Escolares y Educativos",
        schoolSupportsDesc: "Apoyos Escolares Antes de que Llegue la Financiación:",
        schoolSupport1: "Solicite evaluaciones o adaptaciones del IEP con anticipación.",
        schoolSupport2: "Acceda al consejo de maestros o especialistas en recursos escolares para actividades en casa.",
        schoolSupport3: "Verifique si hay clubes extracurriculares o programas de apoyo con las tareas.",
        proTip2: "Consejo Profesional:",
        proTip2_1: "Guarde copias de todas las comunicaciones escolares; solicite resúmenes de las reuniones por escrito.",
        mentalHealthTitle: "Salud Mental y Apoyo al Cuidador",
        helplinesTitle: "Líneas de Ayuda Gratuitas y Recursos en Línea",
        helpline1: "Línea de Ayuda de Salud Mental de Alberta: 1-877-303-2642 (24/7)",
        helpline2: "Kids Help Phone: 1-800-668-6868 (Texto/Llamada)",
        helpline3: "Apoyo para padres en línea: talleres de HISEN, foros comunitarios",
        respiteTitle: "Respiro y Apoyo entre Pares",
        respite1: "Respiro informal a través de redes de voluntarios, organizaciones religiosas o familiares extendidos",
        respite2: "Programas de mentoría de padre a padre",
        diyTitle: "Actividades de Terapia Caseras y de Bricolaje",
        otTitle: "Terapia Ocupacional",
        otDesc: "Motricidad fina (ensartar cuentas, rompecabezas, plastilina, cortar), contenedores sensoriales (arroz, frijoles, arena, agua).",
        speechTitle: "Habla y Comunicación",
        speechDesc: "Lectura diaria, juegos por turnos, narración de cuentos, horarios visuales, historias sociales.",
        behaviorTitle: "Comportamiento y Regulación Emocional",
        behaviorDesc: "Zonas de Regulación, frascos de la calma, ejercicios de respiración, herramientas para la inquietud.",
        hisenTip3: "Consejo de HISEN:",
        tip3_1: "Documente todas las actividades y el progreso — útil para futuras evaluaciones de FSCD y reuniones con el asistente social.",
        practicalTipsTitle: "Consejos Prácticos para las Familias",
        practicalTip1: "La consistencia es clave: Pequeñas actividades diarias mantienen las habilidades.",
        practicalTip2: "Use recursos comunitarios gratuitos: Busque programas activamente.",
        practicalTip3: "Siga todos los esfuerzos: Registre fechas, duración y resultados.",
        practicalTip4: "Abogue temprano: Demostrar compromiso fortalece los casos de financiación de FSCD o de la escuela.",
        trackerTitle: "Plantilla de Seguimiento de Actividades de Muestra",
        childName: "Nombre del Niño:",
        age: "Edad:",
        dateStarted: "Fecha de Inicio:",
        activityType: "Tipo de Actividad",
        duration: "Duración",
        notes: "Notas / Observaciones",
        speechLang: "Habla / Lenguaje",
        speechDuration: "15 min",
        speechNotes: "Practicó los sonidos \"s\" y \"r\"",
        fineMotor: "Motricidad Fina",
        fineMotorDuration: "10 min",
        fineMotorNotes: "Ensartar cuentas, fortalecimiento de la mano",
        sensory: "Sensorial / Calma",
        sensoryDuration: "5 min",
        sensoryNotes: "Usó contenedor de arroz, frasco de la calma",
        social: "Social / Juego",
        socialDuration: "20 min",
        socialNotes: "Juego de mesa por turnos",
        behaviorReg: "Comportamiento / Regulación",
        behaviorDuration: "5 min",
        behaviorNotes: "Revisión de Zonas de Regulación",
        layoutNote: "Nota: Solo para ilustración de diseño.",
        disclaimer: "Este contenido es solo para fines informativos y no reemplaza el consejo profesional, médico o legal."
    }
};

export const LowCostSupportsPost = () => {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <div className="space-y-8">
            
            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Users className="h-8 w-8" /> {t.communityTitle}</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold text-lg text-foreground">{t.frnTitle}</h3>
                            <p className="text-muted-foreground mt-1">{t.frnDesc}</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-foreground">{t.centersTitle}</h3>
                            <p className="text-muted-foreground mt-1">{t.centersDesc}</p>
                        </div>
                    </div>
                     <div className="bg-primary/10 p-4 rounded-lg mt-6 border border-primary">
                        <h4 className="font-bold text-primary flex items-center gap-2"><BadgeHelp className="h-5 w-5"/> {t.hisenTips1}</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                            <li>{t.tip1_1}</li>
                            <li>{t.tip1_2}</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><HeartHandshake className="h-8 w-8" /> {t.nonProfitTitle}</h2>
                    <div className="space-y-4">
                        <p className="text-muted-foreground">{t.examples}</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                            <li><strong className="text-foreground">{t.autismAlberta.split(':')[0]}:</strong>{t.autismAlberta.split(':')[1]}</li>
                            <li><strong className="text-foreground">{t.fcss.split(':')[0]}:</strong>{t.fcss.split(':')[1]}</li>
                            <li><strong className="text-foreground">{t.onlineCommunities.split(':')[0]}:</strong>{t.onlineCommunities.split(':')[1]}</li>
                        </ul>
                    </div>
                     <div className="bg-primary/10 p-4 rounded-lg mt-6 border border-primary">
                        <h4 className="font-bold text-primary flex items-center gap-2"><BadgeHelp className="h-5 w-5"/> {t.proTips1}</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                            <li>{t.proTip1_1}</li>
                            <li>{t.proTip1_2}</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Laptop className="h-8 w-8" /> {t.onlineTherapyTitle}</h2>
                    <div className="space-y-4">
                         <p className="text-muted-foreground leading-relaxed">{t.onlineTherapyDesc}</p>
                         <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                            <li><strong className="text-foreground">{t.speechApps.split(':')[0]}:</strong>{t.speechApps.split(':')[1]}</li>
                            <li><strong className="text-foreground">{t.otGames.split(':')[0]}:</strong>{t.otGames.split(':')[1]}</li>
                            <li><strong className="text-foreground">{t.behavioralSkills.split(':')[0]}:</strong>{t.behavioralSkills.split(':')[1]}</li>
                        </ul>
                    </div>
                     <div className="bg-primary/10 p-4 rounded-lg mt-6 border border-primary">
                        <h4 className="font-bold text-primary flex items-center gap-2"><BadgeHelp className="h-5 w-5"/> {t.hisenTips2}</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                            <li>{t.tip2_1}</li>
                            <li>{t.tip2_2}</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><BookOpen className="h-8 w-8" /> {t.schoolSupportsTitle}</h2>
                    <div className="space-y-4">
                         <p className="text-muted-foreground leading-relaxed">{t.schoolSupportsDesc}</p>
                         <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                            <li>{t.schoolSupport1}</li>
                            <li>{t.schoolSupport2}</li>
                            <li>{t.schoolSupport3}</li>
                        </ul>
                    </div>
                     <div className="bg-primary/10 p-4 rounded-lg mt-6 border border-primary">
                        <h4 className="font-bold text-primary flex items-center gap-2"><BadgeHelp className="h-5 w-5"/> {t.proTip2}</h4>
                        <p className="text-muted-foreground mt-2">{t.proTip2_1}</p>
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><HeartHandshake className="h-8 w-8" /> {t.mentalHealthTitle}</h2>
                     <div className="space-y-4">
                        <div>
                            <h3 className="font-bold text-lg text-foreground">{t.helplinesTitle}</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                                <li>{t.helpline1.split(':')[0]}: <a href="tel:1-877-303-2642" className="text-primary hover:underline">{t.helpline1.split(':')[1]}</a></li>
                                <li>{t.helpline2.split(':')[0]}: <a href="tel:1-800-668-6868" className="text-primary hover:underline">{t.helpline2.split(':')[1]}</a></li>
                                <li>{t.helpline3}</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-foreground">{t.respiteTitle}</h3>
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                                <li>{t.respite1}</li>
                                <li>{t.respite2}</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><Home className="h-8 w-8" /> {t.diyTitle}</h2>
                     <div className="space-y-4">
                        <div>
                            <h3 className="font-bold text-lg text-foreground">{t.otTitle}</h3>
                            <p className="text-muted-foreground mt-1">{t.otDesc}</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-foreground">{t.speechTitle}</h3>
                            <p className="text-muted-foreground mt-1">{t.speechDesc}</p>
                        </div>
                         <div>
                            <h3 className="font-bold text-lg text-foreground">{t.behaviorTitle}</h3>
                            <p className="text-muted-foreground mt-1">{t.behaviorDesc}</p>
                        </div>
                    </div>
                     <div className="bg-primary/10 p-4 rounded-lg mt-6 border border-primary">
                        <h4 className="font-bold text-primary flex items-center gap-2"><BadgeHelp className="h-5 w-5"/> {t.hisenTip3}</h4>
                        <p className="text-muted-foreground mt-2">{t.tip3_1}</p>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardContent className="p-6 md:p-8">
                     <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><BadgeHelp className="h-8 w-8" /> {t.practicalTipsTitle}</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                        <li><strong className="text-foreground">{t.practicalTip1.split(':')[0]}:</strong>{t.practicalTip1.split(':')[1]}</li>
                        <li><strong className="text-foreground">{t.practicalTip2.split(':')[0]}:</strong>{t.practicalTip2.split(':')[1]}</li>
                        <li><strong className="text-foreground">{t.practicalTip3.split(':')[0]}:</strong>{t.practicalTip3.split(':')[1]}</li>
                        <li><strong className="text-foreground">{t.practicalTip4.split(':')[0]}:</strong>{t.practicalTip4.split(':')[1]}</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6 md:p-8">
                     <h2 className="text-2xl font-headline font-bold flex items-center gap-3 text-primary mb-4"><FileText className="h-8 w-8" /> {t.trackerTitle}</h2>
                     <div className="border border-dashed border-border p-6 rounded-lg bg-background/50 mt-4 overflow-x-auto">
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 text-muted-foreground whitespace-nowrap">
                            <div className="flex items-baseline gap-2">{t.childName} <span className="inline-block w-28 border-b border-muted-foreground/50"></span></div>
                            <div className="flex items-baseline gap-2">{t.age} <span className="inline-block w-16 border-b border-muted-foreground/50"></span></div>
                            <div className="flex items-baseline gap-2">{t.dateStarted} <span className="inline-block w-28 border-b border-muted-foreground/50"></span></div>
                        </div>
                        <br />
                        <div className="grid grid-cols-3 gap-4 font-semibold text-foreground border-b pb-2">
                           <div>{t.activityType}</div>
                           <div>{t.duration}</div>
                           <div>{t.notes}</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-muted-foreground border-b py-2">
                           <div>{t.speechLang}</div>
                           <div>{t.speechDuration}</div>
                           <div>{t.speechNotes}</div>
                        </div>
                         <div className="grid grid-cols-3 gap-4 text-muted-foreground border-b py-2">
                           <div>{t.fineMotor}</div>
                           <div>{t.fineMotorDuration}</div>
                           <div>{t.fineMotorNotes}</div>
                        </div>
                         <div className="grid grid-cols-3 gap-4 text-muted-foreground border-b py-2">
                           <div>{t.sensory}</div>
                           <div>{t.sensoryDuration}</div>
                           <div>{t.sensoryNotes}</div>
                        </div>
                         <div className="grid grid-cols-3 gap-4 text-muted-foreground border-b py-2">
                           <div>{t.social}</div>
                           <div>{t.socialDuration}</div>
                           <div>{t.socialNotes}</div>
                        </div>
                         <div className="grid grid-cols-3 gap-4 text-muted-foreground py-2">
                           <div>{t.behaviorReg}</div>
                           <div>{t.behaviorDuration}</div>
                           <div>{t.behaviorNotes}</div>
                        </div>
                     </div>
                     <p className="text-xs text-center mt-4 text-muted-foreground italic">{t.layoutNote}</p>
                </CardContent>
            </Card>

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
