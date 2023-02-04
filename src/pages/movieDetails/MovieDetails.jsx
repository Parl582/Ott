import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AdsPortions from "../../components/ads/AdsPotions";
import LabTabs from "./Tabs";

const MovieDetails = () => {
  let location = useLocation();

  const details = location.state;
  useEffect(() => {
    const ScrollTo = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
    ScrollTo();
  }, []);

  return (
    <>
      <div className="w-fill h-[calc-(100vh-80px)]">
        <AdsPortions movieDetails={details} />
        <div className="w-full md:min-h-[calc(100vh-500px)] min-h-[calc(100vh-320px)] bg-[black] py-4 flex justify-center">
          <div className="md:w-[70%] w-[95%] text-white ">
            <LabTabs movieDetails={details} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
