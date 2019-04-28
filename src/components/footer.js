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
          marginTop: "1vh",
          width: "200px",
          borderRadius: "50%"
        }}
        src="https://s3-us-west-2.amazonaws.com/thecodebender.com/photoofken.jpg"
      />
      <div style={{ marginTop: 50 }}>
        <h1 className="App-title">Ken Chambers</h1>
        <h5>i love it so much i do it in my free time...</h5>
        <h4>Wizards Apprentice for 4 + years</h4>
        <span>Looking to make more friends passionate about code</span>
        <br />
        <span>Please reach out to me through any social media Outlet :)</span>
        <span />
        <br />
        <span>Living and working in Irvine, Orange County CA</span>
        <br />
        <a
          href={"https://s3-us-west-1.amazonaws.com/codebender.com/Resume.pdf"}
        >
          <span
            style={{
              textDecoration: "underline",
              fontSize: 16,
              color: "#333333"
            }}
          >
            Resume
          </span>
        </a>
        <br />
        <a
          alt="alt"
          href="mailto:kenmichaelchambers@gmail.com?subject=Checked out your portfolio"
          style={{
            textDecoration: "underline",
            fontSize: 16,
            color: "#333333"
          }}
        >
          kenmichaelchambers@gmail.com
        </a>
      </div>
    </div>
  );
};

export default FooterComponent;
