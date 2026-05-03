# VoteWise AI 🇮🇳
> **Your Intelligent, Accessible, and Transparent Civic Assistant**

[![Google Cloud Run](https://img.shields.io/badge/Deployed%20to-Google%20Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://votewise-ai-327636706757.us-central1.run.app)
[![Gemini AI](https://img.shields.io/badge/Powered%20by-Google%20Gemini-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)

VoteWise AI is a comprehensive, **Mobile-First**, context-aware civic assistant and electoral transparency platform. Designed for maximum user ease and accessibility, it empowers voters with verifiable data, combats electoral misinformation, and makes the voting journey seamless and secure for everyone.

**🌐 Live Demo:** [https://votewise-ai-327636706757.us-central1.run.app](https://votewise-ai-327636706757.us-central1.run.app)

---

## 🎯 Chosen Vertical
**Civic Engagement & Electoral Transparency**

We chose this vertical because navigating Indian elections can be daunting due to regional language barriers, viral misinformation, and the sheer complexity of candidate data. VoteWise AI bridges this gap by providing an intuitive, highly accessible, and AI-driven platform that puts crucial, verified electoral information directly into the hands of voters, regardless of their technical literacy or physical abilities.

---

## 🌟 Key Features

### 🤖 Intelligent AI Assistant
* **Context-Aware Guidance**: Powered by **Google Gemini 1.5 Flash**, the assistant tailors advice based on the user's age, state, and voter status. It dynamically shifts between 6 regional languages.
* **Proactive Logic**: If a 17-year-old asks for their polling booth, the AI intelligently guides them on future registration instead of providing irrelevant booth details.

### 🛡️ Myth Buster & Fact-Checking
* **Gemini Deep Dive**: Users can request AI-powered "Deep Dives" into viral electoral rumors, receiving educational explanations backed by verified data.
* **Community Vigilance**: Crowd-sourced reporting allows users to flag suspicious claims for moderator verification.

### 🔍 Candidate Transparency Hub
* **Unified Data**: Financial affidavits, criminal records, and legislative history in one searchable interface.
* **Google Integration**: Deep links to **Google Search** for affidavit verification and **Google Maps** for constituency boundary visualization.

### 🆔 AI-Powered Verification
* **Google Cloud Vision AI**: A dedicated identity verification module (mocked) that demonstrates how AI can automatically extract and validate details from Voter ID or Aadhaar cards.

---

## 🛠️ Technology Stack

* **Framework**: Next.js 15+ (App Router)
* **Intelligence**: Google Gemini AI (SDK), Google Cloud Vision AI (Integration Concept)
* **Database**: Prisma ORM with SQLite (Production-ready for PostgreSQL)
* **Styling**: Tailwind CSS & Framer Motion (Glassmorphism UI)
* **Services**: Google Cloud Run (Deployment), Google Analytics, Google Maps
* **Testing**: Jest & React Testing Library

---

## 🛡️ Security & Accessibility (A11y)

### Security
* **Zod Validation Firewall**: Every API route (`/api/chat`, `/api/candidates`) is protected by strict schema validation.
* **Prompt Injection Protection**: Fortified system instructions ensure the AI remains focused on civic guidance and rejects malicious jailbreak attempts.
* **Privacy First**: User context is stored securely in `sessionStorage` by default, protecting privacy on shared devices.

### Accessibility
* **Mobile-First Design**: Engineered specifically for ease of use on smartphones—the primary device for the majority of Indian voters—ensuring a frictionless and responsive experience.
* **Screen Reader Announcer**: A custom `aria-live` announcer narrates page changes automatically for low-vision users.
* **WCAG Compliance**: High-contrast modes, focus management, and semantic HTML ensure a premium experience for everyone.
* **Native Assets**: OS-level emojis used for avatars to ensure 0ms render latency and 0kb network payload.

---

## 🚀 Getting Started

### Prerequisites
* Node.js 20+
* Google Gemini API Key
* Google Cloud Project (for deployment)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Samritha-S/VoteWise-AI.git
   cd votewise-ai
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file:
   ```env
   GEMINI_API_KEY=your_key_here
   NEXT_PUBLIC_GA_ID=your_ga_id_here
   DATABASE_URL="file:./prisma/dev.db"
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

---

## 🏆 Challenge Highlights

* ✅ **Production Ready**: Deployed to Google Cloud Run with automated CI/CD readiness.
* ✅ **Zero-Any Policy**: Strict TypeScript enforcement across the entire codebase.
* ✅ **High Performance**: Optimized Core Web Vitals with efficient caching and asset management.
* ✅ **Meaningful AI**: Gemini is not just a wrapper; it's a decision-making engine integrated into the core user journey.

---

## ❓ Assumptions Made

* **Data Sources**: Assumes integration with official Election Commission of India (ECI) APIs for live production data.
* **Verification**: Identity verification demonstrates the integration of Google Cloud Vision AI but uses mocked extraction for privacy during evaluation.

---

*Built with ❤️ for the Google Gemini Hackathon.*
