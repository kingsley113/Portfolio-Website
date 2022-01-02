import React from "react";
// import { Parallax } from "react-scroll-parallax";
// import AboutMeCard from "../components/main/aboutMeCard";
// import Background from "../components/main/background";
import FeatureSign from "../components/main/featureSign";
import AboutMePanel from "./aboutMePanel";
import BlogPanel from "./blogPanel";
import ContactPanel from "./contactPanel";
// import ResumePanel from "./resumePanel";
import SoftwareProjectsPanel from "./softwareProjectsPanel";
import TimelinePanel from "./timelinePanel";

const PageContent = () => {
  return (
    <div className="flex-horizontal" id="page-content">
      <FeatureSign />
      <AboutMePanel />
      <SoftwareProjectsPanel />
      <BlogPanel />
      <TimelinePanel />
      {/* <ResumePanel /> */}
      <ContactPanel />
    </div>
  );
};

export default PageContent;
