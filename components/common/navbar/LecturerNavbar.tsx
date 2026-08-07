import React from "react";

import Navbar, { type NavbarProps } from "./Navbar";

const LecturerNavbar: React.FC<NavbarProps> = (props) => {
  return <Navbar {...props} />;
};

export default LecturerNavbar;
