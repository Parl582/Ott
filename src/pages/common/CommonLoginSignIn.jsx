import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import google from "../../IMG/logo/google.png";
import fb from "../../IMG/logo/facebook.webp";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { error, updateStart, updateSuccess } from "../../redux/userSlice";

const CommonLoginSignUp = ({ forgotNeed, userName }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [userInfo, setUserInfo] = useState({});
  const dispatch = useDispatch();
  const info = useSelector((state) => state.user.userinfo);
  console.log(info);

  const infohandle = (e) => {
    const value = e.target.value;
    setUserInfo({ ...userInfo, [e.target.name]: value });
  };

  const HangleSign = async (data) => {
    dispatch(updateStart());
    try {
      if (data === "signup") {
        if (!userInfo.username || !userInfo.email || !userInfo.password) {
          dispatch(error());
          return alert("Please enter your detailss");
        }
        setTimeout(() => {
          dispatch(updateSuccess(userInfo));
          alert("Registration Successful");
          navigate("/login");
        }, 2000);
      }
      if (data === "login") {
        if (!info) {
          alert("user not found");
        }
        if (
          info.email === userInfo.email &&
          info.password === userInfo.password
        ) {
          localStorage.setItem("userToken", crypto.randomUUID());
          navigate("/");
        } else {
          alert("wrong Credentials");
        }
      }
    } catch (e) {
      dispatch(error());
    }
  };

  return (
    <>
      <div className="w-full h-[50px]  flex items-center justify-center text-[#fff]">
        <div className="w-[80%] h-full flex md:justify-between justify-center items-center">
          <Link to="/" className="w-[100px] cursor-pointer text-[2rem]">
            FlixTv
          </Link>

          <span className="md:flex hidden">
            {userName ? "Already have an Account !" : " Don't have an account?"}
            <b>
              <Link to={userName ? "/login" : "/signup"} className="pl-2">
                {userName ? " Login" : " Create One"}
              </Link>
            </b>
          </span>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-50px)] overflow-hidden flex items-center justify-center">
        <div className="w-[80%] flex  items-center flex-col">
          <h1 className="text-white font-semibold text-[1.5rem] py-4">
            {userName ? "Register" : "Log in"}
          </h1>
          <div className="md:w-[30%] w-full p-3 space-y-3">
            {userName && (
              <TextField
                sx={{
                  bgcolor: "#5c5c5c",
                  borderRadius: "4px",
                }}
                name="username"
                onChange={infohandle}
                id="outlined-textarea"
                label="username"
                placeholder="Username"
                fullWidth
                multiline
                size="small"
              />
            )}

            <TextField
              sx={{
                bgcolor: "#5c5c5c",
                borderRadius: "4px",
              }}
              id="outlined-textarea"
              label="Email"
              name="email"
              type="email"
              onChange={infohandle}
              placeholder="Enter your email"
              fullWidth
              size="small"
            />

            <FormControl
              sx={{ width: "100%", bgcolor: "#5c5c5c", borderRadius: "4px" }}
              size="small"
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                name="password"
                onChange={infohandle}
                placeholder="Enter your Password"
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {forgotNeed && (
              <p className="flex items-center space-x-3 text-[#a3a3a3]">
                Forgot Password?
                <Link
                  to="/"
                  className="ml-2 font-normal text-white hover:underline"
                >
                  Reset it
                </Link>
              </p>
            )}

            <button
              className="w-full py-[6px] bg-[#1c83ff] text-[1.2rem] rounded-[3px] text-white font-semibold"
              onClick={() => HangleSign(userName ? "signup" : "login")}
            >
              Continue
            </button>
            <div className="w-full text-center text-white text-[1.2rem] py-2">
              or
            </div>
            <div className="w-full py-2 border-2 space-x-3 flex px-4  rounded-sm bg-white cursor-pointer">
              <span>
                <img src={google} alt="" className="w-[25px] h-[25px]" />
              </span>
              <span className="font-medium text-[1.1rem]">
                Continue with Google
              </span>
            </div>
            <div className="w-full py-2 border-2 space-x-3 flex px-4  rounded-sm bg-white cursor-pointer">
              <span>
                <img src={fb} alt="" className="w-[25px] h-[25px]" />
              </span>
              <span className="font-medium text-[1.1rem]">
                Continue with facebook
              </span>
            </div>
            <div className="text-[0.8rem] text-[#ccc]">
              By continuing I confirm that:
              <li className="ml-3">
                I am at least 18 years old and above the age of majority in my
                home territory.
              </li>
              <li className="ml-3">
                I agree to FlixTv's
                <span className="text-white font-medium">
                  Terms of Use & Privacy Policy.
                </span>
              </li>
            </div>
            <div className="md:hidden block w-full text-center text-white  text-[1rem] py-3">
              {userName
                ? "Already have an Account !"
                : " Don't have an account?"}
              <b>
                <Link to={userName ? "/login" : "/signup"} className="pl-2">
                  {userName ? " Login" : " Create One"}
                </Link>
              </b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonLoginSignUp;
