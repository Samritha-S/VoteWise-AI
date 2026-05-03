import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScreenReaderAnnouncer from "@/components/ScreenReaderAnnouncer";
import { AppProvider } from "@/context/AppContext";
import OnboardingModal from "@/components/OnboardingModal";

import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VoteWise AI - Your Personal Election Assistant",
  description: "A context-aware election assistant focused on guiding users through the entire voting process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col bg-background text-foreground`}>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <AppProvider>
          <div className="flex h-screen overflow-hidden">
            <ScreenReaderAnnouncer />
            <OnboardingModal />
            <Navigation />
            <main className="flex-1 overflow-y-auto bg-background">
              {children}
            </main>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
