import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-8 my-8 gap-4 mb-10 bg-green-300 p-4">
      <div>
        <h3 className="text-2xl font-semibold">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-3xl font-bold">
          Love <span className="text-red-500 ">and</span> Lemons
        </h1>
      </div>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search Now"
          autoComplete="off"
          className="py-3 px-3 bg-gray-300
                text-black rounded-lg outline-none
                placeholder:text-black
                 w-[200px] lg:w-[300px]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
