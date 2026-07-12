import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = ({ context }) => {
  useEffect(() => { document.title = "Not found — Fieldnotes"; }, []);
  const isPost = context === "post";

  return (
    <div className="container notfound">
      <div className="code">404</div>
      <h1>{isPost ? "That note doesn't exist" : "Page not found"}</h1>
      <p>
        {isPost
          ? "The post you're looking for isn't here — it may have been moved or the link is off."
          : "The page you're looking for doesn't exist, or has been moved."}
      </p>
      <Link to="/" className="btn-primary">Back to home</Link>
    </div>
  );
};

export default NotFound;
