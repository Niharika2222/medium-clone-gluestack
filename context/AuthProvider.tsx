"use client";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import data from "../utils/blogs.json";
type User = {
  username: string;
};

type UserObject = {
  [key: string]: User;
};
type BlogSchema = {
  id: number;
  profileImage: string;
  name: string;
  date: string;
  heading: string;
  description: string;
  tag: string;
  blogImage: string;
  readTime: string;
};
type AuthInitialState = {
  users: UserObject;
  login: (username: string) => void;
  logout: any;
  usernamed: string;
  uploadBlog: (blog: BlogSchema) => void;
  blogs: [];
  setBlogs: any;
  filteredTag: any;
};
const AuthContext = React.createContext<Partial<AuthInitialState>>({
  users: {},
  blogs: [],
});
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<UserObject>({});
  const [usernamed, setUsernamed] = useState("");
  const [blogs, setBlogs] = useState<any>([]);
  const [selectedTag, setSelectedTag] = useState<any>(null);
  const router = useRouter();

  const login = (username: string) => {
    const updatedUsers = { ...users, [username]: { username } };
    setUsers(updatedUsers);
    setUsernamed(username);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("loggedInUser", username);
    router.push("/");
  };
  const logout = () => {
    setUsers({});
    setUsernamed("");
    localStorage.removeItem("loggedInUser");
    router.push("/login");
  };

  const uploadBlog = (newBlog: BlogSchema) => {
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  const filteredTag = (tag: string) => {
    setSelectedTag(tag);
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    const loggedIn = localStorage.getItem("loggedInUser") || "";
    const storedBlogs = localStorage.getItem("blogs") || "";
    console.log(storedBlogs, "abc");
    if (!storedBlogs) {
      localStorage.setItem("blogs", JSON.stringify(data.blogs));
      setBlogs(data.blogs);
    } else {
      setBlogs(JSON.parse(storedBlogs));
    }
    setUsernamed(loggedIn);
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        users,
        login,
        logout,
        usernamed,
        uploadBlog,
        blogs: selectedTag
          ? blogs.filter((item: any) => item.tag.includes(selectedTag))
          : blogs,
        setBlogs,
        filteredTag,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
