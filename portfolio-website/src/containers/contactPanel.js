import React from "react";
import SectionDivider from "../components/sectionDivider";

import { links } from "../data/data";

const ContactPanel = () => {
  return (
    <React.Fragment>
      <SectionDivider text="Contact" />
      <div className="contact-panel " id="contact-panel">
        <h1>
          Every challenge in life has a solution, we just need to find it.
        </h1>
        <div className="link-button" onClick={() => handleResumeClick()}>
          Download Resume
        </div>
        Email link studio one three link facebook link twitter
        <img
          src="./icons/GitHub-Mark-Light-64px.png"
          alt="Github Mark"
          className="footer-icon"
          onClick={() => window.open(links.github)}
        />
        <img
          src="./icons/LI-In-Bug.png"
          alt="Linkedin Icon"
          className="footer-icon"
          onClick={() => window.open(links.linkedin)}
        />
        <img
          src="./icons/glyph-logo_May2016.png"
          alt="Instagram Icon"
          className="footer-icon"
          onClick={() => window.open(links.instagram)}
        />
        <p>&copy; Cameron Kingsley 2021</p>
      </div>
    </React.Fragment>
  );
};

const handleResumeClick = () => {
  // TODO: resume link stuff here
};

export default ContactPanel;
