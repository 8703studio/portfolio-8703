import React from "react";
import { createClient } from "@/prismicio";
import FooterLinkBar from "./FooterLinkBar";
import FooterNav from "./FooterNav";
import Socials from "./Socials";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer>
      <div className="flex flex-row gap-5 px-2 py-2 items-center justify-between">
        <div className="col-1">col1</div>

        <div className="col-2">
          <FooterNav />
        </div>

        <div className="col-3">
          <Socials />
        </div>
      </div>

      <div className="links-bar px-2 py-2">
        <FooterLinkBar settings={settings} />
      </div>

      <div className="copyright px-2 py-2">
        <>{settings.data.copyright}</>
      </div>
      
    </footer>
  );
}
