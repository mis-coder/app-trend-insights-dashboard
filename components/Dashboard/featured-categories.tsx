"use client";

import { ITopCategory } from "@/types";
import { useEffect, useState } from "react";

const FeaturedCategories = () => {
  const [categories, setCategories] = useState<ITopCategory[]>([]);

  const getTopCatgories = async () => {
    try {
      const res = await fetch("/api/apps/featured-categories", {
        method: "GET",
      });
      const { data } = await res.json();
      setCategories(data);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  useEffect(() => {
    getTopCatgories();
  }, []);

  return (
    <div className="h-auto my-auto w-full bg-white rounded-lg p-4 shadow-outline mt-4">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-xl font-bold text-green p-4">Top Categories</h1>
      </div>
        <div>
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="flex items-start justify-between mb-2 gap-2 pl-4"
            >
              <div className="flex gap-2  font-semibold">
                <p>{index + 1}.</p>
                <h3 className="text-ellipsis">{category.name}</h3>
              </div>
              <p className="pr-10 opacity-60 text-sm">
                {category.totalInstalls} installs
              </p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default FeaturedCategories;
