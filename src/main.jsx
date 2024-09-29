import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./data/base-state.js";
import "./main.css";

import Root from "./Root.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
