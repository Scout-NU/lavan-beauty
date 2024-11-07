import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NightCream from './pages/NightCream/NightCream';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<NightCream />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
