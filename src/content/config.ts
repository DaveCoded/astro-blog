import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
    schema: z.object({
        date: z.date(),
        title: z.string(),
        category: z.string().optional(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional()
    })
});

// This key should match your collection directory name in "src/content"
export const collections = {
    posts: postsCollection
};
