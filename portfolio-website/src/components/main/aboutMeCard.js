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
        <h3>Skilz</h3>
        <ul>
          <li>React Js: 4/5</li>
          <li>Javascript: 4/5</li>
          <li>HTML: 4/5</li>
          <li>CSS: 3/5</li>
          <li>Ruby: 3/5</li>
          <li>Rails: 3/5</li>
          <li>Python: 1/5</li>
          <li>Sqlite3: 3/5</li>
          <li>PostgreSQL: 2/5</li>
          <li>C# : 2/5</li>
          <li>C: 1/5</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMeCard;
