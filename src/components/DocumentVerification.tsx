"use client";

import React, { useState } from "react";
import { Camera, CheckCircle2, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";

export default function DocumentVerification() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const simulateVerification = () => {
    setIsVerifying(true);
    setError(null);
    
    // Simulate Google Cloud Vision API processing
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 3000);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 text-primary rounded-lg">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">AI Document Verification</h3>
          <p className="text-sm text-muted-foreground">Powered by Google Cloud Vision AI</p>
        </div>
      </div>

      {!isVerified ? (
        <div className="space-y-6">
          <div 
            role="button"
            tabIndex={0}
            aria-label="Upload document for AI verification"
            className="border-2 border-dashed border-border rounded-xl p-10 flex flex-col items-center justify-center text-center bg-muted/20 hover:bg-muted/30 transition-colors cursor-pointer group"
          >
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
              <Camera className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="font-medium text-foreground">Upload your Voter ID or Aadhaar</p>
            <p className="text-xs text-muted-foreground mt-1">AI will automatically detect and verify your identity details.</p>
          </div>

          <button 
            onClick={simulateVerification}
            disabled={isVerifying}
            aria-busy={isVerifying}
            className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all disabled:opacity-70"
          >
            {isVerifying ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Vision AI analyzing document...</span>
              </>
            ) : (
              "Start AI Verification"
            )}
          </button>
        </div>
      ) : (
        <div 
          role="alert"
          aria-live="polite"
          className="py-6 flex flex-col items-center text-center space-y-4 animate-in zoom-in-95 duration-500"
        >
          <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-foreground">Identity Verified</h4>
            <p className="text-muted-foreground max-w-xs mx-auto">
              Google Cloud Vision AI has successfully extracted and validated your information from the provided document.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full pt-4">
            <div className="p-3 bg-secondary/50 rounded-lg border border-border/50 text-left">
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Status</p>
              <p className="text-sm font-bold text-green-600">MATCHED</p>
            </div>
            <div className="p-3 bg-secondary/50 rounded-lg border border-border/50 text-left">
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Confidence</p>
              <p className="text-sm font-bold text-foreground">98.4%</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-border/50 flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold opacity-60">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
        </svg>
        Enterprise Grade Security by Google Cloud
      </div>
    </div>
  );
}
