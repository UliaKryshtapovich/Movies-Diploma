//отображает список фильмов и кнопку 
import React, { useState, useEffect } from "react";
import RenderPosterCard from "../../renderPosterCard/RenderPosterCard";
import { getMovie } from "../../../services/MoviesService";
import "./homePage.scss";

function HomePageMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await getMovie();
      setMovies(prevMovies => [...prevMovies, ...data.Search]);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const loadMoreMovies = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="all-movies_wrapper" >
      <div className="genres">
        <div> genres </div>
        <div> genres </div>
        <div> genres </div>
      </div>
      <div className="movies-list" id="movies">
        <ul className="movies-grid">
          {movies.map(movie => (
            <li key={movie.imdbID} className="movies-item">
              <a href="#">
                <RenderPosterCard movie={movie} />
              </a>
            </li>
          ))}
        </ul>
        <button className="button button-load" onClick={loadMoreMovies}>
          <div className="inner">load more</div>
        </button>
      </div>
    </div>
  );
}

export default HomePageMovies;
