/* eslint-disable react/react-in-jsx-scope */
"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image"; // Import de next/image

type LogoProps = {
  settings: Content.SettingsDocument;
};

export default function Logo({ settings }: LogoProps) {
  // Vérifier si le logo est valide (évite les erreurs avec PrismicNextImage)
  const logo = settings.data.logo;
  const hasValidLogo = logo?.url && logo.url.trim() !== "";

  return (
    <div>
      <Link href="/" className="justify-self-start" aria-label="Home">
        {hasValidLogo ? (
          <PrismicNextImage field={logo} loading="lazy" />
        ) : (
          <Image 
            src="/default-logo.png" 
            alt="Logo par défaut" 
            width={150} 
            height={50} 
            priority={false}
            style={{ objectFit: "contain" }} 
          />
        )}
        <span className="sr-only">Studio 8703</span>
      </Link>
    </div>
  );
}