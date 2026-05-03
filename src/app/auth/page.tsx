"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext, VoterStatus } from "@/context/AppContext";
import { Mail, Lock, User, MapPin, Building, Calendar, ArrowRight, ShieldCheck, FileText } from "lucide-react";

export default function AuthPage() {
  const router = useRouter();
  const { userData, updateUserData } = useAppContext();
  const [isLogin, setIsLogin] = useState(false);

  const [formData, setFormData] = useState({
    name: userData.name || "",
    phone: userData.phone || "",
    email: userData.email || "",
    password: "",
    address: userData.address || "",
    pincode: userData.pincode || "",
    state: userData.state || "",
    age: userData.age?.toString() || "",
    voterStatus: userData.voterStatus || "Not Registered",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";
      
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Update global context with database data
      updateUserData({
        name: data.user.name,
        phone: data.user.phone || "",
        email: data.user.email,
        address: data.user.address || "",
        pincode: data.user.pincode || "",
        state: data.user.state || "",
        age: data.user.age || null,
        voterStatus: data.user.voterStatus as VoterStatus,
        isAuthenticated: true,
        onboardingComplete: true,
      });

      router.push("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8 selection:bg-primary/20 selection:text-primary">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
          {isLogin ? "Welcome back" : "Create your account"}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {isLogin ? "Or " : "Already have an account? "}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {isLogin ? "create a new account" : "sign in to your account"}
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-card py-8 px-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:rounded-2xl sm:px-10 border border-border/50">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {!isLogin && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="name">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-2 border border-border/60 rounded-xl bg-background text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                      placeholder="Jai Hind"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="phone">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground font-medium">
                      +91
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="block w-full pl-12 pr-3 py-2 border border-border/60 rounded-xl bg-background text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="address">
                    Full Residential Address
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <textarea
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={2}
                      className="block w-full pl-10 pr-3 py-2 border border-border/60 rounded-xl bg-background text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all resize-none"
                      placeholder="House No, Street, Locality, City"
                    />
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="email">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-2 border border-border/60 rounded-xl bg-background text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                  placeholder="voter@india.gov"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-muted-foreground" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isLogin ? "current-password" : "new-password"}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-2 border border-border/60 rounded-xl bg-background text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {!isLogin && (
              <>
                <div className="pt-4 border-t border-border/50">
                  <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" /> Voting Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="state">
                          State
                        </label>
                        <select
                          id="state"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleInputChange}
                          className="block w-full px-3 py-2 border border-border/60 rounded-xl bg-background text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                        >
                          <option value="" disabled>Select State</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="pincode">
                          Pincode
                        </label>
                        <input
                          id="pincode"
                          name="pincode"
                          type="text"
                          required
                          pattern="[0-9]{6}"
                          maxLength={6}
                          value={formData.pincode}
                          onChange={handleInputChange}
                          className="block w-full px-3 py-2 border border-border/60 rounded-xl bg-background text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                          placeholder="560001"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="age">
                          Age
                        </label>
                        <input
                          id="age"
                          name="age"
                          type="number"
                          required
                          min="18"
                          max="120"
                          value={formData.age}
                          onChange={handleInputChange}
                          className="block w-full px-3 py-2 border border-border/60 rounded-xl bg-background text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                          placeholder="18"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="voterStatus">
                          Current Voter Status
                        </label>
                        <select
                          id="voterStatus"
                          name="voterStatus"
                          required
                          value={formData.voterStatus}
                          onChange={handleInputChange}
                          className="block w-full px-3 py-2 border border-border/60 rounded-xl bg-background text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                        >
                          <option value="Registered">Registered to Vote</option>
                          <option value="Not Registered">Not Registered</option>
                          <option value="Unsure">Unsure / Need Help</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-foreground">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-primary hover:text-primary/80 transition-colors">
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-lg p-3">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all active:scale-[0.98] disabled:opacity-70"
              >
                {isLoading ? "Please wait..." : isLogin ? "Sign in" : "Create Account"}
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
            
            {!isLogin && (
              <p className="text-xs text-muted-foreground text-center mt-4 flex items-center justify-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> By creating an account, you agree to our Terms of Service.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
