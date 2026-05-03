import { z } from "zod";

export const feedbackSchema = z.object({
  candidateId: z.string().min(1, "Candidate ID is required"),
  isAccurate: z.string().min(1, "Accuracy status is required"),
  inaccurateFields: z.string().optional(),
  comments: z.string().max(1000, "Comments cannot exceed 1000 characters").optional()
});

export const chatSchema = z.object({
  message: z.string().min(1).max(2000),
  history: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string()
  })),
  context: z.object({
    age: z.number().nullable().optional(),
    state: z.string().optional(),
    voterStatus: z.string().optional(),
    language: z.string().optional()
  })
});
