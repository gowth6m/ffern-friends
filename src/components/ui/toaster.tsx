import React from "react";
import { Toaster as DefaultToaster, ToasterProps } from "react-hot-toast";

// ------------------------------------------------------------

interface Props extends ToasterProps {}

const Toaster: React.FC<Props> = ({ ...props }) => {
  return (
    <DefaultToaster
      toastOptions={{
        style: {
          width: "360px",
        },
        success: {
          style: {
            background: "#4CAF50",
            color: "white",
          },
        },
        error: {
          style: {
            background: "#C33C54",
            color: "white",
          },
        },
      }}
      position="top-left"
      {...props}
    />
  );
};

export default Toaster;
