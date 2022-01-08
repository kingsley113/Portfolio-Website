import React, { Component } from "react";

class ProjectCard extends Component {
  render() {
    const { name, description, stack, image, githubLink, link, youtubeLink } =
      this.props.project;
    return (
      <div className="project-card">
        <img src={image} alt="screenshot" className="project-thumbnail" />
        <div className="project-details">
          <h1>{name}</h1>
          <h3>{stack}</h3>
          <p className="project-description">{description}</p>
        </div>
        <div className="flex-horizontal project-footer">
          {this.renderGithubLink(githubLink)}
          {this.renderProjectLink(link)}
          {/* <div className="project-link" onClick={() => window.open(link)}>
            Visit Project
          </div> */}
          {this.renderYoutubeLink(youtubeLink)}
        </div>
      </div>
    );
  }

  renderProjectLink(link) {
    if (link && link !== "TODO:") {
      return (
        <div className="project-link" onClick={() => window.open(link)}>
          Visit Project
        </div>
      );
    }
  }

  renderGithubLink(githubLink) {
    if (githubLink && githubLink !== "TODO:") {
      return (
        <img
          src={process.env.PUBLIC_URL + "/icons/GitHub-Mark-Light-64px.png"}
          alt="Github Mark"
          className="project-icon"
          onClick={() => window.open(githubLink)}
        />
      );
    }
  }

  renderYoutubeLink(youtubeLink) {
    if (youtubeLink && youtubeLink !== "TODO:") {
      return (
        <img
          src={process.env.PUBLIC_URL + "/icons/yt_icon_mono_dark.png"}
          alt="Github Mark"
          className="project-icon"
          onClick={() => window.open(youtubeLink)}
        />
      );
    }
  }
}

export default ProjectCard;
