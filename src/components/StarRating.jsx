import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SeoStarRating = () => {
  const [schemaMarkup, setSchemaMarkup] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const pageKey = location.pathname.replace(/^\/+/, ""); // remove leading slash

    fetch("/ratings.json")
      .then((res) => res.json())
      .then((data) => {
        if (data[pageKey]) {
          const { rating, reviews } = data[pageKey];

          // Minimal schema for star rating only
          const schemaData = {
            "@context": "https://schema.org",
            "@type": "Product", // Avoid Course type to remove required field errors
            "name": pageKey.replace(/-/g, " "), // Pretty name for product/course
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": rating.toString(),
              "reviewCount": reviews
            }
          };

          setSchemaMarkup(JSON.stringify(schemaData));
        } else {
          setSchemaMarkup(null);
        }
      })
      .catch((err) => {
        console.error("Error loading ratings:", err);
        setSchemaMarkup(null);
      });
  }, [location.pathname]);

  if (!schemaMarkup) return null;

  return (
    <Helmet>
      <script type="application/ld+json">{schemaMarkup}</script>
    </Helmet>
  );
};

export default SeoStarRating;
