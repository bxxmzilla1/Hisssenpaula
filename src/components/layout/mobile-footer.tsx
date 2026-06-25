
'use client';

import { Mail } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const content = {
    en: {
        contactTitle: 'Contact Us',
        contactDescription: 'For any inquiries, please reach out to the appropriate department. We are here to help.',
        departments: [
            { department: 'General Info', email: 'info@hisennet.org' },
            { department: 'Support', email: 'support@hisennet.org' },
            { department: 'Admin', email: 'admin@hisennet.org' },
            { department: 'Treasury', email: 'treasury@hisennet.org' },
        ]
    },
    es: {
        contactTitle: 'Contáctanos',
        contactDescription: 'Para cualquier consulta, por favor contacta al departamento apropiado. Estamos aquí para ayudar.',
        departments: [
            { department: 'Información General', email: 'info@hisennet.org' },
            { department: 'Soporte', email: 'support@hisennet.org' },
            { department: 'Administración', email: 'admin@hisennet.org' },
            { department: 'Tesorería', email: 'treasury@hisennet.org' },
        ]
    }
};

export function MobileFooter() {
  const { language } = useLanguage();
  const { contactTitle, contactDescription, departments } = content[language];

  return (
    <footer className="bg-background border-t border-border/40 md:hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div>
            <h4 className="font-headline font-semibold text-lg mb-2 text-primary">{contactTitle}</h4>
            <p className="text-muted-foreground mb-6">{contactDescription}</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                {departments.map((contact) => (
                    <div key={contact.department}>
                        <div className="flex items-center gap-2">
                            <Mail className="h-5 w-5 text-accent" />
                            <h5 className="font-semibold text-foreground">{contact.department}</h5>
                        </div>
                        <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-primary transition-colors block text-sm mt-1 ml-7">
                            {contact.email}
                        </a>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
