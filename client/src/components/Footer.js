import React from "react";

const Footer = () => {
  return (
    <footer
      class="page-footer"
      style={{
        backgroundColor: "rgba(0,0,0,0.1)",
        borderTopColor: "#ccc",
        borderTopWidth: "1px",
        borderTopStyle: "ridge",
        height: "100%",
        paddingBottom: "20px",
      }}
    >
      <div
        class="container"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <a
          class="grey-text text-lighten-4 right"
          href="https://twitter.com/Andrew90151329"
          style={{
            height: "100%",
          }}
        >
          Twitter
        </a>
        <a
          class="grey-text text-lighten-4 right"
          href="http://igloo-development.com"
          style={{ height: "100%" }}
        >
          My Portfolio
        </a>
        <a
          class="grey-text text-lighten-4 right"
          href="www.linkedin.com/in/andrew-mueller-689626198"
          style={{ height: "100%" }}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
