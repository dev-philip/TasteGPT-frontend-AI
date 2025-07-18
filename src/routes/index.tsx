import { Suspense } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { MainRoutes } from "./main";
import { AuthRoutes } from "./auth";

export const AppRoutes = () => {
  return (
    // TODO: Replace suspense fallback with custom Loader
    <Suspense fallback={<div>Loading...</div>}>
      {/* <Router basename="/projects/tastegpt"> */}
      <Router>
        <Routes>
          {AuthRoutes()}
          {MainRoutes()}
        </Routes>
      </Router>
    </Suspense>
  );
};
