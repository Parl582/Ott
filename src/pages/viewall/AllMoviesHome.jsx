import React from "react";
import { useLocation } from "react-router-dom";
import ViewAllMovies from "./ViewAllMovies";

const AllMoviesHome = () => {
  const location = useLocation();
  const allMovies = location?.state?.data;
  const finalMovies = allMovies.filter(
    (elm) =>
      elm.language
        .toLowerCase()
        .includes(location.state.catName.toLowerCase()) ||
      elm.Genres.toLowerCase().includes(location.state.catName.toLowerCase())
  );
  return (
    <>
      <ViewAllMovies
        allMovies={
          location.pathname.split("/")[1] === "list-all" &&
          location.state.catName !== "Recent"
            ? finalMovies
            : allMovies
        }
        location={location}
      />
    </>
  );
};
export default AllMoviesHome;
