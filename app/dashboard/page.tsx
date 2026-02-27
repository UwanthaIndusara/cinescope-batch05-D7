"use client";

import { useSession } from "@/lib/auth-client";

export default function DashboardPage() {
  const { data: session } = useSession();

  console.log("user session:", session);

  return <div className="text-center py-12">Welcome to the Dashboard</div>;
}
