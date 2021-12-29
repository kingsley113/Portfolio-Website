import React, { Component } from "react";

class ProjectCard extends Component {
  render() {
    const { name, description, stack, image, id } = this.props.project;
    return (
      <div className="project-card">
        {/* {console.log(this.props.project)} */}
        <img src={image} alt="screenshot" />
        {/* TODO: use image carousel? */}
        <div className="project-details">
          <h1>{name}</h1>
          <h3>{stack}</h3>
          <p>{description}</p>
        </div>
        <div className="flex-horizontal project-footer">
          <div className="project-icon">TODO: git link</div>
          <div className="project-icon">TODO: link</div>
        </div>
      </div>
    );
  }
}

// TODO: Properties to include:
// Title
// Tagline/Category
// Description
// Stack Used
// Image
// Link to project/site
// Git Link

export default ProjectCard;
