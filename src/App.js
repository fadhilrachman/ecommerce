import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProduk from "./pages/home/ListProduk";
import Login from "./pages/auth/Login";
function App() {
  return (
    <div className="font-main flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListProduk />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
