import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Fieldnotes",
  description = "Thoughts on technology, learning, design, and building on the web.",
}) => (
  <Helmet>
    <title>{title}</title>

    <meta
      name="description"
      content={description}
    />

    <meta property="og:title" content={title} />

    <meta
      property="og:description"
      content={description}
    />

    <meta property="og:type" content="website" />
  </Helmet>
);

export default SEO;