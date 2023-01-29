import React, { useRef } from "react";
import Movies from "../singleMovie/Movies";

const CategoryHome = ({ data }) => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };


  return (
    <>
      <div className="w-full text-white  relative cat_scroll_hide">
        {/* categoryName */}
        <span className="flex items-center space-x-1">
          <h2 className="font-bold text-[1.8rem] rounded-sm ">You Watch</h2>
          <span className="material-symbols-outlined mt-1 font-bold">
            chevron_right
          </span>
        </span>
        <div
          className="flex items-center overflow-x-auto overflow-y-hidden  "
          ref={ref}
        >
          {data.map((elm) => (
            <Movies elm={elm} key={elm.summary.id} />
          ))}
        </div>
        <div className="absolute flex justify-between w-[100%] center_absolute">
          <button
            onClick={() => scroll(-500)}
            className="w-[50px] h-[50px] rounded-full bg-transparent border-2 flex items-center justify-center"
          >
            <span class="material-symbols-outlined text-[40px]">
              arrow_left
            </span>
          </button>
          <button
            onClick={() => scroll(500)}
            className="w-[50px] h-[50px] rounded-full bg-transparent border-2 flex items-center justify-center "
          >
            <span class="material-symbols-outlined text-[40px]">
              arrow_right
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryHome;
