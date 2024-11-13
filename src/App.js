import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Learn from "./pages/learn/Learn";
import NightCream from './pages/NightCream/NightCream';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/nightcream" element={<NightCream />} />
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/nightcream" element={<NightCream />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
