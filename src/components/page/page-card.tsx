"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface Props extends React.PropsWithChildren {
  className?: string;
}

const PageCard: React.FC<Props> = ({ children, ...props }) => {
  return (
    <motion.div
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        type: "spring",
        duration: 0.6,
        bounce: 0.4,
      }}
      variants={{
        initialState: {
          x: "100vw",
        },
        animateState: {
          x: 0,
        },
        exitState: {
          x: "-100vw",
        },
      }}
      className={cn(
        `relative z-10 mx-auto mt-4 w-[90%] max-w-screen-md rounded bg-card p-4 drop-shadow-lg`,
        props.className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default PageCard;
