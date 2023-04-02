import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useEffect } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const googleSignIn = () => {
    signInWithPopup(auth, provider);
  };

  const logOut = () => signOut(auth);

  useEffect(() => {
    const userData = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      userData();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ createUser, signIn, logOut, user, googleSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(AuthContext);
};
