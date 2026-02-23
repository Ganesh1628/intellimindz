import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import ratingsData from "../data/ratings.json";

const normalizePathKey = (path) =>
  decodeURIComponent(path)
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase();

const SeoStarRating = ({ name, url }) => {
  const location = useLocation();

  const ratingsByKey = useMemo(() => {
    const map = new Map();
    Object.entries(ratingsData).forEach(([key, value]) => {
      map.set(normalizePathKey(key), value);
    });
    return map;
  }, []);

  const pageKey = normalizePathKey(location.pathname);
  const ratingEntry = ratingsByKey.get(pageKey);

  if (!ratingEntry) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[SeoStarRating] No rating entry for path "${pageKey}". Add it to src/data/ratings.json.`
      );
    }
    return null;
  }

  const { rating, reviews } = ratingEntry;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name || pageKey.replace(/-/g, " "),
    url: url || undefined,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Number(rating),
      bestRating: 5,
      worstRating: 1,
      reviewCount: Number(reviews),
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SeoStarRating;
