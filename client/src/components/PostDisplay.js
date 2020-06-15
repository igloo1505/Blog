import React, { useEffect } from "react";
import appConstants from "../AppConstants";
import DisplayBlogNavigationFooter from "./DisplayBlogNavigationFooter";

const PostDisplay = (props) => {
  const { data, index, setIndex, dataArray } = props;
  return (
    <div className="card" style={appConstants.defaultWithoutMargin}>
      <h4 style={{ textAlign: "center", paddingTop: "20px" }}>{data.title}</h4>
      <h6 style={{ textAlign: "center" }}>{data.dataReadable}</h6>
      <h6 style={{ textAlign: "center" }}>Day Number {data.dayCount}</h6>
      <div
        style={{
          display: "flex",
          alignItems: "space-around",
          justifyContent: "space-around",
          flexGrow: "initial",
        }}
      >
        {data.subjectMatterArray.map((tag) => (
          <p
            key={tag}
            style={{
              border: "1px solid black",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {tag}
          </p>
        ))}
      </div>
      <div>
        {data.content.map((c) => (
          <p
            style={{
              marginLeft: "40px",
              marginRight: "40px",
              textIndent: "2rem",
            }}
          >
            {c}
          </p>
        ))}
      </div>

      <DisplayBlogNavigationFooter
        index={index}
        setIndex={setIndex}
        data={dataArray}
      />
    </div>
  );
};

export default PostDisplay;
