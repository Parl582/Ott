import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Homepage from "./components/homePage/Homepage";
import AddMovies from "./pages/AddMovies";
import ErrorPage from "./pages/error/ErrorPage";
import Login from "./pages/login/LogIn";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import Player from "./pages/player/Player";
import SignUp from "./pages/signup/SignUp";
import AllMoviesHome from "./pages/viewall/AllMoviesHome";

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
          element: <AllMoviesHome />,
        },
        {
          path: "/list-all/:id",
          element: <AllMoviesHome />,
        },
        {
          path: "/add",
          element: <AddMovies />,
        },
      ],
    },
    {
      path: "/watch/:id",
      element: <Player />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      <div className="bg-[#1a1a1a] w-full h-[calc-(100vh-50px)]">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
