import React, { Component } from 'react';
const style = {
  dropShadow: {
    webkitBoxShadow: '9px 25px 158px -38px rgba(0,0,0,0.75)',
    mozBoxShadow: '9px 25px 158px -38px rgba(0,0,0,0.75)',
    boxShadow: '9px 25px 158px -38px rgba(0,0,0,0.75)'
  }
};
const HeaderComponent = () => {
  return (
    <div>
      <img
        style={{
          ...style.dropShadow,
          marginTop: '10vh',
          width: '40vw',
          borderRadius: '50%'
        }}
        src="https://s3-us-west-2.amazonaws.com/thecodebender.com/ken.jpg"
      />
      <div style={{ marginTop: 50 }}>
        <h1 className="App-title">Ken Chambers</h1>
        <h3>React || Ruby Ninja</h3>
        <span>code is my paintbrush and the web is my easel.</span>
      </div>
    </div>
  );
};

export default HeaderComponent;
