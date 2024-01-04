import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  try {
    const result = await sql`SELECT * from apps`;
    return NextResponse.json(result);
  } catch (err) {
    console.log("[GET_APPS]: ", err);
    throw new NextResponse("Internal Server Error", { status: 500 });
  }
}
