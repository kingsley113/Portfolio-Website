import React from "react";
import SectionDivider from "../components/sectionDivider";

const BlogPanel = () => {
  return (
    <React.Fragment>
      <SectionDivider text="Blogs" />
      <div className="blog-card solid-background"></div>
    </React.Fragment>
  );
};

export default BlogPanel;
