import React, { Component } from "react";
import CodeWindow from "./code-window";

const articlesData = [
  {
    title: "Using Tippecanoe, Tileserver GL...",
    image:
      "https://cdn-images-1.medium.com/max/720/1*lQAGryjZqhLy_PY2fAItnA.png",
    link:
      "https://medium.com/@kennethchambers/using-tippecanoe-tileserver-gl-and-leaflet-to-serve-scale-independent-and-really-cool-looking-751368d821c7"
  },
  {
    title: "Using sidekiq delayed_job for HUGE...",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--qYvaowLT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://images.unsplash.com/photo-1487339843780-54c8156335d0%3Fixlib%3Drb-0.3.5%26s%3Dcaf906fba6fdf411e5dfb24fe0131d51%26dpr%3D1%26auto%3Dformat%26fit%3Dcrop%26w%3D1000%26q%3D80%26cs%3Dtinysrgb",
    link:
      "https://dev.to/nodefiend/using-sidekiq-delayedjob-for-huge-delete-requests-in-rails--5b19"
  },
  {
    title: "Eager loading @current_user to save time...",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s---30JA6b8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/ge4popxc4ic41blkzfem.jpg",
    link:
      "https://dev.to/nodefiend/eager-loading-currentuser-to-save-time-on-pundit-policies-40m7"
  },
  {
    title: "Google Analytics with react-router v4",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--NBZ1Q6Z0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/54wurj7l55o4r9htf15j.jpg",
    link: "https://dev.to/nodefiend/google-analytics-with-react-router-v4-1eo"
  },
  {
    title: "Recursive Loop in Redux Reducer...",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--JPN1h5M2--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/2bc7a18u3y4yxfuyljnv.jpg",
    link:
      "https://dev.to/nodefiend/recursive-loop-in-redux-reducer-to-check-integrity-of-local-storage-30h"
  },
  {
    title: "Quick start guide for react router v4...",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--ciiU2bG9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/cm9c4zq7r98m95d2s5k8.jpg",
    link:
      "https://dev.to/nodefiend/quick-start-guide-for-react-router-v4-using-create-react-app-4h7j"
  },
  {
    title: "...title page to your PDF using CombinePDF",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--eFj8Nein--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/uwc155kjc12m4lsxys9s.jpg",
    link:
      "https://dev.to/nodefiend/adding-a-title-page-to-your-pdf-using-combinepdf-26hf"
  }
];

const Article = ({ title, image, link }) => (
  <div
    className="article-component container"
    onClick={() => window.open(link, "_blank")}
    style={{
      cursor: "pointer",
      width: 200,
      height: 200,
      backgroundColor: "white",
      boxShadow: "rgba(0, 0, 0, 0.75) 9px 25px 158px -38px"
    }}
  >
    <div className="row">
      <img style={{ height: 100, width: 190 }} src={image} />
    </div>
    <div className="row">
      <h3>{title}</h3>
    </div>
  </div>
);

const ArticlesBlock = () => (
  <div className="container">
    <div className="row">
      {articlesData.map((article, i) => {
        return (
          <div key={i} className="col">
            <Article {...article} />
          </div>
        );
      })}
    </div>
  </div>
);

const codeBlock = `
const Article = ({ title, image, link }) => (
  <div
    className="container"
    onClick={() => window.open(link, "_blank")}
    style={{
      width: 200,
      height: 200,
      backgroundColor: "white",
      boxShadow: "rgba(0, 0, 0, 0.75) 9px 25px 158px -38px"
    }}
  >
    <div className="row">
      <img style={{ height: 100, width: 190 }} src={image} />
    </div>
    <div className="row">
      <h3>{title}</h3>
    </div>
  </div>
);

const ArticlesBlock = () => (
  <div className="container">
    <div className="row">
      {articlesData.map(article => {
        return (
          <div className="col">
            <Article {...article} />
          </div>
        );
      })}
    </div>
  </div>
);
`;

export default class ArticlesComponent extends Component {
  onComplete = () => {};
  render() {
    return (
      <div className="container">
        <h1>Problem Solving</h1>
        <CodeWindow
          filename={"/components/presentational/articles.js"}
          codeBlock={codeBlock}
          onComplete={this.onComplete}
          component={<ArticlesBlock />}
        />
      </div>
    );
  }
}
