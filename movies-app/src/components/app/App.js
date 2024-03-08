import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../../style/style.scss";
import "../app/app.scss";
import HomePageMovies from "../pages/homePageMovies/HomePageMovies";
import DetailPage from "../pages/detailPage/DetailPage";
import TrendsPage from "../pages/trendsPage/TrendsPage";
import ErrorMessage from "../pages/errorMessagePage/ErrorMessage";
import FavoritesPage from "../pages/favoritesPage/FavoritesPage";
import SettingsPage from "../pages/settingsPage/SettingsPage";

function App() {
  return (
    <Router>
      <div className="app">
        <HomePageMovies>
          <Routes>
            <Route path="/homePage" element={<HomePageMovies />} />
            <Route path="/trends" element={<TrendsPage />} />
            <Route path="/favoritesPage" element={<FavoritesPage />} />
            <Route path="/settingsPage" element={<SettingsPage />} />
            {/* <Route path="/detailPage/:detailId" element={<DetailPage />} /> */}
            <Route path="/homePage/:detailId" element={<DetailPage />} />
            <Route path="/*" element={<ErrorMessage />} />
          </Routes>
        </HomePageMovies>
      </div>
    </Router>
  );
}

export default App;
