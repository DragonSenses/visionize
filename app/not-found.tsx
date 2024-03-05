import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Not Found - 404!</h1>
      <p className="text-gray-600">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link className="mt-4 text-blue-500 hover:underline" href="/">
        Return Home
      </Link>
    </div>
  );
}