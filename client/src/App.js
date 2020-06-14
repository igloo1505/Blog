import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./index.css";
import M from "materialize-css/dist/js/materialize.min.js";
import InputBlogPost from "./components/InputBlogPost";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <div className="container">
        <Router>
          <h1 style={{ textAlign: "center" }}>#100 days of Code</h1>
          <Switch>
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
