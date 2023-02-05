import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DotLoader } from "react-spinners";

const Player = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  let url = location.state;
  const [close, setClose] = useState(true);
  // let pathName = location.pathname.split("/")[2];
  useEffect(() => {
    setTimeout(() => {
      setClose(false);
    }, 4000);
  }, []);
  return (
    <>
      <div className="w-full max-h-screen h-screen flex items-center justify-center relative">
        {close && (
          <div className="w-full absolute h-screen bg-[#0e0e0e] flex items-center justify-center top-0">
            <DotLoader
              color="#ffffff"
              loading={close}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}

        <iframe
          title="Movies"
          src={url}
          width="100%"
          height="100%"
          allowFullscreen
          allowtransparency
          allow="true"
          scrolling="no"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
};

export default Player;
