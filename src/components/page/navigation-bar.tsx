"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Icon from "../ui/icon";

const NavigationBar: React.FC<React.ComponentProps<"div">> = (props) => {
  const router = useRouter();

  return (
    <div
      className="bg-header-pattern fixed z-0 h-40 w-full bg-secondary bg-cover bg-no-repeat"
      {...props}
    >
      <div className="z-40 flex h-16 flex-row items-center justify-between  px-4 text-background">
        <img
          className="h-5 cursor-pointer"
          src="/logo.svg"
          onClick={() => router.push("/")}
        />
        <Icon.List size={32} onClick={() => {}} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default NavigationBar;
