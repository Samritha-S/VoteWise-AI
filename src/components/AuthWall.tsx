"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import AuthPage from "@/app/auth/page";

export default function AuthWall({ children }: { children: React.ReactNode }) {
  const { userData, isLoaded } = useAppContext();
  const pathname = usePathname();
  
  if (!isLoaded) return null;
  
  // If not authenticated and not already on /auth or /admin, show AuthPage
  if (!userData.isAuthenticated && pathname !== '/auth' && !pathname.startsWith('/admin')) {
    return <AuthPage />;
  }
  
  return <>{children}</>;
}
