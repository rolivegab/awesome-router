import React, { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';

const useAwesomeBrowserHistory = () => {
  const history = createBrowserHistory();
  const [pathname, setPathname] = useState(history.location.pathname);

  const push = useCallback((path: string) => {
    history.push(path);
    setPathname(history.location.pathname);
  }, [pathname]);

  return {
    pathname,
    push,
  };
};

export const Context = createContext<ReturnType<typeof useAwesomeBrowserHistory> | null>(null);

const AwesomeBrowserHistory: React.FC = ({ children }) => {
  const state = useAwesomeBrowserHistory();

  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  );
};

AwesomeBrowserHistory.defaultProps = {
  children: null,
};

AwesomeBrowserHistory.propTypes = {
  children: PropTypes.node,
};

export default AwesomeBrowserHistory;
