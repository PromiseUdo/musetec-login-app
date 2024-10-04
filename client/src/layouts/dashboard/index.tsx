import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen w-full flex">
      <Sidebar />
      <div className="w-full p-8 ">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
