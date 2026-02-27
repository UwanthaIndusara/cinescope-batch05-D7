"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/actions/auth";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state, formAction, isPending] = useActionState(loginUser, {
    success: null,
    message: null,
    field: null,
  });
  const router = useRouter();

  console.log("Login state:", state, "isPending:", isPending);

  useEffect(() => {
    if (state) {
      if (state.success) {
        router.push("/dashboard");
      } else {
        // console.error("Login failed:", state.message);
      }
    }
  }, [router, state]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  // required
                />
                <FieldError className="text-xs">
                  {state?.field === "email" ? state?.message : null}
                </FieldError>
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" name="password" type="password" />
                <FieldError className="text-xs">
                  {state?.field === "password" ? state?.message : null}
                </FieldError>
              </Field>
              <Field>
                <FieldError className="text-xs text-center">
                  {state?.field === "general" ? state?.message : null}
                </FieldError>
                <Button type="submit" disabled={isPending}>
                  Login
                </Button>
                <Button variant="outline" type="button" disabled={isPending}>
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <Link href="/register">Register</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
