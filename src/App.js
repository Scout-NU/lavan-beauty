import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Learn from "./pages/learn/Learn";

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
