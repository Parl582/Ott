import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";

const ViewAllMovies = ({ allMovies, location }) => {
  const navigate = useNavigate();

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

  const ViewDetails = (elm) => {
    if (elm.id) {
      navigate(`/details/${elm.id}`, { state: elm });
    }
  };
  const searchData = useSelector((state) => state.search.search);

  return (
    <>
      <div className="w-full  flex items-center justify-center md:py-5 py-3">
        <div className=" md:w-[90%] w-[95%] min-h-[90vh]">
          <h1 className="text-[white] font-medium md:text-[1.4rem] text-[1rem] md:px-2 px-1">
            {location?.state?.catName}
          </h1>
          <div className="flex flex-wrap w-full">
            {allMovies.filter((item)=>item.name.toLowerCase().includes(searchData.toLowerCase().trim())).map((elm) => (
              <div
                className="lg:w-1/6 md:w-1/5 w-1/4 lg:h-[280px] md:h-[250px] h-[180px]  p-2 md:px-2 px-1 cursor-pointer"
                key={elm.id}
              >
                <div
                  className="w-full h-full border-[1px]  border-[#ccc]  bg-[black]  movie_hover"
                  title={elm.name}
                >
                  <div className="w-full  lg:h-[200px] md:h-[230px] h-[130px] overflow-hidden relative ">
                    <img
                      onClick={() => ViewDetails(elm)}
                      src={elm.image}
                      loading="lazy"
                      alt=""
                      className="w-full h-full object-cover "
                    />

                    {/* <div className="absolute bottom-0 text-[white] flex w-full justify-end flex-col overlayer_movie_details h-full hover_show_details">
                      <div className="flex w-full justify-between p-5 ">
                        <button
                          className=" text-white flex items-center  py-1 px-4 space-x-1 play_btn rounded-sm md:w-auto w-full justify-center "
                          // onClick={handlePlay}
                          onClick={() => ViewDetails(elm)}
                        >
                          <span className="material-symbols-outlined">
                            play_circle
                          </span>
                          <span className=" text-[0.8rem]">Watch</span>
                        </button>
                        <button
                          className=" text-white flex items-center   px-4 space-x-1 border-2 md:py-[2px] border-[#b0b0b0]  rounded-sm  md:w-auto w-full justify-center"
                          // onClick={handleList}
                        >
                          <span className="material-symbols-outlined">add</span>
                          <span className="font-thin text-[0.8rem]">
                            Favorite
                          </span>
                        </button>
                      </div>
                    </div> */}
                  </div>
                  <p className="onlyLimitedLine md:text-[1rem] text-[12px]  text-white md:text-center md:px-2 px-1">
                    {elm.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAllMovies;
