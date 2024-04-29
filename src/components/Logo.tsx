import React from 'react'
import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link';

export default async function Logo() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <div>
      <Link href="/" aria-label="home" >
      <PrismicNextImage field={settings.data.logo} />
      <span className='sr-only'>studio 8703</span>
      </Link>
    </div>
  )
}
