import * as React from 'react';
import { Routes } from 'routes';
import { Header } from 'components/Header';

const App: React.SFC<{}> = () => (
  <div>
    <Header />
    <Routes />
  </div>
);

export default App;
