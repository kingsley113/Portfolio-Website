import React, { Component } from "react";
// Props: element id, button text
class ScrollLink extends Component {
  state = {
    // loading: true,
    position: 0,
    container: null,
    pageContent: null,
    scrollOffset: 100,
  };
  componentDidMount() {
    const element = document.getElementById(`${this.props.id}`);
    this.setState({
      position: element.getBoundingClientRect().left,
      container: document.getElementById("container"),
      pageContent: document.getElementById("page-content"),
    });
  }

  render() {
    return (
      <div>
        <button
          className={this.setActiveStyle()}
          onClick={() => this.handleClick()}
        >
          {this.props.text}
        </button>
      </div>
    );
  }

  handleClick(event) {
    const { position, container, scrollOffset } = this.state;
    // Scroll offset to fine tune position of scroll TODO: make this dynamic to screen width
    // const scrollOffset = 100;
    container.scrollTo({ left: position - scrollOffset, behavior: "smooth" });
  }

  setActiveStyle() {
    if (this.state.container && this.state.position) {
      const { container, position, scrollOffset, pageContent } = this.state;
      // console.log(position);
      if (
        container.scrollLeft + window.innerWidth / 2 >=
          position - scrollOffset ||
        container.scrollLeft + window.innerWidth >= pageContent.offsetWidth - 2
        // Small buffer to trigger just before page end
      ) {
        // console.log(`setting ${this.props.id} to active.`);
        return "nav-icon-active";
      } else {
        console.log(
          this.props.id,
          ": ",
          "scroll position: ",
          container.scrollLeft + window.innerWidth,
          "page width ",
          pageContent.offsetWidth
        );
        // console.log("viewport width", window.innerWidth);
        // console.log(`setting ${this.props.id} to inactive.`);
        return "nav-icon";
      }
    }
  }
}

export default ScrollLink;
