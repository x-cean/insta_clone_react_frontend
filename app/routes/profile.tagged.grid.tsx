import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import { taggedPostsSchema, type TaggedPost } from "~/schemas/tagged.schema";
import { TaggedPostCard } from "~/components/TaggedPostCard";

// added error handling for troubleshooting
export async function loader() {
  try {
    const response = await api.get("/tagged/grid");
    return taggedPostsSchema.parse(response.data);
  } catch (error) {
    console.error("Failed to load tagged posts:", error);
    throw new Response("Could not load tagged posts.", { status: 500 });
  }
}

// Tagged posts grid - using TaggedPostCard component
export default function TaggedPostsGrid() {
  const tagged = useLoaderData() as TaggedPost[];

  console.log('Tagged posts loaded:', tagged);

  if (!Array.isArray(tagged)) {
    return <div>Error: Expected array of tagged posts</div>;
  }

  if (tagged.length === 0) {
    return <div className="text-center p-8">No tagged posts yet</div>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {tagged.map((item) => (
        <TaggedPostCard
          key={item.id}
          taggedPost={item}
        />
      ))}
    </div>
  );
}

