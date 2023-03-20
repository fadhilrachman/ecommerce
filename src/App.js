import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import Content from "./components/Content";
import Kategori from "./components/Kategori";
import Bestkategori from "./components/Bestkategori";
import ToggleButton from "./components/ToggleButton";
import MyCarousel from "./components/MyCarousel";




function App() {
  return (
    <div className="font-main flex flex-col">
      <div className="hidden"> <Navbar /> </div>
      <ToggleButton />
      <MyCarousel />
      <Content />
      <Kategori />
      <Bestkategori />

    </div>


  );
}

export default App;
