import { Platform } from "./Platform";
import Genre from "./Genre";
import { Publishers } from "./Publishers";

// export interface Screenshot {
//   id: number;
//   image: string;
// }
export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publishers[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  // short_screenshots : Screenshot [];
}
