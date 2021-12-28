import React from "react";
import AboutMeCard from "../components/main/aboutMeCard";
import SectionDivider from "../components/sectionDivider";

const AboutMePanel = () => {
  return (
    <React.Fragment>
      <SectionDivider text="Who is this guy?" />
      <AboutMeCard />
    </React.Fragment>
  );
};

export default AboutMePanel;
