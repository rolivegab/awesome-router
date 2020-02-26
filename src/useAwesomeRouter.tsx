import { useContext } from 'react';
import { Context } from './AwesomeBrowserHistory';

const useAwesomeRouter = () => {
  const { pathname, push } = useContext(Context)!;

  return {
    pathname,
    push,
  };
};

export default useAwesomeRouter;
