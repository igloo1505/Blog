import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./index.css";
import M from "materialize-css/dist/js/materialize.min.js";
import InputBlogPost from "./components/InputBlogPost";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  const [navState, setNavState] = useState("From The Beginning");

  return (
    <div className="App mainContainer">
      <Navbar navState={navState} setNavState={setNavState} />
      <div className="container">
        <Router>
          <h1
            style={{
              textAlign: "center",
              marginTop: "0px",
              paddingTop: "80px",
            }}
          >
            #100 days of Code
          </h1>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <LandingPage navState={navState} setNavState={setNavState} />
              )}
            />
            <Route
              exact
              path="/newBlogPost"
              component={() => <InputBlogPost />}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
