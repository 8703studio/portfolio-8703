import React from "react";
import Logo from "./Logo";
import { createClient } from "@/prismicio";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer>
      <div className="flex flex-row items-start justify-between gap-3">
      <Logo />
        <div>
          <h2>CATEGORY</h2>
          <div>
            <ul>
              <li>BRANDING</li>
            </ul>
          </div>
        </div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
      </div>
      <div> test test</div>
    </footer>
  );
}
