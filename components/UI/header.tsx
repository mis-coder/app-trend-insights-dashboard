import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-red h-16 w-screen flex items-center justify-start text-xl font-bold text-white uppercase pl-4">
      <Menu className="mr-6" size="28"/>
      App Trendz
    </div>
  );
};

export default Header;
