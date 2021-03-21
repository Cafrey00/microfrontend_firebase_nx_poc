import React, {useEffect, useState} from "react";
import {firebaseClient} from "@placeme-poc/common";

export const AuthContext = React.createContext({
  user: null,
});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebaseClient.auth().onAuthStateChanged(async (authContextUserChanged) => {
      if (authContextUserChanged) {
        const token = await authContextUserChanged.getIdToken();
        localStorage.setItem('token', token);
      } else {
        localStorage.setItem('token', '');
      }
      setUser(authContextUserChanged);
    });
  }, []);

  return (
    <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
  );
};
