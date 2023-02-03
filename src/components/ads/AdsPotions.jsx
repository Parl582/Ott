// import axios from "axios";

import { useNavigate } from "react-router-dom";

const AdsPortions = ({ movieDetails }) => {
  const navigate = useNavigate();
  const handlePlay = () => {
    navigate(`/watch/${movieDetails?.id}`, { state: movieDetails?.url });
  };


  return (
    <>
      <div className="w-full  md:h-[500px] h-[320px] overflow-clip">
        <div className="w-full h-full relative ">
          <img
            src={
              movieDetails?.banner !== undefined
                ? movieDetails?.banner
                : "https://6.vikiplatform.com/image/f4db244000c2470e9e1cdb608055007c.jpg?x=b&a=0x0"
            }
            alt=""
            className="w-full h-full object-cover "
          />
          <div className="absolute left-0 bottom-0 h-full w-[calc(100%-10%)] md:pl-[70px] pl-4 overlayer">
            <div className=" h-full pt-[5%] space-y-3 w-[70%] text-white">
              <h1 className="text-white font-normal md:text-[30px] text-[1.3rem] onlyLimitedLine">
                {movieDetails?.name !== undefined
                  ? movieDetails?.name
                  : "Movie Name"}
              </h1>
              <p className="text-white font-thin flex items-center space-x-2">
                <span className="px-3  bg-[#02161a] rounded-sm"> {movieDetails?.year} </span>
                <span>|</span>
                <span className="px-3  bg-[#021316] rounded-sm"> {movieDetails?.language} </span>
              </p>

              <div className="space-y-2 mb-9">
                <span>Main Cast</span>
                <div className="flex items-center space-x-3">
                  {movieDetails?.mainCast?.map((elm) => (
                    <div
                      className="w-[55px] rounded-sm h-[55px] overflow-hidden"
                      key={elm.id}
                    >
                      <img
                        src={elm.castImg}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex md:flex-none flex-wrap md:pt-7 pt-2 md:space-x-5 md:w-[100%] md:space-y-0 space-y-2">
                <button
                  className=" text-white flex items-center justify-center md:py-2 py-1 md:px-9 px-5 space-x-2 play_btn rounded-sm md:w-auto w-[100%]"
                  onClick={handlePlay}
                >
                  <span className="material-symbols-outlined">play_circle</span>
                  <span className="font-semibold md:text-[1.2rem]">
                    Watch Now
                  </span>
                </button>
                <button className=" text-white flex items-center justify-center py-2 px-9 space-x-2 border-2 border-[#222a22] rounded-sm  md:w-auto w-[100%]">
                  <span className="material-symbols-outlined">add</span>
                  <span className="font-thin md:text-[1.2rem]">
                    Add to Favorite
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdsPortions;
