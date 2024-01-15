"use client";

import { useState } from "react";
import MenuBarMobile from "../UI/menu-bar-mobile";
import MobileSidebar from "../UI/mobile-sidebar";

const ResponsiveSidebar = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="md:hidden lg:hidden">
      <MenuBarMobile show={show} setShow={setShow} />
      {show && <MobileSidebar show={show} setShow={setShow} />}
    </div>
  );
};

export default ResponsiveSidebar;
