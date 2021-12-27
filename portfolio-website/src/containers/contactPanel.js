import React from "react";
import SectionDivider from "../components/sectionDivider";

const ContactPanel = () => {
  return (
    <React.Fragment>
      <SectionDivider text="Contact" />
      <div className="contact-panel" id="contact-panel">
        Contact Info Here
      </div>
    </React.Fragment>
  );
};

export default ContactPanel;
