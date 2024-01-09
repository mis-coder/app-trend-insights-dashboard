"use client";

import { sidebarItems } from "@/config/ui";
import { ChevronLeftCircle } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative bg-orange overflow-y-hidden h-screen top-0 left-0 md:w-24 lg:w-24">
      <ChevronLeftCircle
        className="absolute top-5 right-2 text-white cursor-pointer hover:right-3 transition-all duration-100"
        size="26"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen ? (
        <div className="h-full w-full md:w-1/6 lg:1/6 flex flex-col items-start justify-center -mt-20 gap-6 pl-4">
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-2 text-white items-center cursor-pointer hover:text-yellow font-bold"
            >
              {<item.icon size="18" />}
              <p className="text-md">{item.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Sidebar;
