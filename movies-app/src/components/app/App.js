import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import SignIn from "../signIn/SignIn";
import Success from "../success/Success";
import { ThemeProvider } from "../pages/settingsPage/ThemeContext";

function App() {
  const [favorites, setFavorites] = useState([]); // список избранных фильмов
  const [isSignedIn, setIsSignedIn] = useState(false);

  const addToFavorites = (movie) => { // добавление фильма в избранное
    setFavorites([...favorites, movie]);
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

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
                <Routes>
                <Route
                    path="/"
                    element={
                      isSignedIn ? <Navigate to="/success" /> : <SignIn onSignIn={handleSignIn} />
                    }
                  />
                  <Route path="/success" element={<Success />} />
                  {/* <Route path="/" element={<SignIn />} />
                  <Route path="/success" element={<Success />} /> */}
                  <Route path="/postersList" element={<PostersList />} />
                  <Route
                    path="/detail/:imdbID"
                    element={<DetailPage addToFavorites={addToFavorites} />}
                  />
                  <Route path="/trendsPage" element={<TrendsPage />} />
                  <Route
                    path="/favoritesPage"
                    element={<FavoritesPage favorites={favorites} />}
                  />
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

// function App() {
//   const [favorites, setFavorites] = useState([]); //списка избранных фильмов
//   const addToFavorites = (movie) => {   //добавлениe фильма в избранное
//     setFavorites([...favorites, movie]);
//   };

//   return (
//     <Router>
//       <ThemeProvider>
//         <SearchProvider>
//           <div className="app container">
//             <Header />
//             <div className="app-main main">
//               <div className="app-left left">
//                 <SidebarLeft />
//               </div>
//               <div className="app-right right">
//                 {/* <Genres /> */}
//                 <Routes>
//                   <Route path="/postersList" element={<PostersList />} />
//                   <Route
//                     path="/detail/:imdbID"
//                     element={<DetailPage addToFavorites={addToFavorites} />}
//                   />
//                   <Route path="/trendsPage" element={<TrendsPage />} />
//                   <Route
//                     path="/favoritesPage"
//                     element={<FavoritesPage favorites={favorites} />}
//                   />
//                   <Route path="/settingsPage" element={<SettingsPage />} />
//                   <Route path="*" element={<Page404 />} />
//                 </Routes>
//               </div>
//             </div>
//             <Footer />
//           </div>
//         </SearchProvider>
//       </ThemeProvider>
//     </Router>
//   );
// }

// export default App;
