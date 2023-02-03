import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Telegram, Twitter, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="w-full md:h-[300px]  py-4 flex items-center justify-center">
        <div className="w-[90%] rounded-lg h-full flex items-center justify-center flex-col bg-[#1f1f1f] py-5">
          <div className="flex  space-x-4">
            <a className="w-[40px] h-[40px] rounded-full border-2 overflow-hidden flex items-center justify-center cursor-pointer">
              <FacebookRoundedIcon className="text-[#fff] !text-[40px]" />
            </a>
            <a className="w-[40px] h-[40px] rounded-full border-2 overflow-hidden flex items-center justify-center cursor-pointer">
              <Twitter className="text-[#fff] !text-[35px]" />
            </a>
            <a className="w-[40px] h-[40px] rounded-full border-2 overflow-hidden flex items-center justify-center cursor-pointer">
              <Telegram className="text-[#fff] !text-[35px]" />
            </a>
          </div>
    
        
          <div className="py-3 flex md:flex-none flex-wrap text-white space-x-3">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">Home</Link>
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">About</Link>
            <Link to="/" className="flex items-center space-x-2 cursor-pointer"> Help Center</Link>
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">PartnersAdvertisers</Link>
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">Contact Details</Link>
 

          </div>
          <div className="py-3 flex md:flex-none flex-wrap text-white space-x-3 border-t-2">
            <Link to="#" className="flex items-center space-x-2 cursor-pointer">Terms Of UsePrivacy</Link>
            <Link to="#" className="flex items-center space-x-2 cursor-pointer">Policy</Link>
            <Link to="#" className="flex items-center space-x-2 cursor-pointer">Copyright</Link>


          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
