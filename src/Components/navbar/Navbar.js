import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div
      className="col-s-9 col-9"
      style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
    >
      <ul>
        <li className="col-s-3 col-4">
          <a href="">Home</a>
        </li>
        <li className="col-s-3 col-4">
          <a href="">Categories</a>
        </li>
        <li className="col-s-3 col-4">
          <a href="">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
