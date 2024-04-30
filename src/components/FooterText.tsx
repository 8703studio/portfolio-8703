
import { createClient } from '@/prismicio'
import { PrismicRichText } from '@prismicio/react'


export default async function FooterText() {
    const client = createClient();
    const settings = await client.getSingle("settings");
  return (
    <div>
        <PrismicRichText field={settings.data.footer_text} />
    </div>
  )
}
