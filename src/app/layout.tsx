
import { Roboto } from 'next/font/google';

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css"
import Header from '@/components/Header';



// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: '400'
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={roboto.variable}>
      <body className='bg-green-500 h-full w-full box-border'>
        <div className='h-dvh w-full m-auto relative z-10 animate-z'>
          <Header />
          {children}
        </div>
      </body>
    
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
