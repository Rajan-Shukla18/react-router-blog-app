import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-[65vh] items-center justify-center px-6">
    <div className="max-w-lg text-center">
      <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.12em] text-accent">
        404
      </span>

      <h1 className="font-serif text-4xl font-semibold text-text sm:text-5xl">
        Page not found
      </h1>

      <p className="mx-auto mt-5 max-w-md leading-7 text-muted">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        ← Back to home
      </Link>
    </div>
  </div>
);

export default NotFound;