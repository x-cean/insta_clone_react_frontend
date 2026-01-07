import { Link } from "react-router";
import type { Highlight } from "~/schemas/highlight.schema";

export function HighlightBubble({ highlight }: { highlight: Highlight }) {
  return (
    <Link
      to={`/profile/highlights/${highlight.id}`}
      className="flex flex-col items-center gap-2 text-center"
    >
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 hover:border-gray-500 transition-colors">
        <img
          src={highlight.cover_img_url}
          alt={highlight.title || "Highlight"}
          className="w-full h-full object-cover"
        />
      </div>
      {highlight.title && (
        <span className="text-xs text-gray-700 max-w-[80px] truncate">
          {highlight.title}
        </span>
      )}
    </Link>
  );
}

