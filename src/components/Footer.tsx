import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import Logo from "./Logo";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer>
      <div className="flex flex-row items-center justify-between gap-3">
      <Logo />
      </div>
    </footer>
  );
}
