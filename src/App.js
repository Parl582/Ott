import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Homepage from "./components/homePage/Homepage";

function App() {

  const layout = {
    
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/home",
      element: <Header />,
    },
  ]);
  return (
    <>
      <div className="bg-black w-full h-[calc-(100vh-50px)]">
        {/* <Homepage /> */}
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
