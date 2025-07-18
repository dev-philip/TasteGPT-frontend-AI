import React from "react";
import { Route } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import KgPageComponent from "@/pages/kg-graph/KgPageComponent";
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
        <Route path="kg" element={<KgPageComponent />} />
        <Route path="kgtest" element={<KgPageComponent />} />
        <Route path="test" element={<TestPageComponent />} />
     </Route>
  );
};
