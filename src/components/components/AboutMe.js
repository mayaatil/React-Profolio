import resume from "../assets/resume/maya resume 1_14_2022 (1).pdf";
import me from "../assets/images/maya-profile.jpg";

function AboutMe() {
  return (
    <container className="align">
      <section id="about-me">
        <img src={me} alt="Maya Tillman profile image." class="box" />
      </section>

      <section className="box">
        <h2>About Me</h2>
        <div className="box2">
          <div className="intro">
            Data Engineer by day, Web Developer by night.
          </div>
          <div className="intro">
            MS in Data Engineering, Certificate in Coding.
          </div>
        </div>
      </section>

      <section id="contact-me" className="box">
        <h2>Contact</h2>
        <div>
          <a href="mailto:mayatillman17@gmail.com">
            <i className="fa-solid fa-envelope icon-size"></i>
          </a>
          <a href="www.linkedin.com/in/maya-tillman-430084227">
            <i className="fa-brands fa-linkedin icon-size"></i>
          </a>
          <a href="https://voice.google.com">
            <i className="fa-solid fa-phone icon-size"></i>
          </a>
        </div>
      </section>

      <section id="my-projects" className="box">
        <h2>Github</h2>
        <p>
          <a href="https://www.github.com/mayaatil">
            <i className="fa-brands fa-github icon-size2"></i>
          </a>
        </p>
      </section>

      <section id="my-resume">
        <div>
          <a
            href="./assets/pdf/maya resume 1_14_2022 (1).pdf"
            download="resume"
          >
            <img
              src={resume}
              alt="Maya Tillman's resume."
              className="box show"
            />
          </a>
        </div>
      </section>
    </container>
  );
}

export default AboutMe;
