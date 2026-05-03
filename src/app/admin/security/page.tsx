"use client";

import React, { useState } from "react";
import { ShieldCheck, ShieldAlert, Lock, Unlock, Eye, History, UserX } from "lucide-react";

export default function SecurityPage() {
  const [lockdown, setLockdown] = useState(false);

  const auditLogs = [
    { event: "Admin Login", user: "Admin01", status: "Success", time: "2 mins ago", ip: "192.168.1.1" },
    { event: "Database Export", user: "System", status: "Completed", time: "45 mins ago", ip: "Internal" },
    { event: "Unauthorized Attempt", user: "Unknown", status: "Blocked", time: "2 hours ago", ip: "45.12.8.21" },
    { event: "Settings Modified", user: "Admin01", status: "Success", time: "5 hours ago", ip: "192.168.1.1" },
  ];

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 max-w-6xl mx-auto space-y-10 text-foreground">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-primary" /> Security Layer
          </h1>
          <p className="text-muted-foreground mt-1">Monitor system integrity and manage access controls.</p>
        </div>
        <button 
          onClick={() => setLockdown(!lockdown)}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-lg ${
            lockdown ? "bg-destructive text-destructive-foreground shadow-destructive/20" : "bg-primary text-primary-foreground shadow-primary/20"
          }`}
        >
          {lockdown ? <Lock className="w-5 h-5" /> : <Unlock className="w-5 h-5" />}
          {lockdown ? "EMERGENCY LOCKDOWN ACTIVE" : "SYSTEM SECURE"}
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg">Active Sessions</h3>
          <p className="text-3xl font-black mt-2">1</p>
          <p className="text-sm text-muted-foreground mt-1">Verified admin instances</p>
        </div>
        
        <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg">Threats Blocked</h3>
          <p className="text-3xl font-black mt-2">12</p>
          <p className="text-sm text-muted-foreground mt-1">Brute force attempts today</p>
        </div>

        <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
            <UserX className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg">Flagged Users</h3>
          <p className="text-3xl font-black mt-2">0</p>
          <p className="text-sm text-muted-foreground mt-1">Violations of terms of service</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border bg-muted/30 flex items-center justify-between">
          <h3 className="font-bold flex items-center gap-2"><History className="w-5 h-5 text-muted-foreground" /> Security Audit Log</h3>
          <button className="text-xs font-bold text-primary hover:underline">Download full log (JSON)</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-muted-foreground border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Event</th>
                <th className="px-6 py-4 font-medium">Actor</th>
                <th className="px-6 py-4 font-medium">Result</th>
                <th className="px-6 py-4 font-medium">Time</th>
                <th className="px-6 py-4 font-medium">Origin IP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {auditLogs.map((log, i) => (
                <tr key={i} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-bold">{log.event}</td>
                  <td className="px-6 py-4 text-muted-foreground">{log.user}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${
                      log.status === 'Success' || log.status === 'Completed' ? 'bg-green-500/10 text-green-500' : 'bg-destructive/10 text-destructive'
                    }`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{log.time}</td>
                  <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
