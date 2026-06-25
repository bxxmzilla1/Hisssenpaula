
'use client';

import Link from 'next/link';
import { Mail, Twitter, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

const content = {
    en: {
        tagline: 'Building Bridges of Inclusion and Hope for Hispanic families in Alberta.',
        contactTitle: 'Contact Us',
        contactDescription: 'For any inquiries, please reach out to the appropriate department. We are here to help.',
        copyright: '© 2025 HISEN - Hispanic Inclusion & Support Network Society. All rights reserved.',
        departments: [
            { department: 'General Info', email: 'info@hisennet.org' },
            { department: 'Support', email: 'support@hisennet.org' },
            { department: 'Admin', email: 'admin@hisennet.org' },
            { department: 'Treasury', email: 'treasury@hisennet.org' },
        ]
    },
    es: {
        tagline: 'Construyendo puentes de inclusión y esperanza para las familias hispanas en Alberta.',
        contactTitle: 'Contáctanos',
        contactDescription: 'Para cualquier consulta, por favor contacta al departamento apropiado. Estamos aquí para ayudar.',
        copyright: '© 2025 HISEN - Hispanic Inclusion & Support Network Society. Todos los derechos reservados.',
        departments: [
            { department: 'Información General', email: 'info@hisennet.org' },
            { department: 'Soporte', email: 'support@hisennet.org' },
            { department: 'Administración', email: 'admin@hisennet.org' },
            { department: 'Tesorería', email: 'treasury@hisennet.org' },
        ]
    }
};

export function Footer() {
  const { language } = useLanguage();
  const { tagline, contactTitle, contactDescription, copyright, departments } = content[language];
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
  ];

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="hidden md:flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex items-center space-x-2">
               <Image src="https://raw.githubusercontent.com/bxxmzilla1/tinder/main/hisenlogoo.webp" alt="HISEN Logo" width={150} height={40} className="object-contain" />
            </Link>
            <p className="text-muted-foreground max-w-xs">
              {tagline}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.url} className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-headline font-semibold text-lg mb-2 text-primary">{contactTitle}</h4>
             <p className="text-muted-foreground mb-6">{contactDescription}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {departments.map((contact) => (
                    <div key={contact.department}>
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <Mail className="h-5 w-5 text-accent" />
                            <h5 className="font-semibold text-foreground">{contact.department}</h5>
                        </div>
                        <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-primary transition-colors md:ml-8 block">
                            {contact.email}
                        </a>
                    </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-muted-foreground">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
