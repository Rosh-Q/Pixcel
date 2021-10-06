import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <div class="ui segment">
        <div class="ui container">
            <ul>
                <li>
                    <a href="#">
                        <img className="footer-image" src={"/images/instagram.png"}></img>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img className="footer-image" src={"/images/instagram.png"}></img>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img className="footer-image" src={"/images/instagram.png"}></img>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Footer;
