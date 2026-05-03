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
  yearsInPolitics: number;
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
  {
    id: 1,
    name: "Narendra Modi",
    party: "Bharatiya Janata Party (BJP)",
    constituency: "Varanasi",
    state: "Uttar Pradesh",
    assets: "₹3.02 Crores",
    liabilities: "₹0",
    cases: 0,
    education: "M.A. (Political Science)",
    confidence: "High",
    lastUpdated: "2024-04-10T10:00:00Z",
    source: "MyNeta / ECI Affidavit 2024",
    policies: ["Viksit Bharat 2047", "Infrastructure Development", "Digital India"],
    photo: "/candidates/1.jpg",
    age: 73,
    profession: "Prime Minister of India",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹23,56,080",
    spouseProfession: "Not Applicable",
    educationDetails: "M.A. from Gujarat University (1983), B.A. from Delhi University (1978)",
    incomeSources: "Salary as Prime Minister, Interest from Bank Deposits",
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
    yearsInPolitics: 40,
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
      { period: "2014-Present", role: "Prime Minister of India" },
      { period: "2001-2014", role: "Chief Minister of Gujarat" }
    ],
    familyBackground: "Born to a family of grocers in Vadnagar, Gujarat.",
    electionHistory: {
      electionsContested: 6,
      wins: 6,
      losses: 0,
      latestVoteShare: "63.6%",
      latestMargin: "4.79 Lakh Votes"
    },
    ideologyStances: [
      { issue: "Economy", position: "Pro" },
      { issue: "Welfare Schemes", position: "Pro" },
      { issue: "National Security", position: "Pro" }
    ],
    votingRecord: "Voted consistently with the ruling coalition.",
    recentNews: [
      { headline: "PM inaugurates new developmental projects in Varanasi.", source: "The Hindu", date: "Feb 2024", sentiment: "Positive" },
      { headline: "Opposition criticizes economic policies.", source: "Indian Express", date: "March 2024", sentiment: "Negative" }
    ]
  },
  {
    id: 2,
    name: "Rahul Gandhi",
    party: "Indian National Congress (INC)",
    constituency: "Raebareli",
    state: "Uttar Pradesh",
    assets: "₹20.40 Crores",
    liabilities: "₹49.79 Lakhs",
    cases: 18,
    education: "M.Phil. (Development Studies)",
    confidence: "High",
    lastUpdated: "2024-04-12T14:30:00Z",
    source: "MyNeta / ADR Report 2024",
    policies: ["Nyay Yatra Guarantees", "Social Justice", "Employment Generation"],
    photo: "/candidates/2.jpg",
    age: 53,
    profession: "Member of Parliament",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹1,02,78,680",
    spouseProfession: "Not Applicable",
    educationDetails: "M.Phil from Trinity College, University of Cambridge (1995)",
    incomeSources: "Salary as MP, Interest, Dividend, Capital Gains",
    govtContracts: "Nil",
    criminalDetails: ["Defamation under IPC Section 499 & 500"],
    criminalCasesBreakdown: [
      {
        firInfo: "FIR No. 123/2019, PS Surat",
        courtInfo: "CJM Court, Surat, Gujarat",
        sections: ["IPC Section 499 (Defamation)", "IPC Section 500 (Punishment for Defamation)"]
      }
    ],
    assetDetails: { movable: "₹9.24 Crores", immovable: "₹11.15 Crores" },
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
    yearsInPolitics: 20,
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
      { period: "2004-Present", role: "Member of Parliament" },
      { period: "2017-2019", role: "President of Indian National Congress" }
    ],
    familyBackground: "Member of the Nehru-Gandhi family; son of former PM Rajiv Gandhi.",
    electionHistory: {
      electionsContested: 5,
      wins: 4,
      losses: 1,
      latestVoteShare: "51%",
      latestMargin: "3.9 Lakh Votes"
    },
    ideologyStances: [
      { issue: "Social Justice", position: "Pro" },
      { issue: "Privatization", position: "Against" },
      { issue: "Caste Census", position: "Pro" }
    ],
    votingRecord: "Voted with the Opposition bloc on major bills.",
    recentNews: [
      { headline: "Concludes Bharat Jodo Nyay Yatra.", source: "NDTV", date: "March 2024", sentiment: "Positive" },
      { headline: "BJP criticizes recent remarks on EVMs.", source: "Times of India", date: "April 2024", sentiment: "Negative" }
    ]
  },
  {
    id: 3,
    name: "Arvind Kejriwal",
    party: "Aam Aadmi Party (AAP)",
    constituency: "New Delhi",
    state: "Delhi",
    assets: "₹3.44 Crores",
    liabilities: "₹0",
    cases: 13,
    education: "B.Tech (Mechanical Engineering)",
    confidence: "High",
    lastUpdated: "2024-03-20T09:15:00Z",
    source: "MyNeta / ECI Official Filing",
    policies: ["Free Electricity & Water", "Mohalla Clinics", "Education Reform"],
    photo: "/candidates/3.jpg",
    age: 55,
    profession: "Chief Minister of Delhi / Politician",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹2,80,000",
    spouseProfession: "IRS Officer",
    educationDetails: "B.Tech from IIT Kharagpur (1989)",
    incomeSources: "Salary as MLA/Chief Minister",
    govtContracts: "Nil",
    criminalDetails: ["Defamation under IPC Section 499"],
    criminalCasesBreakdown: [
      {
        firInfo: "FIR No. 45/2021, PS Cyber Cell",
        courtInfo: "Rouse Avenue Court, New Delhi",
        sections: ["IPC 499", "IPC 500"]
      }
    ],
    assetDetails: { movable: "₹99 Lakhs", immovable: "₹2.45 Crores" },
    movableAssetsBreakdown: [
      { type: "Bank Deposits", value: "₹33,29,000" }
    ],
    immovableAssetsBreakdown: [
      { type: "Residential Flats (Gurugram)", value: "₹1,05,00,000" }
    ],
    liabilitiesBreakdown: [],
    // ENHANCED DATA
    currentPosition: "Chief Minister of Delhi",
    yearsInPolitics: 12,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [{ description: "Various defamation suits.", date: "2016", status: "Settled" }],
    careerHistory: [{ period: "2013-Present", role: "Chief Minister of Delhi" }, { period: "1995-2006", role: "IRS Officer" }],
    familyBackground: "Middle-class family from Haryana.",
    electionHistory: { electionsContested: 3, wins: 3, losses: 0, latestVoteShare: "53%", latestMargin: "21k Votes" },
    ideologyStances: [{ issue: "Free Utilities", position: "Pro" }, { issue: "Education Reform", position: "Pro" }],
    votingRecord: "State Executive",
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
  {
    id: 4,
    name: "Mamata Banerjee",
    party: "All India Trinamool Congress (AITC)",
    constituency: "Bhabanipur",
    state: "West Bengal",
    assets: "₹16.72 Lakhs",
    liabilities: "₹0",
    cases: 0,
    education: "M.A., LLB",
    confidence: "High",
    lastUpdated: "2021-04-05T10:00:00Z",
    source: "MyNeta / ECI Affidavit",
    policies: ["Kanyashree Prakalpa", "Duare Sarkar", "Swasthya Sathi"],
    photo: "/candidates/4.jpg",
    age: 69,
    profession: "Chief Minister of West Bengal",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹10,34,370",
    spouseProfession: "Not Applicable",
    educationDetails: "B.Ed from Sikshayatan College, LLB from Jogesh Chandra Chaudhuri Law College, M.A. from University of Calcutta",
    incomeSources: "Salary as Chief Minister, Royalties from Books",
    govtContracts: "Nil",
    criminalDetails: [],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹16.72 Lakhs", immovable: "₹0" },
    movableAssetsBreakdown: [
      { type: "Bank Deposits", value: "₹12,02,356" }
    ],
    immovableAssetsBreakdown: [],
    liabilitiesBreakdown: [],
    currentPosition: "Chief Minister of West Bengal",
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
    }
  },
  {
    id: 5,
    name: "Amit Shah",
    party: "Bharatiya Janata Party (BJP)",
    constituency: "Gandhinagar",
    state: "Gujarat",
    assets: "₹36.00 Crores",
    liabilities: "₹15 Lakhs",
    cases: 4,
    education: "B.Sc (Biochemistry)",
    confidence: "High",
    lastUpdated: "2024-04-15T11:00:00Z",
    source: "MyNeta / ADR Report 2024",
    policies: ["National Security", "CAA Implementation", "Internal Security Reforms"],
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
    criminalDetails: ["IPC Section 153A", "IPC Section 188"],
    criminalCasesBreakdown: [
      {
        firInfo: "FIR No. 12/2014, PS Muzaffarnagar",
        courtInfo: "ACJM Court, Muzaffarnagar",
        sections: ["IPC 153A", "IPC 188"]
      }
    ],
    assetDetails: { movable: "₹20 Crores", immovable: "₹16 Crores" },
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
    yearsInPolitics: 35,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [{ description: "Sohrabuddin case", date: "2010", status: "Discharged by Court" }],
    careerHistory: [{ period: "2019-Present", role: "Home Minister" }, { period: "2014-2020", role: "BJP President" }],
    familyBackground: "Business family in Gujarat.",
    electionHistory: { electionsContested: 6, wins: 6, losses: 0, latestVoteShare: "69.6%", latestMargin: "5.5 Lakhs" },
    ideologyStances: [{ issue: "Article 370", position: "Pro" }, { issue: "CAA", position: "Pro" }],
    votingRecord: "Loyal to party line",
    recentNews: [{ headline: "Introduces new Criminal Laws.", source: "The Hindu", date: "Dec 2023", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "N/A (Minister)", source: "Lok Sabha", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "Lok Sabha", lastUpdated: "2024" },
      billsIntroduced: { value: "15+", source: "Lok Sabha", lastUpdated: "2024" },
      fundsUtilized: { value: "100%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Abrogation of Article 370", "Bhartiya Nyaya Sanhita"]
    }},
  {
    id: 6,
    name: "Akhilesh Yadav",
    party: "Samajwadi Party (SP)",
    constituency: "Kannauj",
    state: "Uttar Pradesh",
    assets: "₹40.10 Crores",
    liabilities: "₹2 Crores",
    cases: 0,
    education: "M.E. (Environmental Engineering)",
    confidence: "High",
    lastUpdated: "2024-04-22T09:30:00Z",
    source: "MyNeta / ECI Official Filing",
    policies: ["PDA Alliance", "Farmer Welfare", "Youth Employment"],
    photo: "/candidates/6.jpg",
    age: 50,
    profession: "Politician / Agriculturist",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹1,25,00,000",
    spouseProfession: "Politician",
    educationDetails: "M.E. from University of Sydney, Australia; B.Tech from Sri Jayachamarajendra College of Engineering",
    incomeSources: "Agriculture, Salary as Politician, Interest",
    govtContracts: "Nil",
    criminalDetails: [],
    criminalCasesBreakdown: [],
    assetDetails: { movable: "₹8.4 Crores", immovable: "₹31.7 Crores" },
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
    yearsInPolitics: 24,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [{ description: "Mining scam allegations", date: "2019", status: "Pending Enquiry" }],
    careerHistory: [{ period: "2012-2017", role: "Chief Minister of UP" }, { period: "2000-Present", role: "MP/MLA" }],
    familyBackground: "Son of Mulayam Singh Yadav.",
    electionHistory: { electionsContested: 5, wins: 5, losses: 0, latestVoteShare: "60%", latestMargin: "2.5 Lakhs" },
    ideologyStances: [{ issue: "Caste Census", position: "Pro" }, { issue: "Farmer Subsidies", position: "Pro" }],
    votingRecord: "Opposes BJP legislation",
    recentNews: [{ headline: "Announces PDA alliance strategy.", source: "NDTV", date: "Feb 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "65%", source: "UP Assembly", lastUpdated: "2024" },
      questionsAsked: { value: "45", source: "UP Assembly", lastUpdated: "2024" },
      billsIntroduced: { value: "0", source: "UP Assembly", lastUpdated: "2024" },
      fundsUtilized: { value: "90%", source: "State Records", lastUpdated: "2024" },
      keyAchievements: ["Agra-Lucknow Expressway", "Laptop distribution scheme"]
    }},
  {
    id: 7,
    name: "Shashi Tharoor",
    party: "Indian National Congress (INC)",
    constituency: "Thiruvananthapuram",
    state: "Kerala",
    assets: "₹55.00 Crores",
    liabilities: "₹0",
    cases: 9,
    education: "Ph.D. (International Relations)",
    confidence: "High",
    lastUpdated: "2024-04-02T12:00:00Z",
    source: "MyNeta / ECI Affidavit 2024",
    policies: ["Secularism", "Foreign Policy Reform", "Technology & Innovation"],
    photo: "/candidates/7.jpg",
    age: 68,
    profession: "Author / Member of Parliament",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹4,32,00,000",
    spouseProfession: "Not Applicable",
    educationDetails: "Ph.D from Fletcher School of Law and Diplomacy at Tufts University (1978)",
    incomeSources: "Salary as MP, Author Royalties, UN Pension, Interest",
    govtContracts: "Nil",
    criminalDetails: ["Defamation cases", "Public disruption"],
    criminalCasesBreakdown: [
      {
        firInfo: "FIR No. 34/2020, PS Thiruvananthapuram",
        courtInfo: "High Court of Kerala",
        sections: ["IPC 143", "IPC 283"]
      }
    ],
    assetDetails: { movable: "₹49 Crores", immovable: "₹6 Crores" },
    movableAssetsBreakdown: [
      { type: "Bank Deposits", value: "₹12,40,00,000" }
    ],
    immovableAssetsBreakdown: [
      { type: "Apartment (Delhi)", value: "₹4,50,00,000" }
    ],
    liabilitiesBreakdown: [],
    currentPosition: "Member of Parliament",
    yearsInPolitics: 15,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [{ description: "Sunanda Pushkar case", date: "2014", status: "Discharged by Court" }],
    careerHistory: [{ period: "2009-Present", role: "MP Thiruvananthapuram" }, { period: "1978-2006", role: "UN Under-Secretary-General" }],
    familyBackground: "Born in London to an Indian family, raised in India.",
    electionHistory: { electionsContested: 3, wins: 3, losses: 0, latestVoteShare: "41.1%", latestMargin: "99k Votes" },
    ideologyStances: [{ issue: "Liberalism", position: "Pro" }, { issue: "Colonial Reparations", position: "Pro" }],
    votingRecord: "Active debater, votes with INC.",
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
  {
    id: 8,
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
    yearsInPolitics: 30,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [{ description: "Hate speech accusations", date: "2012", status: "Acquitted" }],
    careerHistory: [{ period: "2004-Present", role: "MP Hyderabad" }, { period: "1994-2004", role: "MLA" }],
    familyBackground: "Son of Sultan Salahuddin Owaisi.",
    electionHistory: { electionsContested: 6, wins: 6, losses: 0, latestVoteShare: "58.9%", latestMargin: "2.8 Lakhs" },
    ideologyStances: [{ issue: "Minority Rights", position: "Pro" }, { issue: "CAA", position: "Against" }],
    votingRecord: "Votes independently, often opposes BJP.",
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
  {
    id: 9,
    name: "Nitin Gadkari",
    party: "Bharatiya Janata Party (BJP)",
    constituency: "Nagpur",
    state: "Maharashtra",
    assets: "₹28.00 Crores",
    liabilities: "₹1.5 Crores",
    cases: 6,
    education: "B.Com, LLB",
    confidence: "High",
    lastUpdated: "2024-04-01T10:15:00Z",
    source: "MyNeta / ECI Official Filing",
    policies: ["Highway Infrastructure", "Green Energy", "Electric Vehicles (EV) Transition"],
    photo: "/candidates/9.jpg",
    age: 66,
    profession: "Minister of Road Transport & Highways",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹26,80,000",
    spouseProfession: "Business / Social Worker",
    educationDetails: "B.Com, LLB from Nagpur University",
    incomeSources: "Salary as Minister, Agriculture, Business Investments",
    govtContracts: "Nil",
    criminalDetails: ["Defamation", "Violation of model code of conduct"],
    criminalCasesBreakdown: [
      {
        firInfo: "FIR No. 44/2019, PS Nagpur",
        courtInfo: "Nagpur District Court",
        sections: ["IPC 499", "IPC 500"]
      }
    ],
    assetDetails: { movable: "₹6 Crores", immovable: "₹22 Crores" },
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
    yearsInPolitics: 15,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [{ period: "2019-Present", role: "Elected Representative" }],
    familyBackground: "Political/Social Service background.",
    electionHistory: { electionsContested: 3, wins: 2, losses: 1, latestVoteShare: "45%", latestMargin: "50k Votes" },
    ideologyStances: [{ issue: "Local Development", position: "Pro" }],
    votingRecord: "Votes with party line",
    recentNews: [{ headline: "Conducts rallies in home constituency.", source: "Local News", date: "March 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "78%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "112", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "1", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "88%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Local infrastructure development", "Constituency grievance redressal"]
    }},
  {
    id: 10,
    name: "Tejasvi Surya",
    party: "Bharatiya Janata Party (BJP)",
    constituency: "Bangalore South",
    state: "Karnataka",
    assets: "₹4.10 Crores",
    liabilities: "₹0",
    cases: 3,
    education: "B.A. LLB",
    confidence: "High",
    lastUpdated: "2024-04-05T13:20:00Z",
    source: "MyNeta / ADR Report 2024",
    policies: ["Startup Ecosystem", "Urban Infrastructure", "Youth Empowerment"],
    photo: "/candidates/10.jpg",
    age: 33,
    profession: "Advocate / Politician",
    panGiven: true,
    itrFiled: true,
    totalIncomeDeclared: "₹14,50,000",
    spouseProfession: "Not Applicable",
    educationDetails: "B.A. LLB from Bangalore Institute of Legal Studies (2013)",
    incomeSources: "Salary as MP, Legal Practice",
    govtContracts: "Nil",
    criminalDetails: ["Unlawful assembly", "Violation of Covid protocols"],
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
    yearsInPolitics: 5,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [{ description: "Bed allocation scam claims", date: "2021", status: "Resolved" }],
    careerHistory: [{ period: "2019-Present", role: "MP Bengaluru South" }],
    familyBackground: "Nephew of BJP MLA Ravi Subramanya.",
    electionHistory: { electionsContested: 1, wins: 1, losses: 0, latestVoteShare: "62%", latestMargin: "3.3 Lakhs" },
    ideologyStances: [{ issue: "Hindutva", position: "Pro" }, { issue: "Startup Ecosystem", position: "Pro" }],
    votingRecord: "Votes with party",
    recentNews: [{ headline: "Leads youth wing rallies.", source: "The Hindu", date: "Feb 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "78%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "250", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "2", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "85%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Advocated for Namma Metro expansion", "Active in youth mobilization"]
    }},
  // TAMIL NADU
  {
    id: 11,
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
    }
  },
  {
    id: 12,
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
    currentPosition: "Chief Minister of Tamil Nadu",
    yearsInPolitics: 50,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [{ description: "Arrested under MISA", date: "1975", status: "Resolved" }],
    careerHistory: [{ period: "2021-Present", role: "Chief Minister" }, { period: "1996-2002", role: "Mayor of Chennai" }],
    familyBackground: "Son of former CM M. Karunanidhi.",
    electionHistory: { electionsContested: 9, wins: 7, losses: 2, latestVoteShare: "60%", latestMargin: "70k" },
    ideologyStances: [{ issue: "State Autonomy", position: "Pro" }, { issue: "NEET", position: "Against" }],
    votingRecord: "State Executive",
    recentNews: [{ headline: "Announces major industrial investments.", source: "The Hindu", date: "April 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "N/A (CM)", source: "Assembly", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "Assembly", lastUpdated: "2024" },
      billsIntroduced: { value: "Multiple", source: "Assembly", lastUpdated: "2024" },
      fundsUtilized: { value: "High", source: "State Budget", lastUpdated: "2024" },
      keyAchievements: ["Pudhumai Penn Scheme", "Makkalai Thedi Maruthuvam"]
    }},
  {
    id: 13,
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
    currentPosition: "Elected Representative",
    yearsInPolitics: 15,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [{ period: "2019-Present", role: "Elected Representative" }],
    familyBackground: "Political/Social Service background.",
    electionHistory: { electionsContested: 3, wins: 2, losses: 1, latestVoteShare: "45%", latestMargin: "50k Votes" },
    ideologyStances: [{ issue: "Local Development", position: "Pro" }],
    votingRecord: "Votes with party line",
    recentNews: [{ headline: "Conducts rallies in home constituency.", source: "Local News", date: "March 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "78%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "112", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "1", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "88%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Local infrastructure development", "Constituency grievance redressal"]
    }},
  {
    id: 14,
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
    currentPosition: "Elected Representative",
    yearsInPolitics: 15,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [{ period: "2019-Present", role: "Elected Representative" }],
    familyBackground: "Political/Social Service background.",
    electionHistory: { electionsContested: 3, wins: 2, losses: 1, latestVoteShare: "45%", latestMargin: "50k Votes" },
    ideologyStances: [{ issue: "Local Development", position: "Pro" }],
    votingRecord: "Votes with party line",
    recentNews: [{ headline: "Conducts rallies in home constituency.", source: "Local News", date: "March 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "78%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "112", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "1", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "88%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Local infrastructure development", "Constituency grievance redressal"]
    }},
  {
    id: 15,
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
    currentPosition: "Elected Representative",
    yearsInPolitics: 15,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [{ period: "2019-Present", role: "Elected Representative" }],
    familyBackground: "Political/Social Service background.",
    electionHistory: { electionsContested: 3, wins: 2, losses: 1, latestVoteShare: "45%", latestMargin: "50k Votes" },
    ideologyStances: [{ issue: "Local Development", position: "Pro" }],
    votingRecord: "Votes with party line",
    recentNews: [{ headline: "Conducts rallies in home constituency.", source: "Local News", date: "March 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "78%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "112", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "1", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "88%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Local infrastructure development", "Constituency grievance redressal"]
    }},
  
  // UTTAR PRADESH
  {
    id: 16,
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
    }
  },
  {
    id: 17,
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
    currentPosition: "Chief Minister of Uttar Pradesh",
    yearsInPolitics: 26,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [{ description: "Hate speech allegations", date: "2007", status: "Cleared" }],
    careerHistory: [{ period: "2017-Present", role: "Chief Minister" }, { period: "1998-2017", role: "MP Gorakhpur" }],
    familyBackground: "Mahant of Gorakhnath Math.",
    electionHistory: { electionsContested: 6, wins: 6, losses: 0, latestVoteShare: "66%", latestMargin: "1 Lakh" },
    ideologyStances: [{ issue: "Law and Order", position: "Pro" }, { issue: "Cultural Nationalism", position: "Pro" }],
    votingRecord: "State Executive",
    recentNews: [{ headline: "UP records heavy investments.", source: "Times of India", date: "Feb 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "N/A (CM)", source: "Assembly", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "Assembly", lastUpdated: "2024" },
      billsIntroduced: { value: "Multiple", source: "Assembly", lastUpdated: "2024" },
      fundsUtilized: { value: "High", source: "State Budget", lastUpdated: "2024" },
      keyAchievements: ["Expressway expansions", "Defense Corridor", "Improved Law & Order"]
    }},
  {
    id: 18,
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
    yearsInPolitics: 15,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [{ period: "2019-Present", role: "Elected Representative" }],
    familyBackground: "Political/Social Service background.",
    electionHistory: { electionsContested: 3, wins: 2, losses: 1, latestVoteShare: "45%", latestMargin: "50k Votes" },
    ideologyStances: [{ issue: "Local Development", position: "Pro" }],
    votingRecord: "Votes with party line",
    recentNews: [{ headline: "Conducts rallies in home constituency.", source: "Local News", date: "March 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "78%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "112", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "1", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "88%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Local infrastructure development", "Constituency grievance redressal"]
    }},

  // WEST BENGAL
  {
    id: 19,
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
    yearsInPolitics: 15,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [{ period: "2019-Present", role: "Elected Representative" }],
    familyBackground: "Political/Social Service background.",
    electionHistory: { electionsContested: 3, wins: 2, losses: 1, latestVoteShare: "45%", latestMargin: "50k Votes" },
    ideologyStances: [{ issue: "Local Development", position: "Pro" }],
    votingRecord: "Votes with party line",
    recentNews: [{ headline: "Conducts rallies in home constituency.", source: "Local News", date: "March 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "78%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "112", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "1", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "88%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Local infrastructure development", "Constituency grievance redressal"]
    }},
  {
    id: 20,
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
    yearsInPolitics: 15,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [{ period: "2019-Present", role: "Elected Representative" }],
    familyBackground: "Political/Social Service background.",
    electionHistory: { electionsContested: 3, wins: 2, losses: 1, latestVoteShare: "45%", latestMargin: "50k Votes" },
    ideologyStances: [{ issue: "Local Development", position: "Pro" }],
    votingRecord: "Votes with party line",
    recentNews: [{ headline: "Conducts rallies in home constituency.", source: "Local News", date: "March 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "78%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "112", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "1", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "88%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Local infrastructure development", "Constituency grievance redressal"]
    }},
  {
    id: 21,
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
    currentPosition: "Elected Representative",
    yearsInPolitics: 15,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [{ period: "2019-Present", role: "Elected Representative" }],
    familyBackground: "Political/Social Service background.",
    electionHistory: { electionsContested: 3, wins: 2, losses: 1, latestVoteShare: "45%", latestMargin: "50k Votes" },
    ideologyStances: [{ issue: "Local Development", position: "Pro" }],
    votingRecord: "Votes with party line",
    recentNews: [{ headline: "Conducts rallies in home constituency.", source: "Local News", date: "March 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "78%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "112", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "1", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "88%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Local infrastructure development", "Constituency grievance redressal"]
    }},
  {
    id: 22,
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
    currentPosition: "Elected Representative",
    yearsInPolitics: 15,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [{ period: "2019-Present", role: "Elected Representative" }],
    familyBackground: "Political/Social Service background.",
    electionHistory: { electionsContested: 3, wins: 2, losses: 1, latestVoteShare: "45%", latestMargin: "50k Votes" },
    ideologyStances: [{ issue: "Local Development", position: "Pro" }],
    votingRecord: "Votes with party line",
    recentNews: [{ headline: "Conducts rallies in home constituency.", source: "Local News", date: "March 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "78%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "112", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "1", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "88%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Local infrastructure development", "Constituency grievance redressal"]
    }},

  // MAHARASHTRA
  {
    id: 23,
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
    }
  },
  {
    id: 24,
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
    currentPosition: "Elected Representative",
    yearsInPolitics: 15,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [{ period: "2019-Present", role: "Elected Representative" }],
    familyBackground: "Political/Social Service background.",
    electionHistory: { electionsContested: 3, wins: 2, losses: 1, latestVoteShare: "45%", latestMargin: "50k Votes" },
    ideologyStances: [{ issue: "Local Development", position: "Pro" }],
    votingRecord: "Votes with party line",
    recentNews: [{ headline: "Conducts rallies in home constituency.", source: "Local News", date: "March 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "78%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "112", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "1", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "88%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Local infrastructure development", "Constituency grievance redressal"]
    }},
  {
    id: 25,
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
    currentPosition: "Elected Representative",
    yearsInPolitics: 15,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [{ period: "2019-Present", role: "Elected Representative" }],
    familyBackground: "Political/Social Service background.",
    electionHistory: { electionsContested: 3, wins: 2, losses: 1, latestVoteShare: "45%", latestMargin: "50k Votes" },
    ideologyStances: [{ issue: "Local Development", position: "Pro" }],
    votingRecord: "Votes with party line",
    recentNews: [{ headline: "Conducts rallies in home constituency.", source: "Local News", date: "March 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "78%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "112", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "1", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "88%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Local infrastructure development", "Constituency grievance redressal"]
    }},
  {
    id: 26,
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
    currentPosition: "Elected Representative",
    yearsInPolitics: 15,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [{ period: "2019-Present", role: "Elected Representative" }],
    familyBackground: "Political/Social Service background.",
    electionHistory: { electionsContested: 3, wins: 2, losses: 1, latestVoteShare: "45%", latestMargin: "50k Votes" },
    ideologyStances: [{ issue: "Local Development", position: "Pro" }],
    votingRecord: "Votes with party line",
    recentNews: [{ headline: "Conducts rallies in home constituency.", source: "Local News", date: "March 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "78%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "112", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "1", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "88%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Local infrastructure development", "Constituency grievance redressal"]
    }},
  {
    id: 27,
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
    currentPosition: "Elected Representative",
    yearsInPolitics: 15,
    statusBadge: "Incumbent",
    disqualifications: "None",
    pastControversies: [],
    careerHistory: [{ period: "2019-Present", role: "Elected Representative" }],
    familyBackground: "Political/Social Service background.",
    electionHistory: { electionsContested: 3, wins: 2, losses: 1, latestVoteShare: "45%", latestMargin: "50k Votes" },
    ideologyStances: [{ issue: "Local Development", position: "Pro" }],
    votingRecord: "Votes with party line",
    recentNews: [{ headline: "Conducts rallies in home constituency.", source: "Local News", date: "March 2024", sentiment: "Neutral" }],
    performanceMetrics: {
      attendance: { value: "78%", source: "PRS", lastUpdated: "2024" },
      questionsAsked: { value: "112", source: "PRS", lastUpdated: "2024" },
      billsIntroduced: { value: "1", source: "PRS", lastUpdated: "2024" },
      fundsUtilized: { value: "88%", source: "MPLADS", lastUpdated: "2024" },
      keyAchievements: ["Local infrastructure development", "Constituency grievance redressal"]
    }},
  {
    id: 28,
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
    yearsInPolitics: 1,
    statusBadge: "Challenger",
    disqualifications: "None",
    pastControversies: [{ description: "Income Tax raids at residence", date: "2020", status: "Cleared" }],
    careerHistory: [{ period: "2024-Present", role: "President, TVK" }, { period: "1992-Present", role: "Actor" }],
    familyBackground: "Son of film director S. A. Chandrasekhar.",
    electionHistory: { electionsContested: 0, wins: 0, losses: 0, latestVoteShare: "N/A", latestMargin: "N/A" },
    ideologyStances: [{ issue: "Anti-Corruption", position: "Pro" }, { issue: "Youth Empowerment", position: "Pro" }],
    votingRecord: "N/A",
    recentNews: [{ headline: "Launches new political party TVK.", source: "The Hindu", date: "Feb 2024", sentiment: "Positive" }],
    performanceMetrics: {
      attendance: { value: "N/A", source: "N/A", lastUpdated: "2024" },
      questionsAsked: { value: "N/A", source: "N/A", lastUpdated: "2024" },
      billsIntroduced: { value: "N/A", source: "N/A", lastUpdated: "2024" },
      fundsUtilized: { value: "N/A", source: "N/A", lastUpdated: "2024" },
      keyAchievements: ["Successfully launched TVK party", "Massive fan-base mobilization"]
    }}
];
