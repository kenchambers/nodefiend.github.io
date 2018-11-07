import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../particles-config";

class ParticlesComponent extends React.Component {
  render() {
    const { width, height } = this.props;
    return (
      <div>
        <Particles width={width} height={height} params={particlesConfig} />
      </div>
    );
  }
}

export default ParticlesComponent;
