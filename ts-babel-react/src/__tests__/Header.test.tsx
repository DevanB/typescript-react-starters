import * as React from 'react';
import { create } from 'react-test-renderer';
import { Header } from 'components/Header';
import { StaticRouter } from 'react-router';

it('renders the Header component correctly', () => {
  const context = {};

  const tree = create(
    <StaticRouter context={context}>
      <Header />
    </StaticRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
