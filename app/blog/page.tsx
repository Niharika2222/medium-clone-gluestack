"use client";
import React from "react";

import DashboardPage from "@/components/screens/dashboard";
import withAuth from "@/hoc/withAuth";

const Dashboard = () => {
  return (
    <main>
      <DashboardPage />
    </main>
  );
};

export default withAuth(Dashboard);
