
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { usePathname } from 'next/navigation';
import { MobileFooter } from '@/components/layout/mobile-footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showMobileFooterPages = ['/contact', '/donate', '/faq'];
  const shouldShowMobileFooter = showMobileFooterPages.includes(pathname);

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <div className={'hidden md:block'}>
        <Footer />
      </div>
      {shouldShowMobileFooter && <MobileFooter />}
    </>
  );
}
