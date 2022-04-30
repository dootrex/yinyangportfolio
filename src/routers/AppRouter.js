import React, { useLocation } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
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
    <HashRouter basename="yinyangportfolio">
      <div className="wrapper">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact>
              <PageHome sort="popular" />
            </Route>
            <Route path="/about">
              <PageAbout />
            </Route>
            <Route path="/contact">
              <PageContact />
            </Route>
            <Route path="/projects">
              <PageProjects />
            </Route>
            <Route path="/stocky">
              <PageStocky />
            </Route>
            <Route path="/emaily">
              <PageEmaily />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
