import React from "react";
import { Parallax } from "react-scroll-parallax";
import Particles from "react-tsparticles";

const Background = () => {
  // Setup Scroll Event
  // TODO: scroll throttling?
  const container = document.getElementById("container");
  if (container) {
    container.addEventListener("scroll", function () {
      console.log(this.scrollLeft);
    });
  }

  return (
    <div id="background">
      <video id="background-video" loop autoPlay muted>
        <source src="./video/websiteNeonBackground.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
