import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  try {
    const file = await fs.readFile(
      process.cwd() + "/data/appInfo.json",
      "utf-8"
    );
    const data = JSON.parse(file);

    return NextResponse.json(data);
  } catch (err) {
    console.log("[GET_APPS]: ", err);
    throw new NextResponse("Internal Server Error", { status: 500 });
  }
}
