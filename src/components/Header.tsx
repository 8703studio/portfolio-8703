
import Logo from './Logo';
import Navigation from './Navigation'
import React from "react";
import { createClient } from '@/prismicio';

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");

  return (
       <header className="header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 hd:h-32">
      <div className="mx-auto grid w-full max-w-8xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-[1fr,auto,1fr]">
            <span className="hidden md:inline">Cart (1)</span>
          <div className='bg-brand-lime justify-self-start'><Logo settings={settings} /></div>
        <div className="justify-self-end">
 <Navigation settings={settings} />
        </div>
      </div>
    </header>
  )
}