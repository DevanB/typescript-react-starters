import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

function doRender(): void {
  const renderMethod = process.env.NODE_ENV === 'production' ? ReactDOM.hydrate : ReactDOM.render;
  renderMethod(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
}

doRender();
