import React, { useEffect } from "react";
import AdsPortions from "../ads/AdsPotions";
import CategoryHome from "../category/CategoryHome";
import horror from "../../data/horror.json";
import Action from "../../data/Action.json";
import { NewMovies } from "../../data/NewMovies";

const Homepage = () => {
  const datas = NewMovies;
  const horrors = [horror.titles];
  const actions = [Action.titles];

  useEffect(() => {}, []);

  // const [nameData, setNameData] = useState({ name1: "1234", name2: "67767" });
  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setNameData({ ...nameData, [e.target.name]: value });
  // };

  return (
    <>
      <div className="min-h-[calc(100vh-50px)]">
        <AdsPortions />
        <div className="w-full  md:px-[70px] px-4 ">
          <CategoryHome data={datas} catName="Recent Update" />
        </div>
        <div className="w-full  md:px-[70px] px-4 ">
          <CategoryHome data={horrors[0]} catName="Horror" />
        </div>
        <div className="w-full  md:px-[70px] px-4 ">
          <CategoryHome data={actions[0]} catName={"Action"} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
