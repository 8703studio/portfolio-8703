import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import React from 'react'

export default async function Navigation() {
    const client = createClient();
    const settings = await client.getSingle("settings");
    return (
    <nav>
        <ul>
            {settings.data.navigation.map((item)=>(
                <li key={item.label}>
                <PrismicNextLink field={item.link}>
                    {item.label}
                </PrismicNextLink>
                </li>
            ))}
        </ul>
    </nav>
  )
}
