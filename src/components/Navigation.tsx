/* eslint-disable react/react-in-jsx-scope */
"use client";

import { useState } from "react";
import { Content, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Logo from "./Logo";
import ButtonLink from "@/components/ButtonLink";
import { MdMenu, MdClose } from "react-icons/md";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type NavigationProps = {
  settings: Content.SettingsDocument;
};

export default function Navigation({ settings }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <nav aria-label="top nav">
      <div className="mx-auto flex max-w-6xl flex-col justify-between font-medium md:flex-row md:items-center">
        <div className="flex items-center">
          <button
            type="button"
            className="block p-2 text-3xl md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MdMenu />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
        {/* Mobile Nav */}
        <div
          className={clsx(
            "ga-4 fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col bg-[#288a57] transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
            <div className="bg-brand-lime mx-auto grid w-full max-w-8xl grid-cols-[auto,auto] items-center h-[70px] gap-6 md:grid-cols-[1fr,auto,1fr]">
             <div className="left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 hd:h-32"><Logo settings={settings} /></div>
             <div className="absolute top-6 right-6"> 
               <button
               type="button"
               className="flex text-3xl cursor-pointer"
               aria-expanded={open}
               onClick={() => setOpen(false)}
               >
               <MdClose />
               <span className="sr-only">Close menu</span>
               </button>
             </div>
            </div>

          <div className="flex flex-col pl-12 mb-8 gap-3">
            {settings.data.navigation.map((item) => {
              if (item.cta_link) {
                return (
                  <ButtonLink
                    key={item.label}
                    field={item.link}
                    onClick={() => setOpen(false)}
                    aria-current={
                      pathname.includes(asLink(item.link) as string)
                        ? "page"
                        : undefined
                    }
                  >
                    {item.label}
                  </ButtonLink>
                );
              }
              return (
                <PrismicNextLink
                  key={item.label}
                  className="block px-3 text-3xl first:mt-8"
                  field={item.link}
                  onClick={() => setOpen(false)}
                  aria-current={
                    pathname.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </PrismicNextLink> 
              );
            })}
          </div>
          <div className="socials">
            <div className="flex flex-col pl-12">
              <div>kolko</div>
              <div>njdkd</div>
            </div>
            </div>
        </div>

        {/* Desktop Nav */}
        <div className="navbar-links">
        <ul className='hidden md:flex'>
          {settings.data.navigation.map((item) => {
            if (item.cta_link) {
              return (
                <li key={item.label}>
                  <ButtonLink
                    field={item.link}
                    aria-current={
                      pathname.includes(asLink(item.link) as string)
                        ? "page"
                        : undefined
                    }
                  >
                    {item.label}
                  </ButtonLink>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className="inline-flex min-h-11 p-2 items-center"
                  aria-current={
                    pathname.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>  
        </div>
      </div>

    </nav>
    </div>
    
      );
    }