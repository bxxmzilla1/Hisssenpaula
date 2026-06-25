
'use client';

import { Header } from "@/components/layout/header";
import { LanguageProvider } from "@/context/language-context";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <div className='bg-background'>
        <Header />
        {children}
      </div>
    </LanguageProvider>
  );
}
