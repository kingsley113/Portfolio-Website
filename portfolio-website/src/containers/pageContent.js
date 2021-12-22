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
      {/* <Parallax
        x={[100, -40]}
        // offsetXMax={-40} offsetXMin={20}
      > */}
      <Background />
      {/* </Parallax> */}
      <div id="home-filler-panel"></div>
      {/* <Parallax
        x={[100, -40]}
        // offsetXMax={-40} offsetXMin={20}
      > */}

      <AboutMePanel />
      <SoftwareProjectsPanel />
      {/* Blog Links */}
      <BlogPanel />
      {/* Personal Timeline */}
      <TimelinePanel />
      {/* Resume */}
      <ResumePanel />
      {/* Instagram Photo Feed */}
      {/* Contact */}
      <ContactPanel />
    </div>
  );
};

export default PageContent;
