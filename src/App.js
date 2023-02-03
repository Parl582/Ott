import { useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Homepage from "./components/homePage/Homepage";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import Player from "./pages/player/Player";
import ViewAllMovies from "./pages/viewall/ViewAllMovies";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/details/:id",
          element: <MovieDetails />,
        },
        {
          path: "/view-all/:id",
          element: <ViewAllMovies />,
        },
      ],
    },
    {
      path: "/watch/:id",
      element: <Player />,
    },
  ]);



  return (
    <>
      <div className="bg-[#1a1a1a] w-full h-[calc-(100vh-50px)]">
        {/* <Homepage /> */}
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
