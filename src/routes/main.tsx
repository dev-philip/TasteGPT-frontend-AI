import React from "react";
import { Route } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import TestPageComponent from "@/pages/test/TestPageComponent";

const ChatPage = React.lazy(() =>
  import("@/features/chat").then((module) => ({
    default: module.ChatPage,
  }))
);

export const MainRoutes = () => {
  return (
 
     <Route path="/" element={<DashboardLayout />}>
        <Route index element={<ChatPage />} />
        <Route path="test" element={<TestPageComponent />} />
     </Route>
  );
};
