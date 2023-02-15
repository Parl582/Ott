import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../BASEurl";

const AddMovies = () => {
  const [castImg, setCastImg] = useState({});

  const [userInfo, setUserInfo] = useState({});

  const HandleTake = (e) => {
    const value = e.target.value;
    setUserInfo({ ...userInfo, [e.target.name]: value });
  };
  const CastImg = (e) => {
    const value = e.target.value;
    setCastImg({ ...castImg, [e.target.name]: value });
  };

  //   console.log(userInfo);

  let data = {
    ...userInfo,
    mainCast: [
      {
        castImg: userInfo.castImg1,
      },
      {
        castImg: userInfo.castImg2,
      },
      {
        castImg: userInfo.castImg3,
      },
    ],
  };

  const PostMovies = async () => {
    try {
      let res = await axios.get("https://ott-backend-silk.vercel.app/api/movies");
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="w-full p-5 flex items-center justify-center">
        <div className="flex flex-col md:w-[60%] w-[95%]">
          <div className="w-full">
            <p className="text-[#fff] font-medium">Name</p>
            <input
              type="text"
              name="name"
              className="p-x-3 py-2 border-2 w-full"
              onChange={HandleTake}
            />
          </div>
          <div className="w-full">
            <p className="text-[#fff] font-medium">Year</p>
            <input
              type="text"
              name="year"
              onChange={HandleTake}
              className="p-x-3 py-2 border-2 w-full"
            />
          </div>
          <div className="w-full">
            <p className="text-[#fff] font-medium">Genres</p>
            <input
              type="text"
              name="Genres"
              onChange={HandleTake}
              className="p-x-3 py-2 border-2 w-full"
            />
          </div>
          <div className="w-full">
            <p className="text-[#fff] font-medium">Rating</p>
            <input
              type="text"
              name="rating"
              onChange={HandleTake}
              className="p-x-3 py-2 border-2 w-full"
            />
          </div>
          <div className="w-full">
            <p className="text-[#fff] font-medium">language</p>
            <input
              type="text"
              name="language"
              onChange={HandleTake}
              className="p-x-3 py-2 border-2 w-full"
            />
          </div>
          <div className="w-full">
            <p className="text-[#fff] font-medium">banner</p>
            <input
              type="url"
              name="language"
              onChange={HandleTake}
              className="p-x-3 py-2 border-2 w-full"
            />
          </div>
          <div className="w-full">
            <p className="text-[#fff] font-medium">image</p>
            <input
              type="url"
              name="image"
              onChange={HandleTake}
              className="p-x-3 py-2 border-2 w-full"
            />
          </div>
          <div className="w-full">
            <p className="text-[#fff] font-medium">synopsis</p>
            <input
              type="text"
              name="synopsis"
              onChange={HandleTake}
              className="p-x-3 py-2 border-2 w-full"
            />
          </div>
          <div className="w-full">
            <p className="text-[#fff] font-medium">url</p>
            <input
              type="url"
              onChange={HandleTake}
              name="url"
              className="p-x-3 py-2 border-2 w-full"
            />
          </div>
          <div className="w-full">
            <p className="text-[#fff] font-medium">mainCast 1</p>
            <input
              type="url"
              name="castImg1"
              onChange={HandleTake}
              className="p-x-3 py-2 border-2 w-full"
            />
          </div>
          <div className="w-full">
            <p className="text-[#fff] font-medium">mainCast 2</p>
            <input
              type="url"
              name="castImg2"
              onChange={HandleTake}
              className="p-x-3 py-2 border-2 w-full"
            />
          </div>
          <div className="w-full">
            <p className="text-[#fff] font-medium">mainCast 3</p>
            <input
              type="url"
              name="castImg3"
              onChange={HandleTake}
              className="p-x-3 py-2 border-2 w-full"
            />
          </div>
          {/* <div className="w-full">
            <p className="text-[#fff] font-medium">mainCast 2</p>
            <input type="url" name="castImg" className="p-x-3 py-2 border-2 w-full" />
          </div>
          <div className="w-full">
            <p className="text-[#fff] font-medium">mainCast 3</p>
            <input type="url" name="castImg" className="p-x-3 py-2 border-2 w-full" />
          </div> */}

          <button
            className="w-full py-2 px-3 bg-green-300 text-[#fff] mt-4"
            onClick={PostMovies}
          >
            Add Movie
          </button>
        </div>
      </div>
    </>
  );
};

export default AddMovies;
