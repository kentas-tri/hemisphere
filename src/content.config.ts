import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.string().default('note'),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    draft: z.boolean().default(false)
  })
});

export const collections = { notes };
