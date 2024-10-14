import { createClient } from "@/prismicio";
import FooterText from "./FooterText";
import FooterNav from "./FooterNav";
import Socials from "./Socials";
import FooterLinkBar from "./FooterLinkBar";
import { Cookie } from "next/font/google";
import Cookies from "./Cookies";

export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");

    return (
        <footer className='mb-auto  bottom-0'>
            <div className="first-menu flex flex-col items-center justify-around gap-6 border-t border-slate-50 px-8 py-7 xs:flex-row sm:flex-row md:flex-row lg:flex-row">
                <div className="col-1">
                    <FooterText />
                </div>
                <div className="flex gap-12">
                    <div className="col-2">
                      <FooterNav settings={settings} />
                    </div>

                    <div className="col-3">
                        <Socials />
                    </div></div>
                </div>
            <div className="second-menu">
                <div className="py-4 px-4 items-center">
                    <FooterLinkBar settings={settings} />
                </div>
                <div className="copyright-info flex flex-row py-4 px-4 gap-5 justify-between">
                    <div><>{settings.data.copyright}</></div>
                    <div> back to top</div>
                </div>

            </div>
          <Cookies />  
        </footer>
    );
}
