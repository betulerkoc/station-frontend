import React, { useEffect, useState } from "react";
import app from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

    // useEffect(() => {
  //   const fetchData = async () => {
  //     const db = app.firestore();
  //     const user = await db.collection("User").get();
  //     setCurrentUser(user)
  //     setPending(false)
  //     console.log(user)
  //   };
  //   fetchData();
  // }, []);

  console.log(currentUser);
 

  if(pending){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};