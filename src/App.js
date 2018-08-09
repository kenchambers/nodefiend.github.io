import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/header';
import ExperienceComponent from './components/experience';
import AcheivementsComponent from './components/acheivements';
import Particles from './components/particles';
import { Spring, animated } from 'react-spring';
const componentArray = [
  <HeaderComponent />,
  <AcheivementsComponent />,
  <ExperienceComponent />
];
class App extends Component {
  state = {
    toggle: true,
    components: componentArray
  };
  style = {
    nonCode: {
      fontFamily: 'Quicksand',
      color: '#ffc7e3'
    }
  };
  onToggle = () => this.setState(state => ({ toggle: !state.toggle }));
  onAddText = () =>
    this.setState(state => ({
      components: [...state.components, state.components[2]]
    }));
  onRemoveText = () =>
    this.setState(state => ({ components: state.components.slice(1) }));
  render() {
    const { toggle, components } = this.state;

    return (
      <div className="App">
        <button onClick={this.onToggle}>Toggle</button>
        <button onClick={this.onAddText}>Add text</button>
        <button onClick={this.onRemoveText}>Remove text</button>
        <div style={this.style.nonCode} className="container">
          <Spring
            native
            from={{ height: 0 }}
            to={{ height: toggle ? 'auto' : 0 }}>
            {props => (
              <animated.div className="item" style={props}>
                {components.map(c => <div>{c}</div>)}
              </animated.div>
            )}
          </Spring>
        </div>
      </div>
    );
  }
}

export default App;
