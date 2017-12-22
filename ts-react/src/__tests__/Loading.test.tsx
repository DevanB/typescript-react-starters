import * as React from 'react';
import { create } from 'react-test-renderer';
import { Loading } from 'components/Loading';

it('renders the Loading component correctly', () => {
  const tree = create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});
