import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({
  title = "Intellimindz - Training Institute",
  description = "Intellimindz offers professional training courses to boost your career.",
  keywords = "training, courses, certification, intellimindz",
  ogTitle,
  ogDescription,
  ogUrl,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    {/* Open Graph tags for social sharing */}
    <meta property="og:title" content={ogTitle || title} />
    <meta property="og:description" content={ogDescription || description} />
    <meta property="og:type" content="website" />
    {ogUrl && <meta property="og:url" content={ogUrl} />}
  </Helmet>
);

export default Meta;