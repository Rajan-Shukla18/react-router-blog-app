import { Link } from "react-router-dom";
import { formatDate } from "../utils/date";

const FeaturedPost = ({ post }) => (
  <Link to={`/post/${post.id}`} className="featured-post">
    <div className="featured-post-image">
      <img src={post.image} alt={post.title} loading="lazy" />
    </div>
    <div className="featured-post-body">
      <span className="post-card-category">{post.category}</span>
      <h2 className="featured-post-title">{post.title}</h2>
      <p className="featured-post-excerpt">{post.excerpt}</p>
      <div className="author-row">
        <img src={post.authorAvatar} alt={post.author} className="author-avatar" />
        <div className="author-info">
          <span className="author-name">{post.author}</span>
          <span className="author-date">{formatDate(post.date)}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default FeaturedPost;