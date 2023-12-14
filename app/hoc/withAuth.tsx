// "use client";
// import React, { useEffect } from "react";
// import { useAuth } from "@/context/AuthProvider";
// import { useRouter } from "next/navigation";
// const withAuth = (WrappedComponent: React.ComponentType) => {
//   const Wrapper = (props: any) => {
//     const router = useRouter();
//     const { users, usernamed } = useAuth();

//     useEffect(() => {
//       const loggedIn = localStorage.getItem("loggedInUser");
//       console.log({ loggedIn });
//       if (!loggedIn) {
//         router.push("/login");
//       } else {
//         router.push("/");
//       }
//     }, [users, router]);

//     return <WrappedComponent {...props} />;
//   };

//   return Wrapper;
// };

// export default withAuth;

"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/app/context/AuthProvider";
import { usePathname, useRouter } from "next/navigation";
const withAuth = (WrappedComponent: React.ComponentType) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const pathName = usePathname();
    const { users, usernamed } = useAuth();

    useEffect(() => {
      const loggedIn = localStorage.getItem("loggedInUser");
      console.log({ loggedIn });
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
