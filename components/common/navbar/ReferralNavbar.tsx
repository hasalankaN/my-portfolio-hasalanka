import React from "react";

import Navbar, { type NavbarProps } from "./Navbar";

const ReferralNavbar: React.FC<NavbarProps> = (props) => {
  return <Navbar {...props} />;
};

export default ReferralNavbar;
