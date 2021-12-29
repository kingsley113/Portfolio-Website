import React from "react";

const AboutMeCard = () => {
  return (
    <div className="about-card solid-background" id="about-panel">
      {/* <h1>About Me</h1> */}
      <img src="https://picsum.photos/400" alt="screenshot" />
      <p>
        Cameron is an aspiring full stack developer recently graduated from the
        Flatiron School software engineering program.
      </p>

      <p>
        My passion in life is to create, from software to the workshop, my happy
        place is making something new, learning new techniques, constantly
        pushing myself. As a developer I enjoy the opportunity to work on
        exciting projects with the potential to reach vast amounts of people.
      </p>

      <p>
        Every challenge we face has a solution; all we need to do is find it. I
        approach challenges as learning opportunities, a chance to grow. These
        are the times to get creative, try new things, think outside the box and
        be different.
      </p>

      <p>
        On the side, I have a passion for making of all sorts, Game Design,
        Arduino, 3d printing, woodworking, metal work, prop making, tabletop
        miniatures, etc. If I am creating something new, I am happy.
      </p>

      {/* <p>
        In a previous life as a Senior Project Engineer for General Contractors,
        I helped manage many exciting commercial construction projects and can
        bring wholistic project management experience to the table as well as
        focus in on the details.
      </p> */}
      <div>
        {/* <h3>Skilz</h3> */}
        <div className="flex-horizontal" id="skills">
          <div>
            <div className="flex-horizontal">
              <h3 className="vertical-text skill-header">Frontend</h3>
              <ul className="skill-list">
                <li>React Js</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
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
                <li>Python</li>
                <li>Sqlite3</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
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
                <li>Unity</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
