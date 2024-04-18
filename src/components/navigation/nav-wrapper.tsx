import React from "react";

interface Props {
  children: React.ReactNode;
}

const NavWrapper: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default NavWrapper;
