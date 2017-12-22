import * as React from 'react';
import { create } from 'react-test-renderer';
import Page2 from 'pages/Page2';

it('renders the Page2 route correctly', () => {
  const tree = create(<Page2 />).toJSON();
  expect(tree).toMatchSnapshot();
});
