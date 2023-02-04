import { Movies } from "./movies";
import { NetflexDrama } from "./netflixDrama";
import { NewMovies } from "./NewMovies";

export const MainCat = [
  {
    id: crypto.randomUUID(),
    name: "Recent Updates",
    data: NewMovies,
  },
  {
    id: crypto.randomUUID(),
    name: "Movies",
    data: Movies,
  },
  {
    id: crypto.randomUUID(),
    name: "Netflix Drama",
    data: NetflexDrama,
  },
];
