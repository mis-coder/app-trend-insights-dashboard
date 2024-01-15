import { ChevronRightCircleIcon } from "lucide-react";

const MenuBarMobile = () => {
  return (
    <div className="fixed md:hidden lg:hidden bg-red h-16 w-screen flex items-center justify-start text-xl font-bold text-white uppercase pl-4">
      <ChevronRightCircleIcon
        size="30"
        className="mr-4 animate-bounce-left cursor-pointer"
      />
      <p className="text-white">App Trendz</p>
    </div>
  );
};

export default MenuBarMobile;
