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
  const [editingCandidate, setEditingCandidate] = useState<Candidate | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = () => {
    setLoading(true);
    fetch('/api/candidates')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCandidates(data);
        } else {
          console.error("Data is not an array:", data);
          setCandidates([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setCandidates([]);
        setLoading(false);
      });
  };

  const handleEdit = (candidate: Candidate) => {
    setEditingCandidate({ ...candidate });
    setIsEditModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCandidate) return;

    setIsSaving(true);
    try {
      const res = await fetch(`/api/candidates/${editingCandidate.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingCandidate),
      });

      if (res.ok) {
        setIsEditModalOpen(false);
        fetchCandidates();
      } else {
        const error = await res.json();
        alert(`Error: ${error.error}`);
      }
    } catch (err) {
      console.error("Save error:", err);
      alert("Failed to save changes.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this candidate?")) return;

    try {
      const res = await fetch(`/api/candidates/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        fetchCandidates();
      } else {
        alert("Failed to delete candidate.");
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const filtered = Array.isArray(candidates) 
    ? candidates.filter(c => 
        (c.name?.toLowerCase() || "").includes(search.toLowerCase()) || 
        (c.party?.toLowerCase() || "").includes(search.toLowerCase())
      )
    : [];

  const getPhotoUrl = (photo: string) => {
    if (!photo || photo === "" || photo === "null") return "https://via.placeholder.com/150?text=Candidate";
    return photo;
  };

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
          <button 
            aria-label="Import candidates from CSV"
            className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80"
          >
            <Upload className="w-4 h-4" /> Import CSV
          </button>
          <button 
            aria-label="Add new candidate record"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90"
          >
            <Plus className="w-4 h-4" /> Add Record
          </button>
        </div>
      </header>

      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between bg-muted/30">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search records..." 
              aria-label="Search candidates"
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
                      <Image src={getPhotoUrl(c.photo)} alt="" width={32} height={32} className="w-8 h-8 rounded-full object-cover border border-border bg-muted" />
                      {c.name}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-secondary text-foreground px-2 py-1 rounded text-xs font-medium">{c.party}</span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{c.constituency}, {c.state}</td>
                    <td className="px-6 py-4 text-muted-foreground">{c.totalAssets}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => handleEdit(c)}
                          className="p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-secondary transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(c.id)}
                          className="p-2 text-muted-foreground hover:text-destructive rounded-lg hover:bg-destructive/10 transition-colors"
                        >
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

      {/* Edit Modal */}
      {isEditModalOpen && editingCandidate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-card border border-border rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="text-xl font-bold">Edit Candidate</h2>
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-6 space-y-4 overflow-y-auto">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input 
                  type="text" 
                  value={editingCandidate.name} 
                  onChange={e => setEditingCandidate({...editingCandidate, name: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Party</label>
                  <input 
                    type="text" 
                    value={editingCandidate.party} 
                    onChange={e => setEditingCandidate({...editingCandidate, party: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Constituency</label>
                  <input 
                    type="text" 
                    value={editingCandidate.constituency} 
                    onChange={e => setEditingCandidate({...editingCandidate, constituency: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">State</label>
                  <input 
                    type="text" 
                    value={editingCandidate.state} 
                    onChange={e => setEditingCandidate({...editingCandidate, state: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Total Assets</label>
                  <input 
                    type="text" 
                    value={editingCandidate.totalAssets} 
                    onChange={e => setEditingCandidate({...editingCandidate, totalAssets: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Photo URL</label>
                <input 
                  type="text" 
                  value={editingCandidate.photo} 
                  onChange={e => setEditingCandidate({...editingCandidate, photo: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border mt-4">
                <button 
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-border hover:bg-muted font-medium transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors flex items-center gap-2"
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
