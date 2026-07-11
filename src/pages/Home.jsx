import { useEffect } from "react";
import FeaturedPost from "../components/FeaturedPost";
import PostListItem from "../components/PostListItem";
import posts from "../data/posts";

const topics = ["React", "AI Tools", "Design", "Tooling"];
const pageTitle = "Fieldnotes — writing on frontend, tools, and design";

const Home = () => {
  useEffect(() => {
    document.title = pageTitle;
  }, []);

  const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [featuredPost, ...remainingPosts] = sortedPosts;

  return (
    <div className="container container-wide">
      <header className="page-header">
        <h1>Tools, and the decisions behind them.</h1>
        <p>Writing on React, AI-assisted development, and the design choices that separate a working interface from a good one.</p>
        <ul className="topic-tags">
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
          <li className="topic-tag-more">+ more</li>
        </ul>
      </header>

      {featuredPost && <FeaturedPost post={featuredPost} />}

      {remainingPosts.length > 0 && (
        <ul className="post-grid">
          {remainingPosts.map((post) => (
            <PostListItem key={post.id} post={post} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;