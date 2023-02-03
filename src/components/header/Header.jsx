import React from "react";
import { Link } from "react-router-dom";
// import logo from '../../IMG/logo.jpg'

const Header = () => {
  return (
    <>
      <header className="flex items-center w-[full h-[50px] sticky top-0 z-40 ">
        <div className="w-full h-full flex items-center justify-between md:px-[50px] px-3 text-white bg-transparent header_shoadows">
          <div className="flex items-center space-x-6">
            <Link to="/" className="w-[100px] cursor-pointer">
             MovieClone
            </Link>
            <div className="cursor-pointer flex items-center ">
              <span>Category</span>

              <span className="material-symbols-outlined mt-1">expand_more</span>
            </div>
          </div>
          <div className="flex space-x-8">
            <div className=" md:w-[300px]  ">
              <input
                type="text"
                className="w-full px-4 py-1 rounded-full bg-transparent border-2 border-[#292929] outline-none"
                placeholder="Search"
              />
            </div>
            <button className="font-medium">Log in</button>
            <button className="font-medium">Create Account</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
