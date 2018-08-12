import React, { Component } from 'react';
import CodeWindow from './code-window';

const Article = ({ title, image }) => (
  <div
    className="container"
    style={{
      width: 200,
      height: 200,
      backgroundColor: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.75) 9px 25px 158px -38px'
    }}>
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
      <div className="col">
        <Article
          title={'Using sidekiq delayed_job for HUGE delete requests in Rails'}
          image={
            'https://res.cloudinary.com/practicaldev/image/fetch/s--qYvaowLT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://images.unsplash.com/photo-1487339843780-54c8156335d0%3Fixlib%3Drb-0.3.5%26s%3Dcaf906fba6fdf411e5dfb24fe0131d51%26dpr%3D1%26auto%3Dformat%26fit%3Dcrop%26w%3D1000%26q%3D80%26cs%3Dtinysrgb'
          }
        />
      </div>
      <div className="col">
        <Article
          title={'Using sidekiq delayed_job for HUGE delete requests in Rails'}
          image={
            'https://res.cloudinary.com/practicaldev/image/fetch/s--qYvaowLT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://images.unsplash.com/photo-1487339843780-54c8156335d0%3Fixlib%3Drb-0.3.5%26s%3Dcaf906fba6fdf411e5dfb24fe0131d51%26dpr%3D1%26auto%3Dformat%26fit%3Dcrop%26w%3D1000%26q%3D80%26cs%3Dtinysrgb'
          }
        />
      </div>
      <div className="col">
        <Article
          title={'Using sidekiq delayed_job for HUGE delete requests in Rails'}
          image={
            'https://res.cloudinary.com/practicaldev/image/fetch/s--qYvaowLT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://images.unsplash.com/photo-1487339843780-54c8156335d0%3Fixlib%3Drb-0.3.5%26s%3Dcaf906fba6fdf411e5dfb24fe0131d51%26dpr%3D1%26auto%3Dformat%26fit%3Dcrop%26w%3D1000%26q%3D80%26cs%3Dtinysrgb'
          }
        />
      </div>
      <div className="col">
        <Article
          title={'Using sidekiq delayed_job for HUGE delete requests in Rails'}
          image={
            'https://res.cloudinary.com/practicaldev/image/fetch/s--qYvaowLT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://images.unsplash.com/photo-1487339843780-54c8156335d0%3Fixlib%3Drb-0.3.5%26s%3Dcaf906fba6fdf411e5dfb24fe0131d51%26dpr%3D1%26auto%3Dformat%26fit%3Dcrop%26w%3D1000%26q%3D80%26cs%3Dtinysrgb'
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

export default class ArticlesComponent extends Component {
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
