"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import Icon from "../ui/icon";

// ------------------------------------------------------------

const NavigationBar: React.FC<React.ComponentProps<"div">> = (props) => {
  const router = useRouter();
  const sidePanelRef = useRef<HTMLDivElement>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleSidePanel = () => setIsSidePanelOpen(!isSidePanelOpen);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        sidePanelRef.current &&
        !sidePanelRef.current.contains(event.target)
      ) {
        setIsSidePanelOpen(false);
      }
    };

    if (isSidePanelOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidePanelOpen]);

  return (
    <>
      <div
        className="bg-header-pattern fixed z-10 h-40 w-full bg-secondary bg-cover bg-no-repeat"
        {...props}
      ></div>
      <div className="fixed top-0 z-40 flex h-16 w-full flex-row items-center justify-between  px-4 text-background">
        <img
          className="h-5 cursor-pointer"
          src="/logo.svg"
          onClick={() => router.push("/")}
        />
        <Icon.List
          size={32}
          onClick={toggleSidePanel}
          className="cursor-pointer"
        />
        <AnimatePresence>
          {isSidePanelOpen && (
            <NavSidePanel ref={sidePanelRef} closePanel={toggleSidePanel} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

interface NavSidePanelProps {
  closePanel: () => void;
}

const NavSidePanel = forwardRef<HTMLDivElement, NavSidePanelProps>(
  ({ closePanel }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        className="bg-primary-active fixed right-0 top-0 z-50 h-full w-64 bg-cover bg-no-repeat"
      >
        <div className="flex h-full flex-col items-center justify-start p-4">
          <div className="flex w-full flex-row justify-end align-middle">
            <Icon.List
              size={32}
              onClick={closePanel}
              className="cursor-pointer"
            />
          </div>
        </div>
      </motion.div>
    );
  },
);

NavSidePanel.displayName = "NavSidePanel";

export default NavigationBar;
