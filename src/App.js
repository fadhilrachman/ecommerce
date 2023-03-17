import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import Content from "./components/Content";
import Kategori from "./components/Kategori";

function App() {
  return (
    <div className="font-main">
      <Navbar />
      <Content />
      <Kategori />
    </div>


  );
}

export default App;
