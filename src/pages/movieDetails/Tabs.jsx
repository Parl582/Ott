import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useNavigate } from "react-router-dom";

export default function LabTabs({ movieDetails }) {
  const [value, setValue] = React.useState("1");
  const [sessionNo, setSession] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePlay = (data) => {
    if (data.url) {
      navigate(`/watch/${data?._id}`, { state: data?.url });
    }
  };

  React.useEffect(() => {}, [sessionNo]);

  return (
    <>
      <div className="w-full items-center justify-between h-[100%] ">
        <TabContext value={value}>
          <div className="w-full items-center justify-around ">
            <TabList
              onChange={handleChange}
              className="flex items-center justify-between w-full "
            >
              {movieDetails?.sessions && (
                <Tab
                  label="Episodes & Session"
                  value="3"
                  className="!w-1/3 border-2  !text-white"
                />
              )}
              <Tab
                label="About"
                value="1"
                className={`${
                  movieDetails?.sessions ? "w-1/3" : "!w-1/2 border-2"
                }  !text-white font-bold `}
              />
              <Tab
                label="Comments"
                value="2"
                className={`${
                  movieDetails?.sessions ? "w-1/3" : "!w-1/2 border-2"
                }  !text-white font-bold `}
              />
            </TabList>
          </div>
          <TabPanel value="1" className="w-full h-auto">
            <div className="flex md:flex-none flex-wrap">
              <div className="md:w-3/4 w-full ">
                <h1 className="font-semibold text-2xl py-5"> Synopsis</h1>
                <p className="text-[#ccc]  md:pr-9">{movieDetails?.synopsis}</p>
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
                        {movieDetails.language}
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
          {movieDetails?.sessions && (
            <TabPanel value="3">
              <div className="w-full h-full ">
                <select
                  className="w-[40%] bg-[#000] py-2 px-1 border-[1px] border-[#383838]"
                  onChange={(e) => setSession(e.target.value)}
                >
                  {movieDetails?.sessions?.map((elm, index) => (
                    <option value={index} key={elm?._id}>
                      {elm?.sNo}
                    </option>
                  ))}
                </select>
                <div className="flex flex-wrap w-full py-2">
                  {movieDetails?.sessions[sessionNo]?.episodes?.map(
                    (item, index) => (
                      <div
                        className="p-1 md:min-w-[10%] min-w-1/5 md:w-[10%] w-1/5 flex items-center justify-center "
                        key={item?._id}
                      >
                        <span
                          className="w-full border-2  text-center cursor-pointer hover:text-[#000] rounded-sm hover:bg-[#ccc]"
                          onClick={() => handlePlay(item)}
                        >
                          Ep {index + 1}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </TabPanel>
          )}
        </TabContext>
      </div>
    </>
  );
}
