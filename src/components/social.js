import React, { Component } from 'react';
import CodeWindow from './code-window';

const SocialContainer = ({ social, image }) => (
  <div
    className="container"
    style={{
      width: 100,
      height: 100,
      backgroundColor: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.75) 9px 25px 158px -38px'
    }}>
    <div className="row">
      <img style={{ height: 25, width: 25 }} src={image} />
    </div>
    <div className="row">
      <h3>{social}</h3>
    </div>
  </div>
);

const ArticlesBlock = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <SocialContainer
          social={'Github'}
          image={
            'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
          }
        />
      </div>
      <div className="col">
        <SocialContainer
          social={'Dev.to'}
          image={
            'https://camo.githubusercontent.com/6bc5e62e0bf5e21ab8054b731540529bbc8e01b3/68747470733a2f2f6432666c746978307632653073622e636c6f756466726f6e742e6e65742f6465762d62616467652e737667'
          }
        />
      </div>
      <div className="col">
        <SocialContainer
          social={'StackOverflow'}
          image={
            'https://upload.wikimedia.org/wikipedia/commons/c/c0/Stackoverflow_meaningful_logo.svg'
          }
        />
      </div>
      <div className="col">
        <SocialContainer
          social={'Angelist'}
          image={'https://png.icons8.com/material/1600/angelist.png'}
        />
      </div>
      <div className="col">
        <SocialContainer
          social={'LinkedIn'}
          image={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/2000px-Linkedin.svg.png'
          }
        />
      </div>
      <div className="col">
        <SocialContainer
          social={'Facebook'}
          image={
            'https://upload.wikimedia.org/wikipedia/commons/d/d5/Facebook_F_icon.svg'
          }
        />
      </div>
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

export default class SocialComponent extends Component {
  onComplete = () => {};
  render() {
    return (
      <div>
        <CodeWindow
          filename={'/components/presentational/articles.js'}
          codeBlock={codeBlock}
          onComplete={this.onComplete}
          component={<ArticlesBlock />}
        />
      </div>
    );
  }
}
