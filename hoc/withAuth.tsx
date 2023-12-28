"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthProvider";
import { usePathname, useRouter } from "next/navigation";
const withAuth = (WrappedComponent: React.ComponentType) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const pathName = usePathname();
    const { users } = useAuth();

    useEffect(() => {
      const loggedIn = localStorage.getItem("loggedInUser");
      if (!loggedIn) {
        router.push("/login");
      } else if (loggedIn && pathName === "/login") {
        router.push("/");
      }
    }, [users, router]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
