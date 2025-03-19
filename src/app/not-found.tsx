// pages/404.js
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Zaid Khan",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-[#00412e] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md text-center">
        <div>
          <h1 className="text-[#e8eae5] text-9xl font-bold mb-4">404</h1>

          <div>
            <p className="text-[#e8eae5] text-xl mb-8">Oops! Page not found.</p>

            <p className="text-[#e8eae5] text-base mb-8">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>

            <Link href="/">
              <span className="inline-block bg-[#96bf8a] text-[#00412e] font-medium py-2 px-6 rounded-lg cursor-pointer hover:scale-105 transition-transform">
                Back to Homepage
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-16 opacity-60">
          <svg
            className="w-24 h-24 mx-auto text-[#96bf8a]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
