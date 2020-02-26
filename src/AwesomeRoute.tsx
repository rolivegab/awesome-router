import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from './AwesomeBrowserHistory';

interface Props {
  path: string
}

const AwesomeRoute: React.FC<Props> = ({ path, children }) => {
  const { pathname } = useContext(Context)!;

  if (pathname === path) {
    return <>{children}</>;
  }

  return null;
};

AwesomeRoute.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// AwesomeRoute.defaultProps = {
//   children: null,
// };

export default AwesomeRoute;
