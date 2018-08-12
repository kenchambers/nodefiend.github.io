import React, { Component } from 'react';
import Highlight from 'react-highlight';
import ParticlesComponent from './particles';
import './code-window.css';
import './atom-one-dark.css';
import { Spring, Transition, animated } from 'react-spring';

const Code = ({ codeBlock, filename }) => (
  <div className="window">
    <div className="titlebar">
      <div className="buttons">
        <div className="close" />
        <div className="minimize" />
        <div className="zoom" />
      </div>
      {filename}
    </div>
    <div className="content">
      <Highlight innerHTML={true} className="javascript">
        {codeBlock}
      </Highlight>
    </div>
  </div>
);

const ReturnedComponent = ({ component }) => <div>{component}</div>;

const Particles = () => <ParticlesComponent width={300} height={200} />;

export default class CodeWindow extends Component {
  state = {
    fromOpacity: 0,
    toOpacity: 1,
    duration: 300
  };

  render() {
    return (
      <div>
        <span>
          <h1>{this.state.index}</h1>
        </span>
        <Code {...this.props} />
        <ReturnedComponent {...this.props} />
        <Particles />
      </div>
    );
  }
}
