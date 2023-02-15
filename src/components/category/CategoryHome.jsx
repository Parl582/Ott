import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Movies from "../singleMovie/Movies";

const CategoryHome = ({ data,catName }) => {
  const navigate = useNavigate();
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };





  const alldata = {
    data,
    catName,
  };

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
      <div className="w-full text-white  relative cat_scroll_hide py-1">
        {/* categoryName */}
        <div className="flex justify-between items-center">
          <span className="flex items-center space-x-1">
            <h2 className="font-bold md:text-[1.3rem] text-[1rem] rounded-sm md:px-2 px-1  ">
              {catName}
            </h2>
            <span className="material-symbols-outlined mt-1 font-bold">
              chevron_right
            </span>
          </span>
          <span
            className="cursor-pointer flex items-center space-x-1"
            type="button"
            onClick={() => navigate(`/view-all/${catName}`, { state: alldata })}
          >
            <h2>View All</h2>
            <span className="material-symbols-outlined">expand_more</span>
          </span>
        </div>
        <div
          className="flex items-center overflow-x-auto overflow-y-hidden  "
          ref={ref}
        >
          {data?.map((elm) => (
            <Movies elm={elm} key={elm._id} />
          ))}
        </div>
        <div className="absolute  justify-between w-[100%] center_absolute md:flex hidden">
          <button
            onClick={() => scroll(-500)}
            className="w-[50px] h-[50px] rounded-full bg-transparent border-[1px] border-[#ccc] flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[40px]">
              arrow_left
            </span>
          </button>
          <button
            onClick={() => scroll(500)}
            className="w-[50px] h-[50px] rounded-full bg-transparent border-[1px] border-[#ccc] flex items-center justify-center "
          >
            <span className="material-symbols-outlined text-[40px]">
              arrow_right
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryHome;
