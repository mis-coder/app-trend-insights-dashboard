import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { rows } =
      await sql`SELECT category, COUNT(*) AS app_count FROM apps GROUP BY category`;

    return NextResponse.json({
      status: 200,
      message: "success",
      data: rows.map((row) => {
        return {
          app_count: Number(row.app_count),
          category: row.category
            .replace(/_/g, " ")
            .toLowerCase()
            .replace(/and/g, "&"),
        };
      }),
    });
  } catch (err) {
    console.log("[GET_MARKET_SHARE]: ", err);
    throw new NextResponse("Internal Server Error", { status: 500 });
  }
}
