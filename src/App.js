import { BrowserRouter, Routes, Route } from "react-router-dom";
import DayCream from './pages/DayCream/DayCream';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/daycream" element={<DayCream />} />
      </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
