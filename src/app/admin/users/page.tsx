"use client";

import React, { useState } from "react";
import { UserCircle, Search, Download, Filter } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  state: string;
  age: number | null;
  voterStatus: string;
  createdAt: string;
}

export default function UsersData() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setUsers(data);
        }
      })
      .catch(err => console.error("Error fetching users:", err))
      .finally(() => setIsLoading(false));
  }, []);

  const filtered = users.filter(u => 
    (u.state || "").toLowerCase().includes(search.toLowerCase()) || 
    (u.email || "").toLowerCase().includes(search.toLowerCase()) ||
    (u.name || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 max-w-6xl mx-auto space-y-8 text-foreground">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <UserCircle className="w-8 h-8 text-primary" /> User Telemetry
          </h1>
          <p className="text-muted-foreground mt-1">Analytics on registered voters, demographics, and platform usage.</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80">
          <Download className="w-4 h-4" /> Export Data
        </button>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border border-border p-4 rounded-xl shadow-sm text-center">
          <p className="text-muted-foreground text-sm font-medium">Total Users</p>
          <p className="text-2xl font-bold mt-1">{users.length}</p>
        </div>
        <div className="bg-card border border-border p-4 rounded-xl shadow-sm text-center">
          <p className="text-muted-foreground text-sm font-medium">Registered Voters</p>
          <p className="text-2xl font-bold mt-1 text-green-500">
            {users.filter(u => u.voterStatus === 'Registered').length}
          </p>
        </div>
        <div className="bg-card border border-border p-4 rounded-xl shadow-sm text-center">
          <p className="text-muted-foreground text-sm font-medium">Unregistered (Eligible)</p>
          <p className="text-2xl font-bold mt-1 text-yellow-500">
            {users.filter(u => u.voterStatus === 'Not Registered' && (u.age || 0) >= 18).length}
          </p>
        </div>
        <div className="bg-card border border-border p-4 rounded-xl shadow-sm text-center">
          <p className="text-muted-foreground text-sm font-medium">Ineligible (Under 18)</p>
          <p className="text-2xl font-bold mt-1 text-orange-500">
            {users.filter(u => (u.age || 18) < 18).length}
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border flex items-center gap-4 bg-muted/30">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search by ID or State..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none text-sm"
            />
          </div>
          <button className="p-2 border border-border rounded-lg bg-background hover:bg-secondary text-muted-foreground">
            <Filter className="w-4 h-4" />
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-muted-foreground border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">State</th>
                <th className="px-6 py-4 font-medium">Age</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {isLoading ? (
                <tr><td colSpan={6} className="text-center py-8">Loading users...</td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={6} className="text-center py-8">No users found.</td></tr>
              ) : filtered.map((u, i) => (
                <tr key={i} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-sm">{u.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{u.email}</td>
                  <td className="px-6 py-4">{u.state || "N/A"}</td>
                  <td className="px-6 py-4">{u.age || "-"}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      u.voterStatus === 'Registered' ? 'bg-green-500/10 text-green-500' :
                      'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {u.voterStatus || "Unknown"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-muted-foreground">
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
