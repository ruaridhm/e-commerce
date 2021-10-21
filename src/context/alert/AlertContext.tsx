import { createContext } from 'react';

interface alertContextInterface {
  setAlert: (
    msg: string,
    type: 'error' | 'warning' | 'info' | 'success',
    timeout?: number
  ) => void;
  alerts: any[]; //TODO better defined type here
}

const initialState = {
  setAlert: () => {},
  alerts: [],
};
const alertContext = createContext<alertContextInterface>(initialState);

export default alertContext;
