import { useState } from "react";
import "./App.css";
import { Home } from "./pages";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-darkBlue w-screen h-screen overflow-hidden overflow-y-scroll scrollbar">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
