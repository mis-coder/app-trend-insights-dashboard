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
