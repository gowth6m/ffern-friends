import React from "react";
import Footer from "./footer";
import Toaster from "../ui/toaster";
import NavigationBar from "./navigation-bar";

// ------------------------------------------------------------

const PageWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Toaster />
      <div className="flex min-h-screen flex-col justify-between overflow-x-hidden">
        <NavigationBar />
        <div className="mt-16">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default PageWrapper;
