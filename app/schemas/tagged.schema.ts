import { z } from "zod";

// First, we declare a zod schema
const taggedPostSchema = z.object({
  id: z.number(),
  img_url: z.string().url(),
  caption: z.string().nullable(),
  tagged_by_user: z.string(),
  created_at: z.string(),
});

const taggedPostsSchema = z.array(taggedPostSchema);

// Then, we infer the TypeScript type from the Zod schema.
type TaggedPost = z.infer<typeof taggedPostSchema>;

export { taggedPostSchema, taggedPostsSchema };
export type { TaggedPost };