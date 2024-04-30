import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import FooterLinkBar from "./FooterLinkBar";
import FooterText from "./FooterText";
import FooterNav from "./FooterNav";
import Socials from "./Socials";


export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <Bounded as="footer" className="bg-green-500">
      <div className="container">
        <div className="flex flex-row py-4 px-4 gap-3 justify-between">
          <div className="col-1">
            <FooterText />
          </div>

          <div className="col-2">
            <FooterNav settings={settings} />
          </div>

          <div className="col-3">
            <Socials />
          </div>
        </div>
        <div className="py-4 px-4 items-center">
        <FooterLinkBar settings={settings} />
      </div>

      <div className="flex flex-row py-4 px-4 gap-5 justify-between">
        <div><>{settings.data.copyright}</></div>
        <div> back to top</div>
        
      </div>
      </div>


    </Bounded>
  );
}
