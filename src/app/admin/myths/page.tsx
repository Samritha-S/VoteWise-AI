"use client";

import React, { useState } from "react";
import { ShieldAlert, Check, X, Search, MessageCircleQuestion } from "lucide-react";

interface Myth {
  id: string;
  userId: string | null;
  claim: string;
  fact: string | null;
  source: string | null;
  link: string | null;
  status: "PENDING" | "PUBLISHED";
  views: number;
  createdAt: string;
}

export default function MythsData() {
  const [activeTab, setActiveTab] = useState<"incoming" | "published">("incoming");

  const [myths, setMyths] = useState<Myth[]>([]);
  const [draftingMyth, setDraftingMyth] = useState<Myth | null>(null);
  const [draftFact, setDraftFact] = useState("");
  const [draftSource, setDraftSource] = useState("");
  const [draftLink, setDraftLink] = useState("");

  const fetchMyths = () => {
    fetch("/api/myths")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setMyths(data);
      })
      .catch(console.error);
  };

  React.useEffect(() => {
    fetchMyths();
  }, []);

  const incoming = myths.filter(m => m.status === "PENDING");
  const published = myths.filter(m => m.status === "PUBLISHED");

  const handlePublish = async () => {
    if (!draftingMyth || !draftFact) return;
    try {
      await fetch(`/api/myths/${draftingMyth.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fact: draftFact,
          source: draftSource,
          link: draftLink,
          status: "PUBLISHED"
        })
      });
      setDraftingMyth(null);
      setDraftFact("");
      setDraftSource("");
      setDraftLink("");
      fetchMyths();
    } catch (e) {
      console.error(e);
      alert("Failed to publish");
    }
  };

  const handleReject = async (id: string) => {
    try {
      await fetch(`/api/myths/${id}`, { method: "DELETE" });
      fetchMyths();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 max-w-6xl mx-auto space-y-8 text-foreground">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <ShieldAlert className="w-8 h-8 text-primary" /> Myth Buster Moderation
          </h1>
          <p className="text-muted-foreground mt-1">Review user questions and publish official fact-checks.</p>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-border">
        <button 
          onClick={() => setActiveTab("incoming")}
          className={`px-6 py-3 font-medium transition-all border-b-2 ${activeTab === 'incoming' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
        >
          Incoming Queries
          <span className="ml-2 bg-destructive text-destructive-foreground text-xs px-2 py-0.5 rounded-full">{incoming.length}</span>
        </button>
        <button 
          onClick={() => setActiveTab("published")}
          className={`px-6 py-3 font-medium transition-all border-b-2 ${activeTab === 'published' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
        >
          Published Fact-Checks
        </button>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        {activeTab === "incoming" ? (
          <div className="divide-y divide-border">
            {incoming.map(q => (
              <div key={q.id} className="p-6 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-muted/30 transition-colors">
                <div className="flex gap-4">
                  <div className="mt-1 bg-secondary p-2 rounded-full h-fit text-primary">
                    <MessageCircleQuestion className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs font-medium bg-muted px-2 py-1 rounded">{q.userId || "Anonymous"}</span>
                      <span className="text-xs text-muted-foreground">{new Date(q.createdAt).toLocaleDateString()}</span>
                    </div>
                    <p className="text-lg font-medium">{q.claim}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button 
                    onClick={() => {
                      setDraftingMyth(q);
                      setDraftFact(q.fact || "");
                      setDraftSource(q.source || "");
                      setDraftLink(q.link || "");
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90"
                  >
                    <Check className="w-4 h-4" /> Draft Answer
                  </button>
                  <button 
                    onClick={() => handleReject(q.id)}
                    className="p-2 border border-border rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="p-4 border-b border-border bg-muted/30 relative max-w-sm m-4">
              <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search published myths..." 
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none text-sm"
              />
            </div>
            <table className="w-full text-left text-sm">
              <thead className="bg-muted text-muted-foreground border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-medium">Fact-Check Title</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Views</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {published.map(p => (
                  <tr key={p.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium max-w-[300px] truncate">{p.claim}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs font-medium">{p.status}</span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{p.views || 0}</td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => {
                          setDraftingMyth(p);
                          setDraftFact(p.fact || "");
                          setDraftSource(p.source || "");
                          setDraftLink(p.link || "");
                        }}
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {draftingMyth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-card border border-border w-full max-w-lg rounded-2xl shadow-xl p-6 space-y-6">
            <h2 className="text-xl font-bold">Draft Official Fact-Check</h2>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">User Claim/Query</p>
              <p className="bg-muted/50 p-3 rounded-lg text-sm">{draftingMyth.claim}</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-1">Official Fact / Answer</label>
                <textarea 
                  value={draftFact} 
                  onChange={e => setDraftFact(e.target.value)}
                  className="w-full p-3 rounded-xl border bg-background"
                  rows={4}
                  placeholder="Provide the verified answer..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium block mb-1">Source Name</label>
                  <input 
                    value={draftSource} 
                    onChange={e => setDraftSource(e.target.value)}
                    className="w-full p-3 rounded-xl border bg-background"
                    placeholder="e.g. ECI"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Source URL</label>
                  <input 
                    value={draftLink} 
                    onChange={e => setDraftLink(e.target.value)}
                    className="w-full p-3 rounded-xl border bg-background"
                    placeholder="https://..."
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button 
                onClick={() => setDraftingMyth(null)}
                className="px-4 py-2 hover:bg-secondary rounded-lg font-medium"
              >
                Cancel
              </button>
              <button 
                onClick={handlePublish}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium"
              >
                Publish Fact-Check
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
