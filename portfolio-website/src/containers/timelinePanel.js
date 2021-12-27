import React from "react";
import SectionDivider from "../components/sectionDivider";

const TimelinePanel = () => {
  return (
    <React.Fragment>
      <SectionDivider text="Timeline" />
      <div className="timeline-card solid-background" id="timeline-panel">
        Timeline Content Here
      </div>
    </React.Fragment>
  );
};

export default TimelinePanel;
