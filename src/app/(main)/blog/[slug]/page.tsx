'use client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AdvocacyPost } from './advocacy-post';
import { RightsAndServicesPost } from './rights-and-services-post';
import { LowCostSupportsPost } from './low-cost-supports-post';
import { CommunicationToolsPost } from './communication-tools-post';
import { NewlyArrivedPost } from './newly-arrived-post';
import { FirstSignsOfAutismPost } from './first-signs-of-autism-post';
import { AutismInTeenageYearsPost } from './autism-in-teenage-years-post';
import { GuideToEarlySignsOfAutismPost } from './guide-to-early-signs-of-autism-post';
import { FscdApplicationPost } from './fscd-application-post';
import { SampleLettersPost } from './sample-letters-post';
import { WaitlistInformationPost } from './waitlist-information-post';
import { useLanguage } from '@/context/language-context';
import React from 'react';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

const content = {
    en: {
        goBack: 'Go back to blog',
    },
    es: {
        goBack: 'Volver al blog',
    }
}

function BlogPostLayout({ post, children }: { post: any; children: React.ReactNode }) {
  const { language } = useLanguage();
  const t = content[language];
  const title = post.title[language];
  const excerpt = post.excerpt[language];
  
  return (
      <article>
        <AnimatedSection>
          <div className="relative h-[50vh] w-full">
              <Image 
                  src={post.image}
                  alt={title}
                  fill
                  className="object-cover"
                  data-ai-hint="article background"
                  priority
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-4 container mx-auto">
                  <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{title}</h1>
                  <p className="text-lg md:text-xl max-w-3xl">{excerpt}</p>
              </div>
          </div>
        </AnimatedSection>
  
        <AnimatedSection>
          <div className="container mx-auto max-w-4xl py-12 px-4">
              <div className="mb-8">
                  <Button asChild variant="outline" size="icon" className="rounded-full">
                      <Link href="/blog">
                          <ArrowLeft className="h-4 w-4" />
                          <span className="sr-only">{t.goBack}</span>
                      </Link>
                  </Button>
              </div>
              {children}
          </div>
        </AnimatedSection>
      </article>
  )
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const slug = params.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    if (slug === 'early-signs-checklist') {
      return null;
    }
    notFound();
  }

  const renderContent = () => {
    switch(slug) {
      case 'how-to-advocate-for-your-child-in-school':
        return <AdvocacyPost />;
      case 'understanding-your-childs-rights-and-access-to-services':
        return <RightsAndServicesPost />;
      case 'low-cost-and-free-supports-while-waiting-for-funding':
        return <LowCostSupportsPost />;
      case 'communication-tools-for-newcomer-parents':
        return <CommunicationToolsPost />;
      case 'newly-arrived-in-canada-how-to-navigate-services':
        return <NewlyArrivedPost />;
      case 'first-signs-of-autism':
        return <FirstSignsOfAutismPost />;
      case 'autism-in-teenage-years':
        return <AutismInTeenageYearsPost />;
      case 'guide-to-early-signs-of-autism':
        return <GuideToEarlySignsOfAutismPost />;
      case 'how-to-apply-for-fscd':
        return <FscdApplicationPost />;
      case 'sample-letters-for-schools-and-doctors':
        return <SampleLettersPost />;
      case 'waitlist-information-and-appointment-preparation':
        return <WaitlistInformationPost />;
      default:
        return (
          <div
            className={'prose prose-lg dark:prose-invert prose-headings:font-headline prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80 prose-strong:text-foreground prose-p:text-muted-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground'}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        );
    }
  }

  return (
    <BlogPostLayout post={post}>
      {renderContent()}
    </BlogPostLayout>
  );
}
