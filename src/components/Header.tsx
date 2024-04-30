import Logo from './Logo';
import Navigation from './Navigation'
import { createClient } from '@/prismicio';

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");

  return (
    <header className='flex flex-col items-center justify-between gap-5 px-4 py-7 md:flex-row'>
        <Logo />
        <Navigation settings={settings} />
    </header> 
  )
}

