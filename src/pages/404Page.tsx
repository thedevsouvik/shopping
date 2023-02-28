import { Link } from "react-router-dom";

export default function NotFound404Page() {
  return (
    <main className="page">
      <h1 className="flex h-screen w-full flex-col items-center justify-center text-center text-5xl md:text-7xl">
        <span className="text-7xl">404</span>
        <span className="text-5xl">Page not found</span>
        <p className="my-3 text-2xl">
          Go to{" "}
          <Link to="/" className="font-extrabold">
            Homepage
          </Link>
        </p>
      </h1>
    </main>
  );
}
