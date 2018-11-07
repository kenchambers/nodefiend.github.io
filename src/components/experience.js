import React, { Component } from "react";
import CodeWindow from "./code-window";
const experience = {};

const ExperienceBlock = () => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-sm">
            <h3>2017 - Present (1.5 years)</h3>
          </div>
          <div className="col-sm">
            <h1>LOD PLANNER</h1>
            <p>React / Ruby On Rails Engineer</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <h3>2015 - 2017 (2 years)</h3>
          </div>
          <div className="col-sm">
            <h1>HireIris</h1>
            <p>React / Ruby On Rails Engineer</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <h3>2014 - 2015 (over 1 year)</h3>
          </div>
          <div className="col-sm">
            <h1>Critique ^ it</h1>
            <p>Software Engineer / PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const codeBlock = `

  const ExperienceComponent = ({experience}) => (
      <div>
        <div className="row">
          <div className="col-sm">
            <h3>experience[years]</h3>
          </div>
          <div className="col-sm">
            <h1>experience[company]</h1>
            <p>experience[title]</p>
          </div>
        </div>
  );

  ...
  <div className="container">
    {this.props.experiences(experience =>{
      return (
        <ExperienceComponent {...experience}/>
      )
    }}
  </div>
  ...

`;

export default class ExperienceComponent extends Component {
  onComplete = () => {};
  render() {
    return (
      <div>
        <div className="container">
          <CodeWindow
            filename={"/components/presentational/experience.js"}
            codeBlock={codeBlock}
            onComplete={this.onComplete}
            component={<ExperienceBlock />}
          />
        </div>
      </div>
    );
  }
}
