import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Learn from "./pages/learn/Learn";
import DayCream from './pages/DayCream/DayCream';
import NightCream from './pages/NightCream/NightCream';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
             <Route path="/daycream" element={<DayCream />} />
            <Route path="/nightcream" element={<NightCream />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
