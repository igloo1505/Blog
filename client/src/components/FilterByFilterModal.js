import React, { useLayoutEffect, useState } from "react";
import { getTagArray, getByTag } from "../actions";
import M from "materialize-css/dist/js/materialize.min.js";

const FilterByTagModal = (props) => {
  console.log("props in modal", props);
  const [data, setData] = useState([]);
  useLayoutEffect(() => {
    let dataHolder;
    const getTags = async () => {
      dataHolder = await getTagArray();
      setData(dataHolder);
    };
    getTags();
  }, []);
  const handleTagSelect = (d) => {
    let returnedFromTag = getByTag(d);
    props.setData(returnedFromTag);
    let instance = M.Modal.getInstance(
      document.getElementById("FilterTagModal")
    );
    instance.close();
    props.setIsLoaded(true);
  };

  return (
    <div className="modal modal-fixed-footer" id="FilterTagModal">
      <div
        className="modal-content"
        style={{ marginBottom: "20px", overflowY: "scroll", maxHeight: "90vh" }}
      >
        <div>
          <h5 style={{ textAlign: "center" }}>
            Some tags I've mentioned so far
          </h5>
          <p style={{ textAlign: "center" }}>Click to filter</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
          className="modal-body"
        >
          {data.map((d) => (
            <p
              key={d}
              style={{
                border: "1px solid black",
                padding: "10px",
                borderRadius: "5px",
              }}
              onClick={() => handleTagSelect(d)}
            >
              {d}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterByTagModal;
