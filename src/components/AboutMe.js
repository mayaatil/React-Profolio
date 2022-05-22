import resume from "../assets/resume/maya resume 1_14_2022 (1).pdf";
import me from "../assets/images/maya-profile.jpg";
import screenshot from "../assets/images/resume-screenshot.png";

const AboutMe = () => {
  return (
    <container className="align font boxalign">
      <section id="about-me">
        <img src={me} alt="Maya Tillman profile." className="box" />
      </section>

      <section className="box">
        <h2 className="h2">About Me</h2>
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
        <h2 className="h2">Contact</h2>
        <div className="box2">
          <div className="intro">mayatillman17@gmail.com</div>
          <div className="intro">708.407.6810</div>
          <div className="intro">Github: mayaatil</div>
        </div>
      </section>

      <section id="my-resume">
        <div>
          <a href={resume} download="resume">
            <img
              src={screenshot}
              alt="Maya Tillman's resume."
              className="box show"
            />
          </a>
        </div>
      </section>
    </container>
  );
};

export default AboutMe;
