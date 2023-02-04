import React from "react";
// import { useSelector } from "react-redux";
import CommonLoginSignUp from "../common/CommonLoginSignIn";

const Login = () => {
//   const userData = useSelector((state) => state.user);

  return (
    <div>
      <CommonLoginSignUp forgotNeed={true} />
    </div>
  );
};

export default Login;
