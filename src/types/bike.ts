export type BikeCategory =
  | "전체"
  | "스쿠터"
  | "네이키드"
  | "스포츠"
  | "투어러"
  | "클래식";

export type BikeSpec = {
  label: string;
  value: string;
};

export type Bike = {
  id: string;
  name: string;
  year: number;
  category: Exclude<BikeCategory, "전체">;
  price: number;
  listedAt: string;
  image: string;
  gallery: string[];
  views: number;
  location: string;
  status: string;
  description: string[];
  specs: BikeSpec[];
};
