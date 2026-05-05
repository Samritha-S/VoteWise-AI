"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ShieldAlert } from "lucide-react";

function AdminGuard({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check for Master Key in URL
    const masterKey = searchParams.get("key");
    if (masterKey === "backend2026") {
      localStorage.setItem("admin_security_token", "granted");
      setIsAuthenticated(true);
      return;
    }

    if (localStorage.getItem("admin_security_token") === "granted") {
      setIsAuthenticated(true);
    }
  }, [searchParams]);

  if (!mounted) return null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-destructive/10 text-destructive rounded-2xl mb-6 flex items-center justify-center">
          <ShieldAlert className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-black tracking-tight">Access Denied</h1>
        <p className="text-muted-foreground mt-2 max-w-xs">
          This area is restricted. Please provide a valid master key in the URL to gain access.
        </p>
      </div>
    );
  }

  return <>{children}</>;
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading security context...</div>}>
      <AdminGuard>{children}</AdminGuard>
    </Suspense>
  );
}
