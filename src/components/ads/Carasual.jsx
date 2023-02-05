import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AdsPortions from "./AdsPotions";
import { Adsbanner } from "../../data/FontRowBanner";
// import topBanner from "../img/topbanner.jpg";

const Carousel = () => {
  const data = Adsbanner;

  console.log(data);
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
          {data.map((elm) => (
            <div className="w-full  md:h-[450px] h-[350px] overflow-clip">
              <AdsPortions key={elm.id} movieDetails={elm} />
            </div>
          ))}
        </>
      </OwlCarousel>
      ;
    </>
  );
};

export default Carousel;
