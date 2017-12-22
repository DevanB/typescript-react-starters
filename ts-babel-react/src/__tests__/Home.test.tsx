import * as React from 'react';
import { create } from 'react-test-renderer';
import Home from 'pages/Home';

it('renders the Home route correctly', () => {
  const tree = create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
