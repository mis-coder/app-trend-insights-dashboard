import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  try {
    const { rows } = await sql`SELECT * from apps`;
    return NextResponse.json(rows);
  } catch (err) {
    console.log("[GET_APPS]: ", err);
    throw new NextResponse("Internal Server Error", { status: 500 });
  }
}
