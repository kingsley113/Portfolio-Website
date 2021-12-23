import React from "react";
import { Parallax } from "react-scroll-parallax";
import AboutMeCard from "../components/main/aboutMeCard";
import Background from "../components/main/background";
import AboutMePanel from "./aboutMePanel";
import BlogPanel from "./blogPanel";
import ContactPanel from "./contactPanel";
import ResumePanel from "./resumePanel";
import SoftwareProjectsPanel from "./softwareProjectsPanel";
import TimelinePanel from "./timelinePanel";

const PageContent = () => {
  return (
    <div className="flex-horizontal">
      {/* TODO: Make Component for foreground building and name sign, this will replace the 'home-filler-panel' */}
      <div id="home-filler-panel"></div>
      <AboutMePanel />
      <SoftwareProjectsPanel />
      <BlogPanel />
      <TimelinePanel />
      <ResumePanel />
      {/* TODO: Instagram Photo Feed */}
      <ContactPanel />
    </div>
  );
};

export default PageContent;
