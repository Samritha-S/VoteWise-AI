"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  AlertCircle,
  FileText,
  MapPin,
  Clock,
  ShieldAlert,
  ShieldCheck
} from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { useTranslation } from "@/lib/i18n";
import OnboardingModal from "@/components/OnboardingModal";
import Link from "next/link";

const JOURNEY_STEPS = [
  { id: "eligibility", title: "Eligibility Check", desc: "Verify if you can vote" },
  { id: "registration", title: "Registration", desc: "Get on the voter list" },
  { id: "documents", title: "Documents Ready", desc: "Gather required IDs" },
  { id: "polling", title: "Polling Booth", desc: "Know where and when" }
];

import AuthPage from "./auth/page";

export default function Dashboard() {
  const { userData } = useAppContext();
  
  if (!userData.isAuthenticated) {
    return <AuthPage />;
  }
  
  const t = useTranslation(userData.language);

  // "What Should I Do Next?" Engine Logic
  const nextAction = useMemo(() => {
    if (!userData.onboardingComplete) return { text: "Complete your profile to get started", link: "#", type: "info" };
    
    if (userData.age && userData.age < 18) {
      return { text: "You are not yet eligible to vote. Learn about future registration.", link: "/assistant", type: "warning" };
    }

    if (userData.voterStatus === "Not Registered" || userData.voterStatus === "Unsure") {
      return { text: "Your highest priority: Register to vote.", link: "/assistant", type: "alert" };
    }

    if (userData.voterStatus === "Registered") {
      return { text: "Polling is TOMORROW! Double check your booth location and carry your Voter ID.", link: "/deadlines", type: "urgent" };
    }

    return { text: "Explore the AI assistant for guidance.", link: "/assistant", type: "info" };
  }, [userData]);

  // Determine progress based on logic
  const progressSteps = useMemo(() => {
    return [
      { id: "eligibility", ...t.journey.steps[0] },
      { id: "registration", ...t.journey.steps[1] },
      { id: "documents", ...t.journey.steps[2] },
      { id: "polling", ...t.journey.steps[3] }
    ].map(step => {
      let isComplete = false;
      let isActive = false;

      if (!userData.onboardingComplete) return { ...step, isComplete, isActive };

      if (step.id === "eligibility") {
        isComplete = userData.age ? userData.age >= 18 : false;
        isActive = !isComplete;
      } else if (step.id === "registration") {
        isComplete = userData.voterStatus === "Registered";
        isActive = userData.age ? userData.age >= 18 && !isComplete : false;
      } else if (step.id === "documents") {
        isComplete = userData.hasDocuments;
        isActive = userData.voterStatus === "Registered" && !isComplete;
      } else if (step.id === "polling") {
        isActive = userData.hasDocuments;
      }

      return { ...step, isComplete, isActive };
    });
  }, [userData, t]);

  return (
    <div className="min-h-screen p-6 md:p-10 max-w-6xl mx-auto space-y-8">


      <header className="space-y-2">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight"
        >
          {t.journey.title} <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">VoteWise</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg"
        >
          {t.journey.desc}
        </motion.p>
      </header>

      {/* Polling Tomorrow Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-indigo-600 p-8 text-white shadow-xl"
      >
        <div className="absolute top-0 right-0 -mt-8 -mr-8 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 h-48 w-48 rounded-full bg-primary-foreground/10 blur-3xl" />
        
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3 h-3" /> Election Countdown
            </div>
            <h2 className="text-3xl md:text-4xl font-black">POLLING TOMORROW</h2>
            <p className="text-primary-foreground/80 font-medium">May 4, 2026 • 7:00 AM - 6:00 PM</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center justify-center h-20 w-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
               <span className="text-3xl font-bold">1</span>
               <span className="text-[10px] font-bold uppercase opacity-60">Day Left</span>
            </div>
            <a 
              href="https://electoralsearch.eci.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-primary rounded-2xl font-bold hover:bg-primary-foreground transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Check Booth Info
            </a>
          </div>
        </div>
      </motion.div>

      {/* What Should I Do Next? */}
      {userData.onboardingComplete && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className={`p-6 rounded-2xl border ${
            nextAction.type === 'alert' ? 'bg-destructive/10 border-destructive/20 text-destructive' :
            nextAction.type === 'urgent' ? 'bg-primary/10 border-primary/20 text-primary shadow-lg shadow-primary/5' :
            nextAction.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-600 dark:text-yellow-400' :
            nextAction.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400' :
            'bg-card border-border text-foreground'
          } shadow-sm relative overflow-hidden`}
        >
          {nextAction.type === 'urgent' && (
             <div className="absolute top-0 right-0 p-2">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
             </div>
          )}
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldAlert className="w-24 h-24" />
          </div>
          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2 font-semibold">
              <AlertCircle className="w-5 h-5" />
              <span>{t.journey.nextAction}</span>
            </div>
            <p className="text-xl font-medium">{nextAction.text}</p>
            <Link 
              href={nextAction.link}
              className="inline-flex items-center gap-2 px-4 py-2 mt-2 bg-background/50 hover:bg-background/80 rounded-xl font-medium transition-colors border border-border/50"
            >
              {t.journey.getHelp} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        {/* Journey Timeline */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 space-y-6"
        >
          <h2 className="text-2xl font-bold">{t.journey.yourProgress}</h2>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <div className="relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border -z-10" />
              
              <div className="space-y-8">
                {progressSteps.map((step, index) => (
                  <div key={step.id} className="flex gap-4 items-start relative bg-card">
                    <div className="bg-card py-2">
                      {step.isComplete ? (
                        <CheckCircle2 className="w-8 h-8 text-green-500 bg-card rounded-full" />
                      ) : step.isActive ? (
                        <div className="relative">
                          <Circle className="w-8 h-8 text-primary bg-card rounded-full" />
                          <div className="absolute inset-0 border-2 border-primary rounded-full animate-ping opacity-20" />
                        </div>
                      ) : (
                        <Circle className="w-8 h-8 text-muted-foreground/50 bg-card rounded-full" />
                      )}
                    </div>
                    <div className="pt-2 flex-1">
                      <div className={`font-semibold text-lg ${step.isActive ? 'text-primary' : step.isComplete ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {index + 1}. {step.title}
                      </div>
                      <div className="text-muted-foreground text-sm mt-1">{step.desc}</div>
                      
                      {step.isActive && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4"
                        >
                          {step.id === "polling" ? (
                            <a 
                              href="https://electoralsearch.eci.gov.in/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                            >
                              Start this step <ArrowRight className="w-4 h-4" />
                            </a>
                          ) : (
                            <Link 
                              href={step.id === "documents" ? "/documents" : "/assistant"} 
                              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                            >
                              Start this step <ArrowRight className="w-4 h-4" />
                            </Link>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-bold flex items-center gap-2">
            <FileText className="w-5 h-5 text-muted-foreground" /> {t.journey.quickLinks}
          </h2>
          <div className="grid gap-4">
            <Link href="/documents" className="group p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-md transition-all flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">{t.journey.quickLinkCards.documents.title}</div>
                <div className="text-xs text-muted-foreground">{t.journey.quickLinkCards.documents.desc}</div>
              </div>
            </Link>
            
            <a href="https://electoralsearch.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="group p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-md transition-all flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">{t.journey.quickLinkCards.booth.title}</div>
                <div className="text-xs text-muted-foreground">{t.journey.quickLinkCards.booth.desc}</div>
              </div>
            </a>
            
            <Link href="/deadlines" className="group p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-md transition-all flex items-center gap-4">
              <div className="p-3 bg-red-500/10 rounded-lg text-red-500 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">{t.journey.quickLinkCards.deadlines.title}</div>
                <div className="text-xs text-muted-foreground">{t.journey.quickLinkCards.deadlines.desc}</div>
              </div>
            </Link>

            <Link href="/myths" className="group p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-md transition-all flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">{t.journey.quickLinkCards.mythBuster.title}</div>
                <div className="text-xs text-muted-foreground">{t.journey.quickLinkCards.mythBuster.desc}</div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
