'use client';

import { Users, Globe, Award, Eye, Building, TrendingUp } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const values = [
    {
        icon: (props: LucideProps) => <Users {...props} />,
        en_label: 'Inclusion',
        es_label: 'Inclusión'
    },
    {
        icon: (props: LucideProps) => <Globe {...props} />,
        en_label: 'Cultural Respect',
        es_label: 'Respeto Cultural'
    },
    {
        icon: (props: LucideProps) => <Award {...props} />,
        en_label: 'Dignity',
        es_label: 'Dignidad'
    },
    {
        icon: (props: LucideProps) => <Eye {...props} />,
        en_label: 'Transparency',
        es_label: 'Transparencia'
    },
    {
        icon: (props: LucideProps) => <Building {...props} />,
        en_label: 'Community',
        es_label: 'Comunidad'
    },
    {
        icon: (props: LucideProps) => <TrendingUp {...props} />,
        en_label: 'Empowerment',
        es_label: 'Empoderamiento'
    },
];

const content = {
    en: {
        title: "Our Values"
    },
    es: {
        title: "Nuestros Valores"
    }
}

export function ValuesSection() {
    const { language } = useLanguage();
    const { title } = content[language];
    return (
        <div className="py-16 md:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
                    {title}
                </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
                {values.map((value) => (
                    <div key={value.en_label} className="flex flex-col items-center text-center">
                        <div className="bg-primary/10 p-4 rounded-full mb-4">
                            <value.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg">{language === 'en' ? value.en_label : value.es_label}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
