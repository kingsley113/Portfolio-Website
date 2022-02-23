import React from "react";

const AboutMeCard = () => {
  return (
    <div className="about-panel solid-background" id="about-panel">
      <div className="flex-horizontal">
        <img
          className="portrait-image"
          src={process.env.PUBLIC_URL + "/images/ck_portrait_white.png"}
          alt="screenshot"
        />
        <div className="about-text">
          {/* <p> */}I am a full stack developer with experience building
          several applications. Graduating from the Flatiron School software
          engineering program and a background in project management, I am
          looking forward to new opportunites.
          {/* </p> */}
          <p>
            From software to the workshop, my passion in life is creating
            something new, learning new techniques, constantly pushing myself.
            As a developer, I enjoy the opportunity to work on exciting projects
            with the potential to help vast amounts of people. As a maker, I
            never shy away from a challenge and view them as a chance to grow,
            get creative and try something new.
          </p>
        </div>
      </div>

      <div className="filler-top"></div>
      <div>
        <div className="flex-horizontal" id="skills">
          <div>
            <div className="flex-horizontal">
              <h3 className="vertical-text skill-header">Frontend</h3>
              <ul className="skill-list">
                <li>ReactJS</li>
                <li>Redux</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>JSX</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="flex-horizontal">
            <h3 className="vertical-text skill-header">Backend</h3>
            <div>
              <ul className="skill-list">
                <li>Ruby</li>
                <li>Rails</li>
                <li>Node.js</li>
                <li>Sqlite3</li>
                <li>PostgreSQL</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
          <div className="flex-horizontal">
            <h3 className="vertical-text skill-header">Other</h3>
            <div>
              <ul className="skill-list">
                <li>Python (soon!)</li>
                <li>C# (Unity)</li>
                <li>C (Ardunio)</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>3D Modeling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
