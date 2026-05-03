"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  ChevronRight,
  Building2,
  AlertCircle
} from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { useTranslation } from "@/lib/i18n";

export default function CandidatesPage() {
  const { userData } = useAppContext();
  const t = useTranslation(userData.language);
  const [searchTerm, setSearchTerm] = useState("");
  const [candidates, setCandidates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetch('/api/candidates')
      .then(res => res.json())
      .then(data => {
        setCandidates(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch candidates from DB:", err);
        setLoading(false);
      });
  }, []);

  const cleanTerm = searchTerm.trim();
  const searchRegex = cleanTerm.length > 0 ? new RegExp(`\\b${cleanTerm.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}`, 'i') : null;

  const stateCandidates = candidates.filter(c => {
    if (!searchRegex) return false;
    return searchRegex.test(c.name) || 
           searchRegex.test(c.party) ||
           searchRegex.test(c.constituency) ||
           searchRegex.test(c.state);
  }).sort((a, b) => {
    if (userData.state) {
      if (a.state === userData.state && b.state !== userData.state) return -1;
      if (b.state === userData.state && a.state !== userData.state) return 1;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 max-w-5xl mx-auto space-y-10 font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          {t.candidates_page.title}
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          {t.candidates_page.desc}
        </p>
      </header>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-5 h-5 transition-colors group-focus-within:text-primary" />
          <input 
            type="text"
            placeholder={t.candidates_page.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-card shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:border-[#9CA3AF] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-[#9CA3AF] text-foreground"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3.5 bg-card hover:bg-muted border border-border rounded-xl font-medium shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          <Filter className="w-5 h-5 text-muted-foreground" /> <span className="text-foreground">{t.candidates_page.filter}</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="space-y-4">
        {searchTerm.trim().length < 2 ? (
          <div className="py-24 flex flex-col items-center justify-center border border-border/50 rounded-2xl bg-card shadow-sm text-center">
            <img src="/search_graphic.png" alt="Search Database" className="w-64 h-64 object-contain mb-6 opacity-90" />
            <h2 className="text-2xl font-bold text-foreground mb-2">{t.candidates_page.searchTitle}</h2>
            <p className="text-muted-foreground text-lg max-w-md">
              {t.candidates_page.searchDesc}
            </p>
          </div>
        ) : loading ? (
          <div className="py-24 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
            <p className="text-muted-foreground font-medium text-lg">{t.candidates_page.fetching}</p>
          </div>
        ) : stateCandidates.length === 0 ? (
          <div className="py-16 text-center border border-border rounded-xl bg-card shadow-sm">
            <p className="text-muted-foreground font-medium text-lg">{t.candidates_page.noCandidates}</p>
          </div>
        ) : (
          stateCandidates.map((candidate) => (
            <Link href={`/candidates/${candidate.id}`} key={candidate.id} target="_blank" rel="noopener noreferrer" className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl">
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border border-border rounded-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1)] hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="p-6 flex flex-col md:flex-row md:items-center gap-6 justify-between">
                  <div className="flex items-center gap-5">
                    <img 
                      src={candidate.photo} 
                      alt={candidate.name} 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover border border-border/50 bg-muted shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">{candidate.name}</h2>
                        {candidate.confidence === "High" && (
                          <div title="Data Source: Official ECI Affidavit">
                            <ShieldCheck className="w-5 h-5 text-blue-400/80" />
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground font-medium">
                        <span className="flex items-center gap-1.5 bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md">
                          <Building2 className="w-3.5 h-3.5" /> {candidate.party}
                        </span>
                        <span>•</span>
                        <span>{candidate.constituency === "Data Not Available" ? t.candidates_page.dataNotAvailable : candidate.constituency}, {candidate.state}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-8 text-sm">
                      <div className="space-y-1 text-right">
                        <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold">{t.candidates_page.totalAssets}</p>
                        <p className="font-bold text-foreground text-base">{candidate.assets}</p>
                      </div>
                      <div className="space-y-1 text-right">
                        <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold">{t.candidates_page.criminalCases}</p>
                        <p className={`font-bold flex items-center justify-end gap-1 text-base ${candidate.cases > 0 ? 'text-amber-600/90' : 'text-foreground'}`}>
                          {candidate.cases > 0 && <AlertCircle className="w-3.5 h-3.5" />}
                          {candidate.cases}
                        </p>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-secondary text-primary hover:bg-primary hover:text-white transition-colors hidden md:block">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
