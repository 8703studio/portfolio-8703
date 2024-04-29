import React from 'react'
import Logo from './Logo'
import { createClient } from '@/prismicio';

export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");
  return (
    <footer>
        <Logo />
    </footer>
  )
}
