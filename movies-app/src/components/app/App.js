import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../../style/style.scss";
import "../app/app.scss";
import Header from "../header/Header";
import SidebarLeft from "../sidebarLeft/SidebarLeft";
import Footer from "../footer/Footer";
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
        <div className="container">
          <Header />
          <div className="app-main">
            <div className="app-left">
              <SidebarLeft />
            </div>
            <div className="app-right">
              {/* <HomePageMovies/> */}
              <Routes>
                <Route path="/homePage" element={<HomePageMovies />} />
                <Route path="/detailPage" element={<DetailPage />} />
                <Route path="/trends" element={<TrendsPage />} />
                <Route path="/favoritesPage" element={<FavoritesPage />} />
                <Route path="/favoritesPage" element={<FavoritesPage />} />
                <Route path="/settingsPage" element={<SettingsPage />} />
                <Route path="/errorMessage" element={<ErrorMessage />} />
              </Routes>
              {/* </HomePageMovies> */}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
