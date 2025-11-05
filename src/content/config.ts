import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    org: z.string(),
    url: z.string().url().or(z.literal('#')),
    tags: z.array(z.string()),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    url: z.string().url().or(z.literal('#')),
    tags: z.array(z.string()),
  }),
});

const studies = defineCollection({
  schema: z.object({
    title: z.string(),
    location: z.string(),
    url: z.string().url(),
    institute: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
  }),
});

const certificates = defineCollection({
  schema: z.object({
    title: z.string(),
    org: z.string(),
    url: z.string().url(),
    date: z.string(),
    tags: z.array(z.string()),
  }),
});

const customers = defineCollection({
    schema: z.object({
        title: z.string(),
        logos: z.array(z.string()),
    }),
});

const contact = defineCollection({
    schema: z.object({
        title: z.string(),
        icon: z.string(),
        url: z.string(),
    }),
});

export const collections = {
  work,
  projects,
  studies,
  certificates,
  customers,
  contact,
};
