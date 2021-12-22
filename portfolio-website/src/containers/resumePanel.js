import React from "react";
import SectionDivider from "../components/sectionDivider";

const ResumePanel = () => {
  return (
    <React.Fragment>
      <SectionDivider text="Resume" />
      <div className="resume-panel solid-background">
        Resume and download link here
      </div>
    </React.Fragment>
  );
};

export default ResumePanel;
