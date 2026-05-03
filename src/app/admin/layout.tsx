"use client";

import React, { useState, useEffect } from "react";
import { 
  Lock, 
  ShieldAlert, 
  LayoutDashboard, 
  Users, 
  Database, 
  ShieldCheck, 
  FileText, 
  MessageSquare,
  LogOut
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem("admin_security_token") === "granted") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "backend2026") {
      localStorage.setItem("admin_security_token", "granted");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!mounted) return null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6">
        <form onSubmit={handleLogin} className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-2xl max-w-md w-full space-y-8 animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-20 h-20 bg-destructive/10 text-destructive rounded-2xl rotate-3 flex items-center justify-center">
              <ShieldAlert className="w-10 h-10 -rotate-3" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight mt-2">Security Slot</h1>
              <p className="text-muted-foreground text-sm mt-2">
                Restricted access. This zone is explicitly reserved for the backend administration team.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="password" 
                placeholder="Enter master key..." 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-background focus:ring-2 focus:outline-none transition-all ${
                  error ? "border-destructive focus:ring-destructive" : "border-border focus:ring-primary focus:border-primary"
                }`}
              />
            </div>
            {error && <p className="text-destructive text-sm font-medium text-center">Invalid security key. Access denied.</p>}
            
            <button className="w-full py-3.5 bg-foreground text-background rounded-xl font-bold hover:bg-foreground/90 transition-all shadow-lg shadow-foreground/20 active:scale-[0.98]">
              Authenticate & Unlock
            </button>
          </div>
        </form>
      </div>
    );
  }

  const navItems = [
    { name: "Overview", icon: LayoutDashboard, href: "/admin" },
    { name: "User Database", icon: Users, href: "/admin/users" },
    { name: "Candidate Database", icon: Database, href: "/admin/candidates" },
    { name: "Security Layer", icon: ShieldCheck, href: "/admin/security" },
    { name: "Myth Addressal", icon: FileText, href: "/admin/myths" },
    { name: "Reports & Queries", icon: MessageSquare, href: "/admin/feedback" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-card border-b md:border-b-0 md:border-r border-border p-4 md:p-6 space-y-8">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black">V</div>
          <span className="font-black text-xl tracking-tight">AdminPanel</span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              >
                <Icon className="w-5 h-5 opacity-70" />
                {item.name}
              </a>
            );
          })}
        </nav>

        <div className="pt-10 mt-auto">
          <button 
            onClick={() => {
              localStorage.removeItem("admin_security_token");
              window.location.reload();
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
