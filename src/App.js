import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Payment from './components/Payment';
import Home from './pages/Home';
import Success from './components/Success';
import Failure from './components/Failure';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/success" element={<Success />} />
        <Route path="/payment/failure" element={<Failure />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
