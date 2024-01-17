import { sidebarItems } from "@/config/ui";
import { ChevronLeftCircleIcon } from "lucide-react";

interface MobileSidebarProps {
  show: boolean;
  setShow: (param: boolean) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ show, setShow }) => {
  return (
    <div
      className={`fixed top-0 w-2/3 h-full flex-col  justify-center pt-20 pl-20 bg-red shadow-2xl animate-enter-from-left`}
    >
      <ChevronLeftCircleIcon
        size="27"
        className="absolute top-8 right-4 mr-4 cursor-pointer text-white"
        onClick={() => setShow(false)}
      />
      <div className="flex flex-col h-full pt-24">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 py-5 text-md font-bold text-white  cursor-pointer hover:opacity-50 transition-opacity duration-500"
          >
            {<item.icon size="20" />}
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileSidebar;
