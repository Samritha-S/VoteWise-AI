"use client";

import React, { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { usePathname } from "next/navigation";

export default function ScreenReaderAnnouncer() {
  const { userData } = useAppContext();
  const pathname = usePathname();
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    if (userData.preferences?.screenReaderMode) {
      // Announce page changes to screen readers automatically
      const pageName = pathname === "/" ? "Home" : pathname.replace(/\//g, " ").trim();
      setAnnouncement(`Navigated to ${pageName} page`);
    }
  }, [pathname, userData.preferences?.screenReaderMode]);

  if (!userData.preferences?.screenReaderMode) return null;

  return (
    <div 
      aria-live="assertive" 
      aria-atomic="true" 
      className="sr-only"
    >
      {announcement}
    </div>
  );
}
