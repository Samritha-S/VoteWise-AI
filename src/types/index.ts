export type VoterStatus = "Registered" | "Not Registered" | "In Progress";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  address?: string | null;
  state?: string | null;
  pincode?: string | null;
  age?: number | null;
  voterStatus?: VoterStatus | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Candidate {
  id: string;
  name: string;
  party: string;
  constituency: string;
  state: string;
  photo: string;
  age: number;
  education: string;
  profession: string;
  totalAssets: string;
  totalLiabilities: string;
  assetBreakdown: any;
  liabilityBreakdown: any;
  criminalCases: number;
  seriousCriminalCases: number;
  caseDetails: any;
  performance?: any;
  electionHistory?: any;
  scamsOrControversies?: any;
  sourceUrl: string;
  confidence: string;
}

export interface Myth {
  id: string;
  claim: string;
  fact?: string | null;
  source?: string | null;
  link?: string | null;
  status: "PENDING" | "PUBLISHED";
  views: number;
  createdAt: Date;
}
