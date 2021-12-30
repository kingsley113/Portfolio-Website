import React from "react";

import { timelineEvents as events } from "../../data/data";
import TimelineEventCard from "./timelineEventCard";

const Timeline = () => {
  return (
    <React.Fragment>
      <div id="timeline-container">
        <div id="timeline-upper">
          <TimelineEventCard
            event={events[0]}
            left="50px"
            position="top"
            height="90%"
          />
          <TimelineEventCard
            event={events[0]}
            left="300px"
            position="top"
            height="90%"
          />
          <TimelineEventCard
            event={events[0]}
            left="350px"
            position="top"
            height="50%"
          />
        </div>
        <div id="timeline-line">
          <span>2021</span>
          <span>2020</span>
          <span>2019</span>
          <span>2018</span>
          <span>2017</span>
          <span>2016</span>
          <span>2015</span>
          <span>2014</span>
          <span>2013</span>
          <span>2012</span>
        </div>
        <div id="timeline-lower">
          <TimelineEventCard
            event={events[1]}
            left="120px"
            position="btm"
            height="40%"
          />
          <TimelineEventCard
            event={events[1]}
            left="520px"
            position="btm"
            height="40%"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Timeline;
