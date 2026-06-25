
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/animated-section';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/language-context';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

const content = {
    en: {
        pageTitle: 'Get Support & Contact Us',
        pageDescription: 'Join our community support network or send us a message.',
        formTitle: 'Send a Message',
        formDescription: "We'd love to hear from you!",
        nameLabel: 'Your Name',
        namePlaceholder: 'John Doe',
        emailLabel: 'Your Email',
        emailPlaceholder: 'john.doe@example.com',
        subjectLabel: 'Subject',
        subjectPlaceholder: 'Regarding neurodiversity support...',
        phoneLabel: 'Your Phone Number (Optional)',
        phonePlaceholder: '(123) 456-7890',
        messageLabel: 'Your Message',
        messagePlaceholder: 'Tell us how we can help...',
        submitButton: 'Send Message',
        sendingButton: 'Sending...',
        successTitle: 'Message Sent!',
        successDescription: "Thank you for reaching out. We'll get back to you soon.",
        errorTitle: 'Uh oh! Something went wrong.',
        errorDescription: 'There was a problem sending your message. Please try again.',
        firestoreError: 'Your message was sent, but failed to save to our inbox. Please contact us directly if you do not hear back.'
    },
    es: {
        pageTitle: 'Obtener Apoyo y Contáctanos',
        pageDescription: 'Únete a nuestra red de apoyo comunitario o envíanos un mensaje.',
        formTitle: 'Enviar un Mensaje',
        formDescription: '¡Nos encantaría saber de ti!',
        nameLabel: 'Tu Nombre',
        namePlaceholder: 'Juan Pérez',
        emailLabel: 'Tu Correo Electrónico',
        emailPlaceholder: 'juan.perez@example.com',
        subjectLabel: 'Asunto',
        subjectPlaceholder: 'Sobre el apoyo a la neurodiversidad...',
        phoneLabel: 'Tu Número de Teléfono (Opcional)',
        phonePlaceholder: '(123) 456-7890',
        messageLabel: 'Tu Mensaje',
        messagePlaceholder: 'Cuéntanos cómo podemos ayudarte...',
        submitButton: 'Enviar Mensaje',
        sendingButton: 'Enviando...',
        successTitle: '¡Mensaje Enviado!',
        successDescription: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
        errorTitle: '¡Oh no! Algo salió mal.',
        errorDescription: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.',
        firestoreError: 'Tu mensaje fue enviado, pero no se pudo guardar en nuestra bandeja de entrada. Por favor, contáctanos directamente si no recibes respuesta.'
    },
};

export function ContactPreviewSection() {
    const { language } = useLanguage();
    const t = content[language];
    const { toast } = useToast();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: '',
        },
    });

    const { isSubmitting } = form.formState;

    const onSubmit = async (values: FormValues) => {
        try {
            const formspreeResponse = await fetch("https://formspree.io/f/xvgnejwy", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (!formspreeResponse.ok) {
                 throw new Error('Formspree submission failed');
            }
            
            toast({
                title: t.successTitle,
                description: t.successDescription,
            });
            form.reset();
        } catch (error) {
            console.error("Form submission error:", error);
            toast({
                variant: "destructive",
                title: t.errorTitle,
                description: t.errorDescription,
            });
        }
    };

    return (
        <div className="bg-background">
            <AnimatedSection>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
                        {t.pageTitle}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t.pageDescription}
                    </p>
                </div>
            </AnimatedSection>
            <AnimatedSection>
                <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 pb-24">
                    <Card className="bg-card border-border/60">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl font-headline">{t.formTitle}</CardTitle>
                            <CardDescription>{t.formDescription}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t.nameLabel}</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={t.namePlaceholder} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t.emailLabel}</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={t.emailPlaceholder} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t.subjectLabel}</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={t.subjectPlaceholder} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t.phoneLabel}</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={t.phonePlaceholder} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t.messageLabel}</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder={t.messagePlaceholder} {...field} rows={5} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="flex justify-center">
                                      <Button type="submit" size="lg" disabled={isSubmitting}>
                                          {isSubmitting ? t.sendingButton : t.submitButton}
                                      </Button>
                                    </div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </AnimatedSection>
        </div>
    );
}
