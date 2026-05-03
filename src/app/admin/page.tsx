"use client";

import React, { useState, useEffect } from "react";
import { 
  LayoutDashboard, 
  Users, 
  Database, 
  ShieldAlert, 
  TrendingUp, 
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

export default function AdminDashboard() {
  const [data, setData] = useState({
    candidates: "0",
    users: "0",
    myths: "0",
    load: "24%"
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/stats')
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          setData({
            candidates: res.data.candidates.toLocaleString(),
            users: res.data.users.toLocaleString(),
            myths: res.data.myths.toLocaleString(),
            load: res.data.load
          });
        }
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  const stats = [
    { label: "Total Candidates", value: data.candidates, trend: "+12%", up: true, icon: Database, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Active Users", value: data.users, trend: "+24%", up: true, icon: Users, color: "text-green-500", bg: "bg-green-500/10" },
    { label: "Myths Busted", value: data.myths, trend: "+4%", up: true, icon: ShieldAlert, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "System Load", value: data.load, trend: "-2%", up: false, icon: Activity, color: "text-orange-500", bg: "bg-orange-500/10" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 max-w-6xl mx-auto space-y-10 text-foreground">
      <header>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <LayoutDashboard className="w-8 h-8 text-primary" /> System Overview
        </h1>
        <p className="text-muted-foreground mt-1">High-level telemetry and analytics for the VoteWise platform.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${stat.up ? "text-green-500" : "text-green-500"}`}>
                  {stat.trend}
                  {stat.up ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4 text-orange-500" />}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                <h3 className="text-3xl font-black mt-1">{stat.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visualizations Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Engagement Chart Placeholder */}
        <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col h-96">
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" /> User Engagement Pipeline</h3>
          <div className="flex-1 flex items-end justify-between gap-2 md:gap-6 pt-10 border-b border-border/50 pb-2 relative">
            {/* Simple mock bar chart */}
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="w-full bg-primary/20 hover:bg-primary/40 rounded-t-lg transition-colors group relative" style={{ height: `${h}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background text-xs py-1 px-2 rounded font-medium">
                  {h}k
                </div>
              </div>
            ))}
            {/* Grid lines */}
            <div className="absolute top-0 w-full border-t border-dashed border-border" />
            <div className="absolute top-1/2 w-full border-t border-dashed border-border" />
          </div>
          <div className="flex justify-between mt-4 text-xs text-muted-foreground font-medium">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        {/* Database Health Placeholder */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-lg mb-6">Database Health</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-muted-foreground">Electoral Data Freshness</span>
                <span className="text-green-500 font-bold">98%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-muted-foreground">API Quota (Gemini)</span>
                <span className="text-orange-500 font-bold">75%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-muted-foreground">Server Storage</span>
                <span className="text-primary font-bold">42%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
