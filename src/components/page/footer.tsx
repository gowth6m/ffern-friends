"use client";

import React from "react";
import Icon from "../ui/icon";

const Footer = () => {
  return (
    <div className="-mt-8 min-h-48 w-full bg-secondary pt-8 text-foreground/40">
      <div className="container mx-auto flex flex-col justify-around gap-8 px-5 py-8 md:flex-row">
        <ul className="flex flex-col justify-between gap-2">
          <li>How it works</li>
          <li>Returns</li>
          <li>FAQ</li>
          <li>Ledger Portal</li>
        </ul>

        <ul className="flex flex-col justify-between gap-2">
          <li>Careers</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Press</li>
        </ul>

        <ul className="flex flex-row gap-2">
          <li>
            <Icon.InstagramLogo size={28} />
          </li>
          <li>
            <Icon.FacebookLogo size={28} />
          </li>
          <li>
            <Icon.TiktokLogo size={28} />
          </li>
          <li>
            <Icon.PinterestLogo size={28} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
