import "./App.css";
import useHorizontal from "@oberon-amsterdam/horizontal/hook";
import React, { useState } from "react";

import Footer from "./containers/footer";
import PageContent from "./containers/pageContent";
import Background from "./components/main/background";

function App() {
  // Setup Horizontal Scroll
  const [container, setContainer] = useState();
  useHorizontal({ container: container });

  // Setup Scrolling Parallax
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = (event) => {
    setScrollPos(container.scrollLeft);
  };

  return (
    <div className="App">
      <div
        className="container"
        id="container"
        ref={(ref) => {
          setContainer(ref);
        }}
        onScroll={handleScroll}
      >
        <PageContent />
      </div>
      <Footer />
      <Background position={scrollPos} />
    </div>
  );
}

export default App;
