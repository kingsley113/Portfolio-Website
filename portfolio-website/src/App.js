import "./App.css";
import useHorizontal from "@oberon-amsterdam/horizontal/hook";
import React, { useState } from "react";

import { Parallax } from "react-scroll-parallax";

import Header from "./containers/header";
import Footer from "./containers/footer";
import PageContent from "./containers/pageContent";
import Background from "./components/main/background";

function App() {
  // Setup Horizontal Scroll
  const [container, setContainer] = useState();
  useHorizontal({ container: container });

  return (
    <div className="App">
      <Header />
      <div
        className="container"
        ref={(ref) => {
          setContainer(ref);
        }}
      >
        {/* <Parallax
          offsetXMax={-40}
          offsetXMin={20}
          // className="no-background"
        > */}
        <PageContent />
        {/* </Parallax> */}
      </div>
      <Footer />
      {/* <Background /> */}
    </div>
  );
}

export default App;
