"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle2, Circle, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const DOCUMENTS_DATA = [
  {
    id: "epic",
    title: "Voter ID Card (EPIC)",
    type: "Primary",
    desc: "The Electoral Photo Identity Card issued by the Election Commission of India. This is the most widely accepted document.",
  },
  {
    id: "aadhaar",
    title: "Aadhaar Card",
    type: "Alternative",
    desc: "Your 12-digit unique identity number issued by UIDAI. Must contain your photograph.",
  },
  {
    id: "pan",
    title: "PAN Card",
    type: "Alternative",
    desc: "Permanent Account Number card issued by the Income Tax Department.",
  },
  {
    id: "driving",
    title: "Driving License",
    type: "Alternative",
    desc: "A valid driving license issued by the RTO containing your photograph.",
  },
  {
    id: "passport",
    title: "Indian Passport",
    type: "Alternative",
    desc: "Your official Indian Passport issued by the Ministry of External Affairs.",
  },
  {
    id: "bank",
    title: "Bank/Post Office Passbook",
    type: "Alternative",
    desc: "Passbook with your photograph, issued by a recognized Bank or Post Office.",
  }
];

export default function DocumentsChecklistPage() {
  const [completedDocs, setCompletedDocs] = useState<Record<string, boolean>>({});

  const toggleDoc = (id: string) => {
    setCompletedDocs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(completedDocs).filter(Boolean).length;
  const isReady = completedCount > 0;

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 max-w-4xl mx-auto space-y-10 font-sans">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-primary mb-2">
          <FileText className="w-8 h-8" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Documents Checklist
          </h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          You must carry at least ONE valid photo ID to the polling booth. Check off the document you plan to bring.
        </p>
      </header>

      {/* Status Banner */}
      {isReady ? (
        <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
          <div>
            <p className="font-bold text-green-800">You are ready to vote!</p>
            <p className="text-green-700 text-sm">You only need to carry one of these documents to the polling booth.</p>
          </div>
        </div>
      ) : (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
          <div>
            <p className="font-bold text-amber-800">Action Required</p>
            <p className="text-amber-700 text-sm">Please secure at least one of the following documents before Polling Day.</p>
          </div>
        </div>
      )}

      <div className="grid gap-4">
        {DOCUMENTS_DATA.map((doc, index) => {
          const isCompleted = completedDocs[doc.id];
          
          return (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              key={doc.id}
              onClick={() => toggleDoc(doc.id)}
              className={`relative flex items-center gap-4 p-5 cursor-pointer border rounded-2xl transition-all shadow-sm ${
                isCompleted 
                  ? 'border-green-500/50 bg-green-50/10' 
                  : 'border-border bg-card hover:border-primary/40 hover:shadow-md'
              }`}
            >
              <button className="focus:outline-none shrink-0 transition-transform">
                {isCompleted ? (
                  <CheckCircle2 className="w-7 h-7 text-green-500" />
                ) : (
                  <Circle className="w-7 h-7 text-muted-foreground/30 hover:text-primary transition-colors" />
                )}
              </button>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`text-lg font-bold ${isCompleted ? 'text-foreground' : 'text-foreground'}`}>
                    {doc.title}
                  </h3>
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${doc.type === 'Primary' ? 'bg-primary/10 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                    {doc.type}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {doc.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="pt-8 text-center">
         <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Dashboard
         </Link>
      </div>
    </div>
  );
}
