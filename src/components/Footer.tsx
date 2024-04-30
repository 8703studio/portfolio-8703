import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import Logo from "./Logo";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer>
      <div className="flex flex-row items-center justify-start gap-5 px-4 py-7 md:flex-row">
      <div>test</div>
      <div>test</div>
      </div>
      <div><>{settings.data.copyright}</></div>
    </footer>
  );
}
