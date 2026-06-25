
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { BlogPost } from '@/lib/types';
import { ArrowRight } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';

const cardVariants = cva(
  "relative flex flex-col overflow-hidden transition-all text-white",
  {
    variants: {
      variant: {
        default: "border-border/60 hover:border-primary/50 transform hover:-translate-y-1",
        preview: "border-border/60 shadow-lg h-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BlogPostCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  post: BlogPost;
  isPlain?: boolean;
}

export function BlogPostCard({ post, variant, className, isPlain = false }: BlogPostCardProps) {
  const { language } = useLanguage();
  const title = post.title[language];
  const excerpt = post.excerpt[language];

  const CardLink = () => (
     <Button asChild variant="link" className="p-0 text-white hover:text-white/80" style={{ textShadow: '0 0 5px rgba(0,0,0,0.7)' }}>
        <Link href={`/blog/${post.slug}`}>
          {language === 'en' ? 'Read More' : 'Leer Más'} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
  );

  return (
    <Card className={cn(cardVariants({ variant }), className)}>
      <Image
        src={post.image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        data-ai-hint="article summary"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <div className="relative z-10 flex flex-col justify-end h-full p-6">
        <div>
          <CardHeader className="p-0">
            <CardTitle className="font-headline text-xl leading-snug" style={{ textShadow: '0 0 8px rgba(0,0,0,0.8)' }}>
              {isPlain ? title : <Link href={`/blog/${post.slug}`} className="hover:text-white/80 transition-colors">{title}</Link>}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 pt-4">
            <CardDescription className="text-white/80" style={{ textShadow: '0 0 5px rgba(0,0,0,0.7)' }}>{excerpt}</CardDescription>
          </CardContent>
           <CardFooter className="p-0 pt-4">
            {!isPlain && <CardLink />}
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
