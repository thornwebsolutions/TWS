import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readTime: z.string(),
    author: z.string().default('Chris Thorn'),
    excerpt: z.string(),
    faqs: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
