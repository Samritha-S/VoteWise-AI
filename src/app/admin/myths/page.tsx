"use client";

import React, { useState } from "react";
import { ShieldAlert, Check, X, Search, MessageCircleQuestion } from "lucide-react";

export default function MythsData() {
  const [activeTab, setActiveTab] = useState<"incoming" | "published">("incoming");

  // Mock data for myths
  const incoming = [
    { id: 1, user: "USR-042", query: "Can I vote with an expired passport?", time: "10 mins ago" },
    { id: 2, user: "USR-811", query: "Is EVM hacking real? I read on WhatsApp that EVMs can be controlled via Bluetooth.", time: "1 hour ago" },
    { id: 3, user: "USR-293", query: "Do I have to pay tax to be able to vote?", time: "3 hours ago" },
  ];

  const published = [
    { id: 101, title: "Can NRIs vote online?", status: "Active", views: "12.4k" },
    { id: 102, title: "Do EVMs have Bluetooth/Wi-Fi?", status: "Active", views: "89.2k" },
    { id: 103, title: "Can I vote if I lost my voter slip?", status: "Active", views: "45.1k" },
  ];

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
                      <span className="font-mono text-xs font-medium bg-muted px-2 py-1 rounded">{q.user}</span>
                      <span className="text-xs text-muted-foreground">{q.time}</span>
                    </div>
                    <p className="text-lg font-medium">{q.query}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90">
                    <Check className="w-4 h-4" /> Draft Answer
                  </button>
                  <button className="p-2 border border-border rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-colors">
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
                    <td className="px-6 py-4 font-medium">{p.title}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs font-medium">{p.status}</span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{p.views}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:underline text-sm font-medium">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
