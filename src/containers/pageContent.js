import React from "react";
import FeatureSign from "../components/main/featureSign";
import AboutMePanel from "./aboutMePanel";
import BlogPanel from "./blogPanel";
import ContactPanel from "./contactPanel";
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
      <ContactPanel />
    </div>
  );
};

export default PageContent;
