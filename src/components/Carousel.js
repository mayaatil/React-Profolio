import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import Password from "../assets/images/IMG-8990.jpg";
import Princess from "../assets/images/IMG-9351.jpg";
import Money from "../assets/images/team_wysiwyg_project_screenshot.png";
import Note from "../assets/images/note.png";
import Read from "../assets/images/Screenshot (15).png";
import Employee from "../assets/images/Screenshot (17).png";

export const Carousel = () => {
  const imageStyle = {
    width: "50rem",
    height: "50rem",
    border: "solid #2f2f2f; 10px",
    padding: "15px",
    resizeMode: "contain",
  };

  return (
    <div className="wrapper">
      <h2 className="center h2">Projects</h2>

      <Splide
        options={{
          perPage: 1,

          rewind: true,
        }}
        aria-labelledby="basic-example-heading"
        onMoved={(splide, newIndex) => {}}
        className="projects"
      >
        <SplideSlide>
          <h4>Password Generator</h4>
          <div>
            Can't think of a password? The Password Generator is here for you.
          </div>
          <img src={Password} alt={"Password Generator"} style={imageStyle} />
        </SplideSlide>
        <SplideSlide>
          <h4>Princess Quiz</h4>
          <div>Test your Disney Princess Knowledge.</div>
          <img src={Princess} alt={"Princess Quiz"} style={imageStyle} />
        </SplideSlide>
        <SplideSlide>
          <h4>Money Flagz</h4>
          <div>Learn more about our world flags.</div>
          <img src={Money} alt={"Money Flagz"} style={imageStyle} />
        </SplideSlide>
        <SplideSlide>
          <h4>Note Taker</h4>
          <div>Keep track of your notes.</div>
          <img src={Note} alt={"Note Taker"} style={imageStyle} />
        </SplideSlide>
        <SplideSlide>
          <h4>README Generator</h4>
          <div>This application generates your very own README.</div>
          <img src={Read} alt={"README Generator"} style={imageStyle} />
        </SplideSlide>
        <SplideSlide>
          <h4>Employee Tracker</h4>
          <div>Keep track of your employees.</div>
          <img src={Employee} alt={"Employee Tracker"} style={imageStyle} />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carousel;
