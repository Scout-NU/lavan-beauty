import React from "react";
import "./App.css";
import Learn from "./pages/learn/Learn";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Learn from "./pages/learn/Learn";
import DayCream from "./pages/DayCream/DayCream";
import NightCream from "./pages/NightCream/NightCream";
import Science from "./pages/science/Science";
import Shop from "./pages/shop/Shop";
import Header from "./components/header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/daycream" element={<DayCream />} />
          <Route path="/nightcream" element={<NightCream />} />
          <Route path="/science" element={<Science />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
