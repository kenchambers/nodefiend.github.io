import React, { Component } from 'react';
import CodeWindow from './code-window';
import { Spring } from 'react-spring';

const AcheivmentBlock = () => (
  <div>
    <h2>React</h2>
    <div>
      <ul>
        <li>
          built hundreds of React Components in ES6/7, inside of a Redux
          Framework.
        </li>
        <li>
          converted redux actions/reducers to new versions as our understanding
          of redux expanded
        </li>
        <li>Helped build React with flux architecture Standalone Front End</li>
        <li>Integrated Material UI into Flux application.</li>
        <li>implemented socket notifcations</li>
      </ul>
    </div>
    <h2>Rails</h2>
    <div>
      <ul>
        <li>Designed RSPEC Framework for our backend Rails API</li>
        <li>
          Helped Debug AWS infrastructure , after remote team set it up and
          handed it over to us.
        </li>
        <li>
          Changed upload pattern for apps existing database models , replaced to
          use cloud front signed urls
        </li>
        <li>
          wrote rails migration script to transfer s3 assets from insecure to
          secure buckets on aws
        </li>
        <li>
          architected pundit pattern and wrapped all endpoints in policies
        </li>
      </ul>
    </div>
  </div>
);
const codeBlock = `
<pre><code>
function foo(chicken) {
  <tabReplace>if (chicken != "hen"){
    <tabReplace><tabReplace>this.mustBeARabbit(animal);
      <tabReplace>}
        <tabReplace>return 'bar'
}
</code>
</pre>`;

export default class AcheivementsComponent extends Component {
  onComplete = () => {};
  render() {
    return (
      <div>
        <div className="container">
          <CodeWindow
            filename={'/components/presentational/acheivements.js'}
            codeBlock={codeBlock}
            onComplete={this.onComplete}
            component={<AcheivmentBlock />}
          />
        </div>
      </div>
    );
  }
}
