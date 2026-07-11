import { Link } from "react-router-dom";
import { formatDate } from "../utils/date";

const PostListItem = ({ post }) => (
  <li className="post-card">
    <Link to={`/post/${post.id}`}>
      <div className="post-card-image">
        <img src={post.image} alt={post.title} loading="lazy" />
      </div>
      <div className="post-card-body">
        <span className="post-card-category">{post.category}</span>
        <h2 className="post-card-title">{post.title}</h2>
        <p className="post-card-excerpt">{post.excerpt}</p>
        <div className="author-row">
          <img src={post.authorAvatar} alt={post.author} className="author-avatar" />
          <div className="author-info">
            <span className="author-name">{post.author}</span>
            <span className="author-date">{formatDate(post.date)}</span>
          </div>
        </div>
      </div>
    </Link>
  </li>
);

export default PostListItem;