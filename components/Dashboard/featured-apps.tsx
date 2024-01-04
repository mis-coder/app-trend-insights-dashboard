"use client";

import { IFeaturedApp } from "@/types";
import { useEffect, useState } from "react";

const FeaturedApps = () => {
  const [apps, setApps] = useState<IFeaturedApp[]>([]);

  const getFeaturedApps = async () => {
    try {
      const res = await fetch("/api/apps/featured-apps", {
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
    <div className="h-auto my-auto w-full md:w-1/3 lg:w-1/3 bg-white rounded-lg p-4 pb-8 shadow-outline mt-4">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-xl font-bold text-green p-4">Featured Apps</h1>
        <p className="opacity-60  pr-8 text-md">Rating</p>
      </div>
        <div className="pt-4">
          {apps.map((app, index) => (
            <div
              key={app.id}
              className="flex items-start justify-between mb-2 gap-2 pl-4"
            >
              <div className="flex gap-2  font-semibold">
                <p>{index + 1}.</p>
                <div>
                  <h3 className="text-ellipsis">{app.name}</h3>
                  <p className="text-sm text-silver">{app.reviews} reviews</p>
                </div>
              </div>
              <p className="pr-10 opacity-60 text-sm">{app.rating}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default FeaturedApps;
