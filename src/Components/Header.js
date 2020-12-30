import React from "react";
import Logo from "../Images/Logo";

const header = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#e83909",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <img style={{ height: 30, padding: "10px" }} src={Logo} alt="logo" />
      <strong style={{ padding: "10px" }}>Search Hacker News</strong>
      <input
        style={{
          float: "right",
          padding: "6px",
          float: "right",
          border: "none",
          marginTop: "12px",
          marginBottom: "10px",
          marginRight: "16px",
          fontSize: "17px"
        }}
        type="text"
        placeholder="search"
        size="10"
      />
    </div>
  );
};

export default header;
