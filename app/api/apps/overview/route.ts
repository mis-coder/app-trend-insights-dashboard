import { formatBigNumber } from "@/lib/utils";
import { Overview } from "@/types";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    /**
     * 1. COUNT(*) AS total_app_count -- Calculate the total count of apps in the 'apps' table.
     
     * 2. SUM(CAST(REPLACE(REPLACE(installs, ',', ''), '+', '') AS INT))
     -- Calculate the total installs for all apps by cleaning the 'installs' column
     -- Remove commas and '+' signs, convert to INT, and sum the cleaned values.

     * 3. FLOOR(AVG(reviews)) AS average_reviews
     -- Calculate the average number of reviews for all apps and round down to the nearest integer.

     * 5. ROUND(AVG(CASE WHEN rating = 'NaN' THEN NULL
        ELSE CAST(rating AS DECIMAL(5, 2))
        END), 2) AS average_rating 
     -- Calculate the average rating for all apps, handling 'NaN' values by excluding them from the average.
     -- Round off the average rating to two decimal places.
     */

    const { rows } = await sql`
    SELECT COUNT(*) AS total_app_count,
    SUM(CAST(REPLACE(REPLACE(installs, ',', ''), '+', '') AS INT)) AS total_installs,
    FLOOR(AVG(reviews)) AS average_reviews,
    ROUND(AVG(CASE WHEN rating = 'NaN' THEN NULL
        ELSE CAST(rating AS DECIMAL(5, 2))
        END), 2) AS average_rating 
    FROM apps`;

    const { total_app_count, total_installs, average_rating, average_reviews } =
      rows[0] as Record<Overview, string>;
    const formatResponse = {
      total_app_count: formatBigNumber(Number(total_app_count)),
      total_installs: formatBigNumber(Number(total_installs)),
      average_reviews: formatBigNumber(Number(average_reviews)),
      average_rating: Number(average_rating),
    };

    return NextResponse.json(formatResponse);
  } catch (err) {
    console.log("[GET_OVERVIEW]: ", err);
    throw new NextResponse("Internal Server Error", { status: 500 });
  }
}
