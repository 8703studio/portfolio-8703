import { FaInstagramSquare } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

import React from "react";
import Link from "next/link";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

export default async function Socials() {
    const client = createClient()
    const settings = await client.getSingle("settings");

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row">
        <Link href="/" target="_blank" aria-label="instagram">
          <FaInstagramSquare size={'30px'} color="" />
        </Link>
        <Link href="" target="_blank" aria-label="behance">
        <FaBehanceSquare  size={'30px'}/>
        </Link>
        <Link href="" target="_blank" aria-label="behance">
        <FaBehanceSquare  size={'30px'}/>
        </Link>
        <Link href="" target="_blank" aria-label="behance">
        <FaBehanceSquare  size={'30px'}/>
        </Link>
      </div>

      <div className="div-info-contact leading-7">
      <PrismicRichText field={settings.data.contact_text} />
      <PrismicNextLink field={settings.data.mailto}>{settings.data.mailto_label}</PrismicNextLink>
      </div>
    </div>
  );
}
