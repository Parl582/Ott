import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ViewAllMovies = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const allMovies = location?.state?.data;
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

  return (
    <>
      <div className="w-full  flex items-center justify-center md:py-5 py-3">
        <div className=" md:w-[80%] w-[90%] min-h-[90vh]">
          <h1 className="text-[white] font-medium text-[2rem]">
            {location?.state?.catName}
          </h1>
          <div className="flex flex-wrap w-full">
            {allMovies.map((elm) => (
              <div
                className="lg:w-1/4 md:w-1/3 w-1/2 lg:h-[390px] md:h-[300px] h-[320px]  p-2 px-3 cursor-pointer"
                key={elm.id}
              >
                <div
                  className="w-full h-full border-[1px] rounded-sm bg-[black]  movie_hover"
                  title={elm.name}
                >
                  <div className="w-full  lg:h-[320px] md:h-[230px] h-[250px] overflow-hidden relative ">
                    <img
                      onClick={() => ViewDetails(elm)}
                      src={elm.image}
                      loading="lazy"
                      alt=""
                      className="w-full h-full object-cover "
                    />

                    <div className="absolute bottom-0 text-[white] flex w-full justify-end flex-col overlayer_movie_details h-full hover_show_details">
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
                    </div>
                  </div>
                  <p className="onlyLimitedLine text-[1rem] text-white text-center px-2">
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
