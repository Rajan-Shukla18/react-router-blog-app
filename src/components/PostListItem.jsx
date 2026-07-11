import { Link } from "react-router-dom";

const PostListItem = ({ post }) => {
  if (!post) return null;
  return (
    <div className="post-list-item">
      <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
      <p>{post.summary}</p>
    </div>
  );
};

export default PostListItem;
