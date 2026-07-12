import { defineCollection, z } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  date: z.date(),
  readMinutes: z.number().optional(),
});

const learn = defineCollection({
  type: "content",
  schema: postSchema,
});

const buildLog = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = { learn, "build-log": buildLog };
