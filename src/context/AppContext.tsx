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
  age: number | null;
  state: string;
  voterStatus: VoterStatus;
  language: string;
  onboardingComplete: boolean;
  preferences: UserPreferences;
}

interface AppContextType {
  userData: UserContextData;
  updateUserData: (data: Partial<UserContextData>) => void;
  resetUser: () => void;
}

const defaultUserData: UserContextData = {
  age: null,
  state: "",
  voterStatus: "",
  language: "English",
  onboardingComplete: false,
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

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("votewise_user_data");
    if (saved) {
      try {
        setUserData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("votewise_user_data", JSON.stringify(userData));
    }
  }, [userData, isLoaded]);

  const updateUserData = (data: Partial<UserContextData>) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  const resetUser = () => {
    setUserData(defaultUserData);
    localStorage.removeItem("votewise_user_data");
  };

  return (
    <AppContext.Provider value={{ userData, updateUserData, resetUser }}>
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
