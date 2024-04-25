import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase";
import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null);
// Social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // Creat user
    const creatUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
    // Update user profile
    // const updateUserProfile = (name, image) => {
    //   return updateProfile(auth.currentUser, {
    //     displayName: name,
    //     photoURL: image,
    //   });
    // };
    // Observer
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("User in the auth state change", currentUser);
        setUser(currentUser);
        setLoading(false);
      });
      return () => {
        unSubscribe();
      };
    }, []);
    // SingIn account
    const singIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    //   LogOut
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
    // Google LogIn
    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
    // GitHubLogIn
    const githubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
    };
    // facebookLogIn
    const facebookLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, facebookProvider);
    };
  
    const authInfo = {
      user,
      loading,
      creatUser,
      singIn,
      logOut,
      googleLogin,
      githubLogin,
      facebookLogin,
    //   updateUserProfile,
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;