import { useNavigate } from "react-router-dom";

const Movies = ({ elm }) => {
  const navigate = useNavigate();
  const ViewDetails = () => {
    if (elm.id) {
      navigate(`/details/${elm.id}`, { state: elm });
    }
  };
  const handlePlay = () => {
    if (elm.id) {
      navigate(`/watch/${elm.id}`, { state: elm.url });
    }
  };
  const handleList = () => {};

  return (
    <>
      <div className="md:min-w-[310px] md:w-[310px] w-[210px]  min-w-[210px]  movies_card   relative cursor-pointer overflow-hidden rounded-sm p-2 py-3 ">
        <div className="movie_hover relative ">
          <img
            title={elm.name}
            loading="lazy"
            onClick={() => ViewDetails()}
            src={elm?.image}
            alt=""
            className="w-full md:h-[200px] h-[210px] object-cover object rounded-sm "
          />
          <div className="absolute w-full md:h-[50%] h-[70%] bottom-0  hover_show_details  overlayer_movie_details">
            <p className="flex  px-6 items-center text-[#f8ea9b] space-x-1">
              <span className="material-symbols-outlined">star_half</span>
              <span className="font-medium text-[1.5rem]">{elm.rating}</span>
              <span className="font-medium text-[0.9rem] text-white mt-1">
                (IMdb)
              </span>
            </p>
            <div className="flex items-center justify-between px-6 md:flex-none flex-wrap md:space-y-0 space-y-1">
              <button
                className=" text-white flex items-center  py-1 px-4 space-x-1 play_btn rounded-sm md:w-auto w-full justify-center"
                onClick={handlePlay}
              >
                <span className="material-symbols-outlined">play_circle</span>
                <span className=" text-[0.8rem]">Watch</span>
              </button>
              <button
                className=" text-white flex items-center   px-4 space-x-1 border-2 md:py-[2px] border-[#b0b0b0]  rounded-sm  md:w-auto w-full justify-center"
                onClick={handleList}
              >
                <span className="material-symbols-outlined">add</span>
                <span className="font-thin text-[0.8rem]">Favorite</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-3 items-center px-2 w-full">
          {/* <p className="font-normal text-[1.3rem]">{elm?.jawSummary?.title} </p> */}
          <p
            className="font-normal text-[1.3rem] w-full truncate"
            title={elm.name}
          >
            {elm.name}{" "}
          </p>
          <span className="text-[#a2a2a2] text-[0.9rem]">Free</span>
        </div>
      </div>
    </>
  );
};

export default Movies;
