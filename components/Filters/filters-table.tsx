"use client";

import { AppInfoItem } from "@/types";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { filtersTableColumns } from "./columns";

const FiltersTable = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<AppInfoItem[]>([]);

  const getData = async () => {
    try {
      const res = await fetch("/api/apps", {
        method: "GET",
      });
      const appsData = await res.json();
      setData(appsData);
    } catch (error) {
      console.log("err: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns: filtersTableColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log("getRowModel(): ", getRowModel());
  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <table>
          <thead>
            {getHeaderGroups().map((group) => (
              <tr key={group.id}>
                {group.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FiltersTable;
