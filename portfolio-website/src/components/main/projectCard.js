import React, { Component } from "react";

class ProjectCard extends Component {
  render() {
    const { name, description, stack, image, id } = this.props.project;
    return (
      <div className="project-card">
        {/* {console.log(this.props.project)} */}
        <img src={image} alt="screenshot" />
        {/* TODO: use image carousel? */}
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{stack}</p>
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
