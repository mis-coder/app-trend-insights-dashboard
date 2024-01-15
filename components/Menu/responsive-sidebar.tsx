import MenuBarMobile from "../UI/menu-bar-mobile";
import MobileSidebar from "../UI/mobile-sidebar";

const ResponsiveSidebar = () => {
  return (
    <div className="md:hidden lg:hidden">
      <MenuBarMobile />
      <MobileSidebar />
    </div>
  );
};

export default ResponsiveSidebar;
