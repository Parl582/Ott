import { useNavigate } from "react-router-dom";

const Movies = ({ elm }) => {


  const navigate = useNavigate();
  const ViewDetails = () => {
    if (elm._id) {
      navigate(`/details/${elm._id}`, { state: elm });
    }
  };
  const handlePlay = () => {
    if (elm._id) {
      if (elm.sessions) {
        navigate(`/details/${elm._id}`, { state: elm });
      } else {
        navigate(`/watch/${elm._id}`, { state: elm.url });
      }
    }
  };
  const handleList = () => {};

  return (
    <>
      <div className="md:min-w-[220px] md:w-[220px] w-[160px]  min-w-[160px]  movies_card   relative cursor-pointer overflow-hidden md:rounded-sm md:px-2 px-1 py-3 ">
        <div className="movie_hover relative ">
          <img
            title={elm.name}
            loading="lazy"
            onClick={() => ViewDetails()}
            src={elm?.image}
            alt=""
            className="w-full md:h-[300px] h-[210px] object-cover object "
          />
          <div className="absolute flex items-center justify-end flex-col pb-3 w-full md:h-[50%] h-[70%] bottom-0  hover_show_details  overlayer_movie_details">
            <p className="flex  px-6 items-center text-[#f8ea9b] space-x-1">
              <span className="material-symbols-outlined">star_half</span>
              <span className="font-medium text-[1.5rem]">{elm.rating}</span>
              <span className="font-medium text-[0.9rem] text-white mt-1">
                (IMdb)
              </span>
            </p>
            <div className="flex items-center flex-col justify-center w-full px-4 space-y-2">
              <button
                className=" text-white flex items-center  py-1 space-x-1 play_btn  w-full justify-center"
                onClick={handlePlay}
              >
                <span className="material-symbols-outlined">play_circle</span>
                <span className=" text-[0.8rem]">Watch</span>
              </button>
              <button
                className=" text-white flex items-center   space-x-1 border-[1px] md:py-[2px] border-[#b0b0b0]  w-full justify-center"
                onClick={handleList}
              >
                <span className="material-symbols-outlined">add</span>
                <span className="font-thin text-[0.8rem]">Favorite</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-3 items-center md:px-2 px-1 w-full">
          {/* <p className="font-normal text-[1.3rem]">{elm?.jawSummary?.title} </p> */}
          <h1
            className="font-normal md:text-[1.1rem] text-[13px] w-full truncate"
            title={elm.name}
          >
            {elm.name}{" "}
          </h1>
          <span className="text-[#a2a2a2] text-[0.8rem]">Free</span>
        </div>
      </div>
    </>
  );
};

export default Movies;
