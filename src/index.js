import React from "react";
import ReactDOM from "react-dom/client"; // Change from "react-dom" to "react-dom/client"

import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HelmetProvider } from 'react-helmet-async'; // <-- ADD THIS LINE

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* ADD THE WRAPPER AROUND APP */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>

);
