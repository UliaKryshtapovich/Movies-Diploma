import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchProvider } from "../searchContext/SearchContext";
import {
  PostersList,
  DetailPage,
  FavoritesPage,
  SettingsPage,
  Page404,
  TrendsPage,
} from "../pages";
import "../../style/style.scss";
import "../app/app.scss";
import SidebarLeft from "../sidebarLeft/SidebarLeft";
import "../sidebarLeft/sidebarLeft.scss";
import Header from "../header/Header";
import Footer from "../../components/footer/Footer";
import { ThemeProvider } from '../pages/settingsPage/ThemeContext';

function App() {
  return (
    <Router>
         <ThemeProvider> 
      <SearchProvider>
        <div className="app container">
          <Header />
          <div className="app-main main">
            <div className="app-left left">
              <SidebarLeft />
            </div>
            <div className="app-right right">
              {/* <Genres /> */}
              <Routes>
                <Route path="/postersList" element={<PostersList />} />
                <Route path="/detail/:imdbID" element={<DetailPage />} />
                <Route path="/trendsPage" element={<TrendsPage />} />
                <Route path="/favoritesPage" element={<FavoritesPage />} />
                <Route path="/settingsPage" element={<SettingsPage />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </SearchProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
