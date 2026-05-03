import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  ShieldCheck, 
  AlertCircle, 
  Clock, 
  ExternalLink,
  Scale,
  Landmark,
  FileText,
  HelpCircle,
  Briefcase,
  History,
  TrendingUp,
  Newspaper,
  BookOpen,
  Info
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import CandidateSurvey from "@/components/CandidateSurvey";

export default async function CandidateDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = await params;
  const id = unwrappedParams.id;
  
  const dbCandidate = await prisma.candidate.findUnique({
    where: { id }
  });

  if (!dbCandidate) {
    return (
      <div className="min-h-screen bg-background p-6 md:p-10 max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-foreground mb-4">Candidate Not Found</h1>
        <Link href="/candidates" className="text-primary hover:text-primary/80 font-medium transition-colors">
          &larr; Return to Transparency Hub
        </Link>
      </div>
    );
  }

  // Map DB candidate to frontend interface
  const candidate = {
    ...dbCandidate,
    id: dbCandidate.id,
    assets: dbCandidate.totalAssets,
    liabilities: dbCandidate.totalLiabilities,
    cases: dbCandidate.criminalCases,
    lastUpdated: dbCandidate.updatedAt.toISOString(),
    performanceMetrics: dbCandidate.performance ? JSON.parse(dbCandidate.performance) : {
      attendance: { value: "Data Not Available", source: "N/A", lastUpdated: "N/A" },
      questionsAsked: { value: "N/A", source: "N/A", lastUpdated: "N/A" },
      billsIntroduced: { value: "N/A", source: "N/A", lastUpdated: "N/A" },
      fundsUtilized: { value: "N/A", source: "N/A", lastUpdated: "N/A" },
      keyAchievements: []
    },
    electionHistory: dbCandidate.electionHistory ? JSON.parse(dbCandidate.electionHistory) : {
      electionsContested: 0, wins: 0, losses: 0, latestVoteShare: "N/A", latestMargin: "N/A"
    },
    movableAssetsBreakdown: JSON.parse(dbCandidate.assetBreakdown || "[]"),
    immovableAssetsBreakdown: [], // SQLite schema doesn't have separate immovable field in the check, but it might be in assetBreakdown
    liabilitiesBreakdown: JSON.parse(dbCandidate.liabilityBreakdown || "[]"),
    criminalCasesBreakdown: JSON.parse(dbCandidate.caseDetails || "[]"),
    pastControversies: dbCandidate.scamsOrControversies ? JSON.parse(dbCandidate.scamsOrControversies) : [],
    careerHistory: dbCandidate.performance ? (JSON.parse(dbCandidate.performance).careerHistory || []) : [],
    ideologyStances: dbCandidate.performance ? (JSON.parse(dbCandidate.performance).ideologyStances || []) : [],
    recentNews: dbCandidate.performance ? (JSON.parse(dbCandidate.performance).recentNews || []) : [],
    assetDetails: {
      movable: dbCandidate.totalAssets,
      immovable: "See Breakdown"
    },
    currentPosition: dbCandidate.profession,
    statusBadge: "Candidate",
    yearsInPolitics: 0,
    votingRecord: "Data Not Available",
    educationDetails: dbCandidate.education,
    familyBackground: "Data Not Available"
  };


  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <div className="max-w-4xl mx-auto p-6 md:p-12 space-y-12">
        
        {/* Navigation */}
        <nav>
          <Link href="/candidates" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Directory
          </Link>
        </nav>

        {/* Profile Card */}
        <div className="bg-card rounded-2xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-border/50">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <Image 
              src={candidate.photo} 
              alt={candidate.name} 
              width={160}
              height={160}
              className="w-40 h-40 rounded-xl object-cover shadow-sm bg-muted shrink-0"
              referrerPolicy="no-referrer"
            />
            
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="space-y-1.5">
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                    {candidate.name}
                  </h1>
                  {candidate.confidence === "High" && (
                    <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-full text-xs font-semibold shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5" /> 
                      Verified 
                      <span className="relative group flex items-center cursor-help ml-0.5">
                        <span className="underline decoration-dotted underline-offset-2">Affidavit</span>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-foreground text-background text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 shadow-lg text-left">
                          Data verified from Election Commission of India (ECI) & ADR.
                        </div>
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 pb-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-md text-sm font-semibold border border-primary/20">
                    {candidate.currentPosition}
                  </span>
                  <span className={`px-3 py-1 rounded-md text-sm font-semibold border ${candidate.statusBadge === 'Incumbent' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-orange-50 text-orange-700 border-orange-200'}`}>
                    {candidate.statusBadge}
                  </span>
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm font-semibold border border-border/50">
                    {candidate.yearsInPolitics} Years in Politics
                  </span>
                </div>

                <p className="text-lg text-secondary-foreground font-medium">
                  {candidate.profession} <span className="text-muted-foreground font-normal mx-1">•</span> <span className="text-muted-foreground font-normal">{candidate.age} Years Old</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 border-t border-border/50">
                <div className="flex flex-col mt-2">
                  <span className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-1">Party</span>
                  <span className="font-medium text-sm">{candidate.party}</span>
                </div>
                <div className="w-px h-8 bg-border hidden md:block mt-2"></div>
                <div className="flex flex-col mt-2">
                  <span className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-1">Constituency</span>
                  <span className="font-medium text-sm">{candidate.constituency}, {candidate.state}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disqualification Alert */}
        {candidate.disqualifications !== "None" && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl flex gap-3 shadow-sm">
            <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-800">Verified Disqualification / Suspension</h3>
              <p className="text-red-700 text-sm mt-1 leading-relaxed">{candidate.disqualifications}</p>
            </div>
          </div>
        )}

        {/* Quick Stats Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card rounded-xl p-5 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] border border-border/50">
            <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2 flex items-center gap-1.5"><Landmark className="w-3.5 h-3.5" /> Total Assets</p>
            <p className="text-2xl font-bold text-foreground">{candidate.assets}</p>
          </div>
          <div className="bg-card rounded-xl p-5 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] border border-border/50">
            <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2 flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5" /> Liabilities</p>
            <p className="text-2xl font-bold text-amber-600">{candidate.liabilities}</p>
          </div>
          <div className="bg-card rounded-xl p-5 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] border border-border/50">
            <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2 flex items-center gap-1.5"><Scale className="w-3.5 h-3.5" /> Criminal Cases</p>
            <p className={`text-2xl font-bold ${candidate.cases > 0 ? "text-red-500" : "text-green-500"}`}>
              {candidate.cases}
            </p>
          </div>
          <div className="bg-card rounded-xl p-5 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] border border-border/50">
            <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Data Verified</p>
            <p className="text-lg font-bold text-foreground mt-1">
              {new Date(candidate.lastUpdated).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
                timeZone: "UTC"
              })}
            </p>
          </div>
        </section>

        {/* Collapsible Disclaimer */}
        <details className="group bg-secondary/50 rounded-xl border border-primary/10 overflow-hidden text-sm [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer p-4 font-medium text-secondary-foreground hover:bg-secondary transition-colors">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-primary" />
              Disclaimer & Transparency Note
            </div>
            <span className="text-primary text-xs group-open:hidden">Read More</span>
            <span className="text-primary text-xs hidden group-open:block">Collapse</span>
          </summary>
          <div className="p-4 pt-0 text-muted-foreground leading-relaxed border-t border-primary/5 mt-2">
            All data presented is sourced directly from the Election Commission of India (ECI), Association for Democratic Reforms (ADR), and official candidate affidavits. VoteWise AI does not hallucinate or modify official numbers. If data is listed as "Data Not Available," it means no official public record was found.
          </div>
        </details>

        {/* Main Sections */}
        <div className="space-y-12">
          
          {/* Performance Metrics */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" /> Legislative Performance
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm text-center flex flex-col justify-between">
                <div>
                  <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-1">Attendance</p>
                  <p className="text-xl font-bold text-foreground">{candidate.performanceMetrics.attendance.value}</p>
                </div>
                <div className="mt-3 text-[10px] text-muted-foreground uppercase font-medium">
                  Source: {candidate.performanceMetrics.attendance.source}<br/>
                  (Updated: {candidate.performanceMetrics.attendance.lastUpdated})
                </div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm text-center flex flex-col justify-between">
                <div>
                  <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-1">Questions Asked</p>
                  <p className="text-xl font-bold text-foreground">{candidate.performanceMetrics.questionsAsked.value}</p>
                </div>
                <div className="mt-3 text-[10px] text-muted-foreground uppercase font-medium">
                  Source: {candidate.performanceMetrics.questionsAsked.source}<br/>
                  (Updated: {candidate.performanceMetrics.questionsAsked.lastUpdated})
                </div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm text-center flex flex-col justify-between">
                <div>
                  <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-1">Bills Introduced</p>
                  <p className="text-xl font-bold text-foreground">{candidate.performanceMetrics.billsIntroduced.value}</p>
                </div>
                <div className="mt-3 text-[10px] text-muted-foreground uppercase font-medium">
                  Source: {candidate.performanceMetrics.billsIntroduced.source}<br/>
                  (Updated: {candidate.performanceMetrics.billsIntroduced.lastUpdated})
                </div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm text-center flex flex-col justify-between">
                <div>
                  <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-1">Funds Utilized</p>
                  <p className="text-xl font-bold text-foreground">{candidate.performanceMetrics.fundsUtilized.value}</p>
                </div>
                <div className="mt-3 text-[10px] text-muted-foreground uppercase font-medium">
                  Source: {candidate.performanceMetrics.fundsUtilized.source}<br/>
                  (Updated: {candidate.performanceMetrics.fundsUtilized.lastUpdated})
                </div>
              </div>
            </div>
            {candidate.performanceMetrics.keyAchievements.length > 0 && (
              <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm mt-4">
                <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-3">Key Achievements & Initiatives</p>
                <div className="flex flex-wrap gap-2">
                  {candidate.performanceMetrics.keyAchievements.map((ach, idx) => (
                    <span key={idx} className="bg-secondary/50 text-secondary-foreground border border-border px-3 py-1.5 rounded-lg text-sm font-medium">
                      {ach}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {candidate.performanceMetrics.billDetails && candidate.performanceMetrics.billDetails.length > 0 && (
              <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm mt-4">
                <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-3 flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary" /> Key Bills Introduced</p>
                <div className="space-y-3 border-l-2 border-primary/20 ml-2 pl-4">
                  {candidate.performanceMetrics.billDetails.map((bill, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-primary/60"></div>
                      <p className="text-sm font-medium text-foreground leading-snug">{bill}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Election History */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 flex items-center gap-2">
              <History className="w-5 h-5 text-primary" /> Election History
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-muted-foreground font-semibold">Total Contested</p>
                  <p className="text-2xl font-bold">{candidate.electionHistory.electionsContested}</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 bg-green-50 rounded-lg p-3 border border-green-100 text-center">
                    <p className="text-green-800 text-xs uppercase tracking-wider font-bold">Wins</p>
                    <p className="text-xl font-bold text-green-600">{candidate.electionHistory.wins}</p>
                  </div>
                  <div className="flex-1 bg-red-50 rounded-lg p-3 border border-red-100 text-center">
                    <p className="text-red-800 text-xs uppercase tracking-wider font-bold">Losses</p>
                    <p className="text-xl font-bold text-red-600">{candidate.electionHistory.losses}</p>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm flex flex-col justify-center space-y-4">
                <div className="flex justify-between items-center border-b border-border/50 pb-3">
                  <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold">Latest Vote Share</p>
                  <p className="text-lg font-bold">{candidate.electionHistory.latestVoteShare}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold">Margin of Victory/Loss</p>
                  <p className="text-lg font-bold">{candidate.electionHistory.latestMargin}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Ideology & Stances */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Ideology & Stances
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm">
                <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-4">Key Issues & Positions</p>
                {candidate.ideologyStances.length > 0 ? (
                  <div className="space-y-3">
                    {candidate.ideologyStances.map((stance, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-background border border-border/50 p-2.5 rounded-lg">
                        <span className="font-medium text-sm">{stance.issue}</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded-md ${
                          stance.position === 'Pro' ? 'bg-green-100 text-green-700' :
                          stance.position === 'Against' ? 'bg-red-100 text-red-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {stance.position}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground italic">Stance data not available.</p>
                )}
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm space-y-3">
                <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold">Voting Record Summary</p>
                <p className="font-medium text-sm leading-relaxed p-3 bg-secondary/30 rounded-lg border border-border/50">
                  {candidate.votingRecord}
                </p>
              </div>
            </div>
          </section>

          {/* Criminal Records & Legal Details */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 flex justify-between items-center">
              <span className="flex items-center gap-2"><Scale className="w-5 h-5 text-primary" /> Legal Details & Cases</span>
              <span className={`text-sm px-2.5 py-1 rounded-full font-bold ${candidate.cases > 0 ? "bg-red-50 text-red-600 border border-red-100" : "bg-green-50 text-green-600 border border-green-100"}`}>
                {candidate.cases} Active Cases
              </span>
            </h2>
            
            {candidate.cases === 0 && candidate.pastControversies.length === 0 ? (
              <div className="bg-card border border-green-100 rounded-xl p-8 text-center shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
                <ShieldCheck className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-green-700">Clean Legal Record</p>
                <p className="text-sm text-muted-foreground mt-1">No active criminal cases or verified past controversies declared.</p>
              </div>
            ) : (
              <div className="space-y-4">
                
                {/* Active Cases Collapsible */}
                {candidate.cases > 0 && (
                  <details className="group bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm">
                    <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold hover:bg-secondary/30 transition-colors">
                      <span className="flex items-center gap-2">View Active Case Details</span>
                      <span className="text-primary text-sm group-open:hidden">Expand</span>
                      <span className="text-primary text-sm hidden group-open:block">Collapse</span>
                    </summary>
                    <div className="p-5 pt-0 border-t border-border/50 mt-2 space-y-4">
                      {candidate.criminalCasesBreakdown.map((caseItem, idx) => (
                        <div key={idx} className="bg-background border border-border/50 rounded-lg p-4">
                          <div className="grid md:grid-cols-2 gap-4 mb-3 pb-3 border-b border-border/30">
                            <div>
                              <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-1">FIR / Case No.</p>
                              <p className="font-medium text-sm">{caseItem.firInfo}</p>
                            </div>
                            <div>
                              <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-1">Court</p>
                              <p className="font-medium text-sm">{caseItem.courtInfo}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-2">Applicable IPC Sections</p>
                            <div className="flex flex-wrap gap-2">
                              {caseItem.sections.map((section, sIdx) => (
                                <span key={sIdx} className="bg-red-50 text-red-600 border border-red-100 px-2 py-1 text-xs rounded-md font-semibold">
                                  {section}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </details>
                )}

                {/* Past Controversies */}
                {candidate.pastControversies.length > 0 && (
                  <div className="bg-card border border-amber-200/60 rounded-xl p-5 shadow-sm">
                    <p className="text-amber-700 text-xs uppercase tracking-wider font-bold mb-3 flex items-center gap-1.5"><History className="w-3.5 h-3.5" /> Past Verified Controversies</p>
                    <div className="space-y-3 border-l-2 border-amber-200 ml-2 pl-4">
                      {candidate.pastControversies.map((controversy, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute -left-[23px] top-1.5 w-2 h-2 rounded-full bg-amber-400"></div>
                          <p className="text-sm font-semibold text-foreground">{controversy.date}</p>
                          <p className="text-sm text-secondary-foreground mt-0.5">{controversy.description}</p>
                          <p className="text-xs font-medium text-amber-600 mt-1">Status: {controversy.status}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>

          {/* Income & Tax */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-primary" /> Income Tax & Contracts
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border/50 rounded-xl p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
                <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-1">Total Income Declared (Last ITR)</p>
                <p className="text-2xl font-bold text-primary mb-6">{candidate.totalIncomeDeclared}</p>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">PAN Given</p>
                    <p className="font-semibold">{candidate.panGiven ? "Yes" : "No"}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">ITR Filed</p>
                    <p className="font-semibold">{candidate.itrFiled ? "Yes" : "No"}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-card border border-border/50 rounded-xl p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] h-full">
                  <div className="space-y-5">
                    <div>
                      <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-2">Sources Of Income</p>
                      <p className="font-medium text-sm leading-relaxed">{candidate.incomeSources}</p>
                    </div>
                    <div>
                      <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-2">Government Contracts</p>
                      <p className="font-medium text-sm leading-relaxed">{candidate.govtContracts}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Background Details */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" /> Background Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm">
                <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-4">Career Timeline</p>
                {candidate.careerHistory.length > 0 ? (
                  <div className="space-y-4 border-l-2 border-primary/20 ml-2 pl-4">
                    {candidate.careerHistory.map((job, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-primary/60"></div>
                        <p className="text-xs font-bold text-primary">{job.period}</p>
                        <p className="text-sm font-medium text-foreground mt-0.5">{job.role}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground italic">Career timeline not available.</p>
                )}
              </div>
              <div className="space-y-4">
                <div className="bg-card border border-border/50 rounded-xl p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] space-y-4">
                  <div>
                    <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold mb-1">Candidate Education</p>
                    <p className="font-medium text-sm leading-relaxed">{candidate.educationDetails}</p>
                  </div>
                </div>
                <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm space-y-3">
                  <p className="text-[#9CA3AF] text-xs uppercase tracking-wider font-semibold">Family Background</p>
                  <p className="font-medium text-sm leading-relaxed p-3 bg-secondary/30 rounded-lg border border-border/50">
                    {candidate.familyBackground}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Assets Summaries */}
          <section className="space-y-4">
            <details className="group bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold hover:bg-secondary/30 transition-colors">
                <span className="flex items-center gap-2">View Detailed Financial Assets Breakdown</span>
                <span className="text-primary text-sm group-open:hidden">Expand</span>
                <span className="text-primary text-sm hidden group-open:block">Collapse</span>
              </summary>
              <div className="p-5 pt-0 border-t border-border/50 mt-2 space-y-8">
                <div>
                  <p className="font-bold text-foreground mb-3 flex justify-between">Movable Assets <span className="text-primary">{candidate.assetDetails.movable}</span></p>
                  {candidate.movableAssetsBreakdown.length > 0 ? (
                    <table className="w-full text-left">
                      <thead className="bg-muted/50 border-b border-border/50 text-xs uppercase tracking-wider text-muted-foreground">
                        <tr>
                          <th className="px-5 py-2 font-semibold">Asset Description</th>
                          <th className="px-5 py-2 font-semibold text-right">Declared Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/30 text-sm">
                        {candidate.movableAssetsBreakdown.map((asset, idx) => (
                          <tr key={idx} className="hover:bg-muted/20">
                            <td className="px-5 py-2 font-medium text-secondary-foreground">{asset.type}</td>
                            <td className="px-5 py-2 text-right font-bold">{asset.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : <p className="text-muted-foreground text-sm">No specific breakdown.</p>}
                </div>
                
                <div>
                  <p className="font-bold text-foreground mb-3 flex justify-between">Immovable Assets <span className="text-primary">{candidate.assetDetails.immovable}</span></p>
                  {candidate.immovableAssetsBreakdown.length > 0 ? (
                    <table className="w-full text-left">
                      <thead className="bg-muted/50 border-b border-border/50 text-xs uppercase tracking-wider text-muted-foreground">
                        <tr>
                          <th className="px-5 py-2 font-semibold">Property Description</th>
                          <th className="px-5 py-2 font-semibold text-right">Market Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/30 text-sm">
                        {candidate.immovableAssetsBreakdown.map((asset, idx) => (
                          <tr key={idx} className="hover:bg-muted/20">
                            <td className="px-5 py-2 font-medium text-secondary-foreground">{asset.type}</td>
                            <td className="px-5 py-2 text-right font-bold">{asset.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : <p className="text-muted-foreground text-sm">No specific breakdown.</p>}
                </div>
                
                <div>
                  <p className="font-bold text-foreground mb-3 flex justify-between">Liabilities <span className="text-amber-600">{candidate.liabilities}</span></p>
                  {candidate.liabilitiesBreakdown.length > 0 ? (
                    <table className="w-full text-left">
                      <thead className="bg-muted/50 border-b border-border/50 text-xs uppercase tracking-wider text-muted-foreground">
                        <tr>
                          <th className="px-5 py-2 font-semibold">Institution / Dues</th>
                          <th className="px-5 py-2 font-semibold text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/30 text-sm">
                        {candidate.liabilitiesBreakdown.map((liability, idx) => (
                          <tr key={idx} className="hover:bg-muted/20">
                            <td className="px-5 py-2 font-medium text-secondary-foreground">{liability.type}</td>
                            <td className="px-5 py-2 text-right font-bold text-amber-600">{liability.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : <p className="text-muted-foreground text-sm">No specific breakdown.</p>}
                </div>
              </div>
            </details>
          </section>

          {/* News & Sentiment */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-primary" /> Verified Headlines
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {candidate.recentNews.length > 0 ? candidate.recentNews.map((news, idx) => (
                <div key={idx} className="bg-card border border-border/50 rounded-xl p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-muted-foreground uppercase">{news.source}</span>
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm ${
                        news.sentiment === 'Positive' ? 'bg-green-100 text-green-700' :
                        news.sentiment === 'Negative' ? 'bg-red-100 text-red-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>{news.sentiment}</span>
                    </div>
                    <p className="font-semibold text-sm leading-snug">{news.headline}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">{news.date}</p>
                </div>
              )) : (
                <p className="text-muted-foreground text-sm col-span-2 italic">No verified news aggregation available at this time.</p>
              )}
            </div>
          </section>

        </div>

        <CandidateSurvey candidateId={candidate.id.toString()} />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-muted-foreground flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> 
            Data verified from <strong className="text-foreground">ECI & ADR Reports</strong>
          </div>
          <a 
            href="https://affidavit.eci.gov.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Verify at ECI Portal <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </footer>
      </div>
    </div>
  );
}
