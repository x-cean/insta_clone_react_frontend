import type { Post } from "~/schemas/post.schema";

export function PostCard({ post }: { post: Post }) {
  // If img_url is a relative path (starts with /), prepend backend URL
  // If it's already a full URL (starts with http), use it as-is
  const imageUrl = post.img_url.startsWith('http')
    ? post.img_url
    : `http://localhost:3000${post.img_url}`;

  return (
    <div className='w-full max-w-lg mx-auto rounded-lg overflow-hidden border bg-white mb-6'>
      <div className='p-4'>
        <p className='font-bold'>test_user</p>
      </div>
      <img
        src={imageUrl}
        alt={post.caption || "Instagram post"}
        className='w-full h-auto aspect-square object-cover'
      />
      <div className='p-4'>
        <p>
          <span className='font-bold mr-2'>test_user</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
}