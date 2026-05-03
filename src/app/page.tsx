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
  ShieldCheck,
  Vote,
  Calendar
} from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { useTranslation } from "@/lib/i18n";
import OnboardingModal from "@/components/OnboardingModal";
import Link from "next/link";

import AuthPage from "./auth/page";

export default function Dashboard() {
  const { userData } = useAppContext();
  
  if (!userData.isAuthenticated) {
    return <AuthPage />;
  }
  
  const t = useTranslation(userData.language);

  // "What Should I Do Next?" Engine Logic
  const nextAction = useMemo(() => {
    if (!userData.onboardingComplete) return { text: t.journey.statusMessages.completeProfile, link: "#", type: "info" };
    
    if (userData.age && userData.age < 18) {
      return { text: t.journey.statusMessages.notEligible, link: "/assistant", type: "warning" };
    }

    if (userData.voterStatus === "Not Registered" || userData.voterStatus === "Unsure") {
      return { text: t.journey.statusMessages.registerPriority, link: "/assistant", type: "alert" };
    }

    if (userData.voterStatus === "Registered") {
      return { text: `${t.journey.pollingTomorrow}! ${t.journey.boothAlert}`, link: "/deadlines", type: "urgent" };
    }

    return { text: t.journey.statusMessages.exploreAI, link: "/assistant", type: "info" };
  }, [userData, t]);

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

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-indigo-600 to-indigo-700 text-white shadow-2xl shadow-primary/20"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Vote className="w-64 h-64 rotate-12" />
        </div>
        
        <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-6 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium">
              <Calendar className="w-4 h-4" /> {t.journey.countdown}
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
              {t.journey.pollingTomorrow}
            </h1>
            <p className="text-indigo-100 text-lg font-medium opacity-90">
              May 4, 2026 • 7:00 AM - 6:00 PM
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <div className="w-20 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center">
                <span className="text-4xl font-black">1</span>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{t.journey.dayLeft}</span>
              </div>
            </div>
            <a 
              href="https://electoralsearch.eci.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-indigo-50 transition-all hover:scale-105 hover:shadow-lg shadow-white/10"
            >
              {t.journey.checkBooth}
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
