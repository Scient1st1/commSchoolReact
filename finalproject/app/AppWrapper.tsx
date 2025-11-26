"use client";

import { useAuth } from "@/hooks/Auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "@/components/Header/page";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user && pathname !== "/login") {
      router.push("/login");
    }
  }, [user, loading, router, pathname]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {user && pathname !== "/login" && <Header />}
      {children}
    </>
  );
}
