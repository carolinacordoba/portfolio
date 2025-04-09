import React from "react";
import "../styles/cv.scss";
import Experience from "../components/cv/experience";
import Education from "../components/cv/Education";
import SideBar from "../components/cv/SideBar";

const CV = () => {
  return (
    <>
      <div className="cv-container">
        <header className="cv-header">
          <div className="cv-img-container">
            <img
              src="/public/carolinabild.jpg"
              alt="Profilbild"
              className="cv-profile-img"
            />
          </div>
          <div className="cv-text-container">
            <h1>Carolina Cordoba</h1>
            <p>Webbutvecklare & Digital Marknadsförare</p>
          </div>
        </header>
      </div>

      <div className="cv-wrapper">
        {/* SIDOMENY */}
        <aside className="cv-sidebar">
         <SideBar/>
        </aside>

        {/* Utbildning */}
        <section className="cv-section">
          <h2 className="section-title">Utbildning</h2>
          <Education/>
        </section>

        {/* Arbetslivserfarenhet */}
        <section className="cv-section">
          <h2 className="section-title">Arbetslivserfarenhet</h2>
          <Experience/>
        </section>

        {/* Färdigheter */}
        <section className="cv-section">
          <h2 className="section-title">Färdigheter</h2>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML & CSS</li>
            <li>SCSS</li>
            {/* Fler färdigheter här */}
          </ul>
        </section>

        {/* Certifikat */}
        <section className="cv-section">
          <h2 className="section-title">Certifikat</h2>
          <ul className="certificates-list">
            <li>Webbutveckling Certifikat, Företag Y</li>
            {/* Fler certifikat här */}
          </ul>
        </section>

        {/* Språk */}
        <section className="cv-section">
          <h2 className="section-title">Språk</h2>
          <ul className="languages-list">
            <li> Svenska (Modersmål)</li>
            <li> Engelska (Flytande)</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default CV;
