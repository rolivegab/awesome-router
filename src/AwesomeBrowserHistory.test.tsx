import React from 'react';
import Enzyme from 'enzyme';
import AwesomeBrowserHistory from './AwesomeBrowserHistory';

describe('AwesomeBrowserHistory unit tests', () => {
  test('It renders without crash', () => {
    Enzyme.mount(<AwesomeBrowserHistory />);
  });
});
