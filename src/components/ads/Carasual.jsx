import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AdsPortions from "./AdsPotions";
import { Adsbanner } from "../../data/FontRowBanner";
import { useSelector } from "react-redux";

const Carousel = () => {
  const data = useSelector((state) => state.movies.movies);
  let nNo = Math.floor(Math.random() * 10);
  let nNo1 = Math.floor(Math.random() * 10);

  return (
    <>
      <OwlCarousel
        className=' class="owl-carousel owl-theme'
        items={1}
        autoplay={true}
        nav={false}
        dots={false}
        autoplayTimeout={5000}
        loop={true}
      >
        <>
          {data ? (
            <>
              <div className="w-full  md:h-[450px] h-[350px] overflow-clip">
                <AdsPortions movieDetails={data[nNo]} />
              </div>
              <div className="w-full  md:h-[450px] h-[350px] overflow-clip">
                <AdsPortions movieDetails={data[nNo1]} />
              </div>
            </>
          ) : (
            <div className="w-[104%]  md:h-[450px] h-[350px] overflow-clip">
              <AdsPortions movieDetails={Adsbanner[0]} />
            </div>
          )}
        </>
      </OwlCarousel>
      ;
    </>
  );
};

export default Carousel;
