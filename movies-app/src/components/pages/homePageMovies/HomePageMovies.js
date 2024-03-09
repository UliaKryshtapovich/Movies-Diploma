import React, { useState, useEffect } from "react";
import { getPost, getSinglePost } from "../../../services/MoviesService";
import RenderPosterCard from "../../renderPosterCard/RenderPosterCard";
import Genres from "../../genres/Genres";
import "./homePage.scss";
import Header from "../../header/Header";
import SidebarLeft from "../../sidebarLeft/SidebarLeft";
import Footer from "../../footer/Footer";
import NotFoundModal from "../../modals/notFoundMovieModal/NotFoundModal";
import DetailPage from "../detailPage/DetailPage";

function HomePageMovies() {
  const [post, setPost] = useState([]); // сам постер
  const [search, setSearch] = useState(""); // поиск запрос
  const [showModal, setShowModal] = useState(false); //  отображения not found
  const [selectedImdbID, setSelectedImdbID] = useState(null); // id - передаем в detailPage
  const [showDetailPage, setShowDetailPage] = useState(false); // открыть detailPage
  const [movieData, setMovieData] = useState(null); //данные фильма из запроса getSinglePost

  useEffect(() => { // запрос к API для получения списка фильмов
    if (search === "") {
      getPost("new").then((data) => {
        setPost(data?.Search);
      });
    }
  }, [search]);

  const handleSearch = () => {
    getPost(search).then((data) => {
      if (data?.Search && data.Search.length > 0) {
        setPost(data.Search);
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
    setSelectedImdbID(imdbID);
    setShowDetailPage(true);
  };

  // SINGLEPOST - ID
  useEffect(() => {
    if (selectedImdbID) {
      getSinglePost(selectedImdbID).then((data) => {
        console.log(data); 
        setMovieData(data);
      });
    }
  }, [selectedImdbID]);
  

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
              {showDetailPage && selectedImdbID && movieData && (
                <DetailPage
                  ImdbID={selectedImdbID}
                  Poster={movieData.Poster}
                  Title={movieData.Title}
                  ImdbRating={movieData.imdbRating}
                  ImdbVotes={movieData.imdbVotes}
                  Runtime={movieData.Runtime}
                  Year={movieData.Year}
                  Released={movieData.Released}
                  Plot={movieData.Plot}
                  BoxOffice={movieData.BoxOffice}
                  Country={movieData.Country}
                  Actors={movieData.Actors}
                  Director={movieData.Director}
                  Writer={movieData.Writer}
                  Type={movieData.Type}
                  Genre={movieData.Genre}
                />
              )}
              <ul className="movies-grid">
                {post.map((data) => (
                  <RenderPosterCard
                    key={data.imdbID}
                    ImdbID={data.imdbID}
                    Poster={data.Poster}
                    Title={data.Title}
                    ImdbRating={data.imdbRating}
                    Year={data.Year}
                    onClick={() => handleClickPost(data.imdbID)}
                    Type={data.Type}
                  />
                ))}
              </ul>
              {showModal && <NotFoundModal show={showModal} handleClose={handleCloseModal} />}
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
