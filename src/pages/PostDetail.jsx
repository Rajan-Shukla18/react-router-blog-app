import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import posts from "../data/posts";
import NotFound from "./NotFound";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const renderBlock = (block, i) => {
  if (block.type === "heading") {
    return <h2 key={i} className="post-subheading">{block.text}</h2>;
  }
  if (block.type === "list") {
    return (
      <ul key={i} className="post-list-block">
        {block.items.map((item, j) => <li key={j}>{item}</li>)}
      </ul>
    );
  }
  return <p key={i}>{block.text}</p>;
};

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  useEffect(() => {
    if (post) document.title = `${post.title} — Fieldnotes`;
  }, [post]);

  if (!post) return <NotFound context="post" />;

  return (
    <div className="container post-article-content">
      <Link to="/" className="back-link">Back to all notes</Link>
      <span className="post-card-category">{post.category}</span>
      <h1 className="post-article-title">{post.title}</h1>
      <div className="author-row post-article-author">
        <img src={post.authorAvatar} alt={post.author} className="author-avatar" />
        <div className="author-info">
          <span className="author-name">{post.author}</span>
          <span className="author-date">{formatDate(post.date)} · {post.readTime}</span>
        </div>
      </div>

      {post.image && (
        <div className="post-hero-image">
          <img src={post.image} alt={post.title} />
        </div>
      )}

      <div className="post-body">
        {post.body.map(renderBlock)}
      </div>

      <div className="post-footer">
        <Link to="/" className="back-link">Back to all notes</Link>
      </div>
    </div>
  );
};

export default PostDetail;
