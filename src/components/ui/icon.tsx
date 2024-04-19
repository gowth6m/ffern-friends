"use client";

import {
  CaretRight,
  IconProps,
  CaretLeft,
  LockKey,
  List,
  X,
  InstagramLogo,
  FacebookLogo,
  TiktokLogo,
  PinterestLogo,
} from "phosphor-react";

// ------------------------------------------------------------

interface IconType {
  [key: string]: React.FC<IconProps>;
}

const Icon: IconType = {
  CaretRight,
  CaretLeft,
  LockKey,
  List,
  X,
  InstagramLogo,
  FacebookLogo,
  TiktokLogo,
  PinterestLogo,
};

export default Icon;
