import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import AuthLayout from "@/layouts/auth";
import Login from "@/pages/auth/login";
import SignUp from "@/pages/auth/signup";
import Dashboard from "@/pages/dashboard";
import DashboardLayout from "@/layouts/dashboard";
import CustomersPage from "@/pages/customers";
import OrdersPage from "@/pages/orders";
import SettingsPage from "@/pages/settings";
import ProtectedRoutes from "./ProtectedRoutes";
import AppCrashPage from "@/pages/errors/app-crash";

const RouteConfig = createBrowserRouter(
  createRoutesFromElements(
    <Route
      errorElement={
        <div>
          <AppCrashPage />
        </div>
      }
    >
      <Route path="auth" element={<AuthLayout />}>
        <Route
          index
          element={
            <div>
              <AppCrashPage />
            </div>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      <Route path="/" element={<Navigate to="/auth/login" />} />

      <Route path="" element={<ProtectedRoutes />}>
        <Route path="vendor" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Route>
    </Route>
  )
);

export default RouteConfig;
