import { FaInstagramSquare } from "react-icons/fa";
import React from "react";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex flex-col px-5 py-5 md:px-7 md:py-7">
      <div className="">
        <Link href="/" target="_blank" aria-label="instagram">
          <FaInstagramSquare />
        </Link>
      </div>

      <div className="div-info">hello@hbnjdk.com</div>
    </div>
  );
}
