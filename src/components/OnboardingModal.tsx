"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext, VoterStatus } from "@/context/AppContext";
import { useTranslation } from "@/lib/i18n";
import { ChevronRight, ShieldCheck, MapPin } from "lucide-react";

const languages = [
  { id: "English", name: "English" },
  { id: "Hindi", name: "हिन्दी" },
  { id: "Marathi", name: "मराठी" },
  { id: "Tamil", name: "தமிழ்" },
  { id: "Telugu", name: "తెలుగు" },
  { id: "Bengali", name: "বাংলা" }
];
const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export default function OnboardingModal() {
  const { userData, isLoaded, updateUserData } = useAppContext();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    language: "English",
    age: "",
    state: "",
    address: "",
    voterStatus: "" as VoterStatus,
    rememberDevice: false
  });

  const t = useTranslation(formData.language);

  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isCandidatePage = pathname.includes('/candidates');

  if (!isLoaded || userData.onboardingComplete || isCandidatePage) return null;

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
    else handleComplete();
  };

  const handleComplete = () => {
    updateUserData({
      name: formData.name,
      phone: formData.phone,
      language: formData.language,
      age: parseInt(formData.age),
      state: formData.state,
      address: formData.address,
      voterStatus: formData.voterStatus,
      rememberDevice: formData.rememberDevice,
      isAuthenticated: true,
      onboardingComplete: true
    });
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-card md:rounded-3xl shadow-2xl border border-border/50 flex flex-col my-auto"
      >
        <div className="p-6 bg-secondary/30 border-b border-border/50">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">
            {t.onboarding.welcome}
          </h2>
          <p className="text-muted-foreground mt-1 text-sm">
            {t.onboarding.personalize}
          </p>
          
          {/* Progress bar */}
          <div className="flex gap-2 mt-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-primary' : 'bg-muted'}`} 
              />
            ))}
          </div>
        </div>

        <div className="p-6 min-h-[300px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold">{t.onboarding.getKnowYou}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {t.onboarding.fullName}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder={t.onboarding.enterName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {t.onboarding.phoneNumber}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground font-medium text-sm">
                        +91
                      </div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full pl-12 p-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="9876543210"
                        maxLength={10}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold">{t.onboarding.selectLang}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map(lang => (
                    <button
                      key={lang.id}
                      onClick={() => setFormData({...formData, language: lang.id})}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        formData.language === lang.id 
                          ? 'border-primary bg-primary/10 text-primary font-medium' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold">{t.onboarding.howOld}</h3>
                <p className="text-sm text-muted-foreground">{t.onboarding.eligibilityCheck}</p>
                <input 
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  placeholder="e.g. 21"
                  className="w-full p-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:outline-none text-lg"
                />
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold">{t.onboarding.whichState}</h3>
                <div className="relative">
                  <MapPin className="absolute left-3 top-4 text-muted-foreground w-5 h-5" />
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                    className="w-full p-4 pl-10 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:outline-none appearance-none"
                  >
                    <option value="" disabled>{t.onboarding.selectState}</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {t.onboarding.fullAddress}
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder={t.onboarding.addressPlaceholder}
                    rows={2}
                    className="w-full p-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                  />
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold">{t.onboarding.voterStatus}</h3>
                <div className="space-y-3">
                  {(["Registered", "Not Registered", "Unsure"] as VoterStatus[]).map(status => (
                    <button
                      key={status}
                      onClick={() => setFormData({...formData, voterStatus: status})}
                      className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                        formData.voterStatus === status 
                          ? 'border-primary bg-primary/10 text-primary font-medium' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <ShieldCheck className={`w-5 h-5 ${formData.voterStatus === status ? 'text-primary' : 'text-muted-foreground'}`} />
                        {status === "Registered" ? t.profile.registered : status === "Not Registered" ? t.profile.notRegistered : t.profile.unsure}
                      </span>
                      {formData.voterStatus === status && <div className="w-2 h-2 rounded-full bg-primary" />}
                    </button>
                  ))}
                </div>
                <div className="pt-4 border-t border-border/50">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={formData.rememberDevice}
                      onChange={(e) => setFormData({...formData, rememberDevice: e.target.checked})}
                      className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-sm font-medium">{t.onboarding.rememberMe}</span>
                  </label>
                  <p className="text-xs text-muted-foreground mt-1 ml-8">{t.onboarding.rememberMeDesc}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-6 bg-secondary/30 border-t border-border/50 flex justify-end">
          <button
            onClick={handleNext}
            disabled={
              (step === 1 && (!formData.name || !formData.phone)) ||
              (step === 3 && !formData.age) || 
              (step === 4 && (!formData.state || !formData.address)) || 
              (step === 5 && !formData.voterStatus)
            }
            className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step === 5 ? t.onboarding.complete : t.onboarding.next}
            {step < 5 && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
