"use client";

import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

type NavigationProps = {
  settings: Content.SettingsDocument;
};

export default function Navigation({ settings }: NavigationProps) {
  return (
    <nav className="px-5 py-5 md:px-7 md:py-7" aria-label="top nav">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2
       md:flex-row md:items-center">
        <ul className="flex gap-6">
          {settings.data.navigation.map((item) => (
            <li key={item.label}>
              <PrismicNextLink
                field={item.link}
                className="itemps-center inline-flex min-h-11"
              >
                {item.label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
