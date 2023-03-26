import React from "react";
import Navbar from "../../components/Navbar";
import ToggleButton from "../../components/ToggleButton";
import Content from "../../components/Content";
import Bestkategori from "../../components/Bestkategori";
const ListProduk = () => {
  const data = [
    {
      nama: "siomi",
      harga: 2000,
    },
    {
      nama: "ipon",
      harga: 2000,
    },
    {
      nama: "samsung",
      harga: 2000,
    },
    {
      nama: "nokia",
      harga: 3000,
      status: "active",
    },
  ];
  return (
    <div>
      <div className="hidden">
        {" "}
        <Navbar />{" "}
      </div>
      <ToggleButton />
      <Content />
      {/* <Kategori /> */}
      <section className="py-20">
        <div className="flex flex-row w-full justify-between items-center px-20">
          <div>
            <h1 className="text-2xl font-semibold">
              <span className="border-b-2 pr-2 border-red-500">NEW</span>PRODUCT
            </h1>
          </div>

          {/* Judul */}
          <div>
            <ul className="flex flex-row gap-8">
              <li>
                <a href="/">All</a>
              </li>
              <li>
                <a href="/">Women's</a>
              </li>
              <li>
                <a href="/">Men's</a>
              </li>
              <li>
                <a href="/">Kid's</a>
              </li>
              <li>
                <a href="/">Accessories</a>
              </li>
              <li>
                <a href="/">Cosmetics</a>
              </li>
            </ul>
          </div>
        </div>
        {/* const data = [
    {
      nama: "padil",
      usia: 18,
    },
    {
      nama: "ikbal",
      usia: 18,
    },
  ]; */}

        {/* {data.map((val) => `nama saya ${val}`)} */}
        <div className="grid grid-cols-4 px-20 gap-7 py-10">
          {/* Produk Image */}
          {data.map((val) => (
            <div className="">
              <div className="flex justify-center items-center hover:scale-[1.03] duration-300 delay-75 bg-[#FAFAFA]">
                <a href="/">
                  <img src="/image/iphone14.png" alt="Iphone 14" />
                </a>
              </div>
              {/* Deskripsi produk */}
              <div className="flex flex-col text-center pt-3">
                <h1>{val.nama}</h1>
                <div className="flex flex-row justify-between items-center px-10">
                  <p className="font-bold">${val.harga}</p>
                  <a href="/">
                    <i class="bi bi-cart-plus-fill text-2xl bg-clip-text text-transparent bg-red-500 hover:bg-sla"></i>
                  </a>
                </div>
              </div>
              <span>{val?.status}</span>
            </div>
          ))}
        </div>
      </section>
      <Bestkategori />
    </div>
  );
};

export default ListProduk;
