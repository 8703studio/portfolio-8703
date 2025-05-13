import Logo from "./Logo";
import Navigation from "./Navigation";
import React from "react";
import { createClient } from "@/prismicio";
import { Heading } from "./Heading";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="header hd:h-32 absolute left-0 right-0 top-0 z-50 ~px-4/6 ~py-4/6">
      <div className="mx-auto flex w-full max-w-8xl gap-6 justify-between items-center">
        <div className="hidden md:inline">
          <Heading size="xs">hello hello hello</Heading>
        </div>
        <div className="flex h-[70px] content-center items-center justify-center bg-brand-lime">
          <Logo settings={settings} />
        </div>
        <div>
          <Navigation settings={settings} />
        </div>
      </div>
    </header>
  );
}
