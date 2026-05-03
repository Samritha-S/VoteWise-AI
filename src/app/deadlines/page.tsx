"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Circle, Clock, ArrowRight, AlertCircle } from "lucide-react";
import Link from "next/link";

import { useAppContext } from "@/context/AppContext";
import { useTranslation } from "@/lib/i18n";

export default function DeadlinesPage() {
  const { userData } = useAppContext();
  const t = useTranslation(userData.language);
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  const toggleStep = (id: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const DEADLINES_DATA = t.deadlines.items.map((item: any, index: number) => ({
    ...item,
    id: `step-${index}`,
    status: index === 2 ? 'urgent' : index < 2 ? 'past' : 'upcoming'
  }));

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 max-w-4xl mx-auto space-y-10 font-sans">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-primary mb-2">
          <Calendar className="w-8 h-8" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {t.deadlines.title}
          </h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          {t.deadlines.desc}
        </p>
      </header>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {DEADLINES_DATA.map((item: any, index: number) => {
          const isCompleted = completedSteps[item.id];
          
          return (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={item.id}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-card shadow-sm z-10 shrink-0 md:mx-auto">
                <button onClick={() => toggleStep(item.id)} className="focus:outline-none hover:scale-110 transition-transform">
                  {isCompleted ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  ) : item.status === 'urgent' ? (
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground/30 hover:text-primary transition-colors" />
                  )}
                </button>
              </div>

              <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-card border ${isCompleted ? 'border-green-500/30 bg-green-50/10' : 'border-border'} rounded-2xl shadow-sm hover:shadow-md transition-all`}>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className={`w-4 h-4 ${isCompleted ? 'text-green-500' : 'text-primary'}`} />
                  <span className={`text-sm font-semibold ${isCompleted ? 'text-green-600' : 'text-primary'}`}>
                    {item.date}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isCompleted ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="pt-8 text-center">
         <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
            <ArrowRight className="w-4 h-4 rotate-180" /> {t.deadlines.back}
         </Link>
      </div>
    </div>
  );
}
