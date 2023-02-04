import CategoryHome from "../category/CategoryHome";
import horror from "../../data/Movies.json";
import Action from "../../data/Action.json";
import { NewMovies } from "../../data/NewMovies";
import Carousel from "../ads/Carasual";
import { Movies } from "../../data/movies";

const Homepage = () => {
  const datas = NewMovies;
  const horrors = [horror.titles];
  const actions = [Action.titles];

  return (
    <>
      <div className="min-h-[calc(100vh-50px)] relative">
        <Carousel />
        <div className="w-full  md:px-[70px] px-4 ">
          <CategoryHome data={datas} catName="Recent Update" />
        </div>
        <div className="w-full  md:px-[70px] px-4 ">
          <CategoryHome data={Movies} catName="Movies" />
        </div>
        <div className="w-full  md:px-[70px] px-4 ">
          <CategoryHome data={actions[0]} catName={"Drama"} />
        </div>
        <div className="w-full  md:px-[70px] px-4 ">
          <CategoryHome data={actions[0]} catName={"Anime"} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
