import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="flex-start">Home Portfolio About Blog Resume Contact</h2>
      <h2 className="flex-end"> footer icons here</h2>
    </div>
  );
};

export default Footer;

// Get id for element to scroll to
// use this to scroll: scrollTo({ left: x, behavior: "smooth" });
// Have icon trigger a scroll to function
// find offset to get elements to scroll to middle of page
//  use element.getBoundingClientRect().left to get the page position of target element
