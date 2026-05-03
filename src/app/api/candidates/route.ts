import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/api-utils";
import { Candidate } from "@/types";

// Optimal Use of Resources: Cache this heavy database query and JSON parsing for 1 hour (3600 seconds)
export const revalidate = 3600;

export async function GET() {
  try {
    const candidates = await prisma.candidate.findMany({
      orderBy: { name: 'asc' }
    });
    
    // Parse JSON strings back to objects for the frontend
    const formatted: Candidate[] = candidates.map(c => ({
      ...c,
      assetBreakdown: JSON.parse(c.assetBreakdown),
      liabilityBreakdown: JSON.parse(c.liabilityBreakdown),
      caseDetails: JSON.parse(c.caseDetails),
      performance: c.performance ? JSON.parse(c.performance) : undefined,
      electionHistory: c.electionHistory ? JSON.parse(c.electionHistory) : undefined,
      scamsOrControversies: c.scamsOrControversies ? JSON.parse(c.scamsOrControversies) : undefined,
    } as any));

    return successResponse(formatted);
  } catch (error) {
    console.error("Failed to fetch candidates:", error);
    return errorResponse("Failed to fetch candidates");
  }
}
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const candidate = await prisma.candidate.create({
      data: {
        ...body,
        assetBreakdown: JSON.stringify(body.assetBreakdown || []),
        liabilityBreakdown: JSON.stringify(body.liabilityBreakdown || []),
        caseDetails: JSON.stringify(body.caseDetails || []),
        performance: body.performance ? JSON.stringify(body.performance) : null,
        electionHistory: body.electionHistory ? JSON.stringify(body.electionHistory) : null,
        scamsOrControversies: body.scamsOrControversies ? JSON.stringify(body.scamsOrControversies) : null,
      }
    });
    return successResponse(candidate);
  } catch (error) {
    console.error("Failed to create candidate:", error);
    return errorResponse("Failed to create candidate");
  }
}
