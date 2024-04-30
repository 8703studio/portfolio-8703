"use client";

import React, { useState, useRef, useEffect } from "react";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import ButtonLink from "./ButtonLink";
import Logo from "./Logo";

type NavigationProps = {
  settings: Content.SettingsDocument;
};

export default function Navigation({ settings }: NavigationProps) {
  return (
   <nav className="px-4 py-4 md:px-6 md:py-6" aria-label="top nav">
    <div className="flex max-w-7xl flex-col justify-between py-2 font-medium text-white
     md:flex-row md:items-center">
      <Logo settings={settings} />
        <ul className="flex gap-6">
          {settings.data.navigation.map((item) => {
            if (item.cta_link) {
              return (
                <li key={item.label}>
                  <ButtonLink field={item.link}>{item.label}</ButtonLink>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className="items-center inline-flex min-h-11"
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
