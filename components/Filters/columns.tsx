"use client";

import { AppInfoItem } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const filtersTableColumns: ColumnDef<AppInfoItem>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "reviews",
    header: "Reviews",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "installs",
    header: "Installs",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: (info) => info.getValue(),
  },
];
