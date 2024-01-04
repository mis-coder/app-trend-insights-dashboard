"use client";

import { IFeaturedApp } from "@/types";
import { useEffect, useState } from "react";

const FeaturedApps = () => {
  const [apps, setApps] = useState<IFeaturedApp[]>([]);

  const getFeaturedApps = async () => {
    try {
      const res = await fetch("/api/apps/featured", {
        method: "GET",
      });
      const { data } = await res.json();
      setApps(data);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  useEffect(() => {
    getFeaturedApps();
  }, []);

  return (
    <div className="h-auto w-full bg-white rounded-lg p-4 pb-8 shadow-outline mt-4">
      <h1 className="text-lg font-bold text-green p-4">Top Featured Apps</h1>
      <div className="flex flex-col">
        <div className="opacity-60 flex w-full justify-end px-8">
            <p>Ratings</p>
        </div>
        <div className="pt-4">
        {apps.map((app, index) => (
          <div className="flex items-start justify-between mb-4 gap-2">
            <div className="flex gap-2">
            <p className="pl-2">{index + 1}.</p>
             <div>
             <h3 key={app.id} className="text-ellipsis">{app.name}</h3>
              <p className="text-sm text-silver">{app.reviews} reviews</p>
             </div>
            </div>
            <p className="pr-10">{app.rating}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedApps;
