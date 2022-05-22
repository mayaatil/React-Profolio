import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1 className="h1 font">Maya Tillman</h1>
      <div className="nav font">
        <ul className="ul">
          <li className="li">
            <a href="#about-me">About.</a>
          </li>

          <li className="li">
            <a href="#contact-me">Contact.</a>
          </li>

          <li className="li">
            <a href="#my-resume">Resume.</a>
          </li>

          <li className="li">
            <Link to="/projects">Projects.</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
