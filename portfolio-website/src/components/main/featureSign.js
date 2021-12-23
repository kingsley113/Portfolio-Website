import React, { Component } from "react";

class FeatureSign extends Component {
  render() {
    return (
      <div>
        {/* <video
          id="background-video"
          loop
          autoPlay
          muted
          // style={{ left: props.position * -1 }}
        >
          <source src="./video/NeonSignTest.mp4" type="video/mp4" />
        </video> */}
        <div id="feature-image-container">
          <img
            src="./images/signOff.png"
            className="sign-feature-image"
            // style={{ left: props.position * -0.1 }}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    // TODO: Trigger sign flickering on here
    // TODO: start interval
  }

  componentWillUnmount() {
    // TODO: clear the interval
  }
}

export default FeatureSign;
