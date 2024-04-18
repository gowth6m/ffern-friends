import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_USERNAME: z.string().default("defaultUsername"),
  NEXT_PUBLIC_PASSWORD: z.string().default("defaultPassword"),
});

const validatedEnv = envSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

export default validatedEnv;
