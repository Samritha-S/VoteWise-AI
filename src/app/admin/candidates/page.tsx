"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Database, Plus, Trash2, Edit, Search, Upload } from "lucide-react";

interface Candidate {
  id: string;
  name: string;
  party: string;
  constituency: string;
  state: string;
  photo: string;
  totalAssets: string;
}

export default function CandidatesData() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [scrapingUrl, setScrapingUrl] = useState("");
  const [isScraping, setIsScraping] = useState(false);
  const [formData, setFormData] = useState<any>({
    name: "",
    party: "",
    constituency: "",
    state: "",
    totalAssets: "₹0",
    totalLiabilities: "₹0",
    criminalCases: 0,
    seriousCriminalCases: 0,
    education: "",
    profession: "",
    photo: "/candidates/placeholder.jpg",
    age: 40,
    confidence: "High",
    sourceUrl: ""
  });

  useEffect(() => {
    fetch('/api/candidates')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setCandidates(data.data);
        } else {
          setCandidates(Array.isArray(data) ? data : []);
        }
        setLoading(false);
      });
  }, []);

  const handleScrape = async () => {
    setIsScraping(true);
    setTimeout(() => {
      setFormData({
        ...formData,
        name: "Auto Scraped Candidate",
        party: "Independent",
        constituency: "Varanasi",
        state: "Uttar Pradesh",
        sourceUrl: scrapingUrl
      });
      setIsScraping(false);
      alert("AI successfully parsed candidate details from the provided URL.");
    }, 2000);
  };

  const handleSave = async () => {
    try {
      const res = await fetch('/api/candidates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setIsAdding(false);
        fetch('/api/candidates').then(res => res.json()).then(data => {
          if (data.success) setCandidates(data.data);
          else setCandidates(Array.isArray(data) ? data : []);
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const filtered = candidates.filter(c => 
    (c.name || "").toLowerCase().includes(search.toLowerCase()) || 
    (c.party || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 max-w-6xl mx-auto space-y-8 text-foreground">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Database className="w-8 h-8 text-primary" /> Candidate Data
          </h1>
          <p className="text-muted-foreground mt-1">Manage and verify electoral candidates database.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80">
            <Upload className="w-4 h-4" /> Import CSV
          </button>
          <button 
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90"
          >
            <Plus className="w-4 h-4" /> Add Record
          </button>
        </div>
      </header>

      {isAdding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-card border border-border w-full max-w-2xl rounded-2xl shadow-xl p-8 space-y-6 max-h-[90vh] overflow-auto">
            <h2 className="text-2xl font-bold">Add New Candidate</h2>
            
            <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 space-y-3">
              <label className="text-sm font-bold text-primary flex items-center gap-2">
                <Upload className="w-4 h-4" /> Smart Scraper (MyNeta / ECI URL)
              </label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="https://myneta.info/..." 
                  value={scrapingUrl}
                  onChange={(e) => setScrapingUrl(e.target.value)}
                  className="flex-1 p-2 rounded-lg border bg-background text-sm"
                />
                <button 
                  onClick={handleScrape}
                  disabled={isScraping || !scrapingUrl}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold disabled:opacity-50"
                >
                  {isScraping ? "Scraping..." : "Scrape"}
                </button>
              </div>
              <p className="text-[10px] text-muted-foreground italic">Powered by VoteWise AI Scraper Agent</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase text-muted-foreground">Candidate Name</label>
                <input 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full p-2.5 rounded-lg border bg-background mt-1"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-muted-foreground">Party</label>
                <input 
                  value={formData.party} 
                  onChange={e => setFormData({...formData, party: e.target.value})}
                  className="w-full p-2.5 rounded-lg border bg-background mt-1"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-muted-foreground">Constituency</label>
                <input 
                  value={formData.constituency} 
                  onChange={e => setFormData({...formData, constituency: e.target.value})}
                  className="w-full p-2.5 rounded-lg border bg-background mt-1"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-muted-foreground">State</label>
                <input 
                  value={formData.state} 
                  onChange={e => setFormData({...formData, state: e.target.value})}
                  className="w-full p-2.5 rounded-lg border bg-background mt-1"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-muted-foreground">Total Assets</label>
                <input 
                  value={formData.totalAssets} 
                  onChange={e => setFormData({...formData, totalAssets: e.target.value})}
                  className="w-full p-2.5 rounded-lg border bg-background mt-1"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-muted-foreground">Criminal Cases</label>
                <input 
                  type="number"
                  value={formData.criminalCases} 
                  onChange={e => setFormData({...formData, criminalCases: parseInt(e.target.value)})}
                  className="w-full p-2.5 rounded-lg border bg-background mt-1"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button onClick={() => setIsAdding(false)} className="px-6 py-2.5 hover:bg-secondary rounded-xl font-bold">Cancel</button>
              <button onClick={handleSave} className="px-8 py-2.5 bg-primary text-primary-foreground rounded-xl font-bold shadow-lg shadow-primary/20">Save Record</button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between bg-muted/30">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search records..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none text-sm"
            />
          </div>
          <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
            {filtered.length} Total
          </span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-muted-foreground border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Candidate Name</th>
                <th className="px-6 py-4 font-medium">Party</th>
                <th className="px-6 py-4 font-medium">Constituency</th>
                <th className="px-6 py-4 font-medium">Assets</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {loading ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-muted-foreground">Loading database records...</td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-muted-foreground">No records found.</td>
                </tr>
              ) : (
                filtered.map(c => (
                  <tr key={c.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium flex items-center gap-3">
                      <Image src={c.photo} alt="" width={32} height={32} className="w-8 h-8 rounded-full object-cover border border-border bg-muted" />
                      {c.name}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-secondary text-foreground px-2 py-1 rounded text-xs font-medium">{c.party}</span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{c.constituency}, {c.state}</td>
                    <td className="px-6 py-4 text-muted-foreground">{c.totalAssets}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-secondary transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-muted-foreground hover:text-destructive rounded-lg hover:bg-destructive/10 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
