import { formatBigNumber } from "@/lib/utils";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { rows } = await sql`
        SELECT id, name, reviews, rating from apps order by reviews desc limit 10 
        `;

    const formattedData = rows.map((row) => {
      return {
        ...row,
        reviews: formatBigNumber(row.reviews),
      };
    });
    return NextResponse.json({
      status: 200,
      message: "success",
      data: formattedData,
    });
  } catch (err) {
    console.log("[GET_FEATURED_APPS]: ", err);
  }
}
