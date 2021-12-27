import React, { Component } from "react";
// Props: element id, button text
class ScrollLink extends Component {
  state = {
    // loading: true,
    position: 0,
    container: null,
    pageContent: null,
    scrollOffset: null,
  };
  componentDidMount() {
    const element = document.getElementById(`${this.props.id}`);
    this.setState({
      position: element.getBoundingClientRect().left,
      container: document.getElementById("container"),
      pageContent: document.getElementById("page-content"),
      scrollOffset: window.innerWidth / 2 - 200,
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
    // console.log(this.props.id);
    // console.log(this.state.container, this.state.position);
    if (this.state.container) {
      // console.log("inside if statement");
      const { container, position, scrollOffset, pageContent } = this.state;
      // console.log(container.scrollLeft + window.innerWidth / 2, position);
      if (
        container.scrollLeft + window.innerWidth / 2 >= position - 200 ||
        container.scrollLeft + window.innerWidth >= pageContent.offsetWidth - 2
        // Small buffer to trigger just before page end
      ) {
        // console.log(`setting ${this.props.id} to active.`);
        return "nav-icon-active";
      } else {
        // console.log(
        //   this.props.id,
        //   ": ",
        //   "scroll position: ",
        //   container.scrollLeft + window.innerWidth,
        //   "page width ",
        //   pageContent.offsetWidth
        // );
        // console.log("viewport width", window.innerWidth);
        // console.log(`setting ${this.props.id} to inactive.`);
        return "nav-icon";
      }
    }
  }
}

export default ScrollLink;
