"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
export default function Login() {
  const { user, isLoading, error } = useUser();

  useEffect(() => {
    user?.email && redirect("/profile");
  }, [user]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="rounded-lg bg-indigo-700 text-white px-5 py-2">
      <a href="/api/auth/login">Login</a>
    </div>
  );
}
