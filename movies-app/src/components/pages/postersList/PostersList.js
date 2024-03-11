import React, { useState, useEffect } from "react";
import { getSinglePost, getPost } from "../../../services/MoviesService";
import { Link } from "react-router-dom";
import "../../pages/postersList/postersList.scss";
import DetailPage from "../../../components/pages/detailPage/DetailPage";

function PostersList() {
  const [postersList, setPostersList] = useState([]);// получить список фильмов
  const [movieData, setMovieData] = useState(null); // данные фильма из запроса getSinglePost
  const [showDetailPage, setShowDetailPage] = useState(false); // открыть detailPage

  useEffect(() => { // список фильмов api
    getPost("new").then((data) => {
      setPostersList(data?.Search);
    });
  }, []);

  const handleClickPost = (imdbID) => { // данные страницы с фильмом с api
    console.log("клик на постер id", imdbID);
    getSinglePost(imdbID).then((data) => {
      console.log("получить данные для 1 страницы с фильмом", data);
      setMovieData(data);
      setShowDetailPage(true);
    });
  };

  return (
    <div className="posters-list">
      <ul className="movies-grid">
        {postersList.map((data) => (
          <li
            Type={data.Type}
            id={data.imdbID}
            key={data.imdbID}
            onClick={() => handleClickPost(data.imdbID)}
          >
            <Link to={`/detail/${data.imdbID}`}>
              <div className="render-poster">
                <div className="render-poster_img">
                  <img src={data.Poster} alt={data.Title} />
                </div>
                <div className="render-poster_rating">{data.imdbRating}</div>
                <h3>{data.Title}</h3>
                <p>{data.Year}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {showDetailPage && <DetailPage movieData={movieData} />} 
    </div>
  );
}

export default PostersList;