import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  try {
    const { rows } = await sql`SELECT * from apps`;
    const formattedRows = rows.map((row) => ({
      ...row,
      category: row.category.replace(/_/g, " ").replace(/and/g, "&"),
    }));
    return NextResponse.json(formattedRows);
  } catch (err) {
    console.log("[GET_APPS]: ", err);
    throw new NextResponse("Internal Server Error", { status: 500 });
  }
}
