import { defineCollection, z } from 'astro:content';

const newsletter = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		// description: z.string(),
		// Transform string to Date object
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		author: z.string(),
		image: z.string(),
		squareImage: z.string().optional(),
		description: z.string().optional(),
	}),
});

const extras = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		// description: z.string(),
		// Transform string to Date object
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		author: z.string(),
		image: z.string().optional(),
	}),
});

export const collections = { newsletter, extras };
