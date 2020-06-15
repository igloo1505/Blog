import React from "react";

const DisplayBlogNavigationFooter = (props) => {
  const { data, index, setIndex } = props;

  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        marginBottom: "0px",
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {props.index !== 0 && (
        <div
          style={{
            float: "left",
            display: "flex",
            flex: 1,
            justifyContent: "flex-start",
            height: "100%",
            alignItems: "center",
          }}
          onClick={() => setIndex(index - 1)}
        >
          <i
            className="material-icons"
            style={{ marginTop: "10px", marginLeft: "10px" }}
          >
            arrow_back
          </i>
          <h6 style={{ marginLeft: "8px", marginBottom: "4px" }}>
            {data[index - 1].title}
          </h6>
        </div>
      )}

      {props.index !== props.data.length - 1 && (
        <div
          style={{
            float: "right",
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
            height: "100%",
            alignItems: "center",
          }}
          onClick={() => setIndex(index + 1)}
        >
          <h6 style={{ marginRight: "8px", marginBottom: "4px" }}>
            {data[index + 1].title}
          </h6>
          <i
            className="material-icons"
            style={{ marginTop: "10px", marginRight: "10px" }}
          >
            arrow_forward
          </i>
        </div>
      )}
    </div>
  );
};

export default DisplayBlogNavigationFooter;
