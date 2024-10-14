import Navigation from './Navigation'
import { createClient } from '@/prismicio';

export default async function MenuBottom() {
    const client = createClient();
    const settings = await client.getSingle("settings");

  return (
    <div className='nav'>
        <Navigation settings={settings} />
    </div> 
  )
}