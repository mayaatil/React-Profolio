import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <container>
      <h1>Maya Tillman</h1>
      <ul>
        <li>
          <a href="#about-me">About.</a>
        </li>

        <li>
          <a href="#contact-me">Contact.</a>
        </li>

        <li>
          <a href="#my-resume">Resume.</a>
        </li>

        <li>
          <Link to="/projects">Projects.</Link>
        </li>
      </ul>
    </container>
  );
}
