import "./App.css";
import useHorizontal from "@oberon-amsterdam/horizontal/hook";
import React, { useState } from "react";

import Header from "./containers/header";
import Footer from "./containers/footer";
import PageContent from "./containers/pageContent";

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
        <PageContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
