import React, { useState, useEffect } from "react";
import { getPost, getSinglePost } from "../../../services/MoviesService";
import RenderPosterCard from "../../renderPosterCard/RenderPosterCard";
import Genres from "../../genres/Genres";
import "./homePage.scss";
import Header from "../../header/Header";
import SidebarLeft from "../../sidebarLeft/SidebarLeft";
import Footer from "../../footer/Footer";
import NotFoundModal from "../../modals/notFoundMovieModal/NotFoundModal";

function HomePageMovies() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState(""); //  поиск запрос
  // const [searchResults, setSearchResults] = useState([]); //результат поиска
  const [showModal, setShowModal] = useState(false); //  модалка not movie

  useEffect(() => {
    getPost().then((data) => {
      setPost(data?.Search);
    });
  }, []);

  const handleSearch = () => {
    getPost(search).then((data) => {
      if (data?.Search && data.Search.length > 0) {
        setPost(data.Search);
        console.log(data.Search);
      } else {
        setShowModal(true); 
      }
    });
  };

  const handleCloseModal = () => { 
    setShowModal(false);
  };

  const handleClickPost = (imdbID) => {
    console.log(imdbID);
    getSinglePost(imdbID).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="container">
      <Header 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={handleSearch}
      />
      <div className="app-main main">
        <div className="app-left left">
          <SidebarLeft />
        </div>
        <div className="app-right right">
          <div className="all-movies_wrapper">
            <Genres />
            <div className="movies-list" id="movies">
            {showModal && <NotFoundModal show={showModal} handleClose={handleCloseModal} />}
              <ul className="movies-grid">
                {post &&
                  post.map((data) => (
                    <RenderPosterCard
                      key={data.imdbID}
                      imdbID={data.imdbID}
                      Poster={data.Poster}
                      Title={data.Title}
                      Rating={data.Rating}
                      Year={data.Year}
                      onClick={() => handleClickPost(data.imdbID)}
                      Type={data.Type}
                    />
                  ))}
              </ul>
            </div>
            <button className="button button-load">
              <div className="inner">load more</div>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePageMovies;