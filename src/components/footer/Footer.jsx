import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Home, Telegram, Twitter } from "@mui/icons-material";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import PolicyOutlinedIcon from "@mui/icons-material/PolicyOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="w-full md:h-[300px]  py-4 flex items-center justify-center">
        <div className="w-[90%] rounded-lg h-full flex items-center justify-center flex-col bg-[#1f1f1f] py-5">
          <div className="flex  space-x-4">
            <a href="#" className="w-[40px] h-[40px] rounded-full border-2 overflow-hidden flex items-center justify-center cursor-pointer">
              <FacebookRoundedIcon className="text-[#fff] !text-[40px]" />
            </a>
            <a  href="#" className="w-[40px] h-[40px] rounded-full border-2 overflow-hidden flex items-center justify-center cursor-pointer">
              <Twitter className="text-[#fff] !text-[35px]" />
            </a>
            <a  href="#" className="w-[40px] h-[40px] rounded-full border-2 overflow-hidden flex items-center justify-center cursor-pointer">
              <Telegram className="text-[#fff] !text-[35px]" />
            </a>
          </div>

          <div className="py-3 flex md:flex-none flex-wrap text-white space-x-3 items-center w-full justify-center ">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <Home fontSize="9px" /> Home
            </Link>
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <AutoStoriesOutlinedIcon fontSize="9px"/> About
            </Link>
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              Help Center <QuestionMarkOutlinedIcon fontSize="10px" />
            </Link>
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <HandshakeOutlinedIcon fontSize="9px" /> PartnersAdvertisers
            </Link>
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <AlternateEmailOutlinedIcon fontSize="9px" /> Contact Details
            </Link>
          </div>
          <div className="py-3 flex md:flex-none flex-wrap text-white space-x-3 border-t-2 text-center md:w-auto w-[90%] justify-center items-center">
            <Link to="#" className="flex items-center space-x-2 cursor-pointer">
              <PrivacyTipOutlinedIcon fontSize="10px" /> Terms Of UsePrivacy
            </Link>
            <Link to="#" className="flex items-center space-x-2 cursor-pointer">
              <PolicyOutlinedIcon fontSize="10px" /> Policy
            </Link>
            <Link to="#" className="flex items-center space-x-2 cursor-pointer">
              <CopyrightOutlinedIcon fontSize="10px" /> Copyright
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
