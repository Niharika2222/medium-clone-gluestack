"use client";
import { useEffect, useState } from "react";
import LoginPage from "./login/page";
import AuthProvider, { useAuth } from "@/app/context/AuthProvider";
import { useRouter } from "next/navigation";
import DashboardPage from "@/app/components/screens/dashboard";

export default function App() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { users, logout, usernamed } = useAuth();

  return <main>{<DashboardPage />}</main>;
}
