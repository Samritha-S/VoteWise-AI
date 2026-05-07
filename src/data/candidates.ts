export interface AssetBreakdown {
  type: string;
  value: string;
}

export interface LiabilityBreakdown {
  type: string;
  value: string;
}

export interface CriminalCaseBreakdown {
  firInfo: string;
  courtInfo: string;
  sections: string[];
}

// New Interfaces for Enhanced Data
export interface MetricValue {
  value: string;
  source: string;
  lastUpdated: string;
}

export interface PerformanceMetrics {
  attendance: MetricValue;
  questionsAsked: MetricValue;
  billsIntroduced: MetricValue;
  fundsUtilized: MetricValue;
  keyAchievements: string[];
  billDetails?: string[];
}

export interface ElectionHistory {
  electionsContested: number;
  wins: number;
  losses: number;
  latestVoteShare: string;
  latestMargin: string;
}

export interface Stance {
  issue: string;
  position: "Pro" | "Neutral" | "Against" | "Data Not Available";
}

export interface NewsItem {
  headline: string;
  source: string;
  date: string;
  sentiment: "Positive" | "Neutral" | "Negative";
}

export interface Controversy {
  description: string;
  date: string;
  status: string;
}

export interface Candidate {
  id: number;
  name: string;
  party: string;
  constituency: string;
  state: string;
  assets: string;
  liabilities: string;
  cases: number;
  education: string;
  confidence: string;
  lastUpdated: string;
  source: string;
  policies: string[];
  photo: string;
  age: number;
  profession: string;
  
  // Affidavit details
  panGiven: boolean;
  itrFiled: boolean;
  totalIncomeDeclared: string;
  spouseProfession: string;
  educationDetails: string;
  incomeSources: string;
  govtContracts: string;
  
  criminalDetails: string[];
  criminalCasesBreakdown: CriminalCaseBreakdown[];
  
  assetDetails: {
    movable: string;
    immovable: string;
  };
  movableAssetsBreakdown: AssetBreakdown[];
  immovableAssetsBreakdown: AssetBreakdown[];
  liabilitiesBreakdown: LiabilityBreakdown[];

  // ENHANCED FIELDS
  currentPosition: string;
  yearsInPolitics: string;
  statusBadge: "Incumbent" | "Challenger";
  
  pastControversies: Controversy[];
  disqualifications: string; // "None" or explanation
  
  performanceMetrics: PerformanceMetrics;
  
  careerHistory: { period: string; role: string }[];
  familyBackground: string;
  
  electionHistory: ElectionHistory;
  
  ideologyStances: Stance[];
  votingRecord: string; // Brief summary
  
  recentNews: NewsItem[];
}

// Helper to generate default empty enhanced data for brevity

export const CANDIDATES: Candidate[] = [


      {id: 1,
    name: "Narendra Modi",
    party: "Bharatiya Janata Party (BJP)",
    constituency: "Varanasi",
    state: "Uttar Pradesh",
    assets: "₹3.02 Crores",
    liabilities: "₹0",
    cases: 0,
    education: "Post Graduate",
    confidence: "High",
    lastUpdated: "2024-04-15T10:00:00Z",
    source: "MyNeta (Lok Sabha 2024)",
    policies: ["Digital India", "Viksit Bharat", "Self-reliant India"],
    photo: "/candidates/1.jpg",
    age: 73,
    profession: "Prime Minister of India",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹23,56,080",
    spouseProfession: "N/A",
    educationDetails: "Post Graduate (Master of Arts from Gujarat University, 1983)",
    incomeSources: "Salary, Interest",
    govtContracts: "Nil",
    criminalDetails: [],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹3.02 Crores", immovable: "₹0" },
    movableAssetsBreakdown: [
      { type: "Cash in hand", value: "₹52,920" },
      { type: "Bank Deposits (SBI Gandhinagar)", value: "₹2,85,60,338" },
      { type: "National Savings Certificates", value: "₹9,12,398" },
      { type: "Jewellery (4 Gold Rings)", value: "₹2,67,750" }
    ],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    // ENHANCED DATA
    currentPosition: "Prime Minister of India, MP Varanasi",
    yearsInPolitics: "53 yrs",
    statusBadge: "Incumbent",
    pastControversies: [
      { description: "Allegations regarding the 2002 Gujarat riots. Cleared by Supreme Court SIT.", date: "2002", status: "Cleared" }
    ],
    disqualifications: "None",
    performanceMetrics: {
      attendance: { value: "Not applicable (PM)", source: "Lok Sabha Records", lastUpdated: "Feb 2024" },
      questionsAsked: { value: "N/A", source: "PRS Legislative Research", lastUpdated: "Feb 2024" },
      billsIntroduced: { value: "N/A (Executive Role)", source: "PRS Legislative Research", lastUpdated: "Feb 2024" },
      fundsUtilized: { value: "100% (Varanasi)", source: "MPLADS Portal", lastUpdated: "Jan 2024" },
      keyAchievements: ["Swachh Bharat Abhiyan", "Pradhan Mantri Jan Dhan Yojana", "Article 370 Abrogation"]
    },
    careerHistory: [
      { period: "2014-Present", role: "Prime Minister of India (Serving 3rd consecutive term)" },
      { period: "2001-2014", role: "Chief Minister of Gujarat (4 consecutive terms)" },
      { period: "1987-2001", role: "Organizational Secretary, BJP (Rising through party ranks)" },
      { period: "1970s-1987", role: "Pracharak, Rashtriya Swayamsevak Sangh (RSS)" }
    ],
    familyBackground: "Born to a family of grocers in Vadnagar; early life as a tea-seller, later dedicated to RSS.",
    electionHistory: {
      electionsContested: 6,
      wins: 6,
      losses: 0,
      latestVoteShare: "63.6%",
      latestMargin: "4.79 Lakh Votes"
    },
    ideologyStances: [
      { issue: "Hindutva & Nationalism", position: "Pro" },
      { issue: "Atmanirbhar Bharat (Self-Reliance)", position: "Pro" },
      { issue: "Digital Transformation", position: "Pro" },
      { issue: "Infrastructure Modernization", position: "Pro" }
    ],
    votingRecord: "Executive Head; consistently implements policies aligned with NDA manifesto.",
    recentNews: [
      { headline: "PM inaugurates new developmental projects in Varanasi.", source: "The Hindu", date: "Feb 2024", sentiment: "Positive" },
      { headline: "Opposition criticizes economic policies.", source: "Indian Express", date: "March 2024", sentiment: "Negative" }
    ]
  },
      {id: 2,
    name: "Rahul Gandhi",
    party: "Indian National Congress (INC)",
    constituency: "Raebareli",
    state: "Uttar Pradesh",
    assets: "₹20.4 Crores",
    liabilities: "₹49.8 Lakhs",
    cases: 18,
    education: "Post Graduate",
    confidence: "High",
    lastUpdated: "2024-04-10T10:00:00Z",
    source: "MyNeta (Lok Sabha 2024)",
    policies: ["NYAY", "Caste Census", "Social Justice"],
    photo: "/candidates/2.jpg",
    age: 53,
    profession: "Member of Parliament",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹1,02,78,680",
    spouseProfession: "N/A",
    educationDetails: "M.Phil in Development Studies from Trinity College, Cambridge",
    incomeSources: "Salary, Investments",
    govtContracts: "Nil",
    criminalDetails: ["Defamation under IPC Section 499 & 500"],
    criminalCasesBreakdown: [
      {
        firInfo: "FIR No. 123/2019, PS Surat",
        courtInfo: "CJM Court, Surat, Gujarat",
        sections: ["IPC Section 499 (Defamation)", "IPC Section 500 (Punishment for Defamation)"]
      }
    ],
    assetDetails: { movable: "₹9.2 Crores", immovable: "₹11.2 Crores" },
    movableAssetsBreakdown: [
      { type: "Cash in hand", value: "₹55,000" },
      { type: "Bank Deposits", value: "₹26,25,157" },
      { type: "Bonds, Debentures and Shares", value: "₹4,33,60,519" },
      { type: "Mutual Funds", value: "₹3,81,33,572" },
      { type: "Jewellery (333.30g Gold)", value: "₹4,20,850" }
    ],
    immovableAssetsBreakdown: [
      { type: "Agricultural Land (Sultanpur Village, Mehrauli)", value: "₹2,10,00,000" },
      { type: "Commercial Buildings (Signature Towers, Gurugram)", value: "₹9,04,89,000" }
    ],
    liabilitiesBreakdown: [
      { type: "Advances/Loans from Individuals (Mother)", value: "₹49,79,184" }
    ],
    // ENHANCED DATA
    currentPosition: "Member of Parliament",
    yearsInPolitics: "20 yrs",
    statusBadge: "Incumbent",
    pastControversies: [
      { description: "Convicted in a defamation case over a 2019 remark. Conviction stayed by Supreme Court.", date: "2023", status: "Stayed" }
    ],
    disqualifications: "Disqualified from Lok Sabha in March 2023 due to defamation conviction. Reinstated in August 2023 after SC stay.",
    performanceMetrics: {
      attendance: { value: "52% (Nat Avg 79%)", source: "PRS Legislative Research", lastUpdated: "Feb 2024" },
      questionsAsked: { value: "99", source: "PRS Legislative Research", lastUpdated: "Feb 2024" },
      billsIntroduced: { value: "0", source: "PRS Legislative Research", lastUpdated: "Feb 2024" },
      fundsUtilized: { value: "Data Not Available", source: "MPLADS Portal", lastUpdated: "Jan 2024" },
      keyAchievements: ["Bharat Jodo Yatra", "Bharat Jodo Nyay Yatra", "MGNREGA advocacy"],
      billDetails: []
    },
    careerHistory: [
      { period: "2024-Present", role: "Member of Parliament (Raebareli) / Leader of Opposition" },
      { period: "2004-Present", role: "Member of Parliament (Amethi/Wayanad)" },
      { period: "2017-2019", role: "President of Indian National Congress (INC)" },
      { period: "2013-2017", role: "Vice President of INC" },
      { period: "2007-2013", role: "General Secretary of INC" }
    ],
    familyBackground: "Member of the Nehru-Gandhi dynasty; son of Rajiv Gandhi and Sonia Gandhi.",
    electionHistory: {
      electionsContested: 5,
      wins: 4,
      losses: 1,
      latestVoteShare: "51%",
      latestMargin: "3.9 Lakh Votes"
    },
    ideologyStances: [
      { issue: "Social Democracy", position: "Pro" },
      { issue: "Secularism & Pluralism", position: "Pro" },
      { issue: "Inclusive Growth", position: "Pro" },
      { issue: "Economic Decentralization", position: "Pro" }
    ],
    votingRecord: "Voted against major NDA bills; focuses on social welfare and minority rights.",
    recentNews: [
      { headline: "Concludes Bharat Jodo Nyay Yatra.", source: "NDTV", date: "March 2024", sentiment: "Positive" },
      { headline: "BJP criticizes recent remarks on EVMs.", source: "Times of India", date: "April 2024", sentiment: "Negative" }
    ]
  },
      {id: 3,
    name: "Arvind Kejriwal",
    party: "Aam Aadmi Party (AAP)",
    constituency: "New Delhi",
    state: "Delhi",
    assets: "₹4.24 Crores",
    liabilities: "₹0",
    cases: 15,
    education: "Graduate Professional",
    confidence: "High",
    lastUpdated: "2024-05-15T10:00:00Z",
    source: "MyNeta (Delhi 2020/2025)",
    policies: ["Free Education", "Healthcare", "Zero Corruption"],
    photo: "/candidates/3.jpg",
    age: 55,
    profession: "Politician / Former IRS",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹7,21,530",
    spouseProfession: "Retired IRS",
    educationDetails: "B.Tech in Mechanical Engineering from IIT Kharagpur",
    incomeSources: "Salary, Interest",
    govtContracts: "Nil",
    criminalDetails: ["Various Defamation Suits", "Public Order"],
    criminalCasesBreakdown: [
      {
        firInfo: "FIR No. 45/2021, PS Cyber Cell",
        courtInfo: "Rouse Avenue Court, New Delhi",
        sections: ["IPC 499", "IPC 500"]
      }
    ],
    assetDetails: { movable: "₹1.24 Crores", immovable: "₹3.0 Crores" },
    movableAssetsBreakdown: [
      { type: "Bank Deposits", value: "₹33,29,000" }
    ],
    immovableAssetsBreakdown: [
      { type: "Residential Flats (Gurugram)", value: "₹1,05,00,000" }
    ],
    liabilitiesBreakdown: [],
    // ENHANCED DATA
    currentPosition: "Chief Minister of Delhi",
    yearsInPolitics: "12 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [{ description: "Various defamation suits.", date: "2016", status: "Settled" }],
    careerHistory: [
      { period: "2013-Present", role: "Chief Minister of Delhi" },
      { period: "2012-Present", role: "National Convener, Aam Aadmi Party (AAP)" },
      { period: "2011-2012", role: "Social Activist, India Against Corruption Movement" },
      { period: "1995-2006", role: "Indian Revenue Service (IRS) Officer" }
    ],
    familyBackground: "Middle-class family from Haryana; former public servant turned activist.",
    electionHistory: { electionsContested: 3, wins: 3, losses: 0, latestVoteShare: "53%", latestMargin: "21k Votes" },
    ideologyStances: [
      { issue: "Anti-Corruption & Transparency", position: "Pro" },
      { issue: "Swaraj (Self-Governance)", position: "Pro" },
      { issue: "Populist Welfare (Free Utilities)", position: "Pro" }
    ],
    votingRecord: "State Executive; focuses on decentralized governance and healthcare/education.",
    recentNews: [{ headline: "Launches new Mohalla Clinics.", source: "Times of India", date: "Jan 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "N/A (CM)", source: "Assembly", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "Assembly", lastUpdated: "2024" },
      billsIntroduced: { value: "24", source: "Govt Records", lastUpdated: "2024" },
      fundsUtilized: { value: "99%", source: "State Budget", lastUpdated: "2024" },
      keyAchievements: ["Education Overhaul", "Zero Power Bills"],
      billDetails: []
    }
  },
      {id: 4,
    name: "Mamata Banerjee",
    party: "All India Trinamool Congress (AITC)",
    constituency: "Bhabanipur",
    state: "West Bengal",
    assets: "₹15.3 Lakhs",
    liabilities: "₹0",
    cases: 0,
    education: "Post Graduate",
    confidence: "High",
    lastUpdated: "2024-05-10T10:00:00Z",
    source: "MyNeta (West Bengal 2021/2024)",
    policies: ["Lakshmir Bhandar", "Ma Mati Manush", "Social Welfare"],
    photo: "/candidates/4.jpg",
    age: 69,
    profession: "Chief Minister of West Bengal",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹23,21,570",
    spouseProfession: "N/A",
    educationDetails: "M.A. from Calcutta University, LL.B. from Jogesh Chandra Chaudhuri Law College",
    incomeSources: "Royalty, Social Service",
    govtContracts: "Nil",
    criminalDetails: [],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹15.3 Lakhs", immovable: "₹0" },
    movableAssetsBreakdown: [
      { type: "Bank Deposits", value: "₹12,02,356" }
    ],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Chief Minister of West Bengal",
    yearsInPolitics: "45 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [
      { period: "2011-Present", role: "Chief Minister of West Bengal" },
      { period: "1998-Present", role: "Chairperson, All India Trinamool Congress (TMC)" },
      { period: "1984-2011", role: "Member of Parliament (Multiple terms); Union Minister (Railways, Coal)" },
      { period: "1970s-1984", role: "Active Member, Indian Youth Congress" }
    ],
    familyBackground: "Born into a middle-class family in Kolkata; self-made leader from grassroots.",
    electionHistory: { electionsContested: 10, wins: 8, losses: 2, latestVoteShare: "58%", latestMargin: "58,832 Votes" },
    ideologyStances: [
      { issue: "Ma, Mati, Manush (Mother, Land, People)", position: "Pro" },
      { issue: "Secular Regionalism", position: "Pro" },
      { issue: "Agrarian Rights", position: "Pro" }
    ],
    votingRecord: "N/A (State Executive); strongly opposes centralizing policies of the NDA.",
    recentNews: [
      { headline: "Expands Swasthya Sathi health scheme.", source: "Telegraph", date: "March 2024", sentiment: "Positive" }
    ],
    performanceMetrics: {
      attendance: { value: "N/A (CM)", source: "State Assembly", lastUpdated: "Feb 2024" },
      questionsAsked: { value: "N/A", source: "State Assembly", lastUpdated: "Feb 2024" },
      billsIntroduced: { value: "Multiple (Govt)", source: "State Assembly", lastUpdated: "Feb 2024" },
      fundsUtilized: { value: "High (State Budget)", source: "State Records", lastUpdated: "Jan 2024" },
      keyAchievements: ["Kanyashree Prakalpa", "Duare Sarkar"]
    }
  },
      {id: 5,
    name: "Amit Shah",
    party: "Bharatiya Janata Party (BJP)",
    constituency: "Gandhinagar",
    state: "Gujarat",
    assets: "₹65.67 Crores",
    liabilities: "₹42.1 Lakhs",
    cases: 3,
    education: "Graduate",
    confidence: "High",
    lastUpdated: "2024-04-20T10:00:00Z",
    source: "MyNeta (Lok Sabha 2024)",
    policies: ["Internal Security", "National Integration", "Border Safety"],
    photo: "/candidates/5.jpg",
    age: 59,
    profession: "Minister of Home Affairs",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹75,41,120",
    spouseProfession: "Housewife / Investor",
    educationDetails: "B.Sc in Biochemistry from CU Shah Science College, Gujarat University",
    incomeSources: "Salary as Minister, Income from Shares and Agriculture",
    govtContracts: "Nil",
    criminalDetails: ["Hate Speech (Acquitted)", "Protests"],
    criminalCasesBreakdown: [
      {
        firInfo: "FIR No. 12/2014, PS Muzaffarnagar",
        courtInfo: "ACJM Court, Muzaffarnagar",
        sections: ["IPC 153A", "IPC 188"]
      }
    ],
    assetDetails: { movable: "₹20.2 Crores", immovable: "₹45.4 Crores" },
    movableAssetsBreakdown: [
      { type: "Bank Deposits", value: "₹1,20,50,000" }
    ],
    immovableAssetsBreakdown: [
      { type: "Commercial Buildings (Ahmedabad)", value: "₹10,50,00,000" }
    ],
    liabilitiesBreakdown: [
      { type: "Loans from Banks (Home Loan)", value: "₹15,00,000" }
    ],
    currentPosition: "Minister of Home Affairs",
    yearsInPolitics: "42 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [{ description: "Sohrabuddin case", date: "2010", status: "Discharged by Court" }],
    careerHistory: [
      { period: "2019-Present", role: "Union Minister of Home Affairs" },
      { period: "2014-2020", role: "National President, Bharatiya Janata Party (BJP)" },
      { period: "1997-2017", role: "Member of Gujarat Legislative Assembly (MLA)" },
      { period: "1987-Present", role: "Active Member, BJP / RSS" }
    ],
    familyBackground: "Born into a business family in Gujarat; early involvement in RSS as a teenager.",
    electionHistory: { electionsContested: 6, wins: 6, losses: 0, latestVoteShare: "69.6%", latestMargin: "5.5 Lakhs" },
    ideologyStances: [
      { issue: "Hindutva & National Security", position: "Pro" },
      { issue: "Article 370 Abrogation", position: "Pro" },
      { issue: "Internal Security Reforms", position: "Pro" }
    ],
    votingRecord: "Cabinet Minister; instrumental in internal security and organizational strategy.",
    recentNews: [{ headline: "Introduces new Criminal Laws.", source: "The Hindu", date: "Dec 2023", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "N/A (Minister)", source: "Lok Sabha", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "Lok Sabha", lastUpdated: "2024" },
      billsIntroduced: { value: "15+", source: "Lok Sabha", lastUpdated: "2024" },
      fundsUtilized: { value: "100%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Abrogation of Article 370", "Bhartiya Nyaya Sanhita"]
    }},
      {id: 6,
    name: "Akhilesh Yadav",
    party: "Samajwadi Party (SP)",
    constituency: "Kannauj",
    state: "Uttar Pradesh",
    assets: "₹42.02 Crores",
    liabilities: "₹99.8 Lakhs",
    cases: 3,
    education: "Graduate Professional",
    confidence: "High",
    lastUpdated: "2024-04-25T10:00:00Z",
    source: "MyNeta (Lok Sabha 2024)",
    policies: ["PDA Alliance", "Social Equality", "Infrastructure"],
    photo: "/candidates/6.jpg",
    age: 50,
    profession: "Member of Parliament",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹84,51,721",
    spouseProfession: "Politician",
    educationDetails: "M.E. from University of Sydney, Australia; B.Tech from Sri Jayachamarajendra College of Engineering",
    incomeSources: "Agriculture, Salary as Politician, Interest",
    govtContracts: "Nil",
    criminalDetails: ["Mining Scam Allegations", "Protests"],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹12.02 Crores", immovable: "₹30.0 Crores" },
    movableAssetsBreakdown: [
      { type: "Bank Deposits", value: "₹5,20,00,000" }
    ],
    immovableAssetsBreakdown: [
      { type: "Agricultural Land (Etawah)", value: "₹12,00,00,000" }
    ],
    liabilitiesBreakdown: [
      { type: "Personal Loans", value: "₹2,00,00,000" }
    ],
    currentPosition: "Leader of Opposition, UP",
    yearsInPolitics: "24 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [{ description: "Mining scam allegations", date: "2019", status: "Pending Enquiry" }],
    careerHistory: [
      { period: "2022-Present", role: "Leader of Opposition, UP Legislative Assembly" },
      { period: "2012-2017", role: "Chief Minister of Uttar Pradesh" },
      { period: "2000-2012", role: "Member of Parliament (Lok Sabha)" },
      { period: "2017-Present", role: "National President, Samajwadi Party (SP)" }
    ],
    familyBackground: "Son of SP founder Mulayam Singh Yadav; educated in Australia.",
    electionHistory: { electionsContested: 5, wins: 5, losses: 0, latestVoteShare: "60%", latestMargin: "2.5 Lakhs" },
    ideologyStances: [
      { issue: "Socialism (Lohiaite)", position: "Pro" },
      { issue: "PDA (Pichda, Dalit, Alpsankhyak) Rights", position: "Pro" },
      { issue: "Caste Census", position: "Pro" }
    ],
    votingRecord: "Opposes major central legislation; advocates for agrarian and minority welfare.",
    recentNews: [{ headline: "Announces PDA alliance strategy.", source: "NDTV", date: "Feb 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "65%", source: "UP Assembly", lastUpdated: "2024" },
      questionsAsked: { value: "45", source: "UP Assembly", lastUpdated: "2024" },
      billsIntroduced: { value: "0", source: "UP Assembly", lastUpdated: "2024" },
      fundsUtilized: { value: "90%", source: "State Records", lastUpdated: "2024" },
      keyAchievements: ["Agra-Lucknow Expressway", "Laptop distribution scheme"]
    }},
      {id: 7,
    name: "Shashi Tharoor",
    party: "Indian National Congress (INC)",
    constituency: "Thiruvananthapuram",
    state: "Kerala",
    assets: "₹55.1 Crores",
    liabilities: "₹0",
    cases: 12,
    education: "Doctorate",
    confidence: "High",
    lastUpdated: "2024-04-05T10:00:00Z",
    source: "MyNeta (Lok Sabha 2024)",
    policies: ["Liberalism", "International Relations", "Education"],
    photo: "/candidates/7.jpg",
    age: 68,
    profession: "Member of Parliament",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹4,32,56,834",
    spouseProfession: "N/A",
    educationDetails: "Ph.D. in Law and Diplomacy from Fletcher School, Tufts University, USA",
    incomeSources: "Salary, Royalty, Honorarium",
    govtContracts: "Nil",
    criminalDetails: ["Sunanda Pushkar Case (Discharged)", "Defamation"],
    criminalCasesBreakdown: [
      {
        firInfo: "FIR No. 34/2020, PS Thiruvananthapuram",
        courtInfo: "High Court of Kerala",
        sections: ["IPC 143", "IPC 283"]
      }
    ],
    assetDetails: { movable: "₹45.1 Crores", immovable: "₹10.0 Crores" },
    movableAssetsBreakdown: [
      { type: "Bank Deposits", value: "₹12,40,00,000" }
    ],
    immovableAssetsBreakdown: [
      { type: "Apartment (Delhi)", value: "₹4,50,00,000" }
    ],
    liabilitiesBreakdown: [],
    currentPosition: "Member of Parliament",
    yearsInPolitics: "15 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [{ description: "Sunanda Pushkar case", date: "2014", status: "Discharged by Court" }],
    careerHistory: [
      { period: "2009-Present", role: "Member of Parliament (Thiruvananthapuram)" },
      { period: "2009-2014", role: "Union Minister of State (External Affairs, HRD)" },
      { period: "1978-2007", role: "Career Diplomat, United Nations (Rose to Under-Secretary-General)" }
    ],
    familyBackground: "Born in London; distinguished academic and diplomatic background before entering politics.",
    electionHistory: { electionsContested: 3, wins: 3, losses: 0, latestVoteShare: "41.1%", latestMargin: "99k Votes" },
    ideologyStances: [
      { issue: "Liberal Nationalism", position: "Pro" },
      { issue: "Secular Pluralism", position: "Pro" },
      { issue: "Economic Neoliberalism", position: "Pro" }
    ],
    votingRecord: "Active in parliamentary debates; proposes multiple private member bills on social rights.",
    recentNews: [{ headline: "Releases new book on Indian politics.", source: "Indian Express", date: "Jan 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "85%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "468", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "22", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "98%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Championed LGBTQ+ rights bills", "Vocal advocate for IT development in Kerala"],
      billDetails: [
        "The Anti-Discrimination and Equality Bill, 2016",
        "The Data Privacy and Protection Bill, 2017",
        "The Protection of Traditional Knowledge Bill, 2022"
      ]
    }},
      {id: 8,
    name: "Asaduddin Owaisi",
    party: "All India Majlis-e-Ittehadul Muslimeen (AIMIM)",
    constituency: "Hyderabad",
    state: "Telangana",
    assets: "₹23.87 Crores",
    liabilities: "₹9 Crores",
    cases: 5,
    education: "Bar-at-Law",
    confidence: "High",
    lastUpdated: "2024-04-18T15:45:00Z",
    source: "MyNeta / ADR Report 2024",
    policies: ["Minority Rights", "Constitutional Protection", "Educational Upliftment"],
    photo: "/candidates/8.jpg",
    age: 55,
    profession: "Politician / Advocate",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹22,00,000",
    spouseProfession: "Housewife",
    educationDetails: "Bar-at-Law from Lincoln's Inn, London; B.A. from Osmania University",
    incomeSources: "Salary as MP, Advocate Fees",
    govtContracts: "Nil",
    criminalDetails: ["IPC 153A", "IPC 147"],
    criminalCasesBreakdown: [
      {
        firInfo: "FIR No. 89/2012, PS Charminar",
        courtInfo: "Nampally Criminal Court",
        sections: ["IPC 153A", "IPC 147"]
      }
    ],
    assetDetails: { movable: "₹2.8 Crores", immovable: "₹21.07 Crores" },
    movableAssetsBreakdown: [
      { type: "Bank Deposits", value: "₹1,50,00,000" }
    ],
    immovableAssetsBreakdown: [
      { type: "Commercial Buildings (Hyderabad)", value: "₹15,00,00,000" }
    ],
    liabilitiesBreakdown: [
      { type: "Bank Loans", value: "₹5,00,00,000" }
    ],
    currentPosition: "Member of Parliament",
    yearsInPolitics: "30 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [{ description: "Hate speech accusations", date: "2012", status: "Acquitted" }],
    careerHistory: [
      { period: "2004-Present", role: "Member of Parliament (Hyderabad)" },
      { period: "2008-Present", role: "President, All India Majlis-e-Ittehadul Muslimeen (AIMIM)" },
      { period: "1994-2004", role: "Member of Andhra Pradesh Legislative Assembly" }
    ],
    familyBackground: "Son of Sultan Salahuddin Owaisi; Bar-at-Law from Lincoln's Inn, London.",
    electionHistory: { electionsContested: 6, wins: 6, losses: 0, latestVoteShare: "58.9%", latestMargin: "2.8 Lakhs" },
    ideologyStances: [
      { issue: "Minority Rights & Identity", position: "Pro" },
      { issue: "Constitutionalism", position: "Pro" },
      { issue: "Anti-Majoritarianism", position: "Pro" }
    ],
    votingRecord: "Independent voice; sharp critic of both NDA and UPA on issues of minority representation.",
    recentNews: [{ headline: "Questions govt on constitutional rights.", source: "Siasat", date: "Feb 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "83%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "740", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "4", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "100%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Consistently high parliamentary attendance", "Expansion of Darussalam institutions"],
      billDetails: [
        "The Constitution (Amendment) Bill, 2019 (Insertion of new article 14A)",
        "The Minorities (Protection and Welfare) Bill, 2022"
      ]
    }},
      {id: 9,
    name: "Nitin Gadkari",
    party: "Bharatiya Janata Party (BJP)",
    constituency: "Nagpur",
    state: "Maharashtra",
    assets: "₹28.03 Crores",
    liabilities: "₹6.22 Crores",
    cases: 10,
    education: "Graduate Professional",
    confidence: "High",
    lastUpdated: "2024-04-22T10:00:00Z",
    source: "MyNeta (Lok Sabha 2024)",
    policies: ["Infrastructure Growth", "Green Energy", "Ethanol Economy"],
    photo: "/candidates/9.jpg",
    age: 71,
    profession: "Minister for Road Transport & Highways",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹13,84,550",
    spouseProfession: "Business",
    educationDetails: "LL.B from Nagpur University in 1982",
    incomeSources: "Agriculture, Salary, Business",
    govtContracts: "Nil",
    criminalDetails: ["Purti Group Irregularities (Cleared)", "Protests"],
    criminalCasesBreakdown: [
      {
        firInfo: "FIR No. 44/2019, PS Nagpur",
        courtInfo: "Nagpur District Court",
        sections: ["IPC 499", "IPC 500"]
      }
    ],
    assetDetails: { movable: "₹8.03 Crores", immovable: "₹20.0 Crores" },
    movableAssetsBreakdown: [
      { type: "Bank Deposits", value: "₹1,10,00,000" }
    ],
    immovableAssetsBreakdown: [
      { type: "Agricultural Land (Nagpur)", value: "₹4,50,00,000" }
    ],
    liabilitiesBreakdown: [
      { type: "Housing Loan", value: "₹1,35,00,000" }
    ],
    currentPosition: "Elected Representative",
    yearsInPolitics: "44 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [
      { period: "2014-Present", role: "Union Minister for Road Transport & Highways" },
      { period: "2009-2013", role: "National President, Bharatiya Janata Party (BJP)" },
      { period: "1995-1999", role: "PWD Minister, Maharashtra (Known for Mumbai-Pune Expressway)" },
      { period: "1980s-1995", role: "Active Member, ABVP / BJP Maharashtra" }
    ],
    familyBackground: "Born into an agricultural family in Nagpur; early involvement in student politics (ABVP).",
    electionHistory: { electionsContested: 3, wins: 3, losses: 0, latestVoteShare: "54.1%", latestMargin: "2.1 Lakhs" },
    ideologyStances: [
      { issue: "Pragmatic Development", position: "Pro" },
      { issue: "Infrastructure & Connectivity", position: "Pro" },
      { issue: "Sustainable Energy (Bio-fuels)", position: "Pro" }
    ],
    votingRecord: "Executive Minister; focus on large-scale infrastructure and industrial growth.",
    recentNews: [{ headline: "Inaugurates several new NH projects.", source: "Times of India", date: "March 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "N/A (Minister)", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "50+ (Govt)", source: "Lok Sabha", lastUpdated: "2024" },
      fundsUtilized: { value: "98%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Revolutionized National Highway network", "Mumbai-Pune Expressway", "Zojila Tunnel project"]
    }},
      {id: 10,
    name: "Tejasvi Surya",
    party: "Bharatiya Janata Party (BJP)",
    constituency: "Bangalore South",
    state: "Karnataka",
    assets: "₹4.10 Crores",
    liabilities: "₹0",
    cases: 3,
    education: "Graduate Professional",
    confidence: "High",
    lastUpdated: "2024-04-28T10:00:00Z",
    source: "MyNeta (Lok Sabha 2024)",
    policies: ["Urban Infrastructure", "Youth Empowerment", "Digital Economy"],
    photo: "/candidates/10.jpg",
    age: 33,
    profession: "Member of Parliament",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹30,55,140",
    spouseProfession: "N/A",
    educationDetails: "BSL, LL.B from Bangalore Institute of Legal Studies (BILS) in 2013",
    incomeSources: "Salary, Professional Fees (Advocate)",
    govtContracts: "Nil",
    criminalDetails: ["Defamation", "Public Protests"],
    criminalCasesBreakdown: [
      {
        firInfo: "FIR No. 76/2022, PS High Grounds, Bengaluru",
        courtInfo: "ACMM Court, Bengaluru",
        sections: ["IPC 143", "IPC 149"]
      }
    ],
    assetDetails: { movable: "₹4.10 Crores", immovable: "₹0" },
    movableAssetsBreakdown: [
      { type: "Bank Deposits", value: "₹55,00,000" }
    ],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Member of Parliament",
    yearsInPolitics: "16 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [{ description: "Bed allocation scam claims", date: "2021", status: "Resolved" }],
    careerHistory: [
      { period: "2019-Present", role: "Member of Parliament (Bangalore South)" },
      { period: "2020-Present", role: "National President, BJP Yuva Morcha" },
      { period: "2013-2019", role: "Advocate / Secretary, BJP Karnataka State Youth Wing" }
    ],
    familyBackground: "Born into a political family; nephew of MLA Ravi Subramanya; legal background.",
    electionHistory: { electionsContested: 1, wins: 1, losses: 0, latestVoteShare: "62%", latestMargin: "3.3 Lakhs" },
    ideologyStances: [
      { issue: "Hindutva & Cultural Nationalism", position: "Pro" },
      { issue: "Digital & Startup Economy", position: "Pro" },
      { issue: "Urban Governance Reform", position: "Pro" }
    ],
    votingRecord: "Vocal supporter of BJP's core ideological and developmental bills in Parliament.",
    recentNews: [{ headline: "Leads youth wing rallies.", source: "The Hindu", date: "Feb 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "78%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "250", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "2", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "85%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Advocated for Namma Metro expansion", "Active in youth mobilization"]
    }},
  // TAMIL NADU
      {id: 11,
    name: "M. K. Stalin",
    party: "Dravida Munnetra Kazhagam (DMK)",
    constituency: "Kolathur",
    state: "Tamil Nadu",
    assets: "₹8.88 Crores",
    liabilities: "₹0",
    cases: 4,
    education: "B.A. History",
    confidence: "High",
    lastUpdated: "2021-03-15T10:00:00Z",
    source: "MyNeta / ECI Official Filing",
    policies: ["Dravidian Model", "State Autonomy", "Welfare Schemes"],
    photo: "/candidates/11.jpg",
    age: 71,
    profession: "Chief Minister of Tamil Nadu",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹29,12,000",
    spouseProfession: "Business/Investments",
    educationDetails: "B.A. History from Presidency College, Chennai",
    incomeSources: "Salary, Rental Income, Agriculture",
    govtContracts: "Nil",
    criminalDetails: ["Unlawful Assembly", "Protests"],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹5.8 Crores", immovable: "₹3.08 Crores" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Chief Minister of Tamil Nadu",
    yearsInPolitics: "58 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [
      { description: "Arrested under MISA during the 1975 Emergency.", date: "1975", status: "Resolved" }
    ],
    careerHistory: [
      { period: "2021-Present", role: "Chief Minister of Tamil Nadu" },
      { period: "2018-Present", role: "President, Dravida Munnetra Kazhagam (DMK)" },
      { period: "2009-2011", role: "Deputy Chief Minister of Tamil Nadu" },
      { period: "1996-2002", role: "Mayor of Chennai" },
      { period: "1982-2017", role: "Secretary, DMK Youth Wing" },
      { period: "1975-1976", role: "Imprisoned under MISA during Emergency" }
    ],
    familyBackground: "Son of DMK patriarch M. Karunanidhi; dedicated to the Dravidian movement since youth.",
    electionHistory: { electionsContested: 9, wins: 7, losses: 2, latestVoteShare: "60%", latestMargin: "70,000 Votes" },
    ideologyStances: [
      { issue: "Dravidian Model (Social Justice)", position: "Pro" },
      { issue: "State Autonomy & Federalism", position: "Pro" },
      { issue: "Language Rights (Tamil)", position: "Pro" }
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
    }
  },
      {id: 12,
    name: "Udhayanidhi Stalin",
    party: "Dravida Munnetra Kazhagam (DMK)",
    constituency: "Chepauk-Thiruvallikeni",
    state: "Tamil Nadu",
    assets: "₹29 Crores",
    liabilities: "₹1.5 Crores",
    cases: 22,
    education: "B.Com",
    confidence: "High",
    lastUpdated: "2021-03-20T10:00:00Z",
    source: "MyNeta / ECI Official Filing",
    policies: ["Youth Welfare", "Sports Development"],
    photo: "/candidates/12.jpg",
    age: 46,
    profession: "Minister / Actor / Producer",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹2,50,00,000",
    spouseProfession: "Film Director/Producer",
    educationDetails: "B.Com from Loyola College, Chennai",
    incomeSources: "Business, Remuneration from acting",
    govtContracts: "Nil",
    criminalDetails: ["Defamation", "Protests"],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹21 Crores", immovable: "₹8 Crores" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Minister for Youth Welfare and Sports Development, Tamil Nadu",
    yearsInPolitics: "10 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    careerHistory: [
      { period: "2022-Present", role: "Minister for Youth Welfare and Sports Development, Tamil Nadu" },
      { period: "2021-Present", role: "Member of Legislative Assembly (Chepauk-Thiruvallikeni)" },
      { period: "2019-Present", role: "Secretary, DMK Youth Wing" },
      { period: "2008-2021", role: "Film Actor and Producer (Red Giant Movies)" }
    ],
    familyBackground: "Grandson of M. Karunanidhi; son of M.K. Stalin; prominent figure in TN cinema and politics.",
    electionHistory: { electionsContested: 1, wins: 1, losses: 0, latestVoteShare: "68%", latestMargin: "69,000 Votes" },
    ideologyStances: [
      { issue: "Dravidian Ideology", position: "Pro" },
      { issue: "Social Equality", position: "Pro" },
      { issue: "Sanatana Dharma Critique", position: "Pro" }
    ],
    votingRecord: "State Cabinet Minister; focus on sports infrastructure and youth empowerment.",
    recentNews: [{ headline: "Organizes major international sports events in Chennai.", source: "The Hindu", date: "Jan 2024", sentiment: "Positive" }],
    pastControversies: [],
    performanceMetrics: {
      attendance: { value: "Data Not Available", source: "Assembly", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "Assembly", lastUpdated: "2024" },
      billsIntroduced: { value: "Multiple", source: "Assembly", lastUpdated: "2024" },
      fundsUtilized: { value: "High", source: "State Budget", lastUpdated: "2024" },
      keyAchievements: ["Revitalization of sports infrastructure", "Women's rights advocacy"]
    }},
      {id: 13,
    name: "K. Annamalai",
    party: "Bharatiya Janata Party (BJP)",
    constituency: "Coimbatore",
    state: "Tamil Nadu",
    assets: "₹3.2 Crores",
    liabilities: "₹0",
    cases: 3,
    education: "MBA, IIM Lucknow",
    confidence: "High",
    lastUpdated: "2024-04-05T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["En Mann En Makkal", "Anti-Corruption", "Nationalism"],
    photo: "/candidates/13.jpg",
    age: 39,
    profession: "State President, BJP TN / Former IPS",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹12,00,000",
    spouseProfession: "Corporate Professional",
    educationDetails: "MBA from IIM Lucknow, B.E. from PSG College of Technology",
    incomeSources: "Pension, Agriculture",
    govtContracts: "Nil",
    criminalDetails: ["Defamation", "Unlawful Assembly"],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹1.2 Crores", immovable: "₹2.0 Crores" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "President, BJP Tamil Nadu",
    yearsInPolitics: "4 yrs",
    statusBadge: "Challenger",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [
      { period: "2021-Present", role: "President, BJP Tamil Nadu State Unit" },
      { period: "2020-2021", role: "Vice President, BJP Tamil Nadu" },
      { period: "2011-2019", role: "Indian Police Service (IPS) Officer (Karnataka Cadre)" }
    ],
    familyBackground: "Born into an agricultural family in Karur; MBA from IIM Lucknow; former high-ranking police officer.",
    electionHistory: { electionsContested: 2, wins: 0, losses: 2, latestVoteShare: "33% (Coimbatore)", latestMargin: "N/A" },
    ideologyStances: [
      { issue: "Nationalism", position: "Pro" },
      { issue: "Anti-Corruption & Transparency", position: "Pro" },
      { issue: "Spiritual Politics", position: "Pro" }
    ],
    votingRecord: "Organizational leader; focuses on grassroots mobilization and challenging Dravidian dominance.",
    recentNews: [{ headline: "Leads 'En Mann En Makkal' padayatra across TN.", source: "Times of India", date: "Feb 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "N/A (State President)", source: "N/A", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "N/A", lastUpdated: "2024" },
      billsIntroduced: { value: "N/A", source: "N/A", lastUpdated: "2024" },
      fundsUtilized: { value: "N/A", source: "N/A", lastUpdated: "2024" },
      keyAchievements: ["Rapid expansion of BJP in Tamil Nadu", "High-impact 'En Mann En Makkal' padayatra", "Corruption exposes through 'DMK Files'"]
    }},
      {id: 14,
    name: "Kanimozhi Karunanidhi",
    party: "Dravida Munnetra Kazhagam (DMK)",
    constituency: "Thoothukkudi",
    state: "Tamil Nadu",
    assets: "₹30 Crores",
    liabilities: "₹0",
    cases: 1,
    education: "M.A. Economics",
    confidence: "High",
    lastUpdated: "2024-04-10T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["Women Empowerment", "Tamil Culture", "Social Justice"],
    photo: "/candidates/14.jpg",
    age: 56,
    profession: "Member of Parliament",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹1,20,00,000",
    spouseProfession: "Not Applicable",
    educationDetails: "M.A. Economics from Ethiraj College for Women",
    incomeSources: "Salary as MP, Dividends, Interest",
    govtContracts: "Nil",
    criminalDetails: ["2G Spectrum Case (Acquitted, pending appeal)"],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹25 Crores", immovable: "₹5 Crores" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Member of Parliament (Thoothukkudi)",
    yearsInPolitics: "17 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [
      { period: "2019-Present", role: "Member of Parliament (Lok Sabha - Thoothukkudi)" },
      { period: "2024-Present", role: "Chairperson, DMK Parliamentary Party" },
      { period: "2007-2019", role: "Member of Parliament (Rajya Sabha)" },
      { period: "1990s-2007", role: "Journalist, Poet, and Cultural Activist" }
    ],
    familyBackground: "Daughter of M. Karunanidhi; sibling of M.K. Stalin; noted for her work in literature and women's rights.",
    electionHistory: { electionsContested: 2, wins: 2, losses: 0, latestVoteShare: "56%", latestMargin: "3.4 Lakh Votes" },
    ideologyStances: [
      { issue: "Dravidian Ideology & Social Justice", position: "Pro" },
      { issue: "Women Empowerment & Rights", position: "Pro" },
      { issue: "Federal Autonomy", position: "Pro" },
      { issue: "Freedom of Speech", position: "Pro" }
    ],
    votingRecord: "Active in Lok Sabha; focuses on railway projects in TN and welfare for marginalized communities.",
    recentNews: [{ headline: "Leads protests for TN's fiscal rights.", source: "Times of India", date: "Feb 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "82%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "180", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "0", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "92%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Promoted Thoothukkudi industrial corridor", "Advocated for women's reservation bill"]
    }},
      {id: 15,
    name: "Edappadi K. Palaniswami",
    party: "All India Anna Dravida Munnetra Kazhagam (AIADMK)",
    constituency: "Edappadi",
    state: "Tamil Nadu",
    assets: "₹4.5 Crores",
    liabilities: "₹0",
    cases: 0,
    education: "B.Sc (Discontinued)",
    confidence: "High",
    lastUpdated: "2021-03-22T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["Kudimaramathu", "Farmer Welfare", "Infrastructure"],
    photo: "/candidates/15.jpg",
    age: 69,
    profession: "Leader of Opposition",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹15,00,000",
    spouseProfession: "Housewife",
    educationDetails: "B.Sc (Discontinued) from Sri Vasavi College, Erode",
    incomeSources: "Salary, Agriculture",
    govtContracts: "Nil",
    criminalDetails: [],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹1.5 Crores", immovable: "₹3.0 Crores" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Leader of Opposition, Tamil Nadu",
    yearsInPolitics: "50 yrs",
    statusBadge: "Challenger",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [
      { period: "2021-Present", role: "Leader of Opposition, Tamil Nadu Legislative Assembly" },
      { period: "2017-2021", role: "Chief Minister of Tamil Nadu" },
      { period: "2011-2017", role: "Minister for Highways & Minor Ports, Tamil Nadu" },
      { period: "1989-Present", role: "Member of Legislative Assembly (Multiple terms)" },
      { period: "1974-1989", role: "Active Member, AIADMK (Joined during MGR era)" }
    ],
    familyBackground: "Born into an agricultural family in Siluvampalayam, Salem district; loyalist of J. Jayalalithaa.",
    electionHistory: { electionsContested: 7, wins: 5, losses: 2, latestVoteShare: "45%", latestMargin: "50k Votes" },
    ideologyStances: [{ issue: "Dravidian Welfare", position: "Pro" }, { issue: "Agrarian Rights", position: "Pro" }],
    votingRecord: "Opposes current DMK policies; focuses on agricultural issues and water conservation.",
    recentNews: [{ headline: "Criticizes state's handling of water resources.", source: "Times of India", date: "March 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "Data Not Available", source: "Assembly", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "Assembly", lastUpdated: "2024" },
      billsIntroduced: { value: "Multiple (Past Govt)", source: "Assembly", lastUpdated: "2024" },
      fundsUtilized: { value: "High", source: "State Budget", lastUpdated: "2024" },
      keyAchievements: ["Kudimaramathu water conservation scheme", "Expansion of Highway infrastructure in TN"]
    }},
  
  // UTTAR PRADESH
      {id: 16,
    name: "Yogi Adityanath",
    party: "Bharatiya Janata Party (BJP)",
    constituency: "Gorakhpur Urban",
    state: "Uttar Pradesh",
    assets: "₹1.54 Crores",
    liabilities: "₹0",
    cases: 0,
    education: "B.Sc Mathematics",
    confidence: "High",
    lastUpdated: "2022-02-15T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["Law and Order", "Infrastructure", "Cultural Nationalism"],
    photo: "/candidates/16.jpg",
    age: 51,
    profession: "Chief Minister of Uttar Pradesh",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹13,20,000",
    spouseProfession: "Not Applicable",
    educationDetails: "B.Sc Maths from HNB Garhwal University",
    incomeSources: "Salary, Allowances",
    govtContracts: "Nil",
    criminalDetails: [],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹1.54 Crores", immovable: "₹0" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Chief Minister of Uttar Pradesh",
    yearsInPolitics: "26 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [
      { description: "Hate speech allegations.", date: "2007", status: "Cleared/Dismissed" }
    ],
    careerHistory: [
      { period: "2017-Present", role: "Chief Minister of Uttar Pradesh (Serving 2nd consecutive term)" },
      { period: "1998-2017", role: "Member of Parliament (Lok Sabha - Gorakhpur; 5 consecutive terms)" },
      { period: "2002-Present", role: "Founder, Hindu Yuva Vahini" },
      { period: "1994-Present", role: "Mahant (Head Priest), Gorakhnath Math" }
    ],
    familyBackground: "Born Ajay Singh Bisht; became a monk and disciple of Mahant Avaidyanath; religious and political leader.",
    electionHistory: { electionsContested: 6, wins: 6, losses: 0, latestVoteShare: "66%", latestMargin: "1.03 Lakh Votes" },
    ideologyStances: [
      { issue: "Hindutva & Cultural Nationalism", position: "Pro" },
      { issue: "Law & Order (Zero Tolerance)", position: "Pro" },
      { issue: "Cow Protection", position: "Pro" },
      { issue: "Economic Growth through Infra", position: "Pro" }
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
    }
  },
      {id: 17,
    name: "Keshav Prasad Maurya",
    party: "Bharatiya Janata Party (BJP)",
    constituency: "Sirathu",
    state: "Uttar Pradesh",
    assets: "₹11 Crores",
    liabilities: "₹1.2 Crores",
    cases: 6,
    education: "B.A. (Sahitya Ratna)",
    confidence: "High",
    lastUpdated: "2022-02-15T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["OBC Empowerment", "Infrastructure", "Hindutva"],
    photo: "/candidates/17.jpg",
    age: 54,
    profession: "Deputy Chief Minister of Uttar Pradesh",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹22,00,000",
    spouseProfession: "Business",
    educationDetails: "Sahitya Ratna from Hindi Sahitya Sammelan",
    incomeSources: "Business, Salary",
    govtContracts: "Nil",
    criminalDetails: ["IPC 153A", "IPC 147"],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹4 Crores", immovable: "₹7 Crores" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Deputy Chief Minister of Uttar Pradesh",
    yearsInPolitics: "40 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    careerHistory: [
      { period: "2017-Present", role: "Deputy Chief Minister of Uttar Pradesh" },
      { period: "2016-2017", role: "President, BJP Uttar Pradesh State Unit" },
      { period: "2014-2017", role: "Member of Parliament (Lok Sabha - Phulpur)" },
      { period: "2012-2014", role: "Member of Legislative Assembly (Sirathu)" }
    ],
    familyBackground: "Born into an agricultural family in Sirathu; early involvement in RSS and VHP; prominent OBC leader.",
    electionHistory: { electionsContested: 4, wins: 3, losses: 1, latestVoteShare: "43%", latestMargin: "N/A" },
    ideologyStances: [
      { issue: "Hindutva & VHP Stance", position: "Pro" },
      { issue: "OBC Empowerment", position: "Pro" },
      { issue: "Rural Infrastructure", position: "Pro" }
    ],
    votingRecord: "Deputy CM; focuses on public works and backward class development.",
    recentNews: [{ headline: "Inaugurates several bridge projects in rural UP.", source: "Jagran", date: "March 2024", sentiment: "Positive" }],
    pastControversies: [],
    performanceMetrics: {
      attendance: { value: "Data Not Available", source: "Assembly", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "Assembly", lastUpdated: "2024" },
      billsIntroduced: { value: "Multiple (Govt)", source: "Assembly", lastUpdated: "2024" },
      fundsUtilized: { value: "High", source: "State Budget", lastUpdated: "2024" },
      keyAchievements: ["OBC mobilization", "Infrastructure development in rural sectors"]
    }},
      {id: 18,
    name: "Smriti Irani",
    party: "Bharatiya Janata Party (BJP)",
    constituency: "Amethi",
    state: "Uttar Pradesh",
    assets: "₹8.75 Crores",
    liabilities: "₹0",
    cases: 0,
    education: "B.Com Part 1",
    confidence: "High",
    lastUpdated: "2024-04-20T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["Women Empowerment", "Textile Development", "Amethi Development"],
    photo: "/candidates/18.jpg",
    age: 48,
    profession: "Politician / Former Actress",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹30,00,000",
    spouseProfession: "Business",
    educationDetails: "School of Open Learning, DU",
    incomeSources: "Salary, Investments",
    govtContracts: "Nil",
    criminalDetails: [],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹2.75 Crores", immovable: "₹6 Crores" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Elected Representative",
    yearsInPolitics: "21 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [
      { period: "2014-2024", role: "Union Cabinet Minister (HRD, Textiles, WCD)" },
      { period: "2019-2024", role: "Member of Parliament (Lok Sabha - Amethi)" },
      { period: "2011-2019", role: "Member of Parliament (Rajya Sabha)" },
      { period: "1990s-2003", role: "Successful Television Actress and Producer" }
    ],
    familyBackground: "Self-made professional from Delhi; transition from successful media career to high-level politics.",
    electionHistory: { electionsContested: 3, wins: 1, losses: 2, latestVoteShare: "49.7% (2019)", latestMargin: "55,000 Votes" },
    ideologyStances: [
      { issue: "Women & Child Welfare", position: "Pro" },
      { issue: "Cultural Nationalism", position: "Pro" },
      { issue: "Grassroots Development (Amethi)", position: "Pro" }
    ],
    votingRecord: "Cabinet Minister; defended major reforms like GST and New Education Policy in Parliament.",
    recentNews: [{ headline: "Addresses global summit on women's empowerment.", source: "The Hindu", date: "March 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "N/A (Minister)", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "Multiple (Govt)", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "95%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Implementation of One Stop Centres for women", "POSHAN Abhiyaan leader", "Development of Amethi infrastructure"]
    }},

  // WEST BENGAL
      {id: 19,
    name: "Abhishek Banerjee",
    party: "All India Trinamool Congress (AITC)",
    constituency: "Diamond Harbour",
    state: "West Bengal",
    assets: "₹1.5 Crores",
    liabilities: "₹0",
    cases: 2,
    education: "BBA, MBA",
    confidence: "High",
    lastUpdated: "2024-04-18T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["Trinamool Nabo Jowar", "Youth Empowerment", "Anti-CAA"],
    photo: "/candidates/19.jpg",
    age: 36,
    profession: "Member of Parliament",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹45,00,000",
    spouseProfession: "Business",
    educationDetails: "BBA, MBA from IIPM, New Delhi",
    incomeSources: "Salary, Business Returns",
    govtContracts: "Nil",
    criminalDetails: ["Defamation", "Public Order"],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹1.5 Crores", immovable: "₹0" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Elected Representative",
    yearsInPolitics: "13 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [
      { period: "2014-Present", role: "Member of Parliament (Lok Sabha - Diamond Harbour)" },
      { period: "2021-Present", role: "National General Secretary, All India Trinamool Congress (TMC)" },
      { period: "2011-2021", role: "National President, Trinamool Youth Congress" }
    ],
    familyBackground: "Nephew of Mamata Banerjee; MBA graduate; strategist focusing on party modernization.",
    electionHistory: { electionsContested: 3, wins: 3, losses: 0, latestVoteShare: "56%", latestMargin: "3.2 Lakh Votes" },
    ideologyStances: [
      { issue: "Regional Federalism", position: "Pro" },
      { issue: "Youth Empowerment", position: "Pro" },
      { issue: "Secular Pluralism", position: "Pro" }
    ],
    votingRecord: "Active in Lok Sabha; vocal critic of centralizing policies and economic decisions of the NDA.",
    recentNews: [{ headline: "Leads 'Trinamool Nabo Jowar' outreach program.", source: "Telegraph", date: "Jan 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "12% (Poor)", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "2", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "0", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "75%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Pioneered 'Diamond Harbour Model' for pandemic management", "Digitalization of party outreach"]
    }},
      {id: 20,
    name: "Suvendu Adhikari",
    party: "Bharatiya Janata Party (BJP)",
    constituency: "Nandigram",
    state: "West Bengal",
    assets: "₹1.05 Crores",
    liabilities: "₹0",
    cases: 5,
    education: "M.A.",
    confidence: "High",
    lastUpdated: "2021-03-25T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["Anti-Corruption", "Hindutva in WB", "Infrastructure"],
    photo: "/candidates/20.jpg",
    age: 53,
    profession: "Leader of Opposition",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹11,00,000",
    spouseProfession: "Not Applicable",
    educationDetails: "M.A. from Rabindra Bharati University",
    incomeSources: "Salary, Agriculture",
    govtContracts: "Nil",
    criminalDetails: ["IPC 153A", "Disaster Management Act"],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹1.05 Crores", immovable: "₹0" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Elected Representative",
    yearsInPolitics: "29 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [
      { period: "2021-Present", role: "Leader of Opposition, West Bengal Legislative Assembly" },
      { period: "2016-2020", role: "Cabinet Minister (Transport, Irrigation), West Bengal" },
      { period: "2009-2016", role: "Member of Parliament (Lok Sabha - Tamluk)" },
      { period: "2006-2009", role: "Member of Legislative Assembly (Contai South)" }
    ],
    familyBackground: "Son of veteran politician Sisir Adhikari; influential family in Purba Medinipur; former TMC strongman turned BJP leader.",
    electionHistory: { electionsContested: 6, wins: 5, losses: 1, latestVoteShare: "48%", latestMargin: "1,956 Votes (Nandigram)" },
    ideologyStances: [
      { issue: "Nationalism", position: "Pro" },
      { issue: "Anti-Corruption (TMC critique)", position: "Pro" },
      { issue: "Rural Governance", position: "Pro" }
    ],
    votingRecord: "Leader of Opposition; staunchly opposes AITC policies in the state assembly.",
    recentNews: [{ headline: "Challenges govt on rural fund utilization.", source: "ABP Ananda", date: "Feb 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "Data Not Available", source: "WB Assembly", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "WB Assembly", lastUpdated: "2024" },
      billsIntroduced: { value: "0", source: "WB Assembly", lastUpdated: "2024" },
      fundsUtilized: { value: "High", source: "State Budget", lastUpdated: "2024" },
      keyAchievements: ["Led the Nandigram movement (2007)", "Modernization of transport during ministerial tenure"]
    }},
      {id: 21,
    name: "Derek O'Brien",
    party: "All India Trinamool Congress (AITC)",
    constituency: "Rajya Sabha",
    state: "West Bengal",
    assets: "₹12 Crores",
    liabilities: "₹0",
    cases: 0,
    education: "B.A. English",
    confidence: "High",
    lastUpdated: "2023-07-15T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["Parliamentary Oversight", "Federalism", "Media Strategy"],
    photo: "/candidates/21.jpg",
    age: 62,
    profession: "Member of Parliament (RS)",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹45,00,000",
    spouseProfession: "Medical Professional",
    educationDetails: "B.A. from St. Xavier's College, Kolkata",
    incomeSources: "Salary, Book Royalties",
    govtContracts: "Nil",
    criminalDetails: [],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹8 Crores", immovable: "₹4 Crores" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Leader of TMC in Rajya Sabha",
    yearsInPolitics: "13 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [
      { period: "2011-Present", role: "Member of Parliament (Rajya Sabha)" },
      { period: "2011-Present", role: "Leader of TMC in Rajya Sabha" },
      { period: "1980s-2011", role: "Renowned Quizmaster and Media Professional" }
    ],
    familyBackground: "Born into an Anglo-Indian family in Kolkata; son of Neil O'Brien; transition from media to politics.",
    electionHistory: { electionsContested: 3, wins: 3, losses: 0, latestVoteShare: "N/A (Rajya Sabha)", latestMargin: "N/A" },
    ideologyStances: [
      { issue: "Parliamentary Transparency", position: "Pro" },
      { issue: "Federal Autonomy", position: "Pro" },
      { issue: "Secular Liberalism", position: "Pro" }
    ],
    votingRecord: "Vocal opposition voice in Rajya Sabha; consistently raises issues of constitutional propriety.",
    recentNews: [{ headline: "Advocates for more parliamentary debate time.", source: "NDTV", date: "March 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "88%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "650", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "5", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "95%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Influential parliamentary debater", "Authored multiple books on Indian politics"]
    }},
      {id: 22,
    name: "Nusrat Jahan",
    party: "All India Trinamool Congress (AITC)",
    constituency: "Basirhat",
    state: "West Bengal",
    assets: "₹2.9 Crores",
    liabilities: "₹1.6 Crores",
    cases: 0,
    education: "B.Com",
    confidence: "High",
    lastUpdated: "2024-04-05T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["Women Empowerment", "Secularism"],
    photo: "/candidates/22.jpg",
    age: 34,
    profession: "Actor / Member of Parliament",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹45,00,000",
    spouseProfession: "Business",
    educationDetails: "B.Com from Bhawanipur Education Society College",
    incomeSources: "Salary, Acting, Endorsements",
    govtContracts: "Nil",
    criminalDetails: [],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹1.4 Crores", immovable: "₹1.5 Crores" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Member of Parliament (Basirhat)",
    yearsInPolitics: "5 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [
      { period: "2019-Present", role: "Member of Parliament (Lok Sabha - Basirhat)" },
      { period: "2010-Present", role: "Successful Film Actress and Model" }
    ],
    familyBackground: "Prominent figure in Bengali cinema; joined politics in 2019 under TMC.",
    electionHistory: { electionsContested: 1, wins: 1, losses: 0, latestVoteShare: "54%", latestMargin: "3.5 Lakh Votes" },
    ideologyStances: [
      { issue: "Secularism & Inclusivity", position: "Pro" },
      { issue: "Women Empowerment", position: "Pro" },
      { issue: "Cultural Identity", position: "Pro" }
    ],
    votingRecord: "Voted with TMC on major social and state-specific bills in Lok Sabha.",
    recentNews: [{ headline: "Focuses on local development projects in Basirhat.", source: "Sangbad Pratidin", date: "Jan 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "Data Not Available", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "0", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "85%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Promoted local handicrafts and tourism", "Women's welfare initiatives in constituency"]
    }},

  // MAHARASHTRA
      {id: 23,
    name: "Eknath Shinde",
    party: "Shiv Sena",
    constituency: "Kopri-Pachpakhadi",
    state: "Maharashtra",
    assets: "₹11.5 Crores",
    liabilities: "₹0",
    cases: 18,
    education: "B.A.",
    confidence: "High",
    lastUpdated: "2019-10-05T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["Hindutva", "Infrastructure", "Farmer Welfare"],
    photo: "/candidates/23.jpg",
    age: 60,
    profession: "Chief Minister of Maharashtra",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹34,00,000",
    spouseProfession: "Business",
    educationDetails: "B.A. from Yashwantrao Chavan Maharashtra Open University",
    incomeSources: "Salary, Business, Agriculture",
    govtContracts: "Nil",
    criminalDetails: ["Rioting", "Unlawful Assembly", "Defamation"],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹4.5 Crores", immovable: "₹7 Crores" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Chief Minister of Maharashtra",
    yearsInPolitics: "44 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [
      { description: "Party split and defection controversy.", date: "2022", status: "Ruled in favor by ECI" }
    ],
    careerHistory: [
      { period: "2022-Present", role: "Chief Minister of Maharashtra" },
      { period: "2014-2022", role: "Cabinet Minister (PWD, Public Health), Maharashtra" },
      { period: "2004-Present", role: "Member of Legislative Assembly (Kopri-Pachpakhadi)" },
      { period: "1980s-2004", role: "Grassroots worker for Shiv Sena in Thane; became a key protege of Anand Dighe" }
    ],
    familyBackground: "Born in Satara; moved to Thane; started career in grassroots labor movements and party work.",
    electionHistory: { electionsContested: 4, wins: 4, losses: 0, latestVoteShare: "65%", latestMargin: "89,000 Votes" },
    ideologyStances: [
      { issue: "Hindutva (Balasaheb's Legacy)", position: "Pro" },
      { issue: "Infrastructure Development", position: "Pro" },
      { issue: "Marathi Manoos Rights", position: "Pro" }
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
    }
  },
      {id: 24,
    name: "Devendra Fadnavis",
    party: "Bharatiya Janata Party (BJP)",
    constituency: "Nagpur South West",
    state: "Maharashtra",
    assets: "₹3.8 Crores",
    liabilities: "₹0",
    cases: 4,
    education: "LLB",
    confidence: "High",
    lastUpdated: "2019-10-05T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["Jalyukt Shivar", "Mumbai Metro", "Investment"],
    photo: "/candidates/24.jpg",
    age: 53,
    profession: "Deputy Chief Minister of Maharashtra",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹28,00,000",
    spouseProfession: "Banker / Singer",
    educationDetails: "LLB from Law College, Nagpur",
    incomeSources: "Salary, Legal Practice",
    govtContracts: "Nil",
    criminalDetails: ["Defamation", "Protests"],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹1.8 Crores", immovable: "₹2.0 Crores" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Deputy Chief Minister of Maharashtra",
    yearsInPolitics: "30 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [
      { period: "2022-Present", role: "Deputy Chief Minister of Maharashtra" },
      { period: "2019-2022", role: "Leader of Opposition, Maharashtra Assembly" },
      { period: "2014-2019", role: "Chief Minister of Maharashtra" },
      { period: "1997-1998", role: "Mayor of Nagpur (Youngest at the time)" }
    ],
    familyBackground: "Born into a political family in Nagpur; father Gangadhar Rao was an MLC.",
    electionHistory: { electionsContested: 5, wins: 5, losses: 0, latestVoteShare: "52%", latestMargin: "49,000 Votes" },
    ideologyStances: [
      { issue: "Urban Governance", position: "Pro" },
      { issue: "Infrastructure (Metro, Jalyukt Shivar)", position: "Pro" },
      { issue: "Nationalism", position: "Pro" }
    ],
    votingRecord: "State Executive; focuses on administrative reforms and industrial growth.",
    recentNews: [{ headline: "Spearheads major FDI initiatives in MH.", source: "Mint", date: "Feb 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "Data Not Available", source: "Assembly", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "Assembly", lastUpdated: "2024" },
      billsIntroduced: { value: "Multiple (Govt)", source: "Assembly", lastUpdated: "2024" },
      fundsUtilized: { value: "High", source: "State Budget", lastUpdated: "2024" },
      keyAchievements: ["Mumbai Metro expansion", "Jalyukt Shivar water conservation", "Samruddhi Mahamarg planning"]
    }},
      {id: 25,
    name: "Ajit Pawar",
    party: "Nationalist Congress Party (NCP)",
    constituency: "Baramati",
    state: "Maharashtra",
    assets: "₹75 Crores",
    liabilities: "₹5 Crores",
    cases: 4,
    education: "B.Com",
    confidence: "High",
    lastUpdated: "2019-10-05T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["Agriculture Development", "Cooperative Sector", "Water Resources"],
    photo: "/candidates/25.jpg",
    age: 64,
    profession: "Deputy Chief Minister of Maharashtra",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹1,50,00,000",
    spouseProfession: "Business / Politician",
    educationDetails: "B.Com",
    incomeSources: "Agriculture, Business, Salary",
    govtContracts: "Nil",
    criminalDetails: ["Corruption Allegations (Irrigation scam)", "Disproportionate Assets"],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹25 Crores", immovable: "₹50 Crores" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Deputy Chief Minister of Maharashtra",
    yearsInPolitics: "33 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [
      { period: "2023-Present", role: "Deputy Chief Minister of Maharashtra" },
      { period: "2019-2023", role: "Deputy Chief Minister (Multiple short tenures)" },
      { period: "1991-Present", role: "Member of Legislative Assembly (Baramati)" },
      { period: "1991", role: "Member of Parliament (Lok Sabha)" }
    ],
    familyBackground: "Nephew of Sharad Pawar; prominent figure in the cooperative and sugar industry of Maharashtra.",
    electionHistory: { electionsContested: 7, wins: 7, losses: 0, latestVoteShare: "68%", latestMargin: "1.65 Lakh Votes" },
    ideologyStances: [
      { issue: "Pragmatic Development", position: "Pro" },
      { issue: "Cooperative Sector Reforms", position: "Pro" },
      { issue: "Agrarian Welfare", position: "Pro" }
    ],
    votingRecord: "State Executive; known for administrative efficiency and firm grip on state finance.",
    recentNews: [{ headline: "Allocates record budget for agriculture.", source: "Lokmat", date: "March 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "Data Not Available", source: "Assembly", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "Assembly", lastUpdated: "2024" },
      billsIntroduced: { value: "Multiple (Govt)", source: "Assembly", lastUpdated: "2024" },
      fundsUtilized: { value: "High", source: "State Budget", lastUpdated: "2024" },
      keyAchievements: ["Administrative overhaul", "Water management projects in Baramati"]
    }},
      {id: 26,
    name: "Uddhav Thackeray",
    party: "Shiv Sena (UBT)",
    constituency: "MLC",
    state: "Maharashtra",
    assets: "₹143 Crores",
    liabilities: "₹15 Crores",
    cases: 23,
    education: "B.A. (Discontinued)",
    confidence: "High",
    lastUpdated: "2020-05-15T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["Marathi Manoos", "Farmers Relief", "Secular Alliance (MVA)"],
    photo: "/candidates/26.jpg",
    age: 63,
    profession: "Party Leader / Former CM",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹1,25,00,000",
    spouseProfession: "Business",
    educationDetails: "Sir J.J. Institute of Applied Art (Discontinued)",
    incomeSources: "Business, Salary",
    govtContracts: "Nil",
    criminalDetails: ["Defamation", "Protests (Saamana Editor)"],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹63 Crores", immovable: "₹80 Crores" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "President, Shiv Sena (UBT) / MLC",
    yearsInPolitics: "25 yrs",
    statusBadge: "Challenger",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [
      { period: "2022-Present", role: "President, Shiv Sena (UBT)" },
      { period: "2019-2022", role: "Chief Minister of Maharashtra" },
      { period: "2003-2012", role: "Executive President, Shiv Sena" },
      { period: "1990s-2003", role: "Professional Wildlife Photographer and Editor (Saamana)" }
    ],
    familyBackground: "Son of Shiv Sena founder Bal Thackeray; carries forward the legacy of the Thackeray family.",
    electionHistory: { electionsContested: 1, wins: 1, losses: 0, latestVoteShare: "N/A (MLC)", latestMargin: "N/A" },
    ideologyStances: [
      { issue: "Marathi Manoos Rights", position: "Pro" },
      { issue: "Secular Alliance (MVA)", position: "Pro" },
      { issue: "Environmental Protection", position: "Pro" }
    ],
    votingRecord: "Party Leader; focuses on balancing regional identity with progressive governance.",
    recentNews: [{ headline: "Addresses large gathering at Shivaji Park.", source: "Sakal", date: "March 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "Data Not Available", source: "Assembly", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "Assembly", lastUpdated: "2024" },
      billsIntroduced: { value: "Multiple (Past Govt)", source: "Assembly", lastUpdated: "2024" },
      fundsUtilized: { value: "High", source: "State Budget", lastUpdated: "2024" },
      keyAchievements: ["Handled COVID-19 pandemic in Maharashtra", "Shiv Bhojan Thali scheme"]
    }},
      {id: 27,
    name: "Sharad Pawar",
    party: "Nationalist Congress Party (NCP - SP)",
    constituency: "Rajya Sabha",
    state: "Maharashtra",
    assets: "₹32 Crores",
    liabilities: "₹1.5 Crores",
    cases: 0,
    education: "B.Com",
    confidence: "High",
    lastUpdated: "2020-03-10T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["Agriculture Reforms", "Cooperative Movements", "Secular Politics"],
    photo: "/candidates/27.jpg",
    age: 83,
    profession: "Member of Parliament (RS)",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹50,00,000",
    spouseProfession: "Agriculture / Business",
    educationDetails: "B.Com from Brihan Maharashtra College of Commerce",
    incomeSources: "Agriculture, Pension, Salary",
    govtContracts: "Nil",
    criminalDetails: [],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹12 Crores", immovable: "₹20 Crores" },
    movableAssetsBreakdown: [],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Member of Parliament (Rajya Sabha)",
    yearsInPolitics: "55 yrs",
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [
      { period: "2014-Present", role: "Member of Parliament (Rajya Sabha)" },
      { period: "1999-2023", role: "President, Nationalist Congress Party (NCP)" },
      { period: "2004-2014", role: "Union Minister of Agriculture & Food Processing" },
      { period: "1978-1999", role: "Chief Minister of Maharashtra (Multiple terms)" }
    ],
    familyBackground: "Born into an agricultural family in Baramati; over 50 years of active political service.",
    electionHistory: { electionsContested: 14, wins: 14, losses: 0, latestVoteShare: "N/A (RS)", latestMargin: "N/A" },
    ideologyStances: [
      { issue: "Agrarian Reforms", position: "Pro" },
      { issue: "Regional Empowerment", position: "Pro" },
      { issue: "Secular Politics", position: "Pro" }
    ],
    votingRecord: "Veteran leader; instrumental in national level agrarian policies and coalition building.",
    recentNews: [{ headline: "Consulted by various parties on national alliance strategy.", source: "NDTV", date: "Feb 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "82%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "450", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "2", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "98%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["National level agrarian reforms", "Instrumental in major coalition building"]
    }},
      {id: 28,
    name: "Joseph Vijay",
    party: "Tamilaga Vettri Kazhagam (TVK)",
    constituency: "Data Not Available",
    state: "Tamil Nadu",
    assets: "₹648 Crores",
    liabilities: "₹7 Crores",
    cases: 0,
    education: "B.Sc. Visual Communications (Discontinued)",
    confidence: "Medium",
    lastUpdated: "2024-02-10T10:00:00Z",
    source: "Public Declarations",
    policies: ["Social Justice", "Eradication of Corruption", "Equality"],
    photo: "/candidates/28.jpg",
    age: 49,
    profession: "Actor / Party President",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹45,00,000",
    spouseProfession: "Not Applicable",
    educationDetails: "B.Sc. Visual Communications from Loyola College, Chennai (Discontinued)",
    incomeSources: "Acting, Brand Endorsements",
    govtContracts: "Nil",
    criminalDetails: [],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹348 Crores", immovable: "₹300 Crores" },
    movableAssetsBreakdown: [
      { type: "Vehicles (BMW, Lexus, Vellfire, Tata Caravan)", value: "₹5.5 Crores" },
      { type: "Bank Deposits & Shares", value: "₹342.5 Crores" }
    ],
    immovableAssetsBreakdown: [
      { type: "Properties in Porur, Saligramam, Neelankarai", value: "₹300 Crores" }
    ],
    liabilitiesBreakdown: [
      { type: "Loans from Banks/Financial Institutions", value: "₹7 Crores" }
    ],
    currentPosition: "Party President",
    yearsInPolitics: "1 yrs",
    statusBadge: "Challenger",
    disqualifications: "None",
    pastControversies: [{ description: "Income Tax raids at residence", date: "2020", status: "Cleared" }],
    careerHistory: [
      { period: "2024-Present", role: "President, Tamilaga Vettri Kazhagam (TVK)" },
      { period: "1992-Present", role: "Leading Actor in Tamil Cinema (Over 65 films)" },
      { period: "2009-2024", role: "Founder, Vijay Makkal Iyakkam (Social Welfare Organization)" }
    ],
    familyBackground: "Son of veteran film director S. A. Chandrasekhar and singer Shoba Chandrasekhar.",
    electionHistory: { electionsContested: 0, wins: 0, losses: 0, latestVoteShare: "N/A", latestMargin: "N/A" },
    ideologyStances: [
      { issue: "Social Justice & Equality", position: "Pro" },
      { issue: "Anti-Corruption", position: "Pro" },
      { issue: "Secular Regionalism", position: "Pro" }
    ],
    votingRecord: "N/A; focuses on state-level issues and youth empowerment through TVK.",
    recentNews: [{ headline: "Launches Tamilaga Vettri Kazhagam (TVK) with a focus on 2026 elections.", source: "The Hindu", date: "Feb 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "N/A", source: "N/A", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "N/A", lastUpdated: "2024" },
      billsIntroduced: { value: "N/A", source: "N/A", lastUpdated: "2024" },
      fundsUtilized: { value: "N/A", source: "N/A", lastUpdated: "2024" },
      keyAchievements: ["Successfully launched TVK party", "Massive fan-base mobilization"]
    }}
];
