import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../ui/dashboard-header";
import { ToastContainer } from 'react-toastify';

// import { useAuthStore } from "@/store/auth";
// import { useEffect } from "react";

export const DashboardLayout = () => {
  // const { isAuthenticated, isLoading } = useAuthStore();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoading && !isAuthenticated) {
  //     navigate("/auth/login");
  //   }
  // }, [isAuthenticated, isLoading, navigate]);

  // if (isLoading) return <div>Loading...</div>;
  // if (!isAuthenticated) return null;

  return (
    <div className="h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      {/** Header */}
      <DashboardHeader />
      <Outlet />
      <ToastContainer />
    </div>
  );
};
