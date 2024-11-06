// import logo from "./logo.svg";
import "./App.css";
import Learn from "./pages/learn/Learn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Learn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
