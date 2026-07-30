import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = ({ context }) => {
  useEffect(() => {
    document.title = "Not found — Fieldnotes";
  }, []);

  const isPost = context === "post";

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
      <div className="mb-4 font-serif text-7xl font-semibold text-accent">
        404
      </div>

      <h1 className="mb-4 font-serif text-4xl font-semibold text-text">
        {isPost ? "That note doesn't exist" : "Page not found"}
      </h1>

      <p className="mb-8 max-w-xl text-base leading-7 text-muted">
        {isPost
          ? "The post you're looking for isn't here — it may have been moved or the link is incorrect."
          : "The page you're looking for doesn't exist or may have been moved."}
      </p>

      <Link
        to="/"
        className="rounded-md bg-text px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-black"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;