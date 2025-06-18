import { createClient } from "@/prismicio";
import FooterText from "./FooterText";
import FooterNav from "./FooterNav";
import Socials from "./Socials";
import FooterLinkBar from "./FooterLinkBar";
import Cookies from "./Cookies";

export default async function FooterMain() {
    const client = createClient();
    const settings = await client.getSingle("settings");

    return (
        <footer>
            <div>
                <FooterText />
                <FooterNav settings={settings} />
                <Socials />
                <FooterLinkBar settings={settings} />
                <Cookies />
            </div>
        </footer>
    );
}
