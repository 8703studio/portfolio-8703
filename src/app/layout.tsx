import { DM_Sans } from 'next/font/google'

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css"
import Header from '@/components/Header';
import Footer from '@/components/Footer';



// If loading a variable font, you don't need to specify the font weight
const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={dmSans.variable}>
      <body className="bg-red-500 max-h-full">
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
