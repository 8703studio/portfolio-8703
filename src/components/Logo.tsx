import React from 'react'
import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next'

export default async function Logo() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <div>
      <PrismicNextImage field={settings.data.logo} />
    </div>
  )
}
