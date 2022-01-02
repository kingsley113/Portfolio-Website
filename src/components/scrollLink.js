import React, { Component } from "react";
// Props: element id, button text
class ScrollLink extends Component {
  state = {
    position: 0,
    container: null,
    pageContent: null,
    scrollOffset: null,
  };

  componentDidMount() {
    const element = document.getElementById(`${this.props.id}`);
    window.addEventListener("load", this.handleLoad(element));
  }

  handleLoad(element) {
    this.setState({
      position: element.getBoundingClientRect().left,
      container: document.getElementById("container"),
      pageContent: document.getElementById("page-content"),
      // Scroll offset to fine tune position of scroll
      scrollOffset: window.innerWidth / 2 - 200,
    });
  }

  render() {
    return (
      <div id={`${this.props.id}-div`} className="nav-icon-container">
        <button className="nav-icon" onClick={() => this.handleClick()}>
          {this.props.text}
        </button>
        <div className={this.setActiveStyle()}></div>
      </div>
    );
  }

  handleClick() {
    const { position, container, scrollOffset } = this.state;
    container.scrollTo({ left: position - scrollOffset, behavior: "smooth" });
  }

  setActiveStyle() {
    if (this.state.container) {
      // Set CSS footer-bar property to render the nav underline bar
      const { container, position, pageContent } = this.state;
      if (
        container.scrollLeft + window.innerWidth / 2 >= position - 200 ||
        container.scrollLeft + window.innerWidth >= pageContent.offsetWidth - 2
        // Small buffer to trigger just before page end
      ) {
        return "inactive active";
      } else {
        return "inactive";
      }
    }
  }
}

export default ScrollLink;
