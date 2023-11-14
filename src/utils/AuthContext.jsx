import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext({
  auth: {
    access: "",
    refresh: "",
  },
  setAuth: () => {},
  logout: () => {},
});

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("auth");
    if (token) {
      return JSON.parse(localStorage.getItem("auth"));
    }
    return null;
  });

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  const logout = () => {
    localStorage.removeItem("auth");
    setAuth(null);
  };

  // console.log("AUTHrityad", auth)

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
