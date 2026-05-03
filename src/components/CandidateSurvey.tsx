"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ThumbsUp, ThumbsDown, AlertTriangle, Send } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { useTranslation } from "@/lib/i18n";

interface CandidateSurveyProps {
  candidateId: string;
}

export default function CandidateSurvey({ candidateId }: CandidateSurveyProps) {
  const { userData } = useAppContext();
  const t = useTranslation(userData.language);
  const [step, setStep] = useState(1);
  const [isAccurate, setIsAccurate] = useState<string>("");
  const [inaccurateFields, setInaccurateFields] = useState<string[]>([]);
  const [comments, setComments] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fields = ["Assets & Wealth", "Criminal Records", "Educational Background", "Political History", "Other"];

  const toggleField = (f: string) => {
    setInaccurateFields(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);
  };

  const submitFeedback = async () => {
    setIsSubmitting(true);
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          candidateId,
          isAccurate,
          inaccurateFields: inaccurateFields.join(", "),
          comments
        })
      });
      setStep(4);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg mt-10">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-primary" /> {t.survey.title}
      </h3>
      
      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <p className="font-medium text-lg mb-6">{t.survey.step1Title}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => { setIsAccurate("Yes"); submitFeedback(); }}
                  aria-label="Mark as Accurate"
                  className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border hover:border-green-500 hover:bg-green-500/10 transition-colors group"
                >
                  <ThumbsUp className="w-8 h-8 text-muted-foreground group-hover:text-green-500 transition-colors" />
                  <span className="font-bold">{t.survey.yes}</span>
                </button>
                <button 
                  onClick={() => { setIsAccurate("Partially"); setStep(2); }}
                  aria-label="Mark as Partially Accurate"
                  className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border hover:border-yellow-500 hover:bg-yellow-500/10 transition-colors group"
                >
                  <AlertTriangle className="w-8 h-8 text-muted-foreground group-hover:text-yellow-500 transition-colors" />
                  <span className="font-bold">{t.survey.partially}</span>
                </button>
                <button 
                  onClick={() => { setIsAccurate("No"); setStep(2); }}
                  aria-label="Mark as Inaccurate"
                  className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border hover:border-destructive hover:bg-destructive/10 transition-colors group"
                >
                  <ThumbsDown className="w-8 h-8 text-muted-foreground group-hover:text-destructive transition-colors" />
                  <span className="font-bold">{t.survey.no}</span>
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <p className="font-medium text-lg mb-4">{t.survey.step2Title}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {fields.map(f => (
                  <button 
                    key={f}
                    onClick={() => toggleField(f)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                      inaccurateFields.includes(f) ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background hover:bg-muted'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <button onClick={() => setStep(1)} className="text-muted-foreground hover:text-foreground font-medium px-4 py-2">{t.survey.back}</button>
                <button 
                  onClick={() => setStep(3)}
                  disabled={inaccurateFields.length === 0}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-bold disabled:opacity-50 transition-opacity"
                >
                  {t.survey.continue}
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <p className="font-medium text-lg mb-2">{t.survey.step3Title}</p>
              <p className="text-muted-foreground text-sm mb-4">{t.survey.step3Desc}</p>
              <textarea 
                value={comments}
                onChange={e => setComments(e.target.value)}
                placeholder={t.survey.placeholder}
                className="w-full h-32 p-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:outline-none resize-none mb-6"
              />
              <div className="flex justify-between">
                <button onClick={() => setStep(2)} className="text-muted-foreground hover:text-foreground font-medium px-4 py-2">{t.survey.back}</button>
                <button 
                  onClick={submitFeedback}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  aria-label="Submit Feedback"
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  {isSubmitting ? t.survey.submitting : <><Send className="w-4 h-4" /> {t.survey.submit}</>}
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-2">{t.survey.thanksTitle}</h4>
              <p className="text-muted-foreground">{t.survey.thanksDesc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
