"use client";

import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";

type FooterNavProps = {
  settings: Content.SettingsDocument;
};

export default function FooterNav({ settings }: FooterNavProps) {
  return (
    <div>
      <div className="flex flex-row gap-6">
        <div>
          <div>
            <b>Services</b>
          </div>
          <div>
            <ul>
              {settings.data.category_links_services.map((item) => (
                <li key={item.label}>
                  <PrismicNextLink field={item.link} className="">
                    {item.label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div>
            <b>Lastest Artworks</b>
          </div>
          <div>
            <ul>
              {settings.data.links_bar.map((item) => (
                <li key={item.label}>
                  <PrismicNextLink field={item.link} className="">
                    {item.label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
