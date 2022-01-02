import React from "react";

const Background = (props) => {
  // Setup Scroll Event
  const container = document.getElementById("container");
  // eslint-disable-next-line
  let position = 0;
  if (container) {
    container.addEventListener("scroll", function () {
      // console.log(this.scrollLeft);
      position = this.scrollLeft;
    });
  }

  return (
    <div id="background">
      <img
        src={process.env.PUBLIC_URL + "/images/background-5-background.png"}
        className="background-layer-gradient"
        alt=""
      />
      {/* Parallax background layers */}
      <img
        src={process.env.PUBLIC_URL + "/images/background-4.png"}
        className="background-layer"
        style={{ left: props.position * -0.05 }}
        alt=""
      />
      <img
        src={process.env.PUBLIC_URL + "/images/background-3.png"}
        className="background-layer"
        style={{ left: props.position * -0.1 }}
        alt=""
      />
      {/* SECOND LAYER */}
      <img
        src={process.env.PUBLIC_URL + "/images/background-2.png"}
        className="background-layer"
        style={{ left: props.position * -0.2 - 70 }}
        alt=""
      />
      <img
        src={process.env.PUBLIC_URL + "/images/background-2.png"}
        className="background-layer"
        style={{ left: props.position * -0.2 - 70 + 2842 }}
        alt=""
      />
      {/* FRONT LAYER */}
      <img
        src={process.env.PUBLIC_URL + "/images/background-1-front.png"}
        className="background-layer"
        style={{ left: props.position * -0.4 }}
        alt=""
      />
      <img
        src={process.env.PUBLIC_URL + "/images/background-1-front.png"}
        className="background-layer"
        style={{ left: props.position * -0.4 + 2842 }}
        alt=""
      />
      <div className="color-overlay"></div>
    </div>
  );
};

export default Background;
