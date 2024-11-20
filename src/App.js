import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Learn from "./pages/learn/Learn";
import DayCream from "./pages/DayCream/DayCream";
import NightCream from "./pages/NightCream/NightCream";
import Science from "./pages/science/Science";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/daycream" element={<DayCream />} />
          <Route path="/nightcream" element={<NightCream />} />
          <Route path="/science" element={<Science />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
