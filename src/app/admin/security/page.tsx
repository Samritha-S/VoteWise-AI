"use client";

import React from "react";
import { LockKeyhole, ShieldCheck } from "lucide-react";

export default function SecurityData() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-12 max-w-6xl mx-auto space-y-8 text-foreground flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
        <LockKeyhole className="w-12 h-12" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight">Security & Access Management</h1>
      <p className="text-muted-foreground text-lg max-w-xl">
        This module will handle role-based access control (RBAC), security audit logs, and API key rotations.
      </p>
      
      <div className="bg-card border border-border p-6 rounded-2xl shadow-sm max-w-sm w-full mt-8 flex items-center gap-4 text-left">
        <ShieldCheck className="w-8 h-8 text-green-500 shrink-0" />
        <div>
          <h3 className="font-bold">System Secure</h3>
          <p className="text-sm text-muted-foreground">Admin area is currently protected by Master Key verification.</p>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mt-8 font-medium bg-secondary px-4 py-2 rounded-full">
        Advanced Security Layer coming in Phase 3.
      </p>
    </div>
  );
}
