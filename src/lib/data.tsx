

import type { NavLink, Testimonial, FaqItem, Sponsor, Service, BlogEvent, BlogPost, HomePageContent } from './types';
import { Sprout, TreePine, Leaf, Bot, Calendar, Component, Mail, MessageSquare, Mic, User } from 'lucide-react';

const SupportLineIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="12" y1="2" x2="12" y2="6"></line>
        <line x1="12" y1="18" x2="12" y2="22"></line>
        <line x1="22" y1="12" x2="18" y2="12"></line>
        <line x1="6" y1="12" x2="2" y2="12"></line>
    </svg>
);

const NeurodiversityIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2a10 10 0 0 0-3.38 19.54" />
        <path d="M12 2a10 10 0 0 1 3.38 19.54" />
        <path d="M4 14a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4" />
        <path d="M4.5 10.5c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5" />
        <path d="M19.5 10.5c-1.5 0 2.5-1 2.5-2.5s-1-2.5-2.5-2.5" />
        <path d="M10 18a2 2 0 1 1 4 0" />
    </svg>
);

const SchoolIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24
24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m4 6 8-4 8 4" />
        <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
        <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
        <path d="M18 5v17" />
        <path d="M6 5v17" />
        <circle cx="12" cy="9" r="2" />
    </svg>
);

const HospitalIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 6v4" />
        <path d="M14 8h-4" />
        <path d="M14 16h-4" />
        <path d="M12 14v4" />
        <path d="M20 12h2" />
        <path d="M2 12h2" />
        <path d="M16 4h-8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z" />
    </svg>
);

const CommunityIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M20 8v6" />
        <path d="M23 11h-6" />
    </svg>
);
const ChecklistIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
    </svg>
);
const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);
const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
    </svg>
);

const BinocularsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10 10h4"></path>
        <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"></path>
        <path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"></path>
        <path d="M 22 16 L 2 16"></path>
        <path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"></path>
        <path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"></path>
    </svg>
);


export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/events', label: 'Events' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/faq', label: 'FAQ' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/donate', label: 'Donate' },
];

export const homePageContent: HomePageContent = {
  hero: {
    en: {
      mainHeading: "Puentes de Esperanza",
      subHeading: "Building Bridges of Inclusion and Hope",
      description: "HISEN accompanies, guides, and strengthens Hispanic families in Alberta, providing culturally and linguistically accessible support.",
      servicesButton: "Donate",
      involvedButton: "Get Support"
    },
    es: {
      mainHeading: "Puentes de Esperanza",
      subHeading: "Construyendo Puentes de Inclusión y Esperanza",
      description: "HISEN acompaña, guía y fortalece a las familias hispanas en Alberta, brindando apoyo cultural y lingüísticamente accesible.",
      servicesButton: "Donar",
      involvedButton: "Obtener Apoyo"
    }
  },
  mission: {
    en: {
      title: "About HISEN",
      subtitle: "We are a nonprofit organization dedicated to supporting Hispanic families in Alberta.",
      values: [
        {
          icon: 'TargetIcon',
          title: "Our Mission",
          description: "We accompany and strengthen Hispanic families in Alberta by providing guidance, culturally respectful support, and equitable access to health, education, child development, neurodiversity, and community resource services. We strive to empower families to navigate complex systems with confidence, advocate effectively for their children, and access the programs and supports that best meet their needs. Through personalized assistance, education, and community connection, we help families to feel seen, understood, and capable of building strong foundations for their future.",
        },
        {
          icon: 'BinocularsIcon',
          title: "Our Vision",
          description: "A community where all Hispanic families in Alberta can access the services and resources they need for their well-being, inclusion, and full development without barriers. We envision a society where language, culture, or immigration status does not prevent families from thriving. By fostering collaboration, advocacy, and understanding between families, schools, healthcare providers, and community organizations, we aim to create an environment where every family feels empowered, supported, and able to realize their potential.",
        },
      ],
    },
    es: {
      title: "Sobre HISEN",
      subtitle: "Somos una organización sin fines de lucro dedicada a apoyar a las familias hispanas en Alberta.",
      values: [
        {
          icon: 'TargetIcon',
          title: "Nuestra Misión",
          description: "Acompañamos y fortalecemos a las familias hispanas en Alberta brindando orientación, apoyo culturalmente respetuoso y acceso equitativo a servicios de salud, educación, desarrollo infantil, neurodiversidad y recursos comunitarios. Nos esforzamos por empoderar a las familias para que naveguen sistemas complejos con confianza, aboguen eficazmente por sus hijos y accedan a los programas y apoyos que mejor satisfagan sus necesidades. A través de asistencia personalizada, educación y conexión comunitaria, ayudamos a las familias a sentirse vistas, comprendidas y capaces de construir bases sólidas para su futuro.",
        },
        {
          icon: 'BinocularsIcon',
          title: "Nuestra Visión",
          description: "Una comunidad donde todas las familias hispanas en Alberta puedan acceder a los servicios y recursos que necesitan para su bienestar, inclusión y pleno desarrollo sin barreras. Visualizamos una sociedad donde el idioma, la cultura o el estatus migratorio no impidan que las familias prosperen. Al fomentar la colaboración, la abogacía y la comprensión entre familias, escuelas, proveedores de atención médica y organizaciones comunitarias, nuestro objetivo es crear un entorno en el que cada familia se sienta empoderada, apoyada y capaz de realizar su potencial.",
        },
      ],
    },
  },
};


export const testimonials: Testimonial[] = [
  {
    name: 'The Rodriguez Family',
    role: '',
    quote: 'HISEN was a light in our path. When we arrived in Alberta, we felt lost. Their team guided us with the school system and helped our son get the support he needed. We are eternally grateful.',
    image: 'https://picsum.photos/seed/rodriguez/100/100',
  },
  {
    name: 'Maria G.',
    role: '',
    quote: 'Finding support that understands our culture and language was crucial. HISEN not only helped us navigate the health system but also made us feel part of a community. Thank you for everything!',
    image: 'https://picsum.photos/seed/maria/100/100',
  },
  {
    name: 'Jessica P.',
    role: 'Volunteer',
    quote: 'Volunteering with HISEN has been deeply rewarding. Being part of an organization that genuinely cares about making a difference is inspiring.',
    image: 'https://picsum.photos/seed/12/100/100',
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'What is HISEN?',
    answer: 'HISEN (Hispanic Inclusion & Support Network Society) is a nonprofit organization that accompanies, guides, and strengthens Hispanic families in Alberta, providing culturally and linguistically accessible support.',
  },
  {
    question: 'What services do you provide?',
    answer: 'We offer a range of services including a support line, family support, assistance with neurodiversity and child development needs, and school support. Our goal is to help families navigate complex systems with confidence.',
  },
  {
    question: 'Who can use your services?',
    answer: 'Our services are primarily for Hispanic families in Alberta, but we welcome anyone in the community who needs support and aligns with our mission of inclusion and empowerment.',
  },
  {
    question: 'How can I get involved or support HISEN?',
    answer: 'You can get involved by attending our events, using our services, volunteering your time, or becoming a sponsor. Check out the respective sections on our website for more details on how to contribute.',
  },
];

export const sponsors: Sponsor[] = [
  { 
    name: 'Multicultural Health Brokers', 
    logo: 'https://github.com/bxxmzilla1/HISEN/blob/main/mchb.png?raw=true', 
    url: '#',
    description: 'Supporting newcomer family health and settlement services.' 
  },
  { 
    name: 'Heavenzy', 
    logo: 'https://github.com/bxxmzilla1/HISEN/blob/main/heavenzy.jpg?raw=true', 
    url: '#',
    description: 'Partnering with HISEN to empower Hispanic families.'
  },
  { 
    name: 'Arroyo Construction', 
    logo: 'https://github.com/bxxmzilla1/HISEN/blob/main/Arroyo%20Construction.png?raw=true', 
    url: '#',
    description: 'Building community infrastructure for families in Alberta.'
  },
];

export const services: Service[] = [
    {
        icon: SupportLineIcon,
        title: 'Support Line & Family Support',
        description: 'Resource navigation, social programs, appointments, and general assistance.',
        contact: 'contact@hisen.org',
    },
    {
        icon: NeurodiversityIcon,
        title: 'Neurodiversity & Child Development',
        description: 'Support for Autism, delays, FSCD/PUF, school meetings, and IEP/ISP.',
        contact: 'neuro@hisen.org',
    },
    {
        icon: SchoolIcon,
        title: 'Education & School Support',
        description: 'Communication with schools, cultural adaptation, and family participation.',
        contact: 'education@hisen.org',
    },
];

export const events: BlogEvent[] = [
  {
    id: '1',
    title: {
      en: 'Parenting with Neurodiversity',
      es: 'Crianza con Neurodiversidad'
    },
    date: '2024-10-10T10:00:00Z',
    location: 'Online Workshop',
    description: {
      en: 'A workshop offering strategies and support for parents of neurodivergent children. Connect with experts and other families.',
      es: 'Un taller que ofrece estrategias y apoyo para padres de niños neurodivergentes. Conéctate con expertos y otras familias.'
    },
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwZ3JvdXB8ZW58MHx8fHwxNzYzNjMyNDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Upcoming',
  },
  {
    id: '2',
    title: {
      en: 'Community Welcome Potluck',
      es: 'Comida de Bienvenida Comunitaria'
    },
    date: '2024-10-25T18:00:00Z',
    location: 'Community Hall',
    description: {
      en: 'Join us for a community potluck to welcome new Hispanic families to Alberta. Share food, stories, and build connections.',
      es: 'Únete a nuestra comida comunitaria para dar la bienvenida a las nuevas familias hispanas en Alberta. Comparte comida, historias y crea conexiones.'
    },
    image: 'https://i.pinimg.com/1200x/2b/b4/b0/2bb4b0e6331b1e738308549a500a49af.jpg',
    status: 'Upcoming',
  },
  {
    id: '3',
    title: {
      en: 'Mental Health & Well-being Talk',
      es: 'Charla sobre Salud Mental y Bienestar'
    },
    date: '2024-11-12T19:00:00Z',
    location: 'Online Webinar',
    description: {
      en: 'An informative session with a mental health professional on managing stress and fostering well-being.',
      es: 'Una sesión informativa con un profesional de la salud mental sobre cómo manejar el estrés y fomentar el bienestar.'
    },
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx3b3Jrc2hvcHxlbnwwfHx8fDE3NjM2MzI0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Completed',
  },
];

const communityBlogPosts: BlogPost[] = [];


export const blogPosts: BlogPost[] = [
  // Immigration
  {
    id: '1',
    slug: 'newly-arrived-in-canada-how-to-navigate-services',
    title: {
        en: 'Newly Arrived in Canada: How to Navigate Services',
        es: 'Recién Llegado a Canadá: Cómo Navegar los Servicios'
    },
    author: 'HISEN Staff',
    date: '2024-09-10T00:00:00Z',
    image: 'https://i.pinimg.com/1200x/d0/c9/22/d0c9221ce9115b8f7531b5800a0aa9d4.jpg',
    excerpt: {
        en: 'Step-by-step support for accessing health, education, and community services as a newcomer family.',
        es: 'Apoyo paso a paso para acceder a servicios de salud, educación y comunitarios como familia recién llegada.'
    },
    content: ``,
    category: 'immigration',
  },
  {
    id: '2',
    slug: 'how-to-advocate-for-your-child-in-school',
    title: {
        en: 'How to Advocate for Your Child in School',
        es: 'Cómo Abogar por su Hijo en la Escuela'
    },
    author: 'HISEN Staff',
    date: '2024-09-12T00:00:00Z',
    image: 'https://i.pinimg.com/736x/76/72/08/7672084bb9e5a5336b500a62c7c97bc9.jpg',
    excerpt: {
        en: 'Learn how to communicate with teachers, request supports, and understand your child’s rights.',
        es: 'Aprenda a comunicarse con los maestros, solicitar apoyos y comprender los derechos de su hijo.'
    },
    content: '',
    category: 'immigration',
  },
  {
    id: '3',
    slug: 'understanding-your-childs-rights-and-access-to-services',
    title: {
        en: 'Understanding Your Child’s Rights & Access to Services in Canada',
        es: 'Comprender los Derechos de su Hijo y el Acceso a los Servicios en Canadá'
    },
    author: 'HISEN Staff',
    date: '2024-09-14T00:00:00Z',
    image: 'https://i.pinimg.com/1200x/98/40/34/984034329f0e1183202b229cc7ca41e8.jpg',
    excerpt: {
        en: "A guide to your child's rights for healthcare, education, and disability support as a newcomer to Canada.",
        es: 'Una guía sobre los derechos de su hijo a la atención médica, la educación y el apoyo por discapacidad como recién llegado a Canadá.'
    },
    content: '',
    category: 'immigration',
  },
  {
    id: '4',
    slug: 'low-cost-and-free-supports-while-waiting-for-funding',
    title: {
        en: 'Low-Cost & Free Supports While Waiting for Funding',
        es: 'Apoyos Gratuitos y de Bajo Costo Mientras Espera Financiamiento'
    },
    author: 'HISEN Staff',
    date: '2024-09-16T00:00:00Z',
    image: 'https://i.pinimg.com/736x/a4/fe/da/a4feda2573e84a349db82afae0326ea5.jpg',
    excerpt: {
        en: 'Discover free and low-cost therapies, programs, and tools available while you wait for funding.',
        es: 'Descubra terapias, programas y herramientas gratuitas y de bajo costo disponibles mientras espera financiamiento.'
    },
    content: '',
    category: 'immigration',
  },
  {
    id: '5',
    slug: 'communication-tools-for-newcomer-parents',
    title: {
        en: 'Communication Tools for Newcomer Parents',
        es: 'Herramientas de Comunicación para Padres Recién Llegados'
    },
    author: 'HISEN Staff',
    date: '2024-09-18T00:00:00Z',
    image: 'https://i.pinimg.com/736x/5d/f1/44/5df14410e05919391aa0b233f6856b0b.jpg',
    excerpt: {
        en: 'Templates and scripts to help newcomer parents communicate effectively with schools and healthcare providers.',
        es: 'Plantillas y guiones para ayudar a los padres recién llegados a comunicarse eficazmente con las escuelas y los proveedores de atención médica.'
    },
    content: '',
    category: 'immigration',
  },
  // Autism
  {
    id: '6',
    slug: 'first-signs-of-autism',
    title: {
        en: 'First Signs of Autism',
        es: 'Primeros Signos de Autismo'
    },
    author: 'Dr. Eleanor Vance',
    date: '2024-09-15T00:00:00Z',
    image: 'https://i.pinimg.com/736x/34/cd/a5/34cda5887e87b51f4f67944cbfe36113.jpg',
    excerpt: {
        en: 'Understanding Early Developmental Indicators Through a Parent’s Eyes.',
        es: 'Comprender los Indicadores Tempranos del Desarrollo a Través de los Ojos de un Padre.'
    },
    content: '',
    category: 'autism',
  },
  {
    id: '7',
    slug: 'autism-in-teenage-years',
    title: {
        en: 'Autism in Teenage Years',
        es: 'Autismo en la Adolescencia'
    },
    author: 'HISEN Staff',
    date: '2024-09-18T00:00:00Z',
    image: 'https://i.pinimg.com/736x/04/07/d9/0407d9e80fbc1bd223b303b660fd55ac.jpg',
    excerpt: {
        en: 'Understanding adolescence through a neurodiversity lens.',
        es: 'Comprender la adolescencia a través de una lente de neurodiversidad.'
    },
    content: '',
    category: 'autism',
  },
  {
    id: '8',
    slug: 'guide-to-early-signs-of-autism',
    title: {
        en: 'Guide to Early Signs of Autism',
        es: 'Guía de los Primeros Signos del Autismo'
    },
    author: 'Dr. Eleanor Vance',
    date: '2024-09-20T00:00:00Z',
    image: 'https://i.pinimg.com/1200x/27/9d/4b/279d4b251f6698d105d16ab14449c321.jpg',
    excerpt: {
        en: 'Recognize developmental differences early to access support, resources, and tailored care for your child.',
        es: 'Reconozca las diferencias de desarrollo temprano para acceder a apoyo, recursos y atención personalizada para su hijo.'
    },
    content: '',
    category: 'autism',
  },
  {
    id: '9',
    slug: 'how-to-apply-for-fscd',
    title: {
        en: 'How to Apply for FSCD',
        es: 'Cómo Solicitar FSCD'
    },
    author: 'HISEN Staff',
    date: '2024-09-22T00:00:00Z',
    image: 'https://i.pinimg.com/736x/93/1e/b8/931eb87be7e9d9b47595f47742657b90.jpg',
    excerpt: {
        en: 'Step-by-step guidance for families to secure funding and services for children with developmental needs in Alberta.',
        es: 'Guía paso a paso para que las familias obtengan financiamiento y servicios para niños con necesidades de desarrollo en Alberta.'
    },
    content: '',
    category: 'autism',
  },
  {
    id: '10',
    slug: 'sample-letters-for-schools-and-doctors',
    title: {
        en: 'Sample Letters for Schools and Doctors',
        es: 'Cartas de Muestra para Escuelas y Médicos'
    },
    author: 'HISEN Staff',
    date: '2024-09-24T00:00:00Z',
    image: 'https://images.unsplash.com/photo-1634562876572-5abe57afcceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx3cml0aW5nJTIwbGV0dGVyfGVufDB8fHx8MTc2MzQ2NDk3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: {
        en: 'Templates and examples to communicate your child’s needs effectively with teachers, administrators, and healthcare providers.',
        es: 'Plantillas y ejemplos para comunicar eficazmente las necesidades de su hijo con maestros, administradores y proveedores de atención médica.'
    },
    content: '',
    category: 'autism',
  },
  {
    id: '11',
    slug: 'waitlist-information-and-appointment-preparation',
    title: {
        en: 'Waitlist Information and Appointment Preparation',
        es: 'Información de la Lista de Espera y Preparación de Citas'
    },
    author: 'HISEN Staff',
    date: '2024-09-26T00:00:00Z',
    image: 'https://images.unsplash.com/photo-1633526543814-9718c8922b7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjYWxlbmRhciUyMGFwcG9pbnRtZW50fGVufDB8fHx8MTc2MzQ4NjYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: {
        en: 'Practical tips to manage waitlists, organize appointments, and maximize your child’s access to timely assessments and support.',
        es: 'Consejos prácticos para gestionar listas de espera, organizar citas y maximizar el acceso de su hijo a evaluaciones y apoyo oportunos.'
    },
    content: '',
    category: 'autism',
  },
  ...communityBlogPosts
];

export const newlyArrivedContent = [
    {
        icon: 'Stethoscope',
        title: "Health Services",
        content: [
            {
                type: "paragraph",
                text: "Understanding the Canadian health system is the most important first step—especially if your child needs developmental, psychological, or autism-related supports."
            },
            {
                type: "heading",
                text: "Register for Your Provincial Health Card (AHCIP)"
            },
            {
                type: "paragraph",
                text: "You need this card to access:"
            },
            {
                type: "list",
                items: ["doctors", "pediatricians", "specialists", "developmental clinics", "emergency care", "autism assessment services"]
            },
            {
                type: "paragraph",
                text: "Apply as soon as possible after arriving."
            },
            {
                type: "heading",
                text: "Accessing Medical Care"
            },
            {
                type: "paragraph",
                text: "If you don’t have a family doctor yet:"
            },
            {
                type: "list",
                items: ["Visit a walk-in clinic", "Call Health Link 811 (language interpretation available)", "Ask clinics if they accept new patients"]
            },
            {
                type: "heading",
                text: "Pediatric & Developmental Assessments"
            },
            {
                type: "paragraph",
                text: "Most specialists require a referral. You can request:"
            },
            {
                type: "list",
                items: ["Pediatricians (for ages 0–18)", "Child/Adolescent Psychiatrists", "Speech-Language Pathologists", "Occupational Therapists", "Developmental Pediatricians", "Autism assessment teams"]
            },
            {
                type: "callout",
                title: "For Developmental Concerns (Autism, ADHD, etc.) HISEN Actionable Guidance",
                items: [
                    "Ask clearly for referrals Example: “I am concerned about autism/ADHD/learning differences. I need a referral for a Pediatrician or developmental specialist.”",
                    "Bring documentation from your home country Even if it’s not in English, translated reports help speed up assessments.",
                    "Explore Alberta Health Services (AHS) Programs These include developmental clinics, autism evaluations, and therapy supports.",
                    "Be persistent If wait times are long, ask the clinic to: add your child to the cancellation list, notify you of earlier openings"
                ]
            }
        ]
    },
    {
        icon: 'BookOpen',
        title: "Education System (The Teenage Years)",
        content: [
            {
                type: "paragraph",
                text: "In Alberta, schools must support each student according to their learning, cultural, and developmental needs."
            },
            {
                type: "heading",
                text: "Your Child Has the Right To"
            },
            {
                type: "list",
                items: ["Free public schooling until age 20 (or 21 in some cases)", "English Language Learning (ELL) supports", "Special education services", "Accommodations for disabilities, learning differences, or developmental challenges"]
            },
            {
                type: "heading",
                text: "Supports Schools Can Provide"
            },
            {
                type: "list",
                items: ["IEPs/ISPs (Individualized Education Plans / Supports)", "Modified or adapted assignments", "Extended time and quiet testing spaces", "Assistive technology (laptops, software, communication supports)", "Breaks for emotional or sensory regulation", "Culturally appropriate support"]
            },
            {
                type: "callout",
                title: "For Teens with Autism",
                items: [
                    "The school should address: Executive functioning (organization, planning, completing tasks), Social-emotional regulation, Anxiety triggers (crowded hallways, noise, transitions), Sensory needs (quiet spaces, flexible seating, headphones)"
                ]
            },
            {
                type: "callout",
                title: "HISEN Recommendations",
                items: [
                    "Request a “Go-To Adult” A teacher or EA your teen can check in with daily.",
                    "Ask for interpretation for all formal meetings Schools must provide it when needed.",
                    "Attend all IEP meetings Your voice matters in deciding your child’s goals and supports."
                ]
            }
        ]
    },
    {
        icon: 'Users',
        title: "Child & Family Development Supports",
        content: [
            {
                type: "paragraph",
                text: "These supports exist outside of school and are crucial for families raising children with developmental differences."
            },
            {
                type: "heading",
                text: "Key Programs in Alberta"
            },
            {
                type: "list",
                items: [
                    "FSCD (Family Support for Children with Disabilities) Most important program for families with autistic or developmentally delayed children. It can fund: respite care, behavioral/therapy supports, specialized services, parent coaching, some private assessments",
                    "PUF (Program Unit Funding) For ages 2.5–6 (not applicable for teens, but useful for younger siblings).",
                    "Family Resource Networks (FRNs) Offer culturally informed programs, parent workshops, home visits, and referrals. Many have Spanish-speaking staff."
                ]
            },
            {
                type: "heading",
                text: "Autism Evaluations Can be accessed through"
            },
            {
                type: "list",
                items: ["AHS", "private clinics (FSCD may cover a portion if needed)"]
            }
        ]
    },
    {
        icon: 'Globe',
        title: "Community Settlement Supports",
        content: [
            {
                type: "paragraph",
                text: "Newcomers do not need to navigate Canada alone. Many organizations help with settlement, culture, and connection."
            },
            {
                type: "heading",
                text: "Helpful Organizations in Alberta"
            },
            {
                type: "list",
                items: [
                    "Multicultural Health Brokers (MCHB) Support families through health, culture, and system navigation.",
                    "Settlement Agencies Help with housing, jobs, ESL classes, government forms, and sometimes FSCD applications.",
                    "Parent Support Groups Connect with families who share similar journeys.",
                    "Community Resource Centers Provide programs, early learning activities, and family events."
                ]
            },
            {
                type: "heading",
                text: "Why Community Support Matters"
            },
            {
                type: "paragraph",
                text: "These organizations help families:"
            },
            {
                type: "list",
                items: ["reduce isolation", "understand Canadian systems", "access culturally safe supports", "build confidence"]
            }
        ]
    },
    {
        icon: 'CheckCircle2',
        title: "Tips for New Families",
        content: [
            {
                type: "sub-section",
                title: "Stay Organized",
                items: ["Keep school reports, medical documents, and ID in one folder", "Save digital copies", "Note dates of referrals and meetings"]
            },
            {
                type: "sub-section",
                title: "Use Interpretation",
                items: ["You have the right to understand everything related to your child. Ask for interpretation at:", "hospitals", "schools", "government agencies", "therapy centers"]
            },
            {
                type: "sub-section",
                title: "Prepare for Appointments",
                items: ["Write questions beforehand", "Bring reports or examples of concerns", "Request written summaries"]
            },
            {
                type: "sub-section",
                title: "Advocate Calmly but Clearly",
                items: ["You are your child’s voice. Persistence—not aggression—is the most effective strategy in Canada."]
            },
            {
                type: "sub-section",
                title: "Explore Your Community",
                items: ["Local centers often offer:", "free playgroups", "youth activities", "newcomer workshops", "mental health support"]
            }
        ]
    }
];

    
