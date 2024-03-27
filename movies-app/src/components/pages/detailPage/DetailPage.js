import React, { useState, useEffect } from "react";
import { getSinglePost } from "../../../services/MoviesService";
import "../detailPage/detailPage.scss";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import notFoundImg from "../../../resources/img-not-found.jpg";
import RecommendedPostersSlider from "../../recomendPosterSlider/RecomendPosterSlider";
import LoadingSpinner from "../../loadingSpinner/LoadingSpinner";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../../../redux/favoritesSlice";

function DetailPage() {
  let { imdbID } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    if (imdbID) {
      console.log("переход на страницу с фильмом id", imdbID);
      getSinglePost(imdbID).then((data) => {
        setMovieData(data);
        setLoading(false);
      });
    }
  }, [imdbID]);

  const handleAddToFavorites = () => {
    if (movieData && !isAddedToFavorites) {//проверка, что movieData и что постер еще не был добавлен в избранное 
      dispatch(addToFavorites(movieData));// dispatch отправляет экшен addToFavorites(movieData) в store чтобы обновить состояние и  экшен сообщает Redux о том, что нужно добавить постер в favorites
      setIsAddedToFavorites(true); // после отправки экшена - isAddedToFavorites в true, чтобы небыло повторного добавления этого постера в избранное
    }
  };

  return (
    <div className="detail-page">
      {loading && <LoadingSpinner />}
      {movieData && (
        <div className="detail-wrapper">
          <div className="detail-img_wrapper" data-type={movieData.Type}>
            <div className="detail-img_img">
              <img
                src={
                  movieData.Poster !== "N/A" ? movieData.Poster : notFoundImg
                }
                alt={movieData.Title}
              />
            </div>
            <div className="detail-btn_wrapper">
              <button
                className="detail-btn_bookmark"
                onClick={handleAddToFavorites}
              >
                <FontAwesomeIcon icon={faBookmark} className="detail-icon" />
              </button>
              <button className="detail-btn_share">
                <FontAwesomeIcon icon={faShareNodes} className="detail-icon" />
              </button>
            </div>
          </div>
          <div className="detail-info_wrapper">
            <div className="detail-info_category">
              <p>{movieData.Genre}</p>
            </div>
            <div className="detail-info_title">
              <h3>{movieData.Title}</h3>
            </div>
            <div className="detail-info_overview">
              <div>{movieData.imdbRating}</div>
              <div>IMDb: {movieData.imdbVotes}</div>
              <div>{movieData.Runtime}</div>
            </div>
            <div className="detail-info_plot">
              <p>{movieData.Plot}</p>
            </div>
            <div className="detail-info_more">
              <div className="detail-info_more__text">
                Year: <p>{movieData.Year}</p>
              </div>
              <div className="detail-info_more__text">
                Released: <p>{movieData.Released}</p>
              </div>
              <div className="detail-info_more__text">
                BoxOffice:<p>{movieData.BoxOffice}</p>
              </div>
              <div className="detail-info_more__text">
                Country: <p>{movieData.Country}</p>
              </div>
              <div className="detail-info_more__text">
                Actors:<p>{movieData.Actors}</p>
              </div>
              <div className="detail-info_more__text">
                Director: <p>{movieData.Director}</p>
              </div>
              <div className="detail-info_more__text">
                Writer:<p>{movieData.Writer}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="recommended-posters">
        <h3 style={{ paddingBottom: "30px" }}>Recommendations</h3>
        <RecommendedPostersSlider
          searchTerm={movieData ? movieData.Title : ""}
        />
      </div>
    </div>
  );
}

export default DetailPage;