import { AppInfoItem, CategoryNumberMap } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const file = await fs.readFile(
      process.cwd() + "/data/appInfo.json",
      "utf-8"
    );
    const data: AppInfoItem[] = JSON.parse(file);
    const categoryMap: CategoryNumberMap = {};

    data.forEach((currentItem) => {
      const { category, installs } = currentItem;

      const cleanNumber = installs.split("+")[0];
      const numOfInstalls = parseFloat(cleanNumber.replace(/,/g, ""));

      categoryMap[category] = (categoryMap[category] || 0) + numOfInstalls;
    });
    console.log(categoryMap);
    return NextResponse.json(categoryMap);
  } catch (err) {
    console.log("[GET_MARKET_SHARE_BY_CATEGORY]:", err);
    throw new NextResponse("Internal Server Error", { status: 500 });
  }
}
