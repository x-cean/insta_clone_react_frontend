import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import { HighlightBubble } from "~/components/HighlightBubble";
import { highlightsSchema, type Highlight } from "~/schemas/highlight.schema";

export async function loader() {
  try {
    const response = await api.get("/highlights");
    return highlightsSchema.parse(response.data);
  } catch (error) {
    console.error("Failed to load highlights:", error);
    throw new Response("Could not load highlights.", { status: 500 });
  }
}

export default function HighlightsView() {
  const highlights = useLoaderData() as Highlight[];

  if (highlights.length === 0) {
    return <div className="text-center p-8">No highlights yet</div>;
  }

  return (
    <div className="w-full">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Highlights</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {highlights.map((highlight) => (
            <HighlightBubble key={highlight.id} highlight={highlight} />
          ))}
        </div>
      </div>
    </div>
  );
}

