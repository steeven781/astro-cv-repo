import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    org: z.string(),
    url: z.string().url().or(z.literal('#')),
    tags: z.array(z.string()),
    description_es: z.string().optional(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    url: z.string().url().or(z.literal('#')),
    tags: z.array(z.string()),
    description_es: z.string().optional(),
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
    description_es: z.string().optional(),
  }),
});

const customers = defineCollection({
    schema: z.object({
        title: z.string(),
        title_es: z.string().optional(),
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

const about = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    name: z.string(),
    designation: z.string(),
    designation_es: z.string().optional(),
    location: z.string(),
    pronouns: z.string().optional(),
    website: z.string().optional(),
    bio_es: z.string().optional(),
  }),
});

export const collections = {
  work,
  projects,
  studies,
  certificates,
  customers,
  contact,
  about,
};
