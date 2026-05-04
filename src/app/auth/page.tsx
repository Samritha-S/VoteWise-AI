"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext, VoterStatus } from "@/context/AppContext";
import { Mail, Lock, User, MapPin, Building, Calendar, ArrowRight, ShieldCheck, FileText } from "lucide-react";

export default function AuthPage() {
  const router = useRouter();
  const { userData, updateUserData } = useAppContext();
  const [isLogin, setIsLogin] = useState(true);
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");

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
    rememberDevice: false, 
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";
      
      const payload = isLogin && loginMethod === "phone" 
        ? { phone: formData.phone, name: formData.name, password: formData.password }
        : formData;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
        rememberDevice: formData.rememberDevice
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
          
          {isLogin && (
            <div className="flex bg-secondary/30 p-1 rounded-xl mb-6">
              <button 
                onClick={() => setLoginMethod("email")}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${loginMethod === 'email' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Email Login
              </button>
              <button 
                onClick={() => setLoginMethod("phone")}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${loginMethod === 'phone' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Phone Login
              </button>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {(!isLogin || (isLogin && loginMethod === "phone")) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={isLogin ? "md:col-span-2" : ""}>
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

                <div className={isLogin ? "md:col-span-2" : ""}>
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

                {!isLogin && (
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
                )}
              </div>
            )}

            {(!isLogin || (isLogin && loginMethod === "email")) && (
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
            )}

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
                    id="rememberDevice"
                    name="rememberDevice"
                    type="checkbox"
                    checked={formData.rememberDevice}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="rememberDevice" className="ml-2 block text-sm text-foreground">
                    Remember me (Stay signed in)
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

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/60"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground font-medium">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                // Mock Google Sign-In
                setIsLoading(true);
                setTimeout(() => {
                  updateUserData({
                    name: "Samritha S",
                    email: "samritha@example.com",
                    isAuthenticated: true,
                    onboardingComplete: true
                  });
                  router.push("/");
                }, 1500);
              }}
              className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-border/60 rounded-xl bg-background text-sm font-medium text-foreground hover:bg-secondary/50 transition-all active:scale-[0.98]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
            
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
