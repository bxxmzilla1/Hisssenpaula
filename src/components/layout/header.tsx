
'use client';

import Link from 'next/link';
import { Globe, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { navLinks as navLinksData } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

const content = {
  en: {
    navLinks: navLinksData,
    getInvolved: 'Get Support',
    languageToggle: 'Español'
  },
  es: {
    navLinks: [
      { href: '/', label: 'Inicio' },
      { href: '/blog', label: 'Blog' },
      { href: '/about', label: 'Sobre Nosotros' },
      { href: '/services', label: 'Servicios' },
      { href: '/events', label: 'Eventos' },
      { href: '/testimonials', label: 'Testimonios' },
      { href: '/faq', label: 'Preguntas Frecuentes' },
      { href: '/sponsors', label: 'Patrocinadores' },
      { href: '/contact', label: 'Contáctanos' },
      { href: '/donate', label: 'Donar' },
    ],
    getInvolved: 'Obtener Apoyo',
    languageToggle: 'English'
  }
}

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const { navLinks, getInvolved, languageToggle } = content[language];

  const handleLanguageToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleLanguage();
    if (isSheetOpen) {
        setSheetOpen(false);
    }
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="https://raw.githubusercontent.com/bxxmzilla1/tinder/main/hisenlogoo.webp" alt="HISEN Logo" width={150} height={40} className="object-contain" />
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))) ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-end gap-4">
            <Button variant="ghost" onClick={handleLanguageToggle} className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground/80 transition-colors">
                <Globe className="h-4 w-4" />
                <span>{languageToggle}</span>
            </Button>
            <Button asChild>
                <Link href="/contact">{getInvolved}</Link>
            </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex w-full items-center justify-between md:hidden">
            <div className="flex-1">
                <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                    <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <Link href="/" className="mr-6 flex items-center space-x-2 mb-8" onClick={() => setSheetOpen(false)}>
                        <Image src="https://raw.githubusercontent.com/bxxmzilla1/tinder/main/hisenlogoo.webp" alt="HISEN Logo" width={120} height={30} className="object-contain" />
                    </Link>
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setSheetOpen(false)}
                            className={cn(
                            'text-lg',
                            (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))) ? 'text-primary' : 'text-muted-foreground'
                            )}
                        >
                            {link.label}
                        </Link>
                        ))}
                        <hr className="my-4 border-border/40" />
                        <Button asChild>
                            <Link href="/contact" onClick={() => setSheetOpen(false)}>{getInvolved}</Link>
                        </Button>
                    </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="flex-1 flex justify-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="https://raw.githubusercontent.com/bxxmzilla1/tinder/main/hisenlogoo.webp" alt="HISEN Logo" width={120} height={30} className="object-contain" />
                </Link>
            </div>
            <div className="flex-1 flex justify-end">
                <Button variant="ghost" size="sm" onClick={handleLanguageToggle} className="flex items-center gap-2 text-foreground/60 hover:text-foreground/80 transition-colors">
                    <Globe className="h-5 w-5" />
                    <span>{languageToggle}</span>
                </Button>
            </div>
        </div>
      </div>
    </header>
  );
}
