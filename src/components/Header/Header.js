import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 px-12 py-8 flex justify-center md:justify-between  bg-white">
      <div className="hidden md:block">
        <a href="/">Crypto Cafe</a>
      </div>
      <div className="flex gap-4">
        <a href="/">Home</a>
        <a href="/coins">Coins</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Header;
