import React, { useEffect, useState } from "react";
import { getAll } from "../actions";
import PostDisplay from "./PostDisplay";

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      let dataReturned = await getAll();
      console.log("returned", dataReturned);
      setData(dataReturned[0]);
      setIsLoaded(true);
    };
    getData();
  }, []);
  return isLoaded ? <PostDisplay data={data} /> : "";
};

export default LandingPage;
