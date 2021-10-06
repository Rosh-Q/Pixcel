import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div
      className="col-s-9 col-9"
      style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
    >
      <ul>
        <li className="col-s-3 col-4">
          <Link to="/">Home</Link>
        </li>
        <li className="col-s-3 col-4">
          <Link to="/catagories">Categories</Link>
        </li>
        <li className="col-s-3 col-4">
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
