import * as React from 'react';
import { getLocalStorageData, removeLocalStorageData, setLocalStorageData } from '../../../lib/localStorage';

export function useLocalStorageReducer<Data extends React.Reducer<any, any>>(
  key: string,
  reducer: Data,
  initialState: React.ReducerState<Data>,
) {
  const [state, dispatch] = React.useReducer(reducer, initialState, () => {
    const init = typeof initialState === 'function' ? initialState() : initialState;
    try {
      const value = getLocalStorageData(key);
      return value || init;
    } catch (error) {
      return init;
    }
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      removeLocalStorageData(prevKey);
    }
    prevKeyRef.current = key;
    setLocalStorageData(key, state);
  }, [key, state]);

  return [state, dispatch] as const;
}
