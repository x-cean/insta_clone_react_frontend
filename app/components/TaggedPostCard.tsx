import type { TaggedPost } from "~/schemas/tagged.schema";

export function TaggedPostCard({ taggedPost }: { taggedPost: TaggedPost }) {
  return (
    <div className='w-full max-w-lg mx-auto rounded-lg overflow-hidden border bg-white mb-6'>
      <div className='p-4'>
        <p className='font-bold'>{taggedPost.tagged_by_user}</p>
        <p className='text-sm text-gray-500'>tagged you</p>
      </div>
      <img
        src={taggedPost.img_url}
        alt={taggedPost.caption || "Tagged post"}
        className='w-full h-auto aspect-square object-cover'
      />
      <div className='p-4'>
        <p>
          <span className='font-bold mr-2'>{taggedPost.tagged_by_user}</span>
          {taggedPost.caption}
        </p>
      </div>
    </div>
  );
}

