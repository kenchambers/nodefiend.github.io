import React, { Component } from "react";
import CodeWindow from "./code-window";
import { Spring } from "react-spring";

const acheivments = {
  ["react"]: [
    "built hundreds of React Components in ES6/7, inside of a Redux Framework.",
    "refactored redux actions/reducers to new versions as our understanding of redux expanded",
    "Helped architect React with flux/redux architecture ",
    "Integrated Material UI into redux/Flux application.",
    "implemented socket notifcations system on front end using socket io",
    "implemented react-dnd to create kanban board on production application",
    "implemented social logins for google/facebook/linkedin",
    "experienced integrator of open source libraries"
  ],
  ["rails"]: [
    "Designed RSPEC Framework for our backend Rails API",
    "Helped Debug AWS infrastructure , after remote team set it up and handed it over to us.",
    "Changed upload pattern for apps existing database models , replaced to use cloud front signed urls",
    "wrote rails migration script to transfer s3 assets from insecure to secure buckets on aws",
    "architected pundit pattern and wrapped all endpoints in policies",
    "experienced connector of external apis with rails servers."
  ]
};

const AcheivmentBlock = () => (
  <div>
    <h2>React</h2>
    <div>
      <ul>{acheivments.react.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
    <h2>Rails</h2>
    <div>
      <div>
        <ul>{acheivments.rails.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
    </div>
  </div>
);

const codeBlock = `

  const acheivementComponent = ({acheivements}) => (
    <div className="container">
      <div className="row">
        <h1> React </h1>
        <ul>
          {acheivements.react.map((item)=> <li>item</li)}
        </ul>
      </div>

      <div className="row">
        <h1> Rails </h1>
        <ul>
          {acheivements.rails.map((item)=> <li>item</li)}
        </ul>
      </div>
    <div>
  );

`;

export default class AcheivementsComponent extends Component {
  onComplete = () => {};
  render() {
    return (
      <div>
        <div className="container">
          <CodeWindow
            filename={"/components/presentational/acheivements.js"}
            codeBlock={codeBlock}
            onComplete={this.onComplete}
            component={<AcheivmentBlock />}
          />
        </div>
      </div>
    );
  }
}
