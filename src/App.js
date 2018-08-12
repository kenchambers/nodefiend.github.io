import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/header';
import ExperienceComponent from './components/experience';
import AcheivementsComponent from './components/acheivements';
import ArticlesComponent from './components/articles';
import SocialComponent from './components/social.js';
import Particles from './components/particles';
import { Spring, animated, Parallax } from 'react-spring';

class App extends Component {
  state = {
    toggle: true
  };
  style = {
    nonCode: {
      fontFamily: 'Quicksand',
      color: '#ffc7e3'
    }
  };

  render() {
    const { toggle, components } = this.state;

    return (
      <div className="App">
        <div style={this.style.nonCode} className="container">
          <Parallax ref={ref => (this.parallax = ref)} pages={5}>
            <Parallax.Layer
              factor={1}
              offset={0}
              speed={1}
              style={{ backgroundColor: '#805E73' }}>
              <HeaderComponent />
            </Parallax.Layer>
            <Parallax.Layer
              factor={1}
              offset={1}
              speed={1}
              style={{ backgroundColor: '#87BCDE' }}>
              <AcheivementsComponent />
            </Parallax.Layer>
            <Parallax.Layer
              factor={1}
              offset={2}
              speed={1}
              style={{ backgroundColor: '#805E73' }}>
              <ExperienceComponent />
            </Parallax.Layer>
            <Parallax.Layer
              factor={1}
              offset={3}
              speed={0.1}
              style={{ backgroundColor: '#87BCDE' }}>
              <ArticlesComponent />
            </Parallax.Layer>
            <Parallax.Layer
              factor={1}
              offset={4}
              speed={0.3}
              style={{ backgroundColor: 'green' }}>
              >
              <SocialComponent />
            </Parallax.Layer>
          </Parallax>
        </div>
      </div>
    );
  }
}

export default App;
