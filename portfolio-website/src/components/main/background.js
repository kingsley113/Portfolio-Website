import React from "react";
import Particles from "react-tsparticles";

const Background = () => {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div id="background">
      <video id="background-video" loop autoPlay muted>
        <source src="./video/websiteNeonBackground.mp4" type="video/mp4" />
      </video>

      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "#0d47a1",
          //   },
          // },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 4,
                opacity: 0.8,
                size: 6,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.1,
              },
            },
          },
          particles: {
            color: {
              value: "#333333",
            },
            links: {
              color: "#1c1c1c",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      /> */}
    </div>
  );
};

export default Background;
