import React from "react";
import ScrollLink from "../components/scrollLink";

const Footer = () => {
  // const aboutEl = document.getElementById("about-panel");
  // const softwareEl = document.getElementById("software-panel");
  // const homeEl = document.getElementById("feature-image-container");

  return (
    <div className="footer">
      <ScrollLink id="feature-image-container" text="Home" />
      <ScrollLink id="about-panel" text="About" />
      <ScrollLink id="software-panel" text="Software" />
      <ScrollLink id="blog-panel" text="Blog" />
      <ScrollLink id="timeline-panel" text="Timeline" />
      <ScrollLink id="resume-panel" text="Resume" />
      <ScrollLink id="contact-panel" text="Contact" />

      {/* TODO: Add footer icons */}
      <h2 className="flex-end"> footer icons here</h2>
    </div>
  );
};

export default Footer;
