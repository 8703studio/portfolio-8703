import Logo from './Logo';
import Navigation from './Navigation'
import { createClient } from '@/prismicio';

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");

  return (
  <div className='flex flex-row items-center justify-between md:content-around'>
   <div className="info">test bla bla bla bla</div>
 <div className='logo flex justify-center items-center'>
  <Logo settings={settings} />
 </div> 
 <div className='nav'><Navigation settings={settings} /></div>
 </div>
  )
}

