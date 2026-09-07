import { useEffect } from "react";
import EmptyState from "../components/EmptyState";
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
    <div className="mx-auto max-w-nav px-6 py-10">
      <header className="mb-12">
        <h1 className="mb-5 max-w-3xl font-serif text-4xl font-medium leading-tight text-text">
          Tools, and the decisions behind them.
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-muted">
          Writing on React, AI-assisted development, and the design choices that separate a working interface from a good one.
        </p>
        <ul className="flex flex-wrap gap-3">
          {topics.map((topic) => (
            <li key={topic} className="rounded-md bg-[rgba(31,94,61,0.08)] px-3.5 py-1.5 font-serif text-[0.94rem] font-semibold text-accent">
              {topic}
            </li>
          ))}
          <li className="px-2 py-1.5 font-serif text-[0.94rem] italic text-muted">
            + more
          </li>
        </ul>
      </header>

      {posts.length === 0 ? (
      <EmptyState
        title="No posts available"
        message="There are no published notes at the moment."
      />
    ) : (
      <>
        {featuredPost && <FeaturedPost post={featuredPost} />}

        {remainingPosts.length > 0 && (
          <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <PostListItem key={post.id} post={post} />
            ))}
          </ul>
        )}
      </>
    )}
    </div>
  );
};

export default Home;