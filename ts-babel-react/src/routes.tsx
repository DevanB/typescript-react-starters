import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import { Loading } from 'components/Loading';

const HomeAsync = Loadable({
  loader: () => import('pages/Home'),
  loading: Loading
});

const Page2Async = Loadable({
  loader: () => import('pages/Page2'),
  loading: Loading
});

const Page3Async = Loadable({
  loader: () => import('pages/Page3'),
  loading: Loading
});

const Routes: React.SFC<{}> = () => (
  <Switch>
    <Route path="/" exact={true} component={HomeAsync} />
    <Route path="/about" exact={true} component={Page2Async} />
    <Route path="/team" exact={true} component={Page3Async} />
  </Switch>
);

export { Routes };
