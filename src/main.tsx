import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./components/section/ProjectDetail";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="projects">
          <Route index element={<ProjectsPage />} />
          <Route path=":id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
