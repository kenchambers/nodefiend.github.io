import React, { Component } from 'react';
import Highlight from 'react-highlight';
import { Transition, animated, Spring } from 'react-spring';
import ParticlesComponent from './particles';
import './code-window.css';
import './atom-one-dark.css';
import { TimingAnimation, Easing } from 'react-spring/dist/addons';

export default class CodeWindow extends Component {
  state = {
    index: 0,
    fromOpacity: 0,
    toOpacity: 1,
    duration: 300,
    easing: Easing.linear
  };
  toggle = e =>
    //NOTE: second Transition
    this.setState(state => ({
      index: state.index === 2 ? 0 : state.index + 1,
      fromOpacity: 1,
      toOpacity: 0
    }));
  onRest = hi => {
    setTimeout(() => {
      this.toggle();
    }, 1000);
  };
  render() {
    if (this.state.index < 2) {
      return (
        <div>
          <span>
            <h1>{this.state.index}</h1>
          </span>

          <Spring
            impl={TimingAnimation}
            config={
              this.state.index == 0
                ? {
                    tension: 280,
                    friction: 60,
                    duration: 300,
                    easing: Easing.linear
                  }
                : {
                    tension: 180,
                    friction: 12,
                    duration: 1000,
                    easing: Easing.linear
                  }
            }
            onRest={this.onRest}
            delay={1000}
            from={{ opacity: this.state.fromOpacity }}
            to={{ opacity: this.state.toOpacity }}>
            {styles => (
              <div style={styles}>
                <div className="window">
                  <div className="titlebar">
                    <div className="buttons">
                      <div className="close" />
                      <div className="minimize" />
                      <div className="zoom" />
                    </div>
                    {this.props.filename}
                  </div>
                  <div className="content">
                    <Highlight innerHTML={true} className="javascript">
                      {this.props.codeBlock}
                    </Highlight>
                  </div>
                </div>
                <button onClick={this.toggle}>CLICK</button>
              </div>
            )}
          </Spring>
        </div>
      );
    } else {
      return (
        <div>
          <Spring delay={100} from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {styles => <div style={styles}>{this.props.component}</div>}
          </Spring>
        </div>
      );
    }
  }
}
