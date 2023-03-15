import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <img
        className="h-28 p-2"
        alt=""
        src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT"
      />
      <div>
        <ul className="flex py-10 px-10">
          <li className="px-2">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>login</button>
      )}
    </div>
  );
};

export default Header;
