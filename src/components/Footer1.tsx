import React from "react";
import { createClient } from "@/prismicio";
import FooterLinkBar from "./FooterLinkBar";
import FooterText from "./FooterText";
import FooterNav from "./FooterNav";
import Socials from "./Socials";


export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer className="bg-green-600" >
          

        </div>
        <div className="py-4 px-4 items-center">
        <FooterLinkBar settings={settings} />
      </div>

      <div className="flex flex-row py-4 px-4 gap-5 justify-between">
        <div><>{settings.data.copyright}</></div>
        <div> back to top</div>
        
      </div>
      </div>
    </footer>
  );
}
