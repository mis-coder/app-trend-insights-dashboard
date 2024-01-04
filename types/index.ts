export interface AppInfoItem {
  name: string;
  category: string;
  rating: number;
  reviews: number;
  size: string;
  installs: string;
  type: "Free" | "Paid";
  price: number;
  contentRating: string;
  genres: string;
  lastUpdated: string;
  currentVer: string;
  androidVer: string;
}

export type CategoryNumberMap = Record<string, number>;

export enum Overview {
  TOTAL_APP_COUNT = "total_app_count",
  TOTAL_INSTALLS = "total_installs",
  AVERAGE_REVIEW = "average_reviews",
  AVERAGE_RATING = "average_rating",
}

export interface IFeaturedApp {
  id: string;
  name: string;
  rating: number;
  reviews: number;
}
