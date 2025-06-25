import React from "react";

// sections: array of React elements or components
const PageTemplate = ({ sections }) => (
  <div>
    {sections.map((Section, idx) =>
      typeof Section === "function" ? <Section key={idx} /> : Section
    )}
  </div>
);

export default PageTemplate;
