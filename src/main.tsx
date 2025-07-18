import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.tsx";
import { VITE_GOOGLE_CLIENT_ID } from "@/utils/constants";

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENT_ID}>
    <StrictMode>
      <App />
    </StrictMode>
  </GoogleOAuthProvider>
);
