import { Movies } from "./movies";
import { NetflexDrama } from "./netflixDrama";
import { NewMovies } from "./NewMovies";

// const AllMovies = useSelector((state)=>state.movies.movies)

export const MainCat = [
  {
    _id: crypto.randomUUID(),
    name: "Recent Updates",
    data: NewMovies,
  },
  {
    _id: crypto.randomUUID(),
    name: "Movies",
    data: Movies,
  },
  {
    _id: crypto.randomUUID(),
    name: "Netflix Drama",
    data: NetflexDrama,
  },
];
