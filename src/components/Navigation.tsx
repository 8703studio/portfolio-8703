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
          {/* Mobile Menu Button */}
          <div className="flex items-center ">
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
              open ? "translate-x-0" : "translate-x-[100%]"
            )}
          >
            {/* Mobile Header */}
            <div className="bg-brand-lime mx-auto w-full h-[100px] border-solid border-b-2 border-black">
              <div className="left-6  z-50 ~h-32/48 ~px-4/6 ~py-6/8">
                <Logo settings={settings} />
              </div>
              <div className="absolute top-10 right-6">
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

            {/* Mobile Links */}
            <div className="flex flex-col pl-12 mb-8 gap-3">
              {settings.data.navigation.map((item, index) => {
                if (item.cta_link) {
                  return (
                    <ButtonLink
                      key={index}
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
                    key={index}
                    className="block px-3 text-3xl first:mt-8"
                    field={item.link}
                    onClick={() => setOpen(false)}
                    aria-current={
                      pathname.includes(asLink(item.link) as string)
                        ? "page"
                        : undefined
                    }
                  >
                    <span className="relative inline-block group">
                      <span className="relative z-10">{item.label}</span>
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full" />
                    </span>
                  </PrismicNextLink>
                );
              })}
            </div>

            {/* Mobile Social Links */}
            <div className="socials border-solid border-t-2 border-black">
              <div className="grid grid-cols-[auto_1fr_auto] p-2 place-content-center">
                <div className="bg-orange-400">test</div>
                <div className="bg-green-100">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="bg-cyan-600">test</div>
              </div>
            </div>

          </div>

          {/* Desktop Nav */}
          <div className="navbar-links">
            <ul className="hidden md:flex">
              {settings.data.navigation.map((item, index) => {
                if (item.cta_link) {
                  return (
                    <li key={index}>
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
                  <li key={index}>
                    <PrismicNextLink
                      field={item.link}
                      className="relative inline-flex min-h-11 p-2 items-center group"
                      aria-current={
                        pathname.includes(asLink(item.link) as string)
                          ? "page"
                          : undefined
                      }
                    >
                      <span className="relative z-0">{item.label}</span>
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full" />

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