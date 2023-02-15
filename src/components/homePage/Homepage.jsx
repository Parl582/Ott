import CategoryHome from "../category/CategoryHome";
import Carousel from "../ads/Carasual";
import { MainCat } from "../../data/mainPageCatefory";
import { useSelector } from "react-redux";

const Homepage = () => {
  let Movies = useSelector((state) => state.movies.movies);

  return (
    <>
      <div className="min-h-[calc(100vh-50px)] relative">
        <Carousel />
        {MainCat.map((elm) => (
          <div className="w-full  md:px-[70px] px-4 "  key={elm._id}>
            <CategoryHome
              catName={elm.name}
             
              data={elm.name === "Movies" ? Movies : elm.data}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
