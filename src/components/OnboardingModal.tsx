"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext, VoterStatus } from "@/context/AppContext";
import { ChevronRight, ShieldCheck, MapPin } from "lucide-react";

const languages = ["English", "Hindi", "Marathi", "Tamil", "Telugu", "Bengali"];
const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export default function OnboardingModal() {
  const { userData, updateUserData } = useAppContext();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    language: "English",
    age: "",
    state: "",
    voterStatus: "" as VoterStatus,
    rememberDevice: false
  });

  if (userData.onboardingComplete) return null;

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else handleComplete();
  };

  const handleComplete = () => {
    updateUserData({
      language: formData.language,
      age: parseInt(formData.age),
      state: formData.state,
      voterStatus: formData.voterStatus,
      rememberDevice: formData.rememberDevice,
      onboardingComplete: true
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-card w-full max-w-lg rounded-2xl shadow-2xl border border-border/50 overflow-hidden flex flex-col"
      >
        <div className="p-6 bg-secondary/50 border-b border-border/50">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">
            Welcome to VoteWise AI
          </h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Let's personalize your election journey.
          </p>
          <div className="mt-3">
            <a href="/auth" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
              Already have an account? Sign in <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
          
          {/* Progress bar */}
          <div className="flex gap-2 mt-6">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-primary' : 'bg-muted'}`} 
              />
            ))}
          </div>
        </div>

        <div className="p-6 flex-1 min-h-[300px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold">Select your preferred language</h3>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map(lang => (
                    <button
                      key={lang}
                      onClick={() => setFormData({...formData, language: lang})}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        formData.language === lang 
                          ? 'border-primary bg-primary/10 text-primary font-medium' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
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
                <h3 className="text-lg font-semibold">How old are you?</h3>
                <p className="text-sm text-muted-foreground">This helps us check your eligibility.</p>
                <input 
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  placeholder="e.g. 21"
                  className="w-full p-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:outline-none text-lg"
                />
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
                <h3 className="text-lg font-semibold">Which state do you live in?</h3>
                <div className="relative">
                  <MapPin className="absolute left-3 top-4 text-muted-foreground w-5 h-5" />
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                    className="w-full p-4 pl-10 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:outline-none appearance-none"
                  >
                    <option value="" disabled>Select a state</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
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
                <h3 className="text-lg font-semibold">What is your voter status?</h3>
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
                        {status}
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
                    <span className="text-sm font-medium">Remember me on this device</span>
                  </label>
                  <p className="text-xs text-muted-foreground mt-1 ml-8">If unchecked, you will be prompted to setup again next time.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-6 bg-secondary/30 border-t border-border/50 flex justify-end">
          <button
            onClick={handleNext}
            disabled={
              (step === 2 && !formData.age) || 
              (step === 3 && !formData.state) || 
              (step === 4 && !formData.voterStatus)
            }
            className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step === 4 ? "Complete Setup" : "Next"}
            {step < 4 && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
