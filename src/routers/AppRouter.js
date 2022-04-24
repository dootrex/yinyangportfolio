import React, { useLocation } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageProjects from "../pages/PageProjects";
import PageAbout from "../pages/PageAbout";
import PageContact from "../pages/PageContact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageStocky from "../pages/PageStocky";
import PageEmaily from "../pages/PageEmaily";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="projects" element={<PageProjects />} />
            <Route path="stocky" element={<PageStocky />} />
            <Route path="emaily" element={<PageEmaily />} />
            <Route path="about" element={<PageAbout />} />
            <Route path="contact" element={<PageContact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
