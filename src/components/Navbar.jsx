import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section className="flex w-full bg-[#222831] text-[#EEEEEE] justify-between px-10 h-[75px] items-center ">
      {/* Logo Brand */}
      <div className="flex items-center gap-2">
        <img src="/image/logo192.png" alt="" srcset="" />
        <h1 className="font-extrabold text-2xl">
          {" "}
          <span className="border-b-2 border-[#00ADB5]">React</span> Shop
        </h1>
      </div>

      {/* Button Navbar */}
      <div className="flex">
        <ul className="flex flex-row gap-5 justify-center items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Kategori</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </div>

      {/* Profile */}
      <div className="flex flex-row items-center justify-center">
        <div className="flex relative justify-center items-center">
          {/* Search */}
          <form
            role={"search"}
            action=""
            className="flex rounded-sm bg-[#EEEEEE] gap-1 p-0.5"
          >
            <input
              className="text-[#222831] font-bold w-32 px-1  rounded-sm"
              aria-label="Search"
              placeholder="Cari disini..."
              type="text"
            />
            <a href="/">
              <i class="bi bi-search px-1 text-xl bg-[#222831] rounded-sm"></i>
            </a>
          </form>

          <i class="bi bi-cart text-xl ml-3"></i>
          <i class="bi bi-dash-lg text-4xl rotate-90"></i>
          <div className="bg-red-600 absolute h-3.5 w-3.5 top-0.5 right-7 text-white font-extrabold rounded-full flex justify-center items-center text-center">
            <span className="text-[10px]">3</span>
          </div>
          <span className="h-3.5 w-3.5 animate-ping absolute top-0.5 right-7 rounded-full bg-red-700"></span>
        </div>

        {/* Login/Register */}
        <div className="flex gap-2 font-josefin">
          <a className="border-2 border-[#EEEEEE] rounded-sm px-3" href="/">
            <Link to="/login">
              <button>Login</button>
            </Link>
          </a>

          <a
            className="border-2 border-[#00ADB5] bg-[#00ADB5] text-[#222831] rounded-sm px-3"
            href="/"
          >
            <button>Register</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

// #3b4047 #EEEEEE #222831 #00ADB5
