import Logo from './Logo';
import Navigation from './Navigation'
import { createClient } from '@/prismicio';

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");

  return (
  <div className='flex flex-row justify-between items-center'>
 <div className='logo'>
  <Logo settings={settings} />
 </div> 
 <div className='nav'><Navigation settings={settings} /></div>
 </div>
  )
}

