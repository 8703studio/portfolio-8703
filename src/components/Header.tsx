import Logo from './Logo';
import Navigation from './Navigation'
import { createClient } from '@/prismicio';

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");

  return (
    <header className='flex flex-row justify-between gap-5 px-3 py-3 md:flex-col'>
        <Navigation settings={settings} />
    </header> 
  )
}

