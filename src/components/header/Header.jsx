import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { CategoryName } from "../../data/categoryName";

// import logo from '../../IMG/logo.jpg'

const Header = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [active, setActive] = useState(false);
  const handleCategory = (name) => {
    setClick(!click);
  };
  const Logout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };
  const validation = localStorage.getItem("userToken");
  return (
    <>
      {/* <div className="w-full border-2 relative"> */}
      <header className="flex items-center w-[full h-[50px] sticky top-0 z-40 ">
        <div className="w-full h-full flex items-center justify-between md:px-[50px] px-4 text-white bg-transparent header_shoadows">
          <div className="flex items-center space-x-6">
            <Link to="/" className="w-[100px] cursor-pointer text-[2rem]">
              FlixTv
            </Link>
            <div className="cursor-pointer md:flex hidden items-center ">
              <span>Category</span>
              <span className="material-symbols-outlined mt-1">
                expand_more
              </span>
            </div>
          </div>
          {validation ? (
            <span
              className="material-symbols-outlined md:flex hidden cursor-pointer text-[33px]"
              onClick={() => navigate(validation ? "/" : "/login")}
            >
              account_circle
            </span>
          ) : (
            <div className="space-x-8 md:flex hidden">
              {/* <div className=" md:w-[300px]  ">
                      <input
                        type="text"
                        className="w-full px-4 py-1 rounded-full bg-transparent border-2 border-[#292929] outline-none"
                        placeholder="Search"
                      />
                    </div> */}
              <button
                className="font-medium"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
              <button
                className="font-medium"
                onClick={() => navigate("/signup")}
              >
                Create Account
              </button>
            </div>
          )}

          <div className="md:hidden flex space-x-3">
            {/* <span className="material-symbols-outlined cursor-pointer text-[33px]">
              search
            </span> */}
            <span
              className="material-symbols-outlined cursor-pointer text-[33px]"
              onClick={() => navigate(validation ? "/" : "/login")}
            >
              account_circle
            </span>
            <span
              className="material-symbols-outlined cursor-pointer text-[33px]"
              onClick={() => setClick(!click)}
            >
              {click ? "close" : "menu"}
            </span>
          </div>
        </div>
      </header>
      {click && (
        <div className="w-full h-screen z-50 fixed mt-[-10px] overflow-hidden bg-black p-6">
          <div className="w-full h-full text-white flex flex-col relative">
            <Link
              to="/"
              className="py-3 cursor-pointer text-[1.3rem] font-bold"
              onClick={() => setClick(!click)}
            >
              Home
            </Link>
            <div
              className="cursor-pointer  "
              onClick={() => setActive(!active)}
            >
              <div className="flex items-center text-[1.3rem] font-bold">
                <span>Category</span>
                <span className="material-symbols-outlined mt-1">
                  expand_more
                </span>
              </div>
            </div>
            <div
              className={`w-full  overflow-hidden ${
                active ? "h-[auto]" : "h-[0]"
              } `}
            >
              {CategoryName?.map((elm) => (
                <li
                  className="list-none flex items-center space-x-2 py-2 px-2"
                  key={elm.id}
                  onClick={() => handleCategory(elm.name)}
                >
                  <span>{elm.name} </span>
                </li>
              ))}
            </div>
            <div className="absolute bottom-[30px] w-full">
              {!validation ? (
                <div className="w-full flex  justify-between space-x-2">
                  <button
                    className="py-2 w-1/2  rounded-sm text-white bg-[#0c9bff] font-semibold"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                  <button
                    className="py-2 w-1/2 rounded-sm text-white font-semibold bg-[#3e3e3e] "
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </button>
                </div>
              ) : (
                <div className="">
                  <button
                    className="py-2 w-full  rounded-sm text-white bg-[#0c9bff] font-semibold"
                    onClick={() => Logout()}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
