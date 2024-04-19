"use client";

import React from "react";
import Icon from "../ui/icon";

// ------------------------------------------------------------

const Footer = () => {
  return (
    <div className="-mt-10 min-h-48 w-full bg-secondary py-14 text-foreground/40">
      <div className="container mx-auto flex flex-col justify-around gap-8 px-5 py-8 md:flex-row">
        <ul className="flex flex-col justify-between gap-2">
          <FooterListItem>How it works</FooterListItem>
          <FooterListItem>Returns</FooterListItem>
          <FooterListItem>FAQ</FooterListItem>
          <FooterListItem>Ledger Portal</FooterListItem>
        </ul>

        <ul className="flex flex-col justify-between gap-2">
          <FooterListItem>Careers</FooterListItem>
          <FooterListItem>Privacy Policy</FooterListItem>
          <FooterListItem>Terms and Conditions</FooterListItem>
          <FooterListItem>Press</FooterListItem>
        </ul>

        <ul className="flex flex-row gap-2">
          <FooterListItem>
            <Icon.InstagramLogo size={28} />
          </FooterListItem>
          <FooterListItem>
            <Icon.FacebookLogo size={28} />
          </FooterListItem>
          <FooterListItem>
            <Icon.TiktokLogo size={28} />
          </FooterListItem>
          <FooterListItem>
            <Icon.PinterestLogo size={28} />
          </FooterListItem>
        </ul>
      </div>
    </div>
  );
};

const FooterListItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"ul">
>((props, ref) => {
  return (
    <li ref={ref} className="cursor-pointer hover:text-primary">
      {props.children}
    </li>
  );
});

FooterListItem.displayName = "FooterListItem";

export default Footer;
