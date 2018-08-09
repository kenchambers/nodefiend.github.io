import React, { Component } from 'react';
import CodeWindow from './code-window';
import { Spring } from 'react-spring';

const AcheivmentBlock = () => (
  <div>
    <div>
      SPAN SPNAKDKAKK:ALSKD:KD FAKCKCKKKKSKSSPAN SPNAKDKAKK:ALSKD:KD
      FAKCKCKKKKSKSSPAN SPNAKDKAKK:ALSKD:KD FAKCKCKKKKSKS SPAN
      SPNAKDKAKK:ALSKD:KD FAKCKCKKKKSKSSPAN SPNAKDKAKK:ALSKD:KD
      FAKCKCKKKKSKSSPAN SPNAKDKAKK:ALSKD:KD FAKCKCKKKKSKS SPAN
      SPNAKDKAKK:ALSKD:KD FAKCKCKKKKSKSSPAN SPNAKDKAKK:ALSKD:KD
      FAKCKCKKKKSKSSPAN SPNAKDKAKK:ALSKD:KD SPAN SPNAKDKAKK:ALSKD:KD
      FAKCKCKKKKSKSSPAN SPNAKDKAKK:ALSKD:KD FAKCKCKKKKSKSSPAN
      SPNAKDKAKK:ALSKD:KD FAKCKCKKKKSKS SPAN SPNAKDKAKK:ALSKD:KD
      FAKCKCKKKKSKSSPAN SPNAKDKAKK:ALSKD:KD FAKCKCKKKKSKSSPAN
      SPNAKDKAKK:ALSKD:KD FAKCKCKKKKSKS
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
        <div style={{ width: '50vw' }} className="container" />
        <CodeWindow
          filename={'/components/presentational/acheivements.js'}
          codeBlock={codeBlock}
          onComplete={this.onComplete}
          component={<AcheivmentBlock />}
        />
      </div>
    );
  }
}
