import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ejs from 'ejs';

import App from './App';
import template from './index.ejs';

module.exports = locals => {
  const html = renderToString(
    React.createElement(StaticRouter, { location: locals.path }, React.createElement(App, null))
  );
  const helmet = Helmet.renderStatic();

  return ejs.render(
    template,
    {
      chunks: locals.chunks,
      helmet,
      html,
      icons: locals.icons
    },
    { rmWhitespace: true }
  );
};
