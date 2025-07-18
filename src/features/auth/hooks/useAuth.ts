import { useAuthStore } from "@/store/auth";
import { useClaimStore } from "@/store/useClaimStore";
import {
  googleLogout,
  useGoogleLogin,
  type CodeResponse,
} from "@react-oauth/google";
import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";

export const useAuth = () => {
   const clearAll = useClaimStore((state) => state.clearAll);
    //  const navigate = useNavigate();
  const { googleLogin, logout } = useAuthStore();

  const handleLoginSuccess = useCallback(
    async (codeResponse: CodeResponse) => {
      console.log("Login Success:", codeResponse);

      googleLogin(codeResponse.code);
    },
    [googleLogin]
  );

  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: handleLoginSuccess,
    onError: (error) => console.log("Login Failed:", error),
  });

  const logOut = () => {
    try {
      googleLogout();
    } catch (error) {
      console.error("Google logout Failed:", error);
    }
    logout();
    clearAll();
    // navigate("/");
    window.location.reload();
  };

  return { logOut, login };
};
