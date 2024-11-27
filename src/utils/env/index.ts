import { z } from "zod";

const envSchema = z.object({
  DATABASE_FILENAME: z.string(),
});

const env = envSchema.parse(process.env);

export { env };
