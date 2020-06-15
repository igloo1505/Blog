import React, { useEffect, useState } from "react";
import { getAll, getByDateFromRecent } from "../actions";
import PostDisplay from "./PostDisplay";

const LandingPage = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIsLoaded(props.isLoaded);
  }, [props]);

  return isLoaded ? (
    <PostDisplay
      data={props.data[index]}
      dataArray={props.data}
      index={index}
      setIndex={setIndex}
    />
  ) : (
    ""
  );
};

export default LandingPage;
