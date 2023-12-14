"use client";
import React from "react";

import DashboardPage from "@/app/components/screens/dashboard";
import withAuth from "@/app/hoc/withAuth";

const Dashboard = () => {
  return (
    <main>
      <DashboardPage />
    </main>
  );
};

export default withAuth(Dashboard);
