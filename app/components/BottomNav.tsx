import { Link } from "react-router";

export function BottomNav() {
  return (
    <footer className='fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t'>
      <div className='grid h-full max-w-lg grid-cols-3 mx-auto font-medium'>
        <Link
          to='/profile/posts/grid'
          className='inline-flex flex-col items-center justify-center px-5'
        >
          Home 🏡
        </Link>
        <Link
          to='/create'
          className='inline-flex flex-col items-center justify-center px-5'
        >
          ➕
        </Link>
        <Link
          to='/profile/highlights'
          className='inline-flex flex-col items-center justify-center px-5'
        >
          Highlights 🌟
        </Link>
      </div>
    </footer>
  );
}