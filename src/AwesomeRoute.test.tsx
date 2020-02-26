import React from 'react';
import Enzyme from 'enzyme';
import PropTypes from 'prop-types';
import AwesomeRoute from './AwesomeRoute';
import AwesomeBrowserHistory from './AwesomeBrowserHistory';
import useAwesomeRouter from './useAwesomeRouter';

describe('AwesomeRoute unit tests', () => {
  test('inside route renders a "Hello World!" text', () => {
    const wrapper = Enzyme.mount(
      <AwesomeBrowserHistory>
        <AwesomeRoute path="/lay">
          <div>Lay!</div>
        </AwesomeRoute>
        <AwesomeRoute path="/">
          <div>Hello World!</div>
        </AwesomeRoute>
      </AwesomeBrowserHistory>,
    );

    expect(wrapper.find('div').text()).toBe('Hello World!');
  });

  test('awesomeRouter change route to another', () => {
    interface TProps {
      path: string
    }

    const T: React.FC<TProps> = ({ path }) => {
      const { push } = useAwesomeRouter();

      return <button onClick={() => push(path)} />;
    };

    T.propTypes = {
      path: PropTypes.string.isRequired,
    };

    const wrapper = Enzyme.mount(
      <AwesomeBrowserHistory>
        <AwesomeRoute path="/">
          <T path="/lay" />
        </AwesomeRoute>
        <AwesomeRoute path="/lay">
          <span id="works" />
        </AwesomeRoute>
      </AwesomeBrowserHistory>,
    );

    wrapper.find('button').simulate('click');
    expect(wrapper.find('span#works')).toHaveLength(1);
  });
});
