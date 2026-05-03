# VoteWise AI

VoteWise AI is a comprehensive, AI-powered civic assistant and electoral transparency platform designed to empower voters with verifiable data, combat electoral misinformation, and make the voting journey seamless and accessible for everyone. 

## 🏆 Chosen Vertical
**Civic Engagement & Electoral Transparency**

We chose this vertical because navigating elections can be daunting due to language barriers, misinformation, and the sheer complexity of candidate data. VoteWise AI bridges this gap by providing an intuitive, multilingual, and AI-driven platform that puts crucial electoral information directly into the hands of voters.

## 🚀 Approach and Logic

Our approach centered around four core pillars:
1. **Inclusivity & Accessibility**: The platform must be usable by a diverse population. We implemented a robust i18n localization engine supporting 6 languages (English, Hindi, Marathi, Tamil, Telugu, Bengali). We also integrated a high-contrast mode, screen-reader compatibility, and an offline pack downloader for regions with low connectivity.
2. **Transparency & Truth**: We built a "Candidates Hub" combining financial affidavits, criminal records, and legislative performance into an easily digestible format. A "Community Verification Poll" allows locals to crowdsource the verification of candidate claims.
3. **Combatting Misinformation**: The "Myth Buster" module directly targets electoral rumors. Users can search recent fact-checks and report suspicious claims.
4. **Intelligent Assistance**: We integrated Google's Gemini AI to serve as a 24/7 personalized civic assistant, answering complex queries based on the user's local context and language preference.

## ⚙️ How the Solution Works

*   **Next.js App Router Architecture**: Built on Next.js 16 (Turbopack) using React Server Components for optimal performance and SEO.
*   **Context-Aware AI Assistant**: Powered by the **Google Gemini API**, the Assistant has access to the platform's mock database (Candidates, Myths, Deadlines) and the user's profile (State, Language, Age). It dynamically translates and tailors its advice to the user's specific context.
*   **Dynamic Localization (i18n)**: A custom React Context and hook system (`useTranslation`) dynamically replaces UI strings across the entire application without needing external heavy dependencies, ensuring instantaneous language switching.
*   **Secure Administration**: A dedicated `/admin` dashboard allows moderators to view community feedback, manage candidate data, and track reported myths.
*   **Responsive UI**: Styled with Tailwind CSS, featuring framer-motion micro-animations for a dynamic, premium "glassmorphism" aesthetic.

## 🧠 Assumptions Made

*   **Data Availability**: We assume that in a production environment, the platform would be hooked up to an official API (like the Election Commission API or an aggregation service like MyNeta) to pull real-time candidate data. Currently, we are using a robust mock database (`src/data/candidates.ts`).
*   **AI Moderation**: We assume the Gemini model is sufficient for handling baseline civic queries. For production, the prompt engineering includes strict guardrails to prevent partisan bias or hallucinations.
*   **Authentication**: For this prototype, user "profiles" are stored via React Context/LocalStorage. Admin access is protected by a rudimentary master key (`backend2026`). In production, this would be replaced with NextAuth.js or Firebase Authentication.
*   **Offline Mode**: The "Offline Pack Download" feature assumes that users will have the foresight to download the pack before heading to a low-connectivity polling booth.

## 🛠️ Google Services Integration
*   **Google Gemini (GenAI)**: The core engine behind the conversational AI Assistant (`/api/chat`). It parses user queries, cross-references our JSON data models, and provides localized, factual civic advice.

## 💻 Tech Stack
*   **Framework**: Next.js (React)
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **AI**: Google Gemini API (`@google/genai`)

## 🏃‍♂️ Running the Project Locally

```bash
# Install dependencies
npm install

# Setup environment variables
# Create a .env.local file and add your Gemini API key:
# GEMINI_API_KEY=your_api_key_here

# Run the development server
npm run dev
```

Visit `http://localhost:3000` to interact with VoteWise AI.
