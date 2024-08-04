import React from "react";
import "./About.css";
import aboutImg from "./img/rajur.jpeg";

function About() {
  // Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });

  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I am a civil engineering graduate from NIT Jamshedpur. I have a
                passion for designing and constructing sustainable and
                innovative structures. During my time at NIT Jamshedpur, I
                gained extensive knowledge and experience in various aspects of
                civil engineering, including structural analysis, construction
                management, and geotechnical engineering.
              </p>
              <p className="about__text p__color">
                My education has provided me with a strong foundation in
                engineering principles and practices. I am skilled in using
                engineering software and tools to create detailed designs and
                plans. I have worked on several projects that have enhanced my
                problem-solving abilities and project management skills.
              </p>
              <p className="about__text p__color">
                I am excited to apply my skills and knowledge in a professional
                setting and contribute to the development of innovative
                engineering solutions. I am always eager to learn new things and
                take on new challenges.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
