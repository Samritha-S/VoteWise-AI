"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  Search,
  ExternalLink,
  Info
} from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { useTranslation } from "@/lib/i18n";

const MYTHS = [
  {
    id: 1,
    myth: "You can vote online in India from home.",
    fact: "No, online voting is not permitted in India for general citizens. You must visit your designated polling booth to cast your vote using an EVM. However, certain eligible individuals (like disabled voters above 40% and seniors above 85) can opt for home voting via postal ballot under specific rules.",
    source: "Election Commission of India (ECI)",
    link: "#"
  },
  {
    id: 2,
    myth: "If I have an Aadhaar Card, I don't need to be registered on the voter list.",
    fact: "False. Having an Aadhaar card or any ID is not enough. Your name MUST be registered in the Electoral Roll (voter list) of your constituency to vote. You can use your Aadhaar as an ID proof at the booth ONLY IF your name is on the list.",
    source: "Representation of the People Act, 1950",
    link: "#"
  },
  {
    id: 3,
    myth: "EVMs can be hacked via Bluetooth or Wi-Fi.",
    fact: "EVMs used in Indian elections are standalone machines. They do not have any radio frequency receiver or data decoder, and cannot be connected to any network, Wi-Fi, or Bluetooth. They are mathematically and physically secure.",
    source: "ECI EVM Manual",
    link: "#"
  },
  {
    id: 4,
    myth: "If my Voter ID is lost, I cannot vote.",
    fact: "You can still vote if your name is on the voter list. You can show one of the 12 alternative photo identity documents approved by the ECI, such as Passport, Driving License, PAN Card, or MGNREGA Job Card.",
    source: "ECI Guidelines",
    link: "#"
  },
  {
    id: 5,
    myth: "If NOTA gets the majority of votes, a re-election is held and all candidates are disqualified.",
    fact: "False. While NOTA allows voters to express dissatisfaction, it currently has no legal power to force a re-election. Even if NOTA secures the highest number of votes, the candidate with the second-highest votes is legally declared the winner.",
    source: "Supreme Court Clarification on NOTA",
    link: "#"
  },
  {
    id: 6,
    myth: "Non-Resident Indians (NRIs) can vote online or at their local Indian embassy.",
    fact: "False. NRIs cannot vote online or at embassies. They must register as 'Overseas Electors' using Form 6A and must be physically present at their designated polling booth in India on election day to cast their vote.",
    source: "ECI Overseas Voter Guidelines",
    link: "#"
  },
  {
    id: 7,
    myth: "If there's a spelling mistake in my name on the Voter ID, I will be turned away.",
    fact: "False. Minor clerical errors like spelling mistakes in your name, age, or parent's name are generally ignored. As long as your identity can be verified through your photo or other alternative IDs, you will be allowed to vote.",
    source: "ECI Polling Officials Manual",
    link: "#"
  },
  {
    id: 8,
    myth: "You can use your phone to take a picture of your VVPAT slip as proof of voting.",
    fact: "Absolutely False. Mobile phones, cameras, and all recording devices are strictly prohibited inside the voting compartment. Photographing an EVM or VVPAT slip violates the secrecy of the ballot and is a punishable offense.",
    source: "Conduct of Elections Rules, 1961",
    link: "#"
  }
];

export default function MythBusterPage() {
  const { userData } = useAppContext();
  const t = useTranslation(userData.language);
  const [searchTerm, setSearchTerm] = useState("");
  const [isReporting, setIsReporting] = useState(false);
  const [reportDetails, setReportDetails] = useState("");
  const [reportQuestion, setReportQuestion] = useState("");

  interface Myth {
    id: string;
    claim: string;
    fact: string | null;
    source: string | null;
    link: string | null;
    status: string;
  }

  const [liveMyths, setLiveMyths] = useState<Myth[]>([]);

  React.useEffect(() => {
    fetch("/api/myths")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Only show published ones on the frontend
          setLiveMyths(data.filter(m => m.status === "PUBLISHED"));
        }
      })
      .catch(e => console.error(e));
  }, []);

  const allMyths = [
    ...(t.myths.mythList || []),
    ...liveMyths.map(m => ({
      id: m.id,
      myth: m.claim,
      fact: m.fact || "",
      source: m.source || "Official Verification",
      link: m.link || "#"
    }))
  ];

  const filteredMyths = allMyths.filter(m => 
    m.myth.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.fact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-destructive">
          <div className="p-3 bg-destructive/10 rounded-xl">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            {t.myths.title}
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          {t.myths.desc}
        </p>
      </header>

      <div className="relative">
        <Search className="absolute left-4 top-4 text-muted-foreground w-5 h-5" />
        <input 
          type="text"
          placeholder={t.myths.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-card shadow-sm focus:ring-2 focus:ring-primary focus:outline-none text-lg"
        />
      </div>

      <div className="grid gap-6">
        {filteredMyths.length === 0 ? (
          <div className="p-10 text-center bg-card border border-border rounded-3xl space-y-5 shadow-sm">
            {!isReporting ? (
              <>
                <div className="w-16 h-16 bg-muted/50 text-muted-foreground rounded-2xl flex items-center justify-center mx-auto mb-2 border border-border/50">
                  <Search className="w-8 h-8 opacity-50" />
                </div>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">{t.myths.noResults}</h3>
                <p className="text-muted-foreground text-lg max-w-md mx-auto">{t.myths.noResultsDesc} "<span className="font-medium text-foreground">{searchTerm}</span>".</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                  <a 
                    href={`/assistant?q=${encodeURIComponent(searchTerm)}`} 
                    className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:scale-105 hover:bg-primary/90 transition-all shadow-md shadow-primary/20 w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    {t.myths.askAssistant} <ExternalLink className="w-4 h-4" />
                  </a>
                  <button 
                    onClick={() => {
                      setReportQuestion(searchTerm);
                      setIsReporting(true);
                    }} 
                    className="px-6 py-3 bg-secondary text-foreground font-medium rounded-xl hover:bg-secondary/80 transition-colors w-full sm:w-auto border border-border flex items-center justify-center gap-2"
                  >
                    {t.myths.sendTeam}
                  </button>
                </div>
              </>
            ) : (
              <div className="text-left space-y-4 max-w-lg mx-auto">
                <h3 className="text-xl font-bold">{t.myths.requestFactCheck}</h3>
                <p className="text-muted-foreground text-sm">{t.myths.requestDesc}</p>
                
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium mb-1 block">{t.myths.yourQuestion}</label>
                    <textarea 
                      value={reportQuestion}
                      onChange={(e) => setReportQuestion(e.target.value)}
                      className="w-full p-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none min-h-[100px]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">{t.myths.contactDetails}</label>
                    <input 
                      type="text"
                      placeholder={t.myths.contactPlaceholder}
                      value={reportDetails}
                      onChange={(e) => setReportDetails(e.target.value)}
                      className="w-full p-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button onClick={() => setIsReporting(false)} className="px-4 py-2 text-muted-foreground hover:bg-secondary rounded-lg font-medium transition-colors">
                    {t.myths.cancel}
                  </button>
                  <button 
                    onClick={async () => {
                      if (!reportQuestion) return;
                      try {
                        await fetch('/api/myths', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            claim: reportQuestion,
                            userId: reportDetails || (userData.email ? userData.email : "Anonymous")
                          })
                        });
                        alert("Fact-check request sent to the team!");
                        setIsReporting(false);
                        setSearchTerm("");
                        setReportQuestion("");
                        setReportDetails("");
                      } catch (e) {
                        alert("Failed to send. Please try again.");
                      }
                    }}
                    className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    {t.myths.submit}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          filteredMyths.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Info className="w-32 h-32" />
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-destructive shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-bold text-destructive uppercase tracking-wider mb-1">{t.myths.claim}</div>
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground">{item.myth}</h2>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-green-500/10 border border-green-500/20">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-1">{t.myths.fact}</div>
                    <p className="text-foreground md:text-lg">{item.fact}</p>
                    
                    <div className="mt-4 pt-4 border-t border-green-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
                      <div className="flex flex-col gap-1">
                        <span className="text-muted-foreground">{t.myths.source} <span className="font-medium text-foreground">{item.source}</span></span>
                        <a href={item.link} className="inline-flex items-center gap-1 text-primary hover:underline font-medium">
                          {t.myths.verifySource} <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      
                      <button 
                        onClick={async () => {
                          const btn = document.getElementById(`gemini-btn-${item.id}`);
                          if (btn) btn.innerText = "Consulting Gemini...";
                          try {
                            const res = await fetch('/api/myths/fact-check', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ myth: item.myth, fact: item.fact })
                            });
                            const data = await res.json();
                            if (data.explanation) {
                              const expDiv = document.getElementById(`gemini-exp-${item.id}`);
                              if (expDiv) {
                                expDiv.innerHTML = `<div class="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-xl animate-in fade-in slide-in-from-top-2">
                                  <div class="flex items-center gap-2 mb-2 text-primary font-bold">
                                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                                    Gemini Deep Dive
                                  </div>
                                  <div class="text-sm text-foreground/80 leading-relaxed">${data.explanation.replace(/\n/g, '<br/>')}</div>
                                </div>`;
                              }
                            }
                          } catch (e) {
                            console.error(e);
                          } finally {
                            if (btn) btn.innerText = "Gemini Deep Dive";
                          }
                        }}
                        id={`gemini-btn-${item.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary hover:text-white transition-all font-semibold"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                        Gemini Deep Dive
                      </button>
                    </div>
                    <div id={`gemini-exp-${item.id}`}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* AI Assistant Forwarding Block */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-3xl text-center space-y-4 shadow-sm"
      >
        <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto shadow-md shadow-primary/20 mb-4">
          <Search className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-foreground tracking-tight">{t.myths.reportMyth}</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          {t.myths.reportMythDesc}
        </p>
        <div className="pt-4">
          <a href="/assistant" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 hover:bg-primary/90 transition-all">
            Ask the AI Assistant <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
