import type { User } from "../../types/models";

export const mockLogin = async (email: string, password: string) => {
  return new Promise<{ user: User; token: string }>((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@example.com" && password === "password") {
        resolve({
          user: {
            id: "1",
            name: "John Doe",
            email: "user@example.com",
          },
          token: "fake-jwt-token",
        });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};
