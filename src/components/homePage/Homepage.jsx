import React, { useEffect, useState } from "react";
import AdsPortions from "../ads/AdsPotions";
import CategoryHome from "../category/CategoryHome";
import data from "../../data/data.json";
import horror from "../../data/horror.json";
import Action from "../../data/Action.json";

import axios from "axios";

const Homepage = () => {
  const [datas, setDatas] = useState([data.titles]);
  const [horrors, SetHorror] = useState([horror.titles]);
  const [actions, setActions] = useState([Action.titles]);


  let H = datas.filter((elm)=>elm.title === "comady")
  // const getData = () => {
  //   const options = {
  //     method: "GET",
  //     url: data,
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       setDatas(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };


  useEffect(() => {}, []);

  return (
    <>
      <div className="min-h-[calc(100vh-50px)]">
        <AdsPortions />
        <div className="w-full  md:px-[70px] px-4 ">
          <CategoryHome data={datas[0]} catName="Recent Watch" />
        </div>
        <div className="w-full  md:px-[70px] px-4 ">
          <CategoryHome data={horrors[0]} catName="Horror" />
        </div>
        <div className="w-full  md:px-[70px] px-4 ">
          <CategoryHome data={actions[0]} catName={"Action"}/>
        </div>
      </div>
    </>
  );
};

export default Homepage;
