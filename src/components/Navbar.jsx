import React from "react";

const Navbar = () => {
  return (
    <div className="flex border justify-between px-7  items-center ">
      <div>
        <img
          src="https://themewagon.github.io/ashion/img/logo.png"
          alt=""
          srcset=""
        />
      </div>
      <div className="flex items-center">
        <div className="mr-4 relative py-6 px-6 ">
          <i class="bi bi-cart text-xl"></i>
          <div className="bg-black absolute top-3 right-3    text-white font-bold  rounded-full flex justify-center items-center text-xs w-5 h-5">
            <small>3</small>
          </div>
        </div>
        <a href="/" className="text-1xl">
          login / register
        </a>
      </div>
    </div>
  );
};

export default Navbar;
