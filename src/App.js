import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Payment from './components/Payment';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
