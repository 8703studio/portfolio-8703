
"use client"

import { createClient } from '@/prismicio';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link';

type LogoProps = {
settings: Content.SettingsDocument;
};

export default function Logo({settings}: LogoProps) {
  return (
    <div>
      <Link href="/" aria-label="home" >
      <PrismicNextImage field={settings.data.logo} />
      <span className='sr-only'>studio 8703</span>
      </Link>
    </div>
  )
}
