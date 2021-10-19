import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../utils/firebase';
import {
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithEmailAndPassword,
} from '@firebase/auth';

interface AuthContextInterface {
  currentUser: null | string;
  register: any; //(email: string, password: string) => Promise<UserCredential>;
  login: any;
}

const AuthContext = createContext<AuthContextInterface>({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
});

interface useAuthInterface {
  currentUser: null | string;
  register: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
}

export const useAuth = (): useAuthInterface => useContext(AuthContext);

interface AuthContextProviderInterface {
  children: any;
}

const AuthContextProvider = ({ children }: AuthContextProviderInterface) => {
  const [currentUser, setCurrentUser] = useState(null);

  const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const value = { currentUser, register, login };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
