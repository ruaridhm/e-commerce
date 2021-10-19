import { createContext } from 'react';

type alertContextType = {
  setAlert: (
    msg: string,
    type: 'error' | 'warning' | 'info' | 'success',
    timeout?: number
  ) => void;
  alerts: any[];
};

const initialState = {
  setAlert: () => {},
  alerts: [],
};
const alertContext = createContext<alertContextType>(initialState); //TODO A more robust type is possible

export default alertContext;
