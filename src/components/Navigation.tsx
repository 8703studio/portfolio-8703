"use client";

import React, { useState, useRef, useEffect } from "react";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import ButtonLink from "./ButtonLink";

type NavigationProps = {
  settings: Content.SettingsDocument;
};

export default function Navigation({ settings }: NavigationProps) {
  return (
    <nav className="px-5 py-5 md:px-7 md:py-7" aria-label="top nav">
      <div
        className="mx-auto flex max-w-6xl flex-col justify-between py-2
       md:flex-row md:items-center"
      >
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
