import { sidebarItems } from "@/config/ui";
import { ChevronLeftCircleIcon } from "lucide-react";

interface MobileSidebarProps {
  show: boolean;
  setShow: (param: boolean) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ show, setShow }) => {
  return (
    <div
      className={`fixed top-0 w-1/2 h-full flex-col items-start justify-center pt-20 pl-8 bg-red shadow-2xl animate-enter-from-left`}
    >
      <ChevronLeftCircleIcon
        size="27"
        className="absolute top-8 right-4 mr-4 cursor-pointer text-white"
        onClick={() => setShow(false)}
      />
      <div className="flex flex-col justify-center h-full">
        {sidebarItems.map((item) =>
          item.id === "askTrendzAi" ? (
            <div
              key={item.id}
              className="flex items-center gap-2 py-4 text-md text-yellow font-bold mt-auto cursor-pointer hover:opacity-50 transition-opacity duration-500"
            >
              {<item.icon size="20" strokeWidth="3" />}
              <p>{item.title}</p>
            </div>
          ) : (
            <div
              key={item.id}
              className="flex items-center gap-2 py-5 text-sm font-bold text-white  cursor-pointer hover:opacity-50 transition-opacity duration-500"
            >
              {<item.icon size="16" />}
              <p>{item.title}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MobileSidebar;
