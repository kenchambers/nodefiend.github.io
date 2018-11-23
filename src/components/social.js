import React, { Component } from "react";
import CodeWindow from "./code-window";
import Highlight from "react-highlight";
import ParticlesComponent from "./particles";
import { Spring, animated } from "react-spring";
import styles from "./social-styles.css";
import classnames from "classnames";

const gitCode = `
    const socialData = [
      {
        id: 1,
        title: "Github",
        image:
          "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png",
        link: "https://github.com/nodefiend",
        filename: "it-was.js",
        code: gitCode
      },
      {
        id: 2,
        title: "Dev.to",
        image:
          "https://camo.githubusercontent.com/6bc5e62e0bf5e21ab8054b731540529bbc8e01b3/68747470733a2f2f6432666c746978307632653073622e636c6f756466726f6e742e6e65742f6465762d62616467652e737667",
        link: "https://dev.to/nodefiend",
        filename: "so-much.js",
        code: devCode
      },
      {
        id: 3,
        title: "Stack 0",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c0/Stackoverflow_meaningful_logo.svg",
        link: "https://stackoverflow.com/users/4497818/codejunkie",
        filename: "fun-for.js",
        code: stackCode
      },
      {
        id: 4,
        title: "Angelist",
        image: "https://png.icons8.com/material/1600/angelist.png",
        link: "https://angel.co/kenneth-chambers-1",
        filename: "me-to.js",
        code: angelCode
      },
      {
        id: 5,
        title: "LinkedIn",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/2000px-Linkedin.svg.png",
        link: "https://linkedin.com/in/codeaholic/",
        filename: "build-this.js",
        code: linkedInCode
      },
      {
        id: 6,
        title: "Facebook",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Facebook_F_icon.svg",
        link: "https://www.facebook.com/kenneth.chambers.925",
        filename: "portfolio.js",
        code: facebookCode
      }
    ];

`;

const devCode = `
    import React from 'react';
    import Particles from 'react-particles-js';
    import particlesConfig from '../particles-config';

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

`;

const stackCode = `

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
          <Highlight language="javascript">{codeBlock}</Highlight>
        </div>
      </div>
    );


`;

const angelCode = `
    const SocialContainer = ({
      social: { id, title, image, link, filename, code },
      selectedBlock,
      onClick
    }) => (
      <div>
        {id === selectedBlock && (
          <div className="row">
            <Spring delay={100} native from={{ opacity: 0 }} to={{ opacity: 1 }}>
              {props => (
                <animated.div style={props}>
                  <div style={{ backgroundColor: "#fff", width: "100%" }}>
                    <div
                      onClick={() => window.open(link, "_blank")}
                      style={{ cursor: "pointer" }}
                    >
                      <span style={{ margin: 5, padding: 5 }}>Click Here</span>
                    </div>
                  </div>
                </animated.div>
              )}
            </Spring>
          </div>
        )}

        <div
          className={classnames("socialBox", "container", {
            fadeIn: id === selectedBlock
          })}
          onClick={() => onClick(id)}
        >
          <div className="row">
            <img style={{ height: 25, width: 25 }} src={image} />
          </div>
          <div className="row">
            <h3>{title}</h3>
            <span style={{ size: 5 }}> : {selectedBlock} </span>
            <br />
          </div>
          {id === selectedBlock && (
            <div>
              <Spring delay={100} native from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {props => (
                  <animated.div style={props}>
                    <Particles />
                  </animated.div>
                )}
              </Spring>

              <span style={{ size: 5 }}> : {id} </span>
              <br />
            </div>
          )}
        </div>
      </div>
    );

`;

const linkedInCode = `

    const codeWindowProps = {
      codeBlock,
      filename: "social-buttons.js"
    };

    const SocialBlock = ({ selectedBlock, onClick }) => (
      <div>
        <div className="row">
          <div className="container">
            <Code {...codeWindowProps} />
          </div>
        </div>
        <div className="row">
          {socialData.map(social => {
            const props = {
              social,
              onClick,
              selectedBlock
            };
            return (
              <div key={social.id} className="col">
                <SocialContainer {...props} />
              </div>
            );
          })}
        </div>
      </div>
    );

`;

const facebookCode = `

    export default class SocialComponent extends React.Component {
      state = {
        selectedBlock: 1
      };
      onClick = selectedBlock => {
        this.setState({
          selectedBlock
        });
      };
      render() {
        const SocialProps = {
          selectedBlock: this.state.selectedBlock,
          onClick: this.onClick
        };

        return (
          <div style={{ marginTop: 100 }} className="container">
            <SocialBlock {...SocialProps} />
          </div>
        );
      }
    }


`;

const socialData = [
  {
    id: 1,
    title: "Github",
    image:
      "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png",
    link: "https://github.com/nodefiend",
    filename: "it-was.js",
    code: gitCode
  },
  {
    id: 2,
    title: "Dev.to",
    image:
      "https://camo.githubusercontent.com/6bc5e62e0bf5e21ab8054b731540529bbc8e01b3/68747470733a2f2f6432666c746978307632653073622e636c6f756466726f6e742e6e65742f6465762d62616467652e737667",
    link: "https://dev.to/nodefiend",
    filename: "so-much.js",
    code: devCode
  },
  {
    id: 3,
    title: "Stack 0",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/Stackoverflow_meaningful_logo.svg",
    link: "https://stackoverflow.com/users/4497818/codejunkie",
    filename: "fun-for.js",
    code: stackCode
  },
  {
    id: 4,
    title: "Angelist",
    image: "https://png.icons8.com/material/1600/angelist.png",
    link: "https://angel.co/kenneth-chambers-1",
    filename: "me-to.js",
    code: angelCode
  },
  {
    id: 5,
    title: "LinkedIn",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/2000px-Linkedin.svg.png",
    link: "https://linkedin.com/in/codeaholic/",
    filename: "build-this.js",
    code: linkedInCode
  },
  {
    id: 6,
    title: "Facebook",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Facebook_F_icon.svg",
    link: "https://www.facebook.com/kenneth.chambers.925",
    filename: "portfolio.js",
    code: facebookCode
  }
];

const Particles = () => <ParticlesComponent width={150} height={150} />;

const codeBlockFunction = selectedBlock => {
  let index = selectedBlock - 1;

  switch (index) {
    case 0:
      return gitCode;
      break;
    case 1:
      return devCode;
      break;
    case 2:
      return stackCode;
      break;
    case 3:
      return angelCode;
      break;
    case 4:
      return linkedInCode;
      break;
    case 5:
      return facebookCode;
      break;
    default:
  }
};

const Code = ({ selectedBlock }) => (
  <div className="window">
    <div className="titlebar">
      <div className="buttons">
        <div className="close" />
        <div className="minimize" />
        <div className="zoom" />
      </div>
      {"was-so-fun-to-build-this.js"}
    </div>
    <div className="content">
      <Highlight language="javascript">
        {codeBlockFunction(selectedBlock)}
      </Highlight>
    </div>
  </div>
);

const SocialContainer = ({
  social: { id, title, image, link, filename, code },
  selectedBlock,
  onClick
}) => (
  <div>
    {id === selectedBlock && (
      <div className="row">
        <Spring delay={100} native from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => (
            <animated.div style={props}>
              <div style={{ backgroundColor: "#fff", width: "100%" }}>
                <div
                  onClick={() => window.open(link, "_blank")}
                  style={{ cursor: "pointer" }}
                >
                  <span style={{ margin: 5, padding: 5 }}>Click Here</span>
                </div>
              </div>
            </animated.div>
          )}
        </Spring>
      </div>
    )}

    <div
      className={classnames("socialBox", "container", {
        fadeIn: id === selectedBlock
      })}
      onClick={() => onClick(id)}
    >
      <div className="row">
        <img style={{ height: 25, width: 25 }} src={image} />
      </div>
      <div className="row">
        <h3>{title}</h3>
        <span style={{ size: 5 }}> : {selectedBlock} </span>
        <br />
      </div>
      {id === selectedBlock && (
        <div>
          <Spring delay={100} native from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {props => (
              <animated.div style={props}>
                <Particles />
              </animated.div>
            )}
          </Spring>

          <span style={{ size: 5 }}> : {id} </span>
          <br />
        </div>
      )}
    </div>
  </div>
);

const SocialBlock = ({ selectedBlock, onClick }) => (
  <div>
    <h1>The Web self</h1>
    <div className="row">
      {socialData.map(social => {
        const props = {
          social,
          onClick,
          selectedBlock
        };
        return (
          <div key={social.id} className="col">
            <SocialContainer {...props} />
          </div>
        );
      })}
    </div>
    <div className="row">
      <div className="container">
        <Code selectedBlock={selectedBlock} />
      </div>
    </div>
  </div>
);

export default class SocialComponent extends React.Component {
  state = {
    selectedBlock: 1
  };
  onClick = selectedBlock => {
    this.setState({
      selectedBlock
    });
  };
  render() {
    const SocialProps = {
      selectedBlock: this.state.selectedBlock,
      onClick: this.onClick
    };

    return (
      <div style={{ marginTop: 100 }} className="container">
        <SocialBlock {...SocialProps} />
      </div>
    );
  }
}
