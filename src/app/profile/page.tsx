"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAppContext, VoterStatus } from "@/context/AppContext";
import { 
  UserCircle, 
  Settings, 
  Globe, 
  Bell, 
  Accessibility, 
  WifiOff, 
  Save,
  LogOut
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const languages = ["English", "Hindi", "Marathi", "Tamil", "Telugu", "Bengali"];

export default function ProfilePage() {
  const { userData, updateUserData, resetUser } = useAppContext();
  const t = useTranslation(userData.language);
  const [isEditing, setIsEditing] = useState(false);
  
  const [formData, setFormData] = useState({
    language: userData.language || "English",
    age: userData.age?.toString() || "",
    state: userData.state || "",
    address: userData.address || "",
    voterStatus: userData.voterStatus || "",
    avatar: userData.avatar || "1"
  });

  const avatars = ["🐅", "🦚", "🥭", "🏑", "🦁"];

  const handleSave = () => {
    updateUserData({
      language: formData.language,
      age: parseInt(formData.age),
      state: formData.state,
      address: formData.address,
      voterStatus: formData.voterStatus as VoterStatus | undefined,
      avatar: formData.avatar
    });
    setIsEditing(false);
  };

  const togglePreference = (key: keyof typeof userData.preferences) => {
    const currentPrefs = userData.preferences || {
      deadlinesAlerts: true,
      pollingReminders: true,
      highContrast: false,
      screenReaderMode: false,
      voiceOutput: true,
    };
    
    const newValue = !currentPrefs[key];
    
    if (key === 'highContrast') {
      if (newValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    
    updateUserData({
      preferences: {
        ...currentPrefs,
        [key]: newValue
      }
    });
  };

  const handleDownloadOfflinePack = () => {
    const dataStr = `VoteWise Offline Pack\n\nState: ${userData.state || 'Not specified'}\nLanguage: ${userData.language}\nVoter Status: ${userData.voterStatus || 'Not specified'}\n\nEssential Documents Checklist: \n- You must bring ONE valid photo ID.\n- Acceptable IDs: Voter ID (EPIC), Aadhaar Card, PAN Card, Driving License, Indian Passport.\n\nHelpline: 1950\nKeep this safe for Polling Day!`;
    const dataUri = 'data:text/plain;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'votewise_offline_pack.txt');
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
  };

  return (
    <div className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      <header className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{t.profile.headerTitle}</h1>
          <p className="text-muted-foreground text-lg">{t.profile.headerDesc}</p>
        </div>
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl overflow-hidden border-2 border-primary/20 shadow-sm">
          {userData.avatar && avatars.includes(userData.avatar) ? userData.avatar : "🐅"}
        </div>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Settings className="w-5 h-5 text-muted-foreground" /> {t.profile.personalDetails}
              </h2>
              {!isEditing ? (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="text-primary font-medium hover:underline text-sm"
                >
                  {t.profile.editProfile}
                </button>
              ) : (
                <button 
                  onClick={handleSave}
                  className="flex items-center gap-1 text-green-500 font-medium hover:underline text-sm"
                >
                  <Save className="w-4 h-4" /> {t.profile.save}
                </button>
              )}
            </div>

            {isEditing && (
              <div className="mb-6 space-y-3">
                <label className="text-sm font-medium text-muted-foreground">Select Avatar Design</label>
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide px-1">
                  {avatars.map((a) => (
                    <button
                      key={a}
                      onClick={() => setFormData({ ...formData, avatar: a })}
                      className={`relative w-16 h-16 rounded-full flex items-center justify-center text-3xl shrink-0 transition-all ${
                        formData.avatar === a 
                          ? 'ring-4 ring-primary scale-110 bg-primary/10 shadow-md' 
                          : 'hover:scale-105 opacity-70 bg-secondary/50 border border-border hover:opacity-100 hover:border-primary/50'
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">{t.profile.age}</label>
                  {isEditing ? (
                    <input 
                      type="number" 
                      value={formData.age}
                      onChange={e => setFormData({...formData, age: e.target.value})}
                      className="w-full p-3 rounded-xl border border-border bg-background focus:ring-primary outline-none"
                    />
                  ) : (
                    <div className="p-3 rounded-xl bg-secondary/50 font-medium">{userData.age || t.profile.notSet}</div>
                  )}
                </div>
                
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">{t.profile.state}</label>
                    {isEditing ? (
                      <input 
                        type="text" 
                        value={formData.state}
                        onChange={e => setFormData({...formData, state: e.target.value})}
                        className="w-full p-3 rounded-xl border border-border bg-background focus:ring-primary outline-none"
                      />
                    ) : (
                      <div className="p-3 rounded-xl bg-secondary/50 font-medium">{userData.state || t.profile.notSet}</div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Full Address</label>
                  {isEditing ? (
                    <textarea 
                      value={formData.address}
                      onChange={e => setFormData({...formData, address: e.target.value})}
                      className="w-full p-3 rounded-xl border border-border bg-background focus:ring-primary outline-none resize-none"
                      rows={2}
                    />
                  ) : (
                    <div className="p-3 rounded-xl bg-secondary/50 font-medium">{userData.address || t.profile.notSet}</div>
                  )}
                </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">{t.profile.voterStatus}</label>
                {isEditing ? (
                  <select 
                    value={formData.voterStatus}
                    onChange={e => setFormData({...formData, voterStatus: e.target.value as VoterStatus})}
                    className="w-full p-3 rounded-xl border border-border bg-background focus:ring-primary outline-none appearance-none"
                  >
                    <option value="Registered">{t.profile.registered}</option>
                    <option value="Not Registered">{t.profile.notRegistered}</option>
                    <option value="Unsure">{t.profile.unsure}</option>
                  </select>
                ) : (
                  <div className="p-3 rounded-xl bg-secondary/50 font-medium flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${userData.voterStatus === 'Registered' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    {userData.voterStatus ? (userData.voterStatus === 'Registered' ? t.profile.registered : userData.voterStatus === 'Not Registered' ? t.profile.notRegistered : t.profile.unsure) : t.profile.notSet}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
              <Globe className="w-5 h-5 text-muted-foreground" /> {t.profile.langTitle}
            </h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">{t.profile.langDesc}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {languages.map(lang => (
                  <button
                    key={lang}
                    onClick={() => updateUserData({ language: lang })}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      userData.language === lang 
                        ? 'border-primary bg-primary/10 text-primary font-medium' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-bold flex items-center gap-2"><Bell className="w-4 h-4" /> Notifications</h3>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm font-medium text-muted-foreground">Deadlines Alerts</span>
              <input 
                type="checkbox" 
                checked={userData.preferences?.deadlinesAlerts ?? true} 
                onChange={() => togglePreference('deadlinesAlerts')}
                className="w-4 h-4 accent-primary cursor-pointer" 
              />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm font-medium text-muted-foreground">Polling Day Reminders</span>
              <input 
                type="checkbox" 
                checked={userData.preferences?.pollingReminders ?? true} 
                onChange={() => togglePreference('pollingReminders')}
                className="w-4 h-4 accent-primary cursor-pointer" 
              />
            </label>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-bold flex items-center gap-2"><Accessibility className="w-4 h-4" /> Accessibility</h3>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm font-medium text-muted-foreground">High Contrast</span>
              <input 
                type="checkbox" 
                checked={userData.preferences?.highContrast ?? false} 
                onChange={() => togglePreference('highContrast')}
                className="w-4 h-4 accent-primary cursor-pointer" 
              />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm font-medium text-muted-foreground">Screen Reader Mode</span>
              <input 
                type="checkbox" 
                checked={userData.preferences?.screenReaderMode ?? false} 
                onChange={() => togglePreference('screenReaderMode')}
                className="w-4 h-4 accent-primary cursor-pointer" 
              />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm font-medium text-muted-foreground">Voice Output</span>
              <input 
                type="checkbox" 
                checked={userData.preferences?.voiceOutput ?? true} 
                onChange={() => togglePreference('voiceOutput')}
                className="w-4 h-4 accent-primary cursor-pointer" 
              />
            </label>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-bold flex items-center gap-2"><WifiOff className="w-4 h-4" /> {t.profile.offlineMode}</h3>
            <p className="text-xs text-muted-foreground">
              {t.profile.offlineDesc}
            </p>
            <button 
              onClick={handleDownloadOfflinePack}
              className="w-full py-2 bg-secondary text-foreground rounded-lg font-medium text-sm hover:bg-secondary/80 transition-colors"
            >
              {t.profile.downloadPack}
            </button>
          </div>

          <button 
            onClick={() => { resetUser(); window.location.href = "/"; }}
            className="w-full py-3 bg-destructive/10 text-destructive rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-destructive/20 transition-colors"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
