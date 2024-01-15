import { sidebarItems } from "@/config/ui";

const MobileSidebar = () => {
  return (
    <div className="fixed top-16 left-0 w-1/3 h-full flex-col items-start justify-center pt-4 pl-8 bg-red">
      <div className="flex flex-col justify-center h-full">
        {sidebarItems.map((item) =>
          item.id === "askTrendzAi" ? (
            <div
              key={item.id}
              className="flex items-center gap-2 py-4 text-md text-yellow font-bold mt-20 cursor-pointer hover:opacity-50 transition-opacity duration-500"
            >
              {<item.icon size="20" strokeWidth="3" />}
              <p className="">{item.title}</p>
            </div>
          ) : (
            <div
              key={item.id}
              className="flex items-center gap-2 py-5 text-sm font-bold text-white  cursor-pointer hover:opacity-50 transition-opacity duration-500"
            >
              {<item.icon size="16" />}
              <p className="">{item.title}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MobileSidebar;
