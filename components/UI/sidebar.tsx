import { sidebarItems } from "@/config/ui";
import { ChevronLeftCircle } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-silver-light overflow-y-auto h-screen w-56 fixed top-16 left-0 md:w-1/4 lg:w-1/4">
      <ChevronLeftCircle size="26" color="#000" />
      <div>
        {sidebarItems.map((item) => (
          <div key={item.id}>
            {<item.icon className=""/>}
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
