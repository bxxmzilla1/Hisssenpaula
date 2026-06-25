

'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogPosts } from "@/lib/data";
import { BlogPostCard } from "@/components/blog-post-card";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const content = {
    en: {
        immigrationTab: "Immigration",
        autismTab: "Autism",
        immigrationTitle: "Guides for Immigration",
        immigrationSubtitle: "Newcomer Support",
        immigrationDescription: "Practical, supportive articles for families settling in Canada and navigating the education system.",
        autismTitle: "Guides for Autism",
        autismSubtitle: "Neurodiversity Support",
        autismDescription: "Resources and articles for families navigating the world of autism.",
        viewAll: "View All Blogs"
    },
    es: {
        immigrationTab: "Inmigración",
        autismTab: "Autismo",
        immigrationTitle: "Guías de Inmigración",
        immigrationSubtitle: "Apoyo para Recién Llegados",
        immigrationDescription: "Artículos prácticos y de apoyo para familias que se establecen en Canadá y navegan el sistema educativo.",
        autismTitle: "Guías de Autismo",
        autismSubtitle: "Apoyo a la Neurodiversidad",
        autismDescription: "Recursos y artículos para familias que navegan el mundo del autismo.",
        viewAll: "Ver Todos los Blogs"
    }
};

export function BlogPreviewSection() {
    const { language } = useLanguage();
    const t = content[language];
    const immigrationPosts = blogPosts.filter(p => p.category === 'immigration').slice(0, 2);
    const autismPosts = blogPosts.filter(p => p.category === 'autism').slice(0, 2);

    return (
        <div className="py-16 md:py-24">
            <Tabs defaultValue="immigration" className="w-full">
                <div className="flex justify-center mb-12">
                    <TabsList className="bg-transparent p-0">
                        <TabsTrigger 
                            value="immigration" 
                            className="text-lg font-headline data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
                        >
                            {t.immigrationTab}
                        </TabsTrigger>
                        <TabsTrigger 
                            value="autism" 
                            className="text-lg font-headline data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
                        >
                            {t.autismTab}
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="immigration">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">{t.immigrationTitle}</h2>
                        <p className="text-accent text-sm font-semibold mb-4">{t.immigrationSubtitle}</p>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {t.immigrationDescription}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {immigrationPosts.map(post => (
                            <BlogPostCard key={post.id} post={post} variant="preview" />
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="autism">
                     <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">{t.autismTitle}</h2>
                         <p className="text-accent text-sm font-semibold mb-4">{t.autismSubtitle}</p>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {t.autismDescription}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {autismPosts.map(post => (
                            <BlogPostCard key={post.id} post={post} variant="preview" />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
             <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                <Link href="/blog">
                    {t.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                </Button>
            </div>
        </div>
    );
}
