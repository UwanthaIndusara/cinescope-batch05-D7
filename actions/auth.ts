"use server";

import { signUp, signIn, signOut } from "@/lib/auth-client";
// import { redirect, RedirectType } from "next/navigation";

export const registerUser = async (_, formData) => {
  if (formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name) {
      return { success: false, message: "Name is required.", field: "name" };
    }

    if (!email) {
      return { success: false, message: "Email is required.", field: "email" };
    }

    if (!password) {
      return {
        success: false,
        message: "Password is required.",
        field: "password",
      };
    }

    try {
      const { error } = await signUp.email(
        {
          email,
          password,
          name,
          image: null,
          // callbackURL: "/dashboard",
        },
        {
          // onSuccess: () => {
          // redirect to dashboard
          // console.log("User registered successfully.");
          // redirect("/dashboard", RedirectType.push);
          // },

          onError: (ctx) => {
            console.error("Registration error:", ctx.error);
          },
        },
      );

      return {
        success: !error,
        message: error ? error.message : "Registration successful.",
        field: error && "general",
      };
    } catch (error) {
      console.error("Error registration user:", error);

      return { success: false, message: "Registration failed." };
    }
  }
};

// Server action to log in a user
export const loginUser = async (_, formData) => {
  if (formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email) {
      return { success: false, message: "Email is required.", field: "email" };
    }

    if (!password) {
      return {
        success: false,
        message: "Email is required.",
        field: "password",
      };
    }

    try {
      const { error } = await signIn.email(
        {
          email,
          password,
          rememberMe: true,
          callbackURL: "/dashboard",
        },
        {
          // onSuccess: () => {
          // redirect to dashboard
          //console.log("User logged in successfully.");
          // redirect("/dashboard", RedirectType.push);
          // },
          onError: (ctx) => {
            console.error("Login error:", ctx.error);
          },
        },
      );

      return {
        success: !error,
        message: error ? error.message : "Login successful.",
        field: error && "general",
      };
    } catch (error) {
      console.error("Error logging in user:", error);

      return { success: false, message: "Login failed" };
    }
  }
};

export const logoutUser = async () => {
  try {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          console.log("User logged out successfully.");
          // redirect login page
        },
      },
    });
  } catch (error) {
    console.error("Error logging out user:", error);

    return { success: false, message: "Logout failed." };
  }
};
