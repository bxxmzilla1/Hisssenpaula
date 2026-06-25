'use client';

import { blogPosts } from '@/lib/data';
import { BlogPostCard } from '@/components/blog-post-card';
import { AnimatedSection } from '@/components/animated-section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from '@/context/language-context';

const content = {
    en: {
        pageTitle: "Our Blog",
        pageDescription: "Insights, stories, and updates from the HISEN community.",
        immigrationTab: "Guides for Immigration",
        autismTab: "Guides for Autism",
        immigrationTitle: "Guides for Immigration",
        immigrationSubtitle: "Newcomer Support",
        immigrationDescription: "Practical, supportive articles for families settling in Canada and navigating the education system.",
        autismTitle: "Guides for Autism",
        autismSubtitle: "Neurodiversity Support",
        autismDescription: "Resources and articles for families navigating the world of autism."
    },
    es: {
        pageTitle: "Nuestro Blog",
        pageDescription: "Ideas, historias y actualizaciones de la comunidad HISEN.",
        immigrationTab: "Guías de Inmigración",
        autismTab: "Guías de Autismo",
        immigrationTitle: "Guías de Inmigración",
        immigrationSubtitle: "Apoyo para Recién Llegados",
        immigrationDescription: "Artículos prácticos y de apoyo para familias que se establecen en Canadá y navegan el sistema educativo.",
        autismTitle: "Guías de Autismo",
        autismSubtitle: "Apoyo a la Neurodiversidad",
        autismDescription: "Recursos y artículos para familias que navegan el mundo del autismo."
    }
}

export default function BlogPage() {
  const { language } = useLanguage();
  const t = content[language];
  const immigrationPosts = blogPosts.filter(p => p.category === 'immigration');
  const autismPosts = blogPosts.filter(p => p.category === 'autism');

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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <Tabs defaultValue="immigration" className="w-full">
                <div className="flex justify-center mb-12">
                    <TabsList>
                        <TabsTrigger 
                            value="immigration" 
                            className="text-base"
                        >
                            {t.immigrationTab}
                        </TabsTrigger>
                        <TabsTrigger 
                            value="autism" 
                            className="text-base"
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {immigrationPosts.map(post => (
                            <BlogPostCard key={post.id} post={post} />
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {autismPosts.map(post => (
                            <BlogPostCard key={post.id} post={post} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
      </AnimatedSection>
    </div>
  );
}
