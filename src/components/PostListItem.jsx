import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatDate } from "../utils/date";

const PostListItem = ({ post }) => (
  <motion.li
    className="group"
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    whileHover={{ y: -3 }}
  >
    <Link
      to={`/post/${post.id}`}
      className="flex h-full flex-col text-text no-underline"
    >
      <div className="mb-4 overflow-hidden rounded-2xl">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="aspect-[9/6] h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <span className="text-xs font-bold uppercase tracking-[0.06em] text-blue-600">
          {post.category}
        </span>

        <h2 className="mt-2 mb-2 font-serif text-xl font-medium leading-snug transition-colors duration-300 group-hover:text-accent">
          {post.title}
        </h2>

        <p className="mb-4 text-sm leading-6 text-muted">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-3 pt-3">
          <img
            src={post.authorAvatar}
            alt={post.author}
            loading="lazy"
            className="h-8 w-8 rounded-full object-cover"
          />

          <div className="flex flex-col leading-5">
            <span className="text-sm font-medium text-text">
              {post.author}
            </span>

            <span className="text-xs text-muted">
              {formatDate(post.date)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  </motion.li>
);

export default PostListItem;