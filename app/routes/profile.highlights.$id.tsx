import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { api } from "~/services/api";
// Assume you have a highlight schema and a HighlightStory component
import { highlightSchema, type Highlight } from "~/schemas/highlight.schema";
import { HighlightStory } from "~/components/HighlightStory";

export async function loader({ params }: LoaderFunctionArgs) {
  // The `params` object contains the dynamic parts of the URL.
  // The key (`id`) matches the filename (`$id.tsx`).
  console.log("Loader running for ID:", params.id); // Debug log
  const highlightId = params.id;

  try {
    const response = await api.get(`/highlights/${highlightId}`);
    console.log("Backend response:", response.data); // Debug log
    return highlightSchema.parse(response.data);
  } catch (error) {
    console.error(error);
    throw new Response("Highlight not found", { status: 404 });
  }
}

export default function HighlightDetail() {
  const highlight = useLoaderData<typeof loader>() as Highlight;

  return <HighlightStory highlight={highlight} />;
}
