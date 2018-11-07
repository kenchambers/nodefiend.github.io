import React, { Component } from "react";
import CommitComponent from "./commit-component";

const style = {
  dropShadow: {
    WebkitBoxShadow: "9px 25px 158px -38px rgba(0,0,0,0.75)",
    MozBoxShadow: "9px 25px 158px -38px rgba(0,0,0,0.75)",
    boxShadow: "9px 25px 158px -38px rgba(0,0,0,0.75)"
  }
};

const FooterComponent = () => {
  return (
    <div style={{ padding: 25 }}>
      <img
        style={{
          ...style.dropShadow,
          marginTop: "10vh",
          width: "200px",
          borderRadius: "50%"
        }}
        src="https://s3-us-west-2.amazonaws.com/thecodebender.com/photoofken.jpg"
      />
      <div style={{ marginTop: 50 }}>
        <h1 className="App-title">Ken Chambers</h1>
        <h3>React || Ruby Ninja</h3>
        <span>Looking to make more friends passionate about code</span>
        <br />
        <span>Please reach out to me through any social media Outlet :)</span>
        <span />
        <br />
        <span>Living and working in Irvine, Orange County CA</span>
      </div>
    </div>
  );
};

export default FooterComponent;
