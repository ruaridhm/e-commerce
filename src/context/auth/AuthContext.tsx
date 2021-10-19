import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../utils/firebase';
import {
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  signOut,
  Auth,
} from '@firebase/auth';

interface AuthContextInterface {
  currentUser: null | User;
  register: any; //(email: string, password: string) => Promise<UserCredential>;
  login: any;
  logout: any;
}

const AuthContext = createContext<AuthContextInterface>({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
});

interface useAuthInterface {
  currentUser: null | User;
  register: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

export const useAuth = (): useAuthInterface => useContext(AuthContext);

interface AuthContextProviderInterface {
  children: any;
}

const AuthContextProvider = ({ children }: AuthContextProviderInterface) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  //sets currentUSer so application knows if there is a current user or not.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // sets currentUser as User if it exists otherwise sets currentUser as null
      setCurrentUser(user);
    });

    //unsubscribes to avoid multiple events being called
    return () => {
      unsubscribe();
    };
  }, []);

  const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };

  const value = { currentUser, register, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
