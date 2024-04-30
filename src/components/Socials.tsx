import { FaInstagramSquare } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Socials() {
    const client = createClient()
    const settings = await client.getSingle("settings");

  return (
    <div className="flex flex-col px-5 py-5 md:px-7 md:py-7">
      <div className="">
        <Link href="/" target="_blank" aria-label="instagram">
          <FaInstagramSquare />
        </Link>
      </div>

      <div className="div-info">
      <PrismicNextLink field={settings.data.mailto}>{settings.data.mailto_label}</PrismicNextLink>
      </div>
    </div>
  );
}
