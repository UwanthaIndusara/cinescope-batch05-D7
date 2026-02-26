"use server";
import { signUp, signIn } from "@/lib/auth-client";

export const registerUser = async (_, formData) => {
  if (formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log("Registering user with:", { name, email, password });

    try {
      const { data, error } = await signUp.email(
        {
          email,
          password,
          name,
          image: null,
          callbackURL: "/dashboard",
        },
        {
          onSuccess: (ctx) => {
            console.log("Registration successful:", ctx);
          },
          onError: (ctx) => {
            console.error("Registration error:", ctx.error);
          },
        }
      );

      return { data, error };
    } catch (error) {
      console.error("Error registering user:", error);

      return { data: null, error };
    }
  }
};

// Server action to log in a user
export const loginUser = async (_, formData) => {
  if (formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const { error } = await signIn.email(
        {
          email,
          password,
          rememberMe: true,
          callbackURL: "/dashboard",
        },
        {
          onError: (ctx) => {
            console.error("Login error:", ctx.error);
          },
        }
      );

      return {
        success: !error,
        message: error ? error.message : "Login successful.",
      };
    } catch (error) {
      console.error("Error logging in user:", error);

      return { success: false, message: "Login failed" };
    }
  }
};
