import "./App.scss";
import Header from "./components/header/Header";
import Homepage from "./components/homePage/Homepage";

function App() {
  return (
    <>
      <Header />
      <div className="bg-black w-full h-[calc-(100vh-50px)]">
        <Homepage />
      </div>
    </>
  );
}

export default App;
