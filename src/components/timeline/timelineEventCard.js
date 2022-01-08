import React from "react";

// Props needed: event object, position left in px, position vert in px (top or btm), height in %
const TimelineEventCard = (props) => {
  // Events on top of the timeline
  if (props.position === "top") {
    const componentStyle = {
      left: props.left,
      height: props.height,
    };
    return (
      <div className="timeline-event-card-top" style={componentStyle}>
        <h2>{props.event.title}</h2>
        <p>{props.event.date}</p>
        <p>{props.event.description}</p>
        {renderEventLink(props.event.link)}
        {/* <a href={props.event.link}>More</a> */}
      </div>
    );
  }

  // Events on bottom of the timeline
  if (props.position === "btm") {
    const componentStyle = {
      left: props.left,
      height: props.height,
    };
    return (
      <div className="timeline-event-card-btm" style={componentStyle}>
        <div className="filler-top"></div>
        <h2>{props.event.title}</h2>
        <p>{props.event.date}</p>
        <p>{props.event.description}</p>
        {renderEventLink(props.event.link)}
      </div>
    );
  }
};

const renderEventLink = (link) => {
  if (link && link !== "TODO:") {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="event-link">
        More
      </a>
    );
  }
};

export default TimelineEventCard;
