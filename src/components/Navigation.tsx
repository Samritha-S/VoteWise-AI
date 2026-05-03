"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  BotMessageSquare, 
  Users, 
  ShieldAlert, 
  UserCircle,
  Menu,
  X,
  Database,
  MessageSquare
} from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { useTranslation } from "@/lib/i18n";

const userNavItems = [
  { name: "Journey", href: "/", icon: LayoutDashboard },
  { name: "AI Assistant", href: "/assistant", icon: BotMessageSquare },
  { name: "Candidates", href: "/candidates", icon: Users },
  { name: "Myth Buster", href: "/myths", icon: ShieldAlert },
  { name: "Profile", href: "/profile", icon: UserCircle },
];

const adminNavItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Candidate Data", href: "/admin/candidates", icon: Users },
  { name: "User Data", href: "/admin/users", icon: UserCircle },
  { name: "Myth Buster Data", href: "/admin/myths", icon: ShieldAlert },
  { name: "Survey Feedback", href: "/admin/feedback", icon: MessageSquare },
  { name: "Security & Access", href: "/admin/security", icon: Database },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { userData, isLoaded, resetUser } = useAppContext();
  
  if (!isLoaded || !userData.isAuthenticated) return null;
  
  const t = useTranslation(userData.language);

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-card rounded-full shadow-lg border border-border"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
      </button>

      {/* Sidebar */}
      <motion.div 
        className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-card shadow-2xl md:shadow-none border-r border-border/50 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">
              V
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">
              VoteWise AI
            </span>
          </Link>
        </div>

        <nav aria-label="Main Navigation" className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {(pathname.startsWith('/admin') ? adminNavItems : userNavItems).map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            // Apply translation if it's a user nav item, fallback to original name
            const itemName = !pathname.startsWith('/admin') 
              ? (t.sidebar[item.name === "AI Assistant" ? "assistant" : item.name === "Myth Buster" ? "mythBuster" : item.name.toLowerCase()] || item.name)
              : item.name;

            return (item.name !== "Profile" || userData.isAuthenticated) ? (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                  isActive 
                    ? "text-primary-foreground bg-primary/90 shadow-md shadow-primary/20" 
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-bg"
                    className="absolute inset-0 bg-primary rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className={`w-5 h-5 ${isActive ? "text-primary-foreground" : "group-hover:text-primary transition-colors"}`} />
                <span className="font-medium">{itemName}</span>
              </Link>
            ) : null;
          })}
        </nav>

        {!pathname.startsWith('/admin') && isLoaded && userData.isAuthenticated && (
          <div className="p-4 m-4 rounded-xl bg-secondary/50 border border-border/50 backdrop-blur-md min-h-[96px] flex flex-col justify-center">
            <>
              <div className="text-sm font-medium text-foreground mb-1 flex items-center gap-2">
                <span className="text-xl">{userData.avatar}</span>
                <span className="truncate">{userData.name || "User"}</span>
              </div>
              <div className="text-xs text-muted-foreground flex items-center justify-between mt-2">
                <span className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  {t.sidebar.ready || "Ready to vote"}
                </span>
                <button 
                  onClick={() => {
                    resetUser();
                    setIsOpen(false);
                  }} 
                  className="text-primary hover:underline"
                >
                  Sign out
                </button>
              </div>
            </>
          </div>
        )}
      </motion.div>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
