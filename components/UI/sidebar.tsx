import { sidebarItems } from "@/config/ui";

const Sidebar = () => {
  return (
    <div className="hidden w-1/3 h-full md:flex lg:flex flex-col items-start justify-center pt-4 pl-8 bg-red">
      <h1 className="text-xl text-white font-extrabold mt-8 underline">
        APP TRENDZ
      </h1>
      <div className="flex flex-col h-full pt-24">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 py-5 text-sm font-bold text-white  cursor-pointer hover:opacity-50 transition-opacity duration-500"
          >
            {<item.icon size="16" />}
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
