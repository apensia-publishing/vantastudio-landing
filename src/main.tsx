import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactLenis } from "lenis/react";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis>
      <App />
    </ReactLenis>
  </StrictMode>
);
