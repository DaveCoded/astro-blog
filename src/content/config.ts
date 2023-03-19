import { z, defineCollection } from 'astro:content';

const tags = z.enum([
    'javascript',
    'databases',
    'git',
    'react',
    'MDX',
    'ASTs',
    'typescript',
    'regex',
    'testing',
    'styled-components',
    'docs'
]);

const postsCollection = defineCollection({
    schema: z.object({
        date: z.date(),
        title: z.string(),
        category: z.string().optional(),
        tags: z.array(tags).optional(),
        image: z.string().optional()
    })
});

// This key should match your collection directory name in "src/content"
export const collections = {
    posts: postsCollection
};
