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
  const isCandidatePage = pathname.includes('/candidates');
  
  if (!isLoaded || (!userData.isAuthenticated && !isCandidatePage)) return null;
  
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
                <span className="truncate">{userData.name || (userData.language === "English" ? "User" : "उपयोगकर्ता")}</span>
              </div>
              <div className="text-xs text-muted-foreground flex items-center justify-between mt-2">
                <span className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  {t.sidebar.ready}
                </span>
                <button 
                  onClick={() => {
                    resetUser();
                    setIsOpen(false);
                  }} 
                  className="text-primary hover:underline"
                >
                  {t.common?.signOut}
                </button>
              </div>
            </>
          </div>
        )}
        <div className="p-4 mt-auto border-t border-border/30">
          {!userData.isAuthenticated && (
            <button 
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors mb-4 shadow-sm"
              onClick={() => {/* Mock Google Sign-In */}}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
          )}

          <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold opacity-60">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
            </svg>
            Powered by Google Cloud
          </div>
        </div>
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
