import React, { useState } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import Axios from "axios";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import appConstants from "../AppConstants";

const InputBlogPost = (props) => {
  const [title, setTitle] = useState("");
  const [subjectMatter, setSubjectMatter] = useState([]);
  const [currentTag, setCurrentTag] = useState("");
  const [contentParagraph, setContentParagraph] = useState("");
  const [toDelete, setToDelete] = useState(null);
  const [content, setContent] = useState([]);
  const handleNewTag = (k) => {
    setSubjectMatter([...subjectMatter, currentTag]);
    setCurrentTag("");
  };
  const confirmDelete = (e) => {
    setToDelete(e);
    let instance = M.Modal.getInstance(
      document.getElementById("confirmDeleteModal")
    );
    instance.open();
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const handleSubmit = async () => {
    let newPost = {
      title,
      subjectMatterArray: subjectMatter,
    };
    if (contentParagraph === "") {
      newPost.content = content;
    } else if (contentParagraph.length > 0) {
      newPost.content = [...content, contentParagraph];
    }
    const res = await Axios.post("/postBlog", newPost, config);
    console.log(res.data);
  };
  const appendBreak = () => {
    setContent([...content, contentParagraph]);
    setContentParagraph("");
  };
  return (
    <div className="row cardMain" style={appConstants.defaultCardStyle}>
      <ConfirmDeleteModal
        toDelete={toDelete}
        content={content}
        setContent={setContent}
      />
      <form className="col s12" style={{ padding: "30px" }}>
        <div className="col s12">
          <input
            placeholder="Post Title"
            id="post_title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="post_title">Post Title</label>
        </div>
        <div className="col s12">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {subjectMatter.map((s) => (
              <p
                key={s}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                {s}
              </p>
            ))}
          </div>
        </div>
        <div className="col s12" style={{ marginTop: "50px" }}>
          <input
            placeholder="Post Tags"
            id="post_tags"
            type="text"
            value={currentTag}
            onChange={(e) => setCurrentTag(e.target.value)}
            onKeyUp={(k) => {
              if (k.key === "Enter") {
                handleNewTag(k);
              }
            }}
          />
          <label htmlFor="post_tags">Post Tags</label>
        </div>
        <div>
          {content.map((c) => (
            <p
              key={c}
              style={{ marginTop: "10px", textAlign: "center" }}
              onClick={(e) => confirmDelete(c)}
            >
              {c}
            </p>
          ))}
          <p style={{ marginTop: "10px", textAlign: "center" }}>
            {contentParagraph}
          </p>
        </div>
        <div className="col s12 input-field" style={{ marginTop: "50px" }}>
          <textarea
            placeholder="Post Body"
            className="materialize-textarea"
            id="post_body"
            type="text"
            onChange={(e) => {
              setContentParagraph(e.target.value);
            }}
            value={contentParagraph}
            rows={10}
            height={6}
            onKeyUp={(k) => {
              if (k.key === "Enter") {
                appendBreak();
              }
            }}
          />
          <label htmlFor="post_body">Post Body</label>
        </div>
        <a
          className="waves-effect waves-light btn-large"
          style={{
            marginLeft: "50%",
            transform: "translateX(-50%)",
          }}
          onClick={() => handleSubmit()}
        >
          <i className="material-icons right">send</i>Post
        </a>
      </form>
    </div>
  );
};

export default InputBlogPost;
