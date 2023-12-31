import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext, useEffect } from "react";
import { useState } from "react";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(null);

  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login with Email & Password
  const LoginWithEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Sign in with facebook
  const signInWithFacebook = () =>{
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [reload]);

  //Update User Info
  const updateUserInfo = (name) => {
    setLoading(false);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // LogOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // AuthInfo
  const authInfo = {
    user,
    loading,
    setReload,
    createUser,
    updateUserInfo,
    LoginWithEmailPassword,
    signInWithGoogle,
    signInWithFacebook,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
