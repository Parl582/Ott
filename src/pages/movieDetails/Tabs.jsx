import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

export default function LabTabs({ movieDetails }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="w-full items-center justify-between h-[100%] ">
        <TabContext value={value}>
          <div className="w-full items-center justify-around ">
            <TabList
              onChange={handleChange}
              className="flex items-center justify-between w-full "
            >
              <Tab
                label="About"
                value="1"
                className="!w-1/2 border-2  !text-white font-bold "
              />
              <Tab
                label="Comments"
                value="2"
                className="!w-1/2 border-2 !text-white"
              />
              {/* <Tab
                label="Related"
                value="3"
                className="!w-1/3 border-2 !border-red-600 !text-white"
              /> */}
            </TabList>
          </div>
          <TabPanel value="1" className="w-full h-auto">
            <div className="flex md:flex-none flex-wrap">
              <div className="md:w-3/4 w-full ">
                <h1 className="font-semibold text-2xl py-5"> Synopsis</h1>
                <p className="text-[#ccc]  md:pr-9">{movieDetails.synopsis}</p>
              </div>
              <div className="md:w-1/4 w-full ">
                <span className="font-semibold text-2xl py-5 flex items-center space-x-2">
                  <span> Details </span>
                  <PlayCircleFilledIcon className="!text-[red] mt-1" />
                </span>

                <div className="w-full ">
                  <div className="w-full h-full  flex items-center space-x-2 pb-3">
                    <p>
                      <span className="font-medium">Release Year</span>
                      <p className="text-[0.8rem] text-[#acacac]">
                        {movieDetails.year}{" "}
                      </p>
                    </p>
                  </div>
                  <div className="w-full h-full  flex items-center space-x-2 pb-3">
                    <p>
                      <span className="font-medium">Genres</span>
                      <p className="text-[0.8rem] text-[#acacac]">
                        {movieDetails.Genres}
                      </p>
                    </p>
                  </div>
                  <div className="w-full h-full  flex items-center space-x-2 pb-3">
                    <p>
                      <span className="font-medium">Language</span>
                      <p className="text-[0.8rem] text-[#acacac]">
                        {movieDetails.language}{" "}
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[2rem] text-white">Coming Soon</span>
            </div>
          </TabPanel>
        </TabContext>
      </div>
    </>
  );
}
