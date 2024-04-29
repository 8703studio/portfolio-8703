import Logo from './Logo';
import Navigation from './Navigation'
import { createClient } from '@/prismicio';

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");

  return (
    <header className='flex flex-col items-center justify-between border-t border-slate-600 gap-5 px-8 py-7 md:flex-row'>
        <Logo />
        <Navigation settings={settings} />
    </header>
    
  )
}

