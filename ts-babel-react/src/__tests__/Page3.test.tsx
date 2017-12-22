import * as React from 'react';
import { create } from 'react-test-renderer';
import Page3 from 'pages/Page3';

it('renders the Page3 route correctly', () => {
  const tree = create(<Page3 />).toJSON();
  expect(tree).toMatchSnapshot();
});
