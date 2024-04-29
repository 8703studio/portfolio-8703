import React from 'react'
import Navigation from './Navigation'
import Logo from './Logo'
import { createClient } from '@/prismicio';

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");
  return (
    <header className='flex'>
        <Logo />
        <Navigation />
    </header>
    
  )
}

