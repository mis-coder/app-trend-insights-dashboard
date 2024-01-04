import { formatBigNumber } from "@/lib/utils";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { rows } = await sql`SELECT category,
      SUM(CAST(REPLACE(REPLACE(installs, ',', ''), '+', '') AS INT)) AS total_installs
      FROM apps GROUP BY category limit 5`;

    return NextResponse.json({
      status: 200,
      message: "success",
      data: rows.map((row) => {
        return {
          totalInstalls: formatBigNumber(row.total_installs),
          name: row.category.replace(/_/g, " ").replace(/and/g, "&"),
        };
      }),
    });
  } catch (err) {
    console.log("[GET_MARKET_SHARE]: ", err);
  }
}
