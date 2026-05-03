"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, ThumbsUp, ThumbsDown, AlertTriangle } from "lucide-react";

interface Feedback {
  id: string;
  candidateId: string;
  isAccurate: "Yes" | "No" | "Partially";
  inaccurateFields: string | null;
  comments: string | null;
  createdAt: string;
}

export default function FeedbackData() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/feedback')
      .then(res => res.json())
      .then(data => {
        setFeedback(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching feedback:", err);
        setFeedback([]);
        setLoading(false);
      });
  }, []);

  const yesCount = feedback.filter(f => f.isAccurate === "Yes").length;
  const noCount = feedback.filter(f => f.isAccurate === "No").length;
  const partialCount = feedback.filter(f => f.isAccurate === "Partially").length;

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 max-w-6xl mx-auto space-y-8 text-foreground">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-primary" /> Survey Feedback
          </h1>
          <p className="text-muted-foreground mt-1">Community verification poll results for candidates.</p>
        </div>
      </header>

      {/* Visualizations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
            <ThumbsUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm font-medium">Verified Accurate</p>
            <p className="text-3xl font-bold">{yesCount}</p>
          </div>
        </div>
        
        <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm font-medium">Partially Accurate</p>
            <p className="text-3xl font-bold">{partialCount}</p>
          </div>
        </div>

        <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center shrink-0">
            <ThumbsDown className="w-6 h-6" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm font-medium">Flagged Inaccurate</p>
            <p className="text-3xl font-bold">{noCount}</p>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border bg-muted/30">
          <h3 className="font-bold">Recent Submissions</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-muted-foreground border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Candidate ID</th>
                <th className="px-6 py-4 font-medium">Accuracy</th>
                <th className="px-6 py-4 font-medium">Flagged Fields</th>
                <th className="px-6 py-4 font-medium">User Comments</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {loading ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-muted-foreground">Loading polling data...</td>
                </tr>
              ) : feedback.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-muted-foreground">No feedback submitted yet.</td>
                </tr>
              ) : (
                feedback.map(f => (
                  <tr key={f.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                      {new Date(f.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 font-mono text-xs">{f.candidateId}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        f.isAccurate === 'Yes' ? 'bg-green-500/10 text-green-500' :
                        f.isAccurate === 'No' ? 'bg-destructive/10 text-destructive' :
                        'bg-yellow-500/10 text-yellow-500'
                      }`}>
                        {f.isAccurate}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground max-w-[200px] truncate" title={f.inaccurateFields || "-"}>
                      {f.inaccurateFields || "-"}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground max-w-xs truncate" title={f.comments || "-"}>
                      {f.comments || "-"}
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
