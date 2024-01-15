"use client";

import { useState } from "react";
import MenuBarMobile from "../UI/menu-bar-mobile";
import MobileSidebar from "../UI/mobile-sidebar";
import OutsideClickDetector from "../Wrapper/outside-click-detector";

const ResponsiveSidebar = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="md:hidden lg:hidden">
      <MenuBarMobile show={show} setShow={setShow} />
      {show && (
        <OutsideClickDetector onOutsideClick={() => setShow(false)}>
          <MobileSidebar show={show} setShow={setShow} />
        </OutsideClickDetector>
      )}
    </div>
  );
};

export default ResponsiveSidebar;
