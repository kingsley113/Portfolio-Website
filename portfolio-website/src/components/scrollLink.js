import React, { Component } from "react";
// Props: element id, button text
class ScrollLink extends Component {
  componentDidMount() {
    const element = document.getElementById(`${this.props.id}`);
    this.setState({
      position: element.getBoundingClientRect().left,
      container: document.getElementById("container"),
    });
  }

  render() {
    return (
      <div>
        <button className="nav-icon" onClick={() => this.handleClick()}>
          {this.props.text}
        </button>
      </div>
    );
  }

  handleClick(event) {
    const { position, container } = this.state;
    // Scroll offset to fine tune position of scroll TODO: make this dynamic to screen width
    const scrollOffset = 100;
    container.scrollTo({ left: position - scrollOffset, behavior: "smooth" });
  }
}

export default ScrollLink;
