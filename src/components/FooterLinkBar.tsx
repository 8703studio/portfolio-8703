"use client";

import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next';

type FooterLinkBarProps = {
    settings:Content.SettingsDocument;
};

export default function FooterLinkBar({settings}: FooterLinkBarProps) {
  return (
    <nav>
        <div>
            <ul className='flex gap-5'> 
            {settings.data.links_bar.map((item) => (
                <li key= {item.label}>
                    <PrismicNextLink
                        field={item.link}
                        className='items-start inline-flex min-h-11' 
                        >
                            {item.label}
                     </PrismicNextLink>
                </li> 
                ))}    
            </ul>
        </div>
    </nav>
  )
}
