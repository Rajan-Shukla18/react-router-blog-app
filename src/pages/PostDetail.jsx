import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import posts from "../data/posts";
import NotFound from "./NotFound";
import { formatDate } from "../utils/date";

const renderBlock = (block, i) => {
  if (block.type === "heading") {
    return (
      <h2
        key={i}
        className="mt-10 mb-4 font-serif text-3xl font-medium text-text"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "list") {
    return (
      <ul
        key={i}
        className="mb-6 list-disc space-y-2 pl-6 text-[1.0625rem] leading-8 text-text"
      >
        {block.items.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <p
      key={i}
      className="mb-6 text-[1.0625rem] leading-8 text-text"
    >
      {block.text}
    </p>
  );
};

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — Fieldnotes`;
    }
  }, [post]);

  if (!post) return <NotFound context="post" />;

  return (
    <div className="mx-auto max-w-[680px] px-6 py-10">

      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted no-underline transition-colors hover:text-accent"
      >
        ← Back to all notes
      </Link>

      <span className="mt-6 block text-xs font-bold uppercase tracking-[0.06em] text-blue-600">
        {post.category}
      </span>

      <h1 className="mt-3 mb-6 font-serif text-3xl font-semibold leading-tight text-text md:text-4xl">
        {post.title}
      </h1>

      <div className="mb-8 flex items-center gap-3 border-b border-border pb-6">
        <img
          src={post.authorAvatar}
          alt={post.author}
          className="h-10 w-10 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <span className="text-sm font-medium text-text">
            {post.author}
          </span>

          <span className="text-xs text-muted">
            {formatDate(post.date, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            · {post.readTime}
          </span>
        </div>
      </div>

      {post.image && (
        <div className="mb-10 overflow-hidden rounded-xl bg-surface">
          <img
            src={post.image}
            alt={post.title}
            className="aspect-video w-full object-cover"
          />
        </div>
      )}

      <div className="space-y-6">
        {post.body.map(renderBlock)}
      </div>

      <div className="mt-14 border-t border-border pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted no-underline transition-colors hover:text-accent"
        >
          ← Back to all notes
        </Link>
      </div>

    </div>
  );
};

export default PostDetail;