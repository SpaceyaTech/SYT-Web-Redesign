import PropTypes from "prop-types";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";

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

  const logout = useCallback(() => {
    localStorage.removeItem("auth");
    setAuth(null);
  }, [setAuth]);

  const value = useMemo(
    () => ({ auth, setAuth, logout }),
    [auth, setAuth, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
