"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
export default function ProfileServer() {
  const { user } = useUser();
  return (
    <div className=" flex justify-center items-center h-screen">
      {user && (
        <div className="text-center">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <a href="/api/auth/logout">Logout</a>
        </div>
      )}
    </div>
  );
}
