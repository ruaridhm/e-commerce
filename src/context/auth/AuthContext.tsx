import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../utils/firebase';
import {
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
  GoogleAuthProvider,
  signInWithPopup,
} from '@firebase/auth';

interface AuthContextInterface {
  currentUser: null | User;
  register: any; //TODO (email: string, password: string) => Promise<UserCredential>;
  login: any;
  logout: any;
  signInWithGoogle: any;
  forgotPassword: any;
  resetPassword: any;
}

const initialState = {
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
  signInWithGoogle: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
};

const AuthContext = createContext<AuthContextInterface>(initialState);

interface useAuthInterface {
  currentUser: null | User;
  register: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  signInWithGoogle: () => Promise<UserCredential>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (oobCode: string, newPassword: string) => Promise<void>;
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

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const logout = () => {
    return signOut(auth);
  };
  const forgotPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email, {
      url: 'http://localhost:3000/login',
    });
  };

  const resetPassword = (oobCode: string, newPassword: string) => {
    return confirmPasswordReset(auth, oobCode, newPassword);
  };

  const value = {
    currentUser,
    register,
    login,
    logout,
    signInWithGoogle,
    forgotPassword,
    resetPassword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
