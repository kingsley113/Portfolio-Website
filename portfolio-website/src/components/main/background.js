import React from "react";
import { Parallax } from "react-scroll-parallax";
import Particles from "react-tsparticles";

const Background = (props) => {
  // Setup Scroll Event
  // TODO: scroll throttling?
  const container = document.getElementById("container");
  let position = 0;
  if (container) {
    container.addEventListener("scroll", function () {
      // console.log(this.scrollLeft);
      position = this.scrollLeft;
    });
  }

  return (
    <div id="background">
      {/* {console.log(props.position)} */}
      {/* <video
        id="background-video"
        loop
        autoPlay
        muted
        style={{ left: props.position * -1 }}
      >
        <source src="./video/NeonSignTest.mp4" type="video/mp4" />
      </video> */}
      <img
        src="./images/tempBackground-2.png"
        className="background-layer"
        style={{ left: props.position * -0.1 }}
      />
      <img
        src="./images/tempBackground-3.png"
        className="background-layer"
        style={{ left: props.position * -0.25 }}
      />
      <img
        src="./images/tempBackground-4.png"
        className="background-layer"
        style={{ left: props.position * -0.5 }}
      />
      <img
        src="./images/tempBackground-5.png"
        className="background-layer"
        style={{ left: props.position * -0.75 }}
      />
      <div
      // id="background-layer-1"
      // className="background-layer"
      // style={{ left: props.position * -0.75 }}
      />
    </div>
  );
};

export default Background;
