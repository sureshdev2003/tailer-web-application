import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MenWear from "./Components/MenWear/MenWear";
import WomenWear from "./Components/WomenWear/WomenWear";
import Kidswear from "./Components/KidsWear/Kidswear";
import Aleration from "./Components/Alteration/Aleration";
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menwear" element={<MenWear />} />
          <Route path="/womenwear" element={<WomenWear />} />
          <Route path="/kidswear" element={<Kidswear />} />
          <Route path="/Aleration" element={<Aleration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
