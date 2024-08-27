import { z } from "zod";

export const inputDataSchema = z.object({
  emoji: z.string().emoji(),
  text: z.string(),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
});
