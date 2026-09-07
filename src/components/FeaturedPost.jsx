import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatDate } from "../utils/date";

const FeaturedPost = ({ post }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.60, ease: "easeOut" }}
    whileHover={{ y: -2 }}
  >
    <Link
      to={`/post/${post.id}`}
      className="mb-8 flex flex-col gap-8 border-b border-border pb-12 text-text no-underline md:flex-row"
    >
      <div className="overflow-hidden rounded-2xl md:basis-[45%]">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="aspect-[9/6] h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <span className="text-xs font-bold uppercase tracking-[0.06em] text-blue-600">
          {post.category}
        </span>

        <h2 className="my-2 font-serif text-xl font-semibold leading-tight transition-colors duration-200 hover:text-accent">
          {post.title}
        </h2>

        <p className="mb-4 text-base text-muted">
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
  </motion.div>
);

export default FeaturedPost;