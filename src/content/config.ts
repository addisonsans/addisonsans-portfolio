import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number().int(),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    affiliation: z.string().optional(),
    role: z.string().optional(),
    years: z.string().optional(),
    collaborators: z.array(z.string()).default([]),
    publications: z
      .array(
        z.object({
          citation: z.string(),
          url: z.string().url().optional(),
        }),
      )
      .default([]),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, research, writing };
