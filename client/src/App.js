import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./index.css";
import M from "materialize-css/dist/js/materialize.min.js";
import InputBlogPost from "./components/InputBlogPost";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { getAll, getByDateFromRecent } from "./actions";
import FilterByTagModal from "./components/FilterByFilterModal";

function App() {
  const [navState, setNavState] = useState("From The Beginning");
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    M.AutoInit();
  });
  useEffect(() => {
    const getData = async () => {
      console.log(data);
      if (navState === "From The Beginning") {
        let dataReturned = await getAll();
        setData(dataReturned);
        console.log(dataReturned);
        setIsLoaded(true);
        console.log(data);
      } else if (navState === "Most Recent") {
        let dataReturned = await getByDateFromRecent();
        setData(dataReturned);
        console.log(dataReturned);
        setIsLoaded(true);
        console.log(dataReturned[0].title);
        console.log(data);
      } else if (navState === "By Topic") {
        console.log("handle search by tag here");
        let instance = M.Modal.getInstance(
          document.getElementById("FilterTagModal")
        );
        instance.open();
        console.log(data);
      }
    };
    getData();
  }, [navState]);

  return (
    <div className="App mainContainer">
      {data && data.length > 0 && (
        <div>
          <Navbar navState={navState} setNavState={setNavState} />
          <FilterByTagModal setData={setData} setIsLoaded={setIsLoaded} />
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
                    <LandingPage
                      navState={navState}
                      setNavState={setNavState}
                      data={data}
                      isLoaded={isLoaded}
                    />
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
      )}{" "}
      {isLoaded == false && data.length !== 0 && (
        <div
          className="preloader-wrapper active"
          style={{
            marginTop: "50%",
            marginLeft: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      )}
      {isLoaded && data.length == 0 && (
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h1 style={{ color: "white", textAlign: "center" }}>
                    Woah. Something went wrong
                  </h1>
                  <h3 style={{ color: "white", textAlign: "center" }}>
                    Nothing was found
                  </h3>
                </div>
              )}
            />

            <Route
              exact
              path="/newBlogPost"
              component={() => <InputBlogPost />}
            />
          </Switch>
        </Router>
      )}
      <Footer />
    </div>
  );
}

export default App;
