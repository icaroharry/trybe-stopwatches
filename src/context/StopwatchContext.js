import { createContext } from 'react';

const StopwatchContext = createContext({
  filters: { textFilter: '' }
});

export default StopwatchContext;