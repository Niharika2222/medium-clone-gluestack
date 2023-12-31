"use client";
import { useEffect, useState } from "react";
import LoginPage from "./login/page";
import AuthProvider, { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import DashboardPage from "@/components/screens/dashboard";

export default function App() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { users, logout, usernamed } = useAuth();

  return <main>{<DashboardPage />}</main>;
}
