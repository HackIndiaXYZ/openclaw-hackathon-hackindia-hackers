"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen text-pink-400 text-xl">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}