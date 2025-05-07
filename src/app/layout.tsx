
import { Roboto } from 'next/font/google';

import { Metadata } from "next";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css"
import Header from '@/components/Header';
import { createClient } from '@prismicio/client';



// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: '400'
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient(repositoryName, {
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
  });
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title,
    description: settings.data.meta_description,
    openGraph: {
      images: settings.data.fallback_ig_image.url ?? undefined,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} antialiased`} >
        <div className='h-dvh w-full m-auto relative z-10 animate-z'>
          <Header />
          {children}
        </div>
      </body>
    
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
