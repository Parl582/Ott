import React from "react";

const AdsPortions = () => {
  return (
    <>
      <div className="w-full  md:h-[500px] h-[320px] ">
        <div className="w-full h-full relative ">
          <img
            src="https://6.vikiplatform.com/image/f4db244000c2470e9e1cdb608055007c.jpg?x=b&a=0x0"
            alt=""
            className="w-full h-full object-cover "
          />
          <div className="absolute left-0 bottom-0 h-full w-[calc(100%-10%)] md:pl-[70px] pl-4 overlayer">
            <div className=" h-full pt-[5%] space-y-3 w-[70%] text-white">
              <h1 className="text-white font-normal md:text-[30px] text-[1.3rem]">
                Movie Name
              </h1>
              <p className="text-white font-thin flex items-center space-x-2">
                <span className="px-3  bg-[#02161a] rounded-sm">Action </span>
                <span>|</span>
                <span className="px-3  bg-[#021316] rounded-sm">Assamese </span>
              </p>

              <div className="space-y-2 mb-9">
                <span>Main Cast</span>
                <div className="flex items-center space-x-3">
                  <div className="w-[55px] rounded-sm h-[55px] overflow-hidden">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2sbDxujtVTf-LeLOkhfXT-bwSyRwxTpKoQMuPOrutKEZMe9GNoTHCebYFd0NDAdw9m0&usqp=CAU"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[55px] rounded-sm h-[55px] overflow-hidden">
                    <img
                      src="https://i0.wp.com/www.techbmc.com/wp-content/uploads/2019/02/RemoveBG-removeimagepicturebackground.png?ssl=1"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[55px] rounded-sm h-[55px] overflow-hidden">
                    <img
                      src="https://assets.zoom.us/images/en-us/desktop/generic/virtual-background-green-screen-example.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-none flex-wrap pt-7 md:space-x-5 md:w-[100%] md:space-y-0 space-y-2">
                <button className=" text-white flex items-center justify-center md:py-2 py-1 md:px-9 px-5 space-x-2 play_btn rounded-sm md:w-auto w-[100%]">
                  <span className="material-symbols-outlined">play_circle</span>
                  <span className="font-semibold md:text-[1.2rem]">Watch Now</span>
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
