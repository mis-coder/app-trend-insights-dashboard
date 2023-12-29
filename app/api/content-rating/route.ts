import { AppInfoItem, CategoryNumberMap } from "@/types";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const file = await fs.readFile(
      process.cwd() + "/data/appInfo.json",
      "utf8"
    );
    const data: AppInfoItem[] = JSON.parse(file);
    const ratingMap: CategoryNumberMap = {};

    data.forEach((item) => {
      const contentRating = item.contentRating;
      const reviews = isNaN(Number(item.reviews)) ? 0 : Number(item.reviews);

      ratingMap[contentRating] =
        ratingMap[contentRating] !== undefined
          ? ratingMap[contentRating] + reviews
          : 0;
    });

    return NextResponse.json(ratingMap);
  } catch (err) {
    console.log("[GET_CONTENT_RATING]: ", err);
    throw new NextResponse("Internal Server Error", { status: 500 });
  }
}
