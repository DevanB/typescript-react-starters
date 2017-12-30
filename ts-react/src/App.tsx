import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Routes } from 'routes';
import { Header } from 'components/Header';

const App: React.SFC<{}> = () => (
  <>
    <Header />
    <Routes />
  </>
);

export default hot(module)(App);
