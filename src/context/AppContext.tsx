"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type VoterStatus = "Registered" | "Not Registered" | "Unsure" | "";

export interface UserPreferences {
  deadlinesAlerts: boolean;
  pollingReminders: boolean;
  highContrast: boolean;
  screenReaderMode: boolean;
  voiceOutput: boolean;
}

export interface UserContextData {
  name: string;
  phone: string;
  email: string;
  address: string;
  pincode: string;
  age: number | null;
  state: string;
  voterStatus: VoterStatus;
  language: string;
  onboardingComplete: boolean;
  isAuthenticated: boolean;
  documentsReady: boolean;
  avatar: string;
  rememberDevice: boolean;
  preferences: UserPreferences;
}

interface AppContextType {
  userData: UserContextData;
  isLoaded: boolean;
  updateUserData: (data: Partial<UserContextData>) => void;
  resetUser: () => void;
}

const defaultUserData: UserContextData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  pincode: "",
  age: null,
  state: "",
  voterStatus: "",
  language: "English",
  onboardingComplete: false,
  isAuthenticated: false,
  documentsReady: false,
  avatar: "🐅",
  rememberDevice: false,
  preferences: {
    deadlinesAlerts: true,
    pollingReminders: true,
    highContrast: false,
    screenReaderMode: false,
    voiceOutput: true,
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<UserContextData>(defaultUserData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from storage on mount
  useEffect(() => {
    const savedLocal = localStorage.getItem("votewise_user_data");
    const savedSession = sessionStorage.getItem("votewise_user_data");
    const saved = savedLocal || savedSession;
    if (saved) {
      try {
        // eslint-disable-next-line
        const parsed = JSON.parse(saved);
        setUserData(parsed);
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Apply Accessibility Preferences globally
  useEffect(() => {
    if (isLoaded && userData.preferences) {
      if (userData.preferences.highContrast) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.setProperty('--contrast-mode', 'high');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.removeProperty('--contrast-mode');
      }
    }
  }, [userData.preferences?.highContrast, isLoaded]);

  // Save to storage when changed
  useEffect(() => {
    if (isLoaded) {
      if (userData.rememberDevice) {
        localStorage.setItem("votewise_user_data", JSON.stringify(userData));
        sessionStorage.removeItem("votewise_user_data");
      } else {
        sessionStorage.setItem("votewise_user_data", JSON.stringify(userData));
        localStorage.removeItem("votewise_user_data");
      }
    }
  }, [userData, isLoaded]);

  const updateUserData = (data: Partial<UserContextData>) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  const resetUser = () => {
    setUserData(defaultUserData);
    localStorage.removeItem("votewise_user_data");
    sessionStorage.removeItem("votewise_user_data");
  };

  return (
    <AppContext.Provider value={{ userData, isLoaded, updateUserData, resetUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
