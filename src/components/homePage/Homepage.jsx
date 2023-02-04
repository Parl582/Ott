import CategoryHome from "../category/CategoryHome";
import Carousel from "../ads/Carasual";
import { MainCat } from "../../data/mainPageCatefory";

const Homepage = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-50px)] relative">
        <Carousel />
        {MainCat.map((elm) => (
          <div className="w-full  md:px-[70px] px-4 ">
            <CategoryHome data={elm?.data} catName={elm.name} key={elm.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
