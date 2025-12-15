import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Eventual',
  description: 'Eventual é uma plataforma de gerenciamento de eventos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider localization={ptBR}>
        <html lang="pt-br">
          <body className={poppins.variable}>{children}</body>
        </html>
      </ClerkProvider>
  );
}