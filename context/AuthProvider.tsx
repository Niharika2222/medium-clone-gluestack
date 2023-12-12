"use client";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
type User = {
  username: string;
};

type UserObject = {
  [key: string]: User;
};
type AuthInitialState = {
  users: UserObject;
  login: (username: string) => void;
  logout: any;
  usernamed: string;
};
const AuthContext = React.createContext<Partial<AuthInitialState>>({
  users: {},
});
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<UserObject>({});
  const [usernamed, setUsernamed] = useState("");
  const router = useRouter();
  const login = (username: string) => {
    const updatedUsers = { ...users, [username]: { username } };
    setUsers(updatedUsers);
    setUsernamed(username);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("loggedInUser", JSON.stringify(username));
    router.push("/");
  };
  const logout = () => {
    setUsers({});
    setUsernamed("");
    localStorage.removeItem("loggedInUser");
    router.push("/login");
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    const loggedIn = localStorage.getItem("loggedInUser") || "";
    setUsernamed(loggedIn);
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ users, login, logout, usernamed }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
