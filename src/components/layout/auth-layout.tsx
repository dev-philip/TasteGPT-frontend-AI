import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { useEffect } from "react";

export const AuthLayout = () => {
  const { isAuthenticated, isLoading } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate("/");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <div>Loading...</div>;
  if (isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-backgroud">
      <Outlet />
    </div>
  );
};
