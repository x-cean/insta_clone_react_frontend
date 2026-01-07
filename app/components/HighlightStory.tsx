import { Link } from "react-router";
import type { Highlight } from "~/schemas/highlight.schema";

export function HighlightStory({ highlight }: { highlight: Highlight }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-2xl h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl">
        <Link
          to="/profile"
          className="absolute top-4 right-4 text-gray-700 text-3xl font-bold hover:text-gray-900 z-10 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center"
        >
          ×
        </Link>

        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
              <img
                src={highlight.cover_img_url}
                alt={highlight.title || "Highlight"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm">
                {highlight.title || "Highlight"}
              </span>
              <span className="text-gray-500 text-xs">
                {new Date(highlight.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center bg-gray-50 h-[calc(90vh-80px)]">
          <img
            src={highlight.cover_img_url}
            alt={highlight.title || "Highlight story"}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

