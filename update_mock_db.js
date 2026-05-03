const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'candidates.ts');
let content = fs.readFileSync(filePath, 'utf8');

// We will use regex to find instances where we used "...defaultEnhancedData"
// and replace it with realistic looking mock data for those specific roles.

const replacements = [
  {
    regex: /\.\.\.defaultEnhancedData,\s*currentPosition: "Chief Minister of Tamil Nadu",\s*yearsInPolitics: 50,\s*statusBadge: "Incumbent",\s*performanceMetrics: \{[\s\S]*?keyAchievements: \[.*?\]\s*\}/g,
    replace: `currentPosition: "Chief Minister of Tamil Nadu",
    yearsInPolitics: 50,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [
      { description: "Arrested under MISA during the 1975 Emergency.", date: "1975", status: "Resolved" }
    ],
    careerHistory: [
      { period: "2021-Present", role: "Chief Minister of Tamil Nadu" },
      { period: "2009-2011", role: "Deputy Chief Minister" },
      { period: "1996-2002", role: "Mayor of Chennai" }
    ],
    familyBackground: "Son of former Chief Minister M. Karunanidhi.",
    electionHistory: { electionsContested: 9, wins: 7, losses: 2, latestVoteShare: "60%", latestMargin: "70,000 Votes" },
    ideologyStances: [
      { issue: "State Autonomy", position: "Pro" },
      { issue: "NEET Exam", position: "Against" },
      { issue: "Social Justice", position: "Pro" }
    ],
    votingRecord: "N/A (State Executive)",
    recentNews: [
      { headline: "Announces new industrial investments in TN.", source: "The Hindu", date: "April 2024", sentiment: "Positive" }
    ],
    performanceMetrics: {
      attendance: { value: "N/A (CM)", source: "State Assembly", lastUpdated: "Jan 2024" },
      questionsAsked: { value: "N/A", source: "State Assembly", lastUpdated: "Jan 2024" },
      billsIntroduced: { value: "Multiple (Govt)", source: "State Assembly", lastUpdated: "Jan 2024" },
      fundsUtilized: { value: "High (State Budget)", source: "State Records", lastUpdated: "Jan 2024" },
      keyAchievements: ["Pudhumai Penn Scheme", "Makkalai Thedi Maruthuvam"]
    }`
  },
  {
    regex: /\.\.\.defaultEnhancedData,\s*currentPosition: "Chief Minister of Uttar Pradesh",\s*yearsInPolitics: 26,\s*statusBadge: "Incumbent"/g,
    replace: `currentPosition: "Chief Minister of Uttar Pradesh",
    yearsInPolitics: 26,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [
      { description: "Hate speech allegations.", date: "2007", status: "Cleared/Dismissed" }
    ],
    careerHistory: [
      { period: "2017-Present", role: "Chief Minister of UP" },
      { period: "1998-2017", role: "Member of Parliament (Gorakhpur)" }
    ],
    familyBackground: "Mahant (Head Priest) of Gorakhnath Math.",
    electionHistory: { electionsContested: 6, wins: 6, losses: 0, latestVoteShare: "66%", latestMargin: "1.03 Lakh Votes" },
    ideologyStances: [
      { issue: "Law and Order", position: "Pro" },
      { issue: "Cultural Nationalism", position: "Pro" }
    ],
    votingRecord: "N/A (State Executive)",
    recentNews: [
      { headline: "UP records heavy investments at Global Investors Summit.", source: "Times of India", date: "Feb 2024", sentiment: "Positive" }
    ],
    performanceMetrics: {
      attendance: { value: "N/A (CM)", source: "State Assembly", lastUpdated: "Feb 2024" },
      questionsAsked: { value: "N/A", source: "State Assembly", lastUpdated: "Feb 2024" },
      billsIntroduced: { value: "Multiple (Govt)", source: "State Assembly", lastUpdated: "Feb 2024" },
      fundsUtilized: { value: "High (State Budget)", source: "State Records", lastUpdated: "Jan 2024" },
      keyAchievements: ["Expressway expansions", "Defense Corridor"]
    }`
  },
  {
    regex: /\.\.\.defaultEnhancedData,\s*currentPosition: "Chief Minister of West Bengal",\s*yearsInPolitics: 45,\s*statusBadge: "Incumbent"/g,
    replace: `currentPosition: "Chief Minister of West Bengal",
    yearsInPolitics: 45,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [
      { period: "2011-Present", role: "Chief Minister of West Bengal" },
      { period: "2009-2011", role: "Minister of Railways (India)" }
    ],
    familyBackground: "Born into a middle-class family in Kolkata.",
    electionHistory: { electionsContested: 10, wins: 8, losses: 2, latestVoteShare: "58%", latestMargin: "58,832 Votes" },
    ideologyStances: [
      { issue: "Federalism", position: "Pro" },
      { issue: "CAA/NRC", position: "Against" },
      { issue: "Welfare Schemes", position: "Pro" }
    ],
    votingRecord: "N/A (State Executive)",
    recentNews: [
      { headline: "Expands Swasthya Sathi health scheme.", source: "Telegraph", date: "March 2024", sentiment: "Positive" }
    ],
    performanceMetrics: {
      attendance: { value: "N/A (CM)", source: "State Assembly", lastUpdated: "Feb 2024" },
      questionsAsked: { value: "N/A", source: "State Assembly", lastUpdated: "Feb 2024" },
      billsIntroduced: { value: "Multiple (Govt)", source: "State Assembly", lastUpdated: "Feb 2024" },
      fundsUtilized: { value: "High (State Budget)", source: "State Records", lastUpdated: "Jan 2024" },
      keyAchievements: ["Kanyashree Prakalpa", "Duare Sarkar"]
    }`
  },
  {
    regex: /\.\.\.defaultEnhancedData,\s*currentPosition: "Chief Minister of Maharashtra",\s*yearsInPolitics: 25,\s*statusBadge: "Incumbent"/g,
    replace: `currentPosition: "Chief Minister of Maharashtra",
    yearsInPolitics: 25,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [
      { description: "Party split and defection controversy.", date: "2022", status: "Ruled in favor by ECI" }
    ],
    careerHistory: [
      { period: "2022-Present", role: "Chief Minister of Maharashtra" },
      { period: "2014-2019", role: "Cabinet Minister (PWD)" }
    ],
    familyBackground: "Started as an auto-rickshaw driver in Thane before entering politics.",
    electionHistory: { electionsContested: 4, wins: 4, losses: 0, latestVoteShare: "65%", latestMargin: "89,000 Votes" },
    ideologyStances: [
      { issue: "Infrastructure", position: "Pro" },
      { issue: "Hindutva", position: "Pro" }
    ],
    votingRecord: "N/A (State Executive)",
    recentNews: [
      { headline: "Inaugurates new phases of Mumbai Coastal Road.", source: "Indian Express", date: "March 2024", sentiment: "Positive" }
    ],
    performanceMetrics: {
      attendance: { value: "N/A (CM)", source: "State Assembly", lastUpdated: "Feb 2024" },
      questionsAsked: { value: "N/A", source: "State Assembly", lastUpdated: "Feb 2024" },
      billsIntroduced: { value: "Multiple (Govt)", source: "State Assembly", lastUpdated: "Feb 2024" },
      fundsUtilized: { value: "High (State Budget)", source: "State Records", lastUpdated: "Jan 2024" },
      keyAchievements: ["Mumbai Coastal Road push", "Samruddhi Mahamarg completion phase"]
    }`
  }
];

let updatedContent = content;
replacements.forEach(r => {
  updatedContent = updatedContent.replace(r.regex, r.replace);
});

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Mock data enriched!");
