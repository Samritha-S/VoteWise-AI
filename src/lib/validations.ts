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
export const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  pincode: z.string().optional().nullable(),
  age: z.union([z.number(), z.string()]).transform(val => (val ? parseInt(val.toString()) : null)).optional().nullable(),
  voterStatus: z.string().optional().nullable(),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});
