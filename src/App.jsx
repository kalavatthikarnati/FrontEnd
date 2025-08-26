import React from "react";
import { Routes, Route } from "react-router-dom";


import Cart from "./pages/Cart";

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Pages/Login";
import Home from "./Pages/Home";



function App() {
  return (
    <>
    
      
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/login" element={<Login />} />

</Routes>

    </>
  );
}

export default App;
