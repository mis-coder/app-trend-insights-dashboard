import { ChevronRightCircleIcon } from "lucide-react";

interface MenuBarMobileProps {
  show: boolean;
  setShow: (param: boolean) => void;
}

const MenuBarMobile: React.FC<MenuBarMobileProps> = ({ show, setShow }) => {
  return (
    <div className="fixed md:hidden lg:hidden bg-red h-16 w-screen flex items-center justify-start text-xl font-bold text-white uppercase p-5">
      <ChevronRightCircleIcon
        size="30"
        className="mr-4 animate-bounce-left cursor-pointer"
        onClick={() => setShow(true)}
      />

      <p className="text-white">App Trendz</p>
    </div>
  );
};

export default MenuBarMobile;
